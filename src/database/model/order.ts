import { Item, ItemSchema } from './Item';

export interface Order {
  readableId: string;
  customerId: string;
  items: Item[];
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
