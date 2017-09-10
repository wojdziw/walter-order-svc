import { Context } from 'koa';

export function del(ctx: Context) {
  ctx.body = `Delete ${ctx.params.id}`;
};
