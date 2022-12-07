import { compileUrl, makeRequest } from '../../utils';
import { ClientConfig } from '../../interfaces';

export class MarketData {
  constructor(private readonly config: ClientConfig) {}

  public candles(params: { symbolId: string, from?: string, to?: string, fields?: string }): Promise<any> {
    return makeRequest(this.getUrl('/candles', params, this.config));
  }

  private getUrl(path: string, params: any, config: ClientConfig): string {
    const source = 'marketdata';
    return compileUrl(source, path, params, config);
  }
}
