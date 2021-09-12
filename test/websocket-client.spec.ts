import * as WebSocket from 'isomorphic-ws';
import { WebSocketClient } from '../src';
import { Intraday } from '../src/websocket/intraday';

jest.mock('isomorphic-ws');

describe('HttpClient', () => {
  describe('constructor()', () => {
    it('should be instantiated', () => {
      const client = new WebSocketClient();
      expect(client).toBeInstanceOf(WebSocketClient);
      expect(client).toMatchObject({ config: { apiToken: 'demo', apiVersion: 'v0.3' } });
    });

    it('should be instantiated by passing options with apiToken', () => {
      const client = new WebSocketClient({ apiToken: 'api-token' });
      expect(client).toBeInstanceOf(WebSocketClient);
      expect(client).toMatchObject({ config: { apiToken: 'api-token', apiVersion: 'v0.3' } });
    });

    it('should be instantiated by passing options with apiVersion', () => {
      const client = new WebSocketClient({ apiToken: 'api-token', apiVersion: 'v0.2' });
      expect(client).toBeInstanceOf(WebSocketClient);
      expect(client).toMatchObject({ config: { apiToken: 'api-token', apiVersion: 'v0.2' } });
    });
  });

  describe('setApiToken()', () => {
    it('should set apiToken', () => {
      const client = new WebSocketClient();
      client.setApiToken('api-token');
      expect(client).toMatchObject({ config: { apiToken: 'api-token' } });
    });
  });

  describe('setApiVersion()', () => {
    it('should set apiVersion', () => {
      const client = new WebSocketClient();
      client.setApiVersion('v0.2');
      expect(client).toMatchObject({ config: { apiVersion: 'v0.2' } });
    });
  });

  describe('intraday', () => {
    it('should get intraday instance', () => {
      const client = new WebSocketClient();
      expect(client.intraday).toBeInstanceOf(Intraday);
    });
  });

  describe('intraday.meta()', () => {
    it('should invoke ws with compiled url', async () => {
      const client = new WebSocketClient();
      client.intraday.meta({ symbolId: '2884' });
      expect(WebSocket).toBeCalledWith('wss://api.fugle.tw/realtime/v0.3/intraday/meta?apiToken=demo&symbolId=2884');
    });
  });

  describe('intraday.quote()', () => {
    it('should invoke ws with compiled url', async () => {
      const client = new WebSocketClient();
      client.intraday.quote({ symbolId: '2884' });
      expect(WebSocket).toBeCalledWith('wss://api.fugle.tw/realtime/v0.3/intraday/quote?apiToken=demo&symbolId=2884');
    });
  });

  describe('intraday.chart()', () => {
    it('should invoke ws with compiled url', async () => {
      const client = new WebSocketClient();
      client.intraday.chart({ symbolId: '2884' });
      expect(WebSocket).toBeCalledWith('wss://api.fugle.tw/realtime/v0.3/intraday/chart?apiToken=demo&symbolId=2884');
    });
  });
});
