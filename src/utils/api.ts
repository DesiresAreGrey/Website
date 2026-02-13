import { JsonClient } from "./jsonclient.js";

export class API {
    static #urlPromise: Promise<string> | null = null;

    static get url(): Promise<string> {
        this.#urlPromise = Promise.resolve("https://desiresapi.runasp.net/");
        return this.#urlPromise;

        // for if i pay for it
        this.#urlPromise ??= (async () => {
            try {
                const response = await fetch("https://api.desiresaregrey.com/", { 
                    method: 'HEAD', 
                    mode: 'no-cors' 
                });
                return response.ok || response.type === 'opaque' ? "https://api.desiresaregrey.com/" : "https://desiresapi.runasp.net/";
            } 
            catch (error) {
                return "https://desiresapi.runasp.net/";
            }
        })();
        return this.#urlPromise!;
    }

    static async get<T = any>(endpoint: string): Promise<T> {
        if (endpoint.startsWith('/'))
            endpoint = endpoint.substring(1);
        return JsonClient.get(await API.url + endpoint);
    }

    static async post<T = any>(endpoint: string, data: unknown): Promise<T> {
        if (endpoint.startsWith('/'))
            endpoint = endpoint.substring(1);
        return JsonClient.post(await API.url + endpoint, data);
    }
}

void API.url;