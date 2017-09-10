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
  FULFILLED,
  COLLECTED,
  CLOSED,
}

export const OrderSchema = {
  type: 'object',
  properties: {
    readableId: { type: 'string' },
    customerId: { type: 'string' },
    items: { type: 'array', items: { type: 'Item' } },
  },
  required: ['readableId', 'customerId'],
  definitions: {
    Item: ItemSchema,
  },
};
