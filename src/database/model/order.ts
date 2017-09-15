import { Item, ItemSchema } from './Item';

export interface Order {
  readableId: string;
  customerId: string;
  creationDate: Date;
  status: OrderStatus;
  items: Item[];
  tableNumber: number;
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
    creationDate: { type: 'string', format: 'date-time' },
    status: { type: 'number', enum: [
      OrderStatus.CREATED,
      OrderStatus.PAID,
      OrderStatus.IN_PROGRESS,
      OrderStatus.READY,
      OrderStatus.COLLECTED,
    ]},
    items: { type: 'array', items: { type: 'Item' } },
    tableNumber: { type: 'number' },
  },
  required: ['readableId', 'customerId', 'creationDate'],
  definitions: {
    Item: ItemSchema,
  },
};
