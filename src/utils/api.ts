import { JsonFetch } from "./jsonfetch.js";
import { Utils } from "./utils.js";

export class API {
    static #urlPromise: Promise<string> | null = null;

    static get url(): Promise<string> {
        this.#urlPromise ??= (async () => {
            const cached = Utils.getCache<string>("api-url");
            if (cached && cached == "https://api.desiresaregrey.com/") {
                return cached;
            }
            try {
                const isReachable = await JsonFetch.isReachable("https://api.desiresaregrey.com/status");
                if (isReachable)
                    Utils.setCache("api-url", "https://api.desiresaregrey.com/", 60 * 60 * 1000); // 1h
                return isReachable ? "https://api.desiresaregrey.com/" : "https://desiresapi.runasp.net/";
            } 
            catch {
                return "https://desiresapi.runasp.net/";
            }
        })();
        return this.#urlPromise!;
    }

    static async get<T = any>(endpoint: string): Promise<T> {
        if (endpoint.startsWith('/'))
            endpoint = endpoint.substring(1);
        return JsonFetch.get(await API.url + endpoint);
    }

    static async post<T = any>(endpoint: string, data: unknown): Promise<T> {
        if (endpoint.startsWith('/'))
            endpoint = endpoint.substring(1);
        return JsonFetch.post(await API.url + endpoint, data);
    }
}

void API.url;