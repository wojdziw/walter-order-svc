// tslint:disable no-var-requires
import * as shortid from 'shortid';

const adjectives: string[] = require('./adjectives');
const nouns: string[] = require('./nouns');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

const ID_LENGTH = 6;

export default function tastyId(): string {
  const id = shortid.generate().slice(0, ID_LENGTH);
  const adjective = adjectives[Math.round(Math.random() * adjectives.length - 1)];
  const noun = nouns[Math.round(Math.random() * nouns.length - 1)];
  return `${adjective}-${noun}-${id}`;
}
