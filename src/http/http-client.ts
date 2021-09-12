import { Intraday } from './intraday';
import { ClientConfig, ClientOptions } from '../interfaces';
import { FUGLE_REALTIME_HTTP_URL, FUGLE_REALTIME_API_VERSION } from '../constants';

export class HttpClient {
  private readonly config: ClientConfig;

  constructor(options?: ClientOptions) {
    this.config = {
      url: FUGLE_REALTIME_HTTP_URL,
      apiVersion: options?.apiVersion || FUGLE_REALTIME_API_VERSION,
      apiToken: options?.apiToken || 'demo',
    };
  }

  get intraday(): Intraday {
    return new Intraday(this.config);
  }

  public setApiToken(apiToken: string): this {
    this.config.apiToken = apiToken;
    return this;
  }

  public setApiVersion(version: string): this {
    this.config.apiVersion = version;
    return this;
  }
}
