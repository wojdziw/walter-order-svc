export interface Item {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export const ItemSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    unitPrice: { type: 'number' },
    quantity: { type: 'number' },
    totalPrice: { type: 'number' },
  },
};
