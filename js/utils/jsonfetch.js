export class JsonFetch {
    static async get(url) {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`Failed to get JSON from ${url}: ${response.status} ${response.statusText}`);
        return response.json();
    }
    static async post(url, data) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!response.ok)
            throw new Error(`Failed to post JSON to ${url}: ${response.status} ${response.statusText}`);
        return response.json();
    }
    static async isReachable(url) {
        try {
            const response = await fetch(url);
            return response.ok;
        }
        catch {
            return false;
        }
    }
}
