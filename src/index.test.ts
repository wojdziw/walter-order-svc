import { expect } from 'chai';
import 'mocha';
import 'sinon';

import * as Koa from 'koa';
import { app } from './index';

describe('app', () => {
  it('should be an instance of Koa server', () => {
    expect(app).to.be.instanceOf(Koa);
  });
});
