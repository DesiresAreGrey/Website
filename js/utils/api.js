var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _API_urlPromise;
import { JsonFetch } from "./jsonfetch.js";
import { TimeSpan } from "./timespan.js";
import { Utils } from "./utils.js";
export class API {
    static get url() {
        __classPrivateFieldSet(this, _a, __classPrivateFieldGet(this, _a, "f", _API_urlPromise) ?? (async () => {
            const cached = Utils.getCache("api-url");
            if (cached && cached == "https://api.desiresaregrey.com/") {
                return cached;
            }
            try {
                const isReachable = await JsonFetch.isReachable("https://api.desiresaregrey.com/status");
                if (isReachable)
                    Utils.setCache("api-url", "https://api.desiresaregrey.com/", TimeSpan.fromHours(1).ms);
                return isReachable ? "https://api.desiresaregrey.com/" : "https://desiresapi.runasp.net/";
            }
            catch {
                return "https://desiresapi.runasp.net/";
            }
        })(), "f", _API_urlPromise);
        return __classPrivateFieldGet(this, _a, "f", _API_urlPromise);
    }
    static async get(endpoint) {
        if (endpoint.startsWith('/'))
            endpoint = endpoint.substring(1);
        return JsonFetch.get(await _a.url + endpoint);
    }
    static async post(endpoint, data) {
        if (endpoint.startsWith('/'))
            endpoint = endpoint.substring(1);
        return JsonFetch.post(await _a.url + endpoint, data);
    }
}
_a = API;
_API_urlPromise = { value: null };
void API.url;
