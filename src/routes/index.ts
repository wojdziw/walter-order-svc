import * as Router from 'koa-router';
import orders from './orders';

const router = new Router();

router.use(orders.routes());
router.use(orders.allowedMethods());

export default router;
