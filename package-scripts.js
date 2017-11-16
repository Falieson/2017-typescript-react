const { series } = require('nps-utils'); // series, rimraf

const scripts = {
  check: {
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
  },
  analyze: {
    default: series.nps('analyze.client', 'analyze.server'),
    client: 'babel-node internal/scripts/analyze --client',
    server: 'babel-node internal/scripts/analyze --server',
  },
  build: {
    default: 'babel-node internal/scripts/build --optimize',
    dev: 'babel-node internal/scripts/build',
  },
  clean: 'cross-env babel-node internal/scripts/clean',
  deploy: 'babel-node internal/scripts/deploy',
  dev: 'cross-env DEPLOYMENT=development babel-node internal/development',
  default: 'cross-env NODE_ENV=production node build/server',
  test: {
    default: 'jest',
    coverage: 'jest --coverage',
  },
};

module.exports.scripts = scripts;
