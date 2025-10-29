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
