import * as fetch from 'isomorphic-fetch';
import { compileUrl } from '../../utils';
import { ClientConfig } from '../../interfaces';

export class Intraday {
  constructor(private readonly config: ClientConfig) {}

  public meta(params: { symbolId: string, oddLot?: boolean }): Promise<any> {
    return this.makeRequest(compileUrl('/intraday/meta', params, this.config));
  }

  public quote(params: { symbolId: string, oddLot?: boolean }): Promise<any> {
    return this.makeRequest(compileUrl('/intraday/quote', params, this.config));
  }

  public chart(params: { symbolId: string, oddLot?: boolean }): Promise<any> {
    return this.makeRequest(compileUrl('/intraday/chart', params, this.config));
  }

  public dealts(params: { symbolId: string, oddLot?: boolean, offset?: number, limit?: number }): Promise<any> {
    return this.makeRequest(compileUrl('/intraday/dealts', params, this.config));
  }

  public volumes(params: { symbolId: string, oddLot?: boolean }): Promise<any> {
    return this.makeRequest(compileUrl('/intraday/volumes', params, this.config));
  }

  private makeRequest(url: string): Promise<any> {
    return fetch(url).then(res => res.json());
  }
}
