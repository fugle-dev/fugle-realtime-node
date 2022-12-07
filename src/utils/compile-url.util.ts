import { join } from 'path';
import { stringify } from 'query-string';
import { ClientConfig } from '../interfaces';

export function compileUrl(source: string, path: string, params: any, config: ClientConfig): string {
  params = { ...params, apiToken: config.apiToken };

  const baseUrl = new URL(join(source, config.apiVersion), config.url).href;

  /* istanbul ignore next */
  const endpoint = path.startsWith('/') ? path : '/' + path;

  const query = '?' + stringify(params);

  return baseUrl + endpoint + query;
}
