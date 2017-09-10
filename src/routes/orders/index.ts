import * as Router from 'koa-router';
import { create } from './create';
const orders = new Router({
  prefix: '/orders',
});

orders.post('/', create);

export default orders;
