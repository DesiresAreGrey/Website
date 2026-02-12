import { Utils } from "./utils.js";

export class API {
    static async getUrl(): Promise<string> {
        return "https://desiresapi.runasp.net/";
        // for if i pay for it
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
    }

    static async fetchJson<T = any>(endpoint: string): Promise<T> {
        if (endpoint.startsWith('/'))
            endpoint = endpoint.substring(1);
        return Utils.fetchJson(await API.getUrl() + endpoint);
    }

    static async postJson<T = any>(endpoint: string, data: any): Promise<T> {
        if (endpoint.startsWith('/'))
            endpoint = endpoint.substring(1);
        return Utils.postJson(await API.getUrl() + endpoint, data);
    }
}