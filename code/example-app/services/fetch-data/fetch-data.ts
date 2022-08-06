export default async function fetchData<T>(url: string): Promise<T> {
  const response: Response = await fetch(url);
  const customersFetched: Awaited<T> = await response.json();

  return customersFetched;
}
