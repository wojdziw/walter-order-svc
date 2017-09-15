import * as Router from 'koa-router';
import { create } from './create';
import { del } from './delete';
import { readAll, readOne } from './read';
import { patch, update } from './update';

const orders = new Router({
  prefix: '/orders',
});

orders.get('/', readAll);
orders.get('/:id', readOne);
orders.post('/', create);
orders.put('/:id', update);
orders.patch('/:id', patch);
orders.delete('/:id', del);

export default orders;
