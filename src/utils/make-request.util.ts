import * as fetch from 'isomorphic-fetch';

export function makeRequest(url: string): Promise<any> {
  return fetch(url).then(res => res.json());
}