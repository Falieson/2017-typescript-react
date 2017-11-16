/* NPS | `nps <command>` equivalent to `npm run <command>` with JS

eslint-disable no-multiple-empty-lines
*/

// IMPORTS

const { series } = require('nps-utils'); // series, rimraf


// MAIN SCRIPTS

const build = {
  default: 'babel-node internal/scripts/build --optimize',
  dev: 'babel-node internal/scripts/build',
};

const launch = {
  description: 'Start one or all of the services',
  default: 'nps launch.dev',
  prod: {
    description: 'Launch the production version of the services',
    default: 'cross-env NODE_ENV=production node build/server',
  },
  dev: 'cross-env DEPLOYMENT=development babel-node internal/development',
};


// COMMIT WITH COMMITIZEN and CZ-EMOJI

const commit = {
  description: 'This uses commitizen to help us generate beautifully formatted commit messages',
  default: 'nps precommit && git-cz',
  noverify: 'git-cz --no-verify',
};

const precommit = {
  description: 'Run these before committing',
  default: series.nps('check', 'precommit.saveFixes'),
  saveFixes: 'git add .',
};


// UTILITIES

const analyze = {
  default: series.nps('analyze.client', 'analyze.server'),
  client: 'babel-node internal/scripts/analyze --client',
  server: 'babel-node internal/scripts/analyze --server',
};

const check = {
  default: series.nps('check.es', 'check.ts', 'check.format'),
  es: {
    default: 'eslint src',
    fix: 'eslint --fix src',
    all: 'eslint --fix client server src config internal',
  },
  ts: {
    default: "tslint -p ./tsconfig.json './src/**/*.{ts,tsx}'",
    fix: "tslint --fix -c ./tslint.json -p ./tsconfig.json './src/**/*.{ts,tsx}'",
  },
  format: {
    default: 'nps check.format.es',
    es: "prettier-eslint --write 'src/**/*.{js,jsx}'",
  },
};

const clean = 'cross-env babel-node internal/scripts/clean';

const deploy = 'babel-node internal/scripts/deploy';

const test = {
  default: 'jest',
  coverage: 'jest --coverage',
};


// COMBINE ALL SCRIPTS INTO EXPORTABLE OBJECT

module.exports.scripts = {
  default: 'nps launch',
  analyze,
  build,
  check,
  clean,
  commit,
  deploy,
  launch,
  precommit,
  test,
};
