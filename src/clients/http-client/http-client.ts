import { Intraday } from './intraday';
import { MarketData } from './market-data';
import { BaseClient } from '../base-client';
import { ClientOptions } from '../../interfaces';
import { FUGLE_REALTIME_HTTP_URL, FUGLE_REALTIME_API_VERSION } from '../../constants';

export class HttpClient extends BaseClient {
  constructor(options?: ClientOptions) {
    const config = {
      url: FUGLE_REALTIME_HTTP_URL,
      apiVersion: options?.apiVersion || FUGLE_REALTIME_API_VERSION,
      apiToken: options?.apiToken || 'demo',
    };
    super(config);
  }

  get intraday(): Intraday {
    return new Intraday(this.config);
  }

  get marketdata(): MarketData {
    return new MarketData(this.config);
  }
}
