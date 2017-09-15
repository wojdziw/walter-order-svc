import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';

import { HOST, PORT } from './config';

export const app = new Koa();
app.use(bodyParser());
app.use(logger());

app.use((ctx) => {
  if (ctx.url !== '/') {
    ctx.body = `Hello ${ctx.url.slice(1)}!`;
  } else {
    ctx.body = 'Hello world!';
  }
});

app.listen(PORT, HOST);
