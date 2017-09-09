import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { HOST, PORT } from './config';

const app = new Koa();
app.use(bodyParser());
app.use((ctx) => {
  if (ctx.url !== '/') {
    ctx.body = `Hello ${ctx.url.slice(1)}!`;
  } else {
    ctx.body = 'Hello world!';
  }
});
app.listen(PORT, HOST);

