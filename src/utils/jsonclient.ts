export class JsonClient {
    static async get<T = any>(url: string): Promise<T> {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`Failed to get JSON from ${url}: ${response.status} ${response.statusText}`);
        return response.json() as Promise<T>;
    }

    static async post<T = any>(url: string, data: unknown): Promise<T> {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok)
            throw new Error(`Failed to post JSON to ${url}: ${response.status} ${response.statusText}`);

        return response.json() as Promise<T>;
    }
}