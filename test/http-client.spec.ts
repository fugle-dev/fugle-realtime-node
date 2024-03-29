import * as fetch from 'isomorphic-fetch';
import { HttpClient } from '../src';
import { Intraday } from '../src/clients/http-client/intraday';
import { Historical } from '../src/clients/http-client/historical';

jest.mock('isomorphic-fetch', () => jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) })));

describe('HttpClient', () => {
  describe('constructor()', () => {
    it('should be instantiated', () => {
      const client = new HttpClient();
      expect(client).toBeInstanceOf(HttpClient);
      expect(client).toMatchObject({ config: { apiToken: 'demo', apiVersion: 'v0.3' } });
    });

    it('should be instantiated by passing options with apiToken', () => {
      const client = new HttpClient({ apiToken: 'api-token' });
      expect(client).toBeInstanceOf(HttpClient);
      expect(client).toMatchObject({ config: { apiToken: 'api-token', apiVersion: 'v0.3' } });
    });

    it('should be instantiated by passing options with apiVersion', () => {
      const client = new HttpClient({ apiToken: 'api-token', apiVersion: 'v0.2' });
      expect(client).toBeInstanceOf(HttpClient);
      expect(client).toMatchObject({ config: { apiToken: 'api-token', apiVersion: 'v0.2' } });
    });
  });

  describe('setApiToken()', () => {
    it('should set apiToken', () => {
      const client = new HttpClient();
      client.setApiToken('api-token');
      expect(client).toMatchObject({ config: { apiToken: 'api-token' } });
    });
  });

  describe('setApiVersion()', () => {
    it('should set apiVersion', () => {
      const client = new HttpClient();
      client.setApiVersion('v0.2');
      expect(client).toMatchObject({ config: { apiVersion: 'v0.2' } });
    });
  });

  describe('intraday', () => {
    it('should get intraday instance', () => {
      const client = new HttpClient();
      expect(client.intraday).toBeInstanceOf(Intraday);
    });
  });

  describe('intraday.meta()', () => {
    it('should invoke fetch with compiled url', async () => {
      const client = new HttpClient();
      await client.intraday.meta({ symbolId: '2884' });
      expect(fetch).toBeCalledWith('https://api.fugle.tw/realtime/v0.3/intraday/meta?apiToken=demo&symbolId=2884');
    });
  });

  describe('intraday.quote()', () => {
    it('should invoke fetch with compiled url', async () => {
      const client = new HttpClient();
      await client.intraday.quote({ symbolId: '2884' });
      expect(fetch).toBeCalledWith('https://api.fugle.tw/realtime/v0.3/intraday/quote?apiToken=demo&symbolId=2884');
    });
  });

  describe('intraday.chart()', () => {
    it('should invoke fetch with compiled url', async () => {
      const client = new HttpClient();
      await client.intraday.chart({ symbolId: '2884' });
      expect(fetch).toBeCalledWith('https://api.fugle.tw/realtime/v0.3/intraday/chart?apiToken=demo&symbolId=2884');
    });
  });

  describe('intraday.dealts()', () => {
    it('should invoke fetch with compiled url', async () => {
      const client = new HttpClient();
      await client.intraday.dealts({ symbolId: '2884' });
      expect(fetch).toBeCalledWith('https://api.fugle.tw/realtime/v0.3/intraday/dealts?apiToken=demo&symbolId=2884');
    });
  });

  describe('intraday.volumes()', () => {
    it('should invoke fetch with compiled url', async () => {
      const client = new HttpClient();
      await client.intraday.volumes({ symbolId: '2884' });
      expect(fetch).toBeCalledWith('https://api.fugle.tw/realtime/v0.3/intraday/volumes?apiToken=demo&symbolId=2884');
    });
  });

  describe('historical', () => {
    it('should get marketdata instance', () => {
      const client = new HttpClient();
      expect(client.historical).toBeInstanceOf(Historical);
    });
  });

  describe('historical.candles()', () => {
    it('should invoke fetch with compiled url', async () => {
      const client = new HttpClient();
      await client.historical.candles({ symbolId: '2884', from:'2022-02-07', to:'2022-02-11', fields: 'open,high,low,close,volume,turnover,change' });
      expect(fetch).toBeCalledWith('https://api.fugle.tw/marketdata/v0.3/candles?apiToken=demo&fields=open%2Chigh%2Clow%2Cclose%2Cvolume%2Cturnover%2Cchange&from=2022-02-07&symbolId=2884&to=2022-02-11');
    });
  });
});


