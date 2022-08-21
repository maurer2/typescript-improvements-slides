import { APIRequest } from './types';

export default async function fetchData<T>(url: string): Promise<T> {
  const response: Response = await fetch(url);
  const fetchedData: T = await response.json();

  return fetchedData;
}
