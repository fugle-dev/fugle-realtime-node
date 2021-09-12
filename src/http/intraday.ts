import * as fetch from 'isomorphic-fetch';
import { stringify } from 'query-string';
import { ClientConfig } from '../interfaces';

export class Intraday {
  constructor(private readonly config: ClientConfig) {}

  public meta(params: { symbolId: string, oddLot?: boolean }): Promise<any> {
    return this.makeRequest(this.compileUrl('/intraday/meta', params));
  }

  public quote(params: { symbolId: string, oddLot?: boolean }): Promise<any> {
    return this.makeRequest(this.compileUrl('/intraday/quote', params));
  }

  public chart(params: { symbolId: string, oddLot?: boolean }): Promise<any> {
    return this.makeRequest(this.compileUrl('/intraday/chart', params));
  }

  public dealts(params: { symbolId: string, oddLot?: boolean, offset?: number, limit?: number }): Promise<any> {
    return this.makeRequest(this.compileUrl('/intraday/dealts', params));
  }

  public volumes(params: { symbolId: string, oddLot?: boolean }): Promise<any> {
    return this.makeRequest(this.compileUrl('/intraday/volumes', params));
  }

  private makeRequest(url: string): Promise<any> {
    return fetch(url).then(res => res.json());
  }

  private compileUrl(path: string, params: any): string {
    params = { ...params, apiToken: this.config.apiToken };

    const baseUrl = `${this.config.url}/${this.config.apiVersion}`;

    /* istanbul ignore next */
    const endpoint = (path.indexOf('/') === 0) ? path : '/' + path;

    const query = '?' + stringify(params);

    return baseUrl + endpoint + query;
  }
}
