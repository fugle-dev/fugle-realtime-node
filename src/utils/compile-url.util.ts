import { stringify } from 'query-string';
import { ClientConfig } from '../interfaces';

export function compileUrl(path: string, params: any, config: ClientConfig): string {
  params = { ...params, apiToken: config.apiToken };

  const baseUrl = `${config.url}/${config.apiVersion}`;

  /* istanbul ignore next */
  const endpoint = path.startsWith('/') ? path : '/' + path;

  const query = '?' + stringify(params);

  return baseUrl + endpoint + query;
}
