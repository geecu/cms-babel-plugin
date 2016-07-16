import path from 'path';
import fs from 'fs';
import assert from 'assert';
import { transformFileSync } from 'babel-core';
import plugin from '../../src';

const trim = (str) => str.replace(/^\s+|\s+$/, '')

const getDirectories = (srcPath) => fs.readdirSync(srcPath).filter((file) => fs.statSync(path.join(srcPath, file)).isDirectory());

const runFixtures = (fixturesDir) => {
  getDirectories(fixturesDir)
    .forEach((caseName) => {
      console.log('found directory', caseName)
      it(`should ${caseName.split('-').join(' ')}`, () => {
        const fixtureDir = path.join(fixturesDir, caseName);
        const actualPath = path.join(fixtureDir, 'actual.js');
        const actual = transformFileSync(actualPath).code;

        const expected = fs.readFileSync(
          path.join(fixtureDir, 'expected.js')
        ).toString();

        assert.equal(trim(actual), trim(expected));
      })
    })
}

export default {
  runFixtures,
}
