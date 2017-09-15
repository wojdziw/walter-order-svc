import { Context } from 'koa';

export function create(ctx: Context) {
  ctx.body = 'Order created';
}
