// api.ts
export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export async function callApi<TResponse, TRequest = undefined>(
  url: string,
  method: RequestMethod = 'GET',
  data?: TRequest,
  headers: Record<string, string> = {},
): Promise<TResponse> {
  const response = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok)
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  return response.json() as Promise<TResponse>;
}
