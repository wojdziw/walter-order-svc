import * as Router from 'koa-router';
import orders from './orders';

const router = new Router();

router.use(orders.routes());

export default router;
