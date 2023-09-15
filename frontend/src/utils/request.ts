export function request<TResponse>(
    url: string,
    config: RequestInit = {
    }
): Promise<TResponse> {
    const headers: HeadersInit = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    config.method = typeof config.body !== 'undefined' ? 'POST' : 'GET';
    config.headers = headers;

    return fetch(url, config)
        .then(async (response) => {
            const parsedJson = await response.json();
            if (response.ok) {
                return parsedJson;
            }

            throw Error(parsedJson.errors[0]);
        })
        .then((data) => data as TResponse);
}
