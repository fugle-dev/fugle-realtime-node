import { ClientConfig } from '../interfaces';

export abstract class BaseClient {
  constructor(protected readonly config: ClientConfig) {}

  public setApiToken(apiToken: string): this {
    this.config.apiToken = apiToken;
    return this;
  }

  public setApiVersion(version: string): this {
    this.config.apiVersion = version;
    return this;
  }
}
