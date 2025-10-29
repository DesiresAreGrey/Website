---
description: Uses the default .NET WebAssembly Template
---
# .NET WebAssembly Test

A test of .NET/C# WebAssembly using the default template (stopwatch) that .NET comes with but like adapted for my site and stuff

<script type='module' src="main.js"></script>
<h3>Stopwatch</h3>
<p>
  Time elapsed in .NET is <span id="time"><i>loading...</i></span>
</p>
<p>
  <button id="pause">Pause</button>
  <button id="reset">Reset</button>
</p>

??? info "Info/Code"

    [The tutorial thing I followed](https://andrewlock.net/running-dotnet-in-the-browser-without-blazor/){ target="_blank" }

    When creating a new C# project in VS2026 (crazy that theres finally a new VS version), theres an options to create a WebAssembly Browser App which generates a bunch of random stuff but the focus is the C# and the javascript that loads the stuff in the compiled C# wasm. I cleaned up the C# code a bit cause I didn't like how it was by default. idk why I'm spending so much time/effort on this but maybe its the autism and my hatred of javascript

    ``` cs title="Program.cs"
    using System;
    using System.Diagnostics;
    using System.Linq;
    using System.Runtime.InteropServices.JavaScript;
    using System.Threading.Tasks;
    [assembly: System.Runtime.Versioning.SupportedOSPlatform("browser")] // vscode is actually stupid

    Console.WriteLine("Hello, Browser!");

    if (args.ElementAtOrDefault(0) == "start")
        StopwatchSample.Start();

    while (true) {
        StopwatchSample.Render();
        await Task.Delay(10);
    }

    partial class StopwatchSample {
        private static readonly Stopwatch stopwatch = new();

        public static void Start() => stopwatch.Start();
        public static void Render() => SetInnerText("#time", stopwatch.Elapsed.ToString(@"mm\:ss\:fff"));

        [JSImport("dom.setInnerText", "main.js")]
        internal static partial void SetInnerText(string selector, string content);

        [JSExport]
        internal static bool Toggle() {
            if (stopwatch.IsRunning) {
                stopwatch.Stop();
                return false;
            }
            else {
                stopwatch.Start();
                return true;
            }
        }

        [JSExport]
        internal static void Reset() {
            if (stopwatch.IsRunning)
                stopwatch.Restart();
            else
                stopwatch.Reset();

            Render();
        }

        [JSExport]
        internal static bool IsRunning() => stopwatch.IsRunning;
    }
    ```

    And then the javascript that loads it and hooks up the buttons and stuff. Can't fully avoid javascript cause apparently its just not possible to do only webassembly without any js :(  

    I left this code alone and didn't touch it cause evil javascript but if I actually do anything with webassembly I'll have to also write some JS to use it. Who knows if this whole thing is actually worth it considering how much more setup it is compared to just using JS.
  
    ``` js title="main.js"
    // Licensed to the .NET Foundation under one or more agreements.
    // The .NET Foundation licenses this file to you under the MIT license.

    import { dotnet } from './_framework/dotnet.js'

    const { setModuleImports, getAssemblyExports, getConfig, runMain } = await dotnet
        .withApplicationArguments("start")
        .create();

    setModuleImports('main.js', {
        dom: {
            setInnerText: (selector, time) => document.querySelector(selector).innerText = time
        }
    });

    const config = getConfig();
    const exports = await getAssemblyExports(config.mainAssemblyName);

    document.getElementById('reset').addEventListener('click', e => {
        exports.StopwatchSample.Reset();
        e.preventDefault();
    });

    const pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', e => {
        const isRunning = exports.StopwatchSample.Toggle();
        pauseButton.innerText = isRunning ? 'Pause' : 'Start';
        e.preventDefault();
    });

    // run the C# Main() method and keep the runtime process running and executing further API calls
    await runMain();
    ```

    I set it up in a weird way that the C# project is in the website repo itself and then uses a python script to build and copy the output files to the right location so I don't have to manually copy over the compiled wasm every time I rebuild it.  
    [The code on GitHub](https://github.com/DesiresAreGrey/Website/tree/main/docs/misc/dotnet-wasm-test){ target="_blank" }
