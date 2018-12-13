import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';
import {chance} from './chance-mixins';

chai.use(sinonChai);
chai.use(dirtyChai);

global.stub = sinon.stub;
global.chance = chance;
global.expect = chai.expect;

process.on('unhandledRejection', e => {
  /* eslint-disable */
  console.log('unhandled rejection', e);

  if (!process.env.WATCHING) {
    process.exit(1);
  }
  /* eslint-enable */
});
