import path from 'path';
import util from './util';

describe('General parser', () => {
  util.runFixtures(path.join(__dirname, 'general'));
});
