import { IPost } from "../types/types";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export interface IRequestOptions {
  method: string;
  headers: Record<string, string>;
  body?: string;
}

const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) return res.json() as Promise<T>;
  else return res.json().then((err) => Promise.reject(err));
};

const checkSuccess = <T>(res: IPost[]): Promise<T> => {
  if (Array.isArray(res)) return Promise.resolve(res as T);
  else return res as Promise<T>;
};

export const request = <T extends IPost[]>(
  endpoint: string,
  options?: IRequestOptions,
  page: number = 1,
  limit: number = 10
): Promise<T> => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  // url.searchParams.append("_page", page.toString());
  // url.searchParams.append("_limit", limit.toString());

  return fetch(url.toString(), options)
    .then(checkResponse<T>)
    .then(checkSuccess<T>);
};
