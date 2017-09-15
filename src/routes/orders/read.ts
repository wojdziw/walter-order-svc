import { Context } from 'koa';

export function readOne(ctx: Context) {
  ctx.body = `Read ${ctx.params.id}`;
}

export function readAll(ctx: Context) {
  ctx.body = `Read all!`;
}
