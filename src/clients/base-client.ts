import { ClientConfig } from '../interfaces';

export abstract class BaseClient {
  constructor(protected readonly config: ClientConfig) {}

  /**
   * Set api token.
   *
   * @param apiToken - The api token
   * @returns The client instance
   */
  public setApiToken(apiToken: string): this {
    this.config.apiToken = apiToken;
    return this;
  }

  /**
   * Set api version.
   *
   * @param apiVersion - The api version
   * @returns The client instance
   */
  public setApiVersion(apiVersion: string): this {
    this.config.apiVersion = apiVersion;
    return this;
  }
}
