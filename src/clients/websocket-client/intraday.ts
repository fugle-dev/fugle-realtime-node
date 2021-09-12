import * as WebSocket from 'isomorphic-ws';
import { stringify } from 'query-string';
import { ClientConfig } from '../../interfaces';

export class Intraday {
  constructor(private readonly config: ClientConfig) {}

  public meta(params: { symbolId: string, oddLot?: boolean }): WebSocket {
    return this.connect(this.compileUrl('/intraday/meta', params));
  }

  public quote(params: { symbolId: string, oddLot?: boolean }): WebSocket {
    return this.connect(this.compileUrl('/intraday/quote', params));
  }

  public chart(params: { symbolId: string, oddLot?: boolean }): WebSocket {
    return this.connect(this.compileUrl('/intraday/chart', params));
  }

  private connect(url: string): WebSocket {
    return new WebSocket(url);
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
