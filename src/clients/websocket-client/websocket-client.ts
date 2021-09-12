import { Intraday } from './intraday';
import { BaseClient } from '../base-client';
import { ClientOptions } from '../../interfaces';
import { FUGLE_REALTIME_WS_URL, FUGLE_REALTIME_API_VERSION } from '../../constants';

export class WebSocketClient extends BaseClient {
  constructor(options?: ClientOptions) {
    const config = {
      url: FUGLE_REALTIME_WS_URL,
      apiVersion: options?.apiVersion || FUGLE_REALTIME_API_VERSION,
      apiToken: options?.apiToken || 'demo',
    };
    super(config);
  }

  get intraday(): Intraday {
    return new Intraday(this.config);
  }
}
