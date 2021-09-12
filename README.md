# Fugle Realtime

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]

> Fugle Realtime API client library for Node.js

## Install

```sh
$ npm install --save @fugle/realtime
```

## Usage

The library is an isomorphic JavaScript client that supports HTTP API and WebSocket.

### HTTP API

```js
import { HttpClient } from '@fugle/realtime';

const client = new HttpClient({ apiToken: 'demo' });
```

#### intraday.meta

```js
client.instraday.meta({ symbolId: '2884' })
  .then(data => console.log(data));
```

#### intraday.quote

```js
client.instraday.quote({ symbolId: '2884' })
  .then(data => console.log(data));
```

#### intraday.chart

```js
client.instraday.chart({ symbolId: '2884' })
  .then(data => console.log(data));
```

#### intraday.dealts

```js
client.instraday.dealts({ symbolId: '2884', limit: 50 })
  .then(data => console.log(data));
```

#### intraday.volumes

```js
client.instraday.volumes({ symbolId: '2884' })
  .then(data => console.log(data));
```

### WebSocket

```js
import { WebSocketClient } from '@fugle/realtime';

const client = new WebSocketClient({ apiToken: 'demo' });
```

#### intraday.meta

```js
client.instraday.meta({ symbolId: '2884' })
  .onmessage = message => console.log(JSON.parse(message.data));
```

#### intraday.quote

```js
client.instraday.quote({ symbolId: '2884' })
  .onmessage = message => console.log(JSON.parse(message.data));
```

#### intraday.chart

```js
client.instraday.chart({ symbolId: '2884' })
  .onmessage = message => console.log(JSON.parse(message.data));
```

## Reference

[Fugle Realtime API](https://developer.fugle.tw)

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@fugle/realtime.svg
[npm-url]: https://npmjs.com/package/@fugle/realtime
[travis-image]: https://img.shields.io/travis/fugle-dev/fugle-realtime-node.svg
[travis-url]: https://travis-ci.org/fugle-dev/fugle-realtime-node
[codecov-image]: https://img.shields.io/codecov/c/github/fugle-dev/fugle-realtime-node.svg
[codecov-url]: https://codecov.io/gh/fugle-dev/fugle-realtime-node
