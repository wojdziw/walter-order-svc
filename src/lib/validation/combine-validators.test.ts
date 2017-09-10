// tslint:disable no-magic-numbers
// tslint:disable no-unused-expression
import { expect } from 'chai';
import { SinonSpy, SinonStub, spy, stub } from 'sinon';

import { combineAsyncValidators, combineValidators } from './combine-validators';
import { createAsyncValidator, createValidator } from './create-validator';
import { Validator, ValidatorResult } from './validator';

describe('Combine validators', () => {
  describe('combineValidators()' , () => {
    let validator1: SinonSpy;
    let validator2: SinonSpy;
    let validator3: SinonSpy;
    before(() => {
      validator1 = stub().returns({ valid: true });
      validator2 = stub().returns({ valid: false, errors: ['Errors occurred'] });
      validator3 = stub().returns({ valid: false, errors: ['More errors'] });
    });
    it('combines multiple validation functions into a single validator', () => {
      expect(combineValidators([validator1, validator2, validator3])).to.be.a('function');
    });

    it('calls all combined validators when called', () => {
      const combined = combineValidators([validator1, validator2, validator3]);
      const result = combined(null);
      expect(validator1.calledOnce).to.be.true;
      expect(validator2.calledOnce).to.be.true;
      expect(validator3.calledOnce).to.be.true;
    });

    it('correctly combines validator results', () => {
      const combined = combineValidators([validator1, validator2, validator3]);
      const result = combined(null);
      expect(result).to.be.deep.equal({
        errors: ['Errors occurred', 'More errors'],
        valid: false,
      });
    });

    it('throws when used with asynchronous validators()', () => {
      const asyncValidator = createAsyncValidator(() => Promise.resolve(true), 'what');
      combineValidators([validator1, validator2, validator3, asyncValidator]);
      expect(() => asyncValidator({})).to.throw;
    });
  });

  describe('combineAsyncValidators()', () => {
    let promises: Array<Promise<any>>;
    let results: ValidatorResult[];
    let validators: SinonStub[];
    let combinedResult: ValidatorResult;
    beforeEach(() => {
      results = [
        { valid: true },
        { valid: false, errors: ['Errors occurred'] },
        { valid: false, errors: ['Bummer'] },
      ];

      combinedResult = {
        errors: ['Errors occurred', 'Bummer'],
        valid: false,
      };

      promises = [40, 30, 50].map((time, idx) => new Promise((res) => {
        setTimeout(() => res(results[idx]), time);
      }));
      validators = promises.map((p) => stub().returns(p));
    });

    it('combines multiple async validation functions into a single validator', () => {
      expect(combineAsyncValidators(validators)).to.be.a('function');
    });

    it('awaits multiple asynchronous validators in parallel', () => {
      const spies = promises.map((p) => spy(p, 'then'));
      const combined = combineAsyncValidators(validators);
      const resultPromise = combined({});
      expect(spies.every((s) => s.called)).to.be.true;
    });

    it('combines results of asynchronous validators', async () => {
      const spies = promises.map((p) => spy(p, 'then'));
      const combined = combineAsyncValidators(validators);
      const resultPromise = combined({});
      expect(await resultPromise).to.be.deep.equal(combinedResult);
    });
  });
});
