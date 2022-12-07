import * as fetch from 'isomorphic-fetch';
import { compileUrl, makeRequest } from '../../utils';
import { ClientConfig } from '../../interfaces';

export class Intraday {
  constructor(private readonly config: ClientConfig) {}

  public meta(params: { symbolId: string, oddLot?: boolean }): Promise<any> {
    return makeRequest(this.getUrl('/intraday/meta', params, this.config));
  }

  public quote(params: { symbolId: string, oddLot?: boolean }): Promise<any> {
    return makeRequest(this.getUrl('/intraday/quote', params, this.config));
  }

  public chart(params: { symbolId: string, oddLot?: boolean }): Promise<any> {
    return makeRequest(this.getUrl('/intraday/chart', params, this.config));
  }

  public dealts(params: { symbolId: string, oddLot?: boolean, offset?: number, limit?: number }): Promise<any> {
    return makeRequest(this.getUrl('/intraday/dealts', params, this.config));
  }

  public volumes(params: { symbolId: string, oddLot?: boolean }): Promise<any> {
    return makeRequest(this.getUrl('/intraday/volumes', params, this.config));
  }

  private getUrl(path: string, params: any, config: ClientConfig): string {
    const source = 'realtime';
    return compileUrl(source, path, params, config);
  }
}
