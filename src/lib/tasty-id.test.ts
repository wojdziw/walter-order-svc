import { expect } from 'chai';
import 'mocha';

import tastyId from './tasty-id';

describe('tastyId()', () => {
  it('generates an readable id in format adjective-noun-id', () => {
    expect(tastyId()).to.match(/^[a-z]+-[a-z]+-[a-zA-Z0-9$@]{6}$/);
  });
});
