import { Item, ItemSchema } from './Item';

export interface Order {
  readableId: string;
  customerId: string;
  items: Item[];
  status: OrderStatus;
}

export enum OrderStatus {
  CREATED,
  PAID,
  IN_PROGRESS,
  READY,
  COLLECTED,
}

export const OrderSchema = {
  type: 'object',
  properties: {
    readableId: { type: 'string' },
    customerId: { type: 'string' },
    items: { type: 'array', items: { type: 'Item' } },
    status: { type: 'number', enum:  [
      OrderStatus.CREATED,
      OrderStatus.PAID,
      OrderStatus.IN_PROGRESS,
      OrderStatus.READY,
      OrderStatus.COLLECTED,
    ] },
  },
  required: ['readableId', 'customerId'],
  definitions: {
    Item: ItemSchema,
  },
};
