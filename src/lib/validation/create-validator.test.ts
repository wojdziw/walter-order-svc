import { expect } from 'chai';

import { createAsyncValidator, createValidator } from './create-validator';

describe('create validator', () => {
  describe('createValidator()', () => {
    it('creates a validator which returns a validator result', () => {
      const alwaysValid = createValidator((v: any) => true, 'somehow not valid');
      expect(alwaysValid(null)).to.deep.equal({
        valid: true,
      });
    });

    it('creates a validator which returns an object with errors array if error is not valid', () => {
      const alwaysInvalid = createValidator((v: any) => false, 'Error occured');
      expect(alwaysInvalid(null)).to.be.deep.equal({
        errors: ['Error occured'],
        valid: false,
      });
    });
  });

  describe('createAsyncValidator()', () => {
    it('creates a validator which returns a promise for a validator result', async () => {
      const asyncValidator = createAsyncValidator((v: any) => Promise.resolve(false), 'Bummer');
      expect(await asyncValidator(null)).to.be.deep.equal({
        errors: ['Bummer'],
        valid: false,
      });
    });
  });
});

