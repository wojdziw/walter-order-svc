export interface Item {
  id: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export const ItemSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    unitPrice: { type: 'number' },
    quantity: { type: 'number' },
    totalPrice: { type: 'number' },
  },
};
