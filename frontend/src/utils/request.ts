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
        .then((response) => response.json())
        .then((data) => data as TResponse)
        .catch(err => err);
}
