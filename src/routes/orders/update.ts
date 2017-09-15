import { Context } from 'koa';

export function update(ctx: Context) {
  ctx.body = `Update order: ${ctx.params.id}`;
}

export function patch(ctx: Context) {
  ctx.body = `Patch order ${ctx.params.id}`;
}
