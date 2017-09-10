import { Context } from 'koa';
import { Order } from '../../database/model/order';


export function create(ctx: Context) {
  ctx.body = ctx.request.body; // echo
}
