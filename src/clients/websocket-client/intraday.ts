import * as WebSocket from 'isomorphic-ws';
import { compileUrl } from '../../utils';
import { ClientConfig } from '../../interfaces';

export class Intraday {
  constructor(private readonly config: ClientConfig) {}

  public meta(params: { symbolId: string, oddLot?: boolean }): WebSocket {
    return this.createSocket(compileUrl('/intraday/meta', params, this.config));
  }

  public quote(params: { symbolId: string, oddLot?: boolean }): WebSocket {
    return this.createSocket(compileUrl('/intraday/quote', params, this.config));
  }

  public chart(params: { symbolId: string, oddLot?: boolean }): WebSocket {
    return this.createSocket(compileUrl('/intraday/chart', params, this.config));
  }

  private createSocket(url: string): WebSocket {
    return new WebSocket(url);
  }
}
