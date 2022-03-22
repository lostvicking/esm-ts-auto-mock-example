## ESM TypeScript repo to demonstrate `ts-auto-mock` error

To install dependencies run

```
npm install
```

To run tests run

```
npm test
```

which results in the following error:

```
Error:
  hey, it looks like ts-auto-mock is not configured correctly! You can find the instructions here https://typescript-tdd.github.io/ts-auto-mock/installation.
  If you need further assistance feel free to drop a message on slack. (link at the bottom of https://typescript-tdd.github.io/ts-auto-mock)

    at r.createMock (/Users/victorneiman/Code/esm-ts-auto-mock-example/node_modules/ts-auto-mock/index.js:1:502)
    at file:///Users/victorneiman/Code/esm-ts-auto-mock-example/tests/test.ts:5:26
    at ModuleJob.run (internal/modules/esm/module_job.js:170:25)
    at async Loader.import (internal/modules/esm/loader.js:178:24)
    at async formattedImport (/Users/victorneiman/Code/esm-ts-auto-mock-example/node_modules/mocha/lib/nodejs/esm-utils.js:7:14)
    at async Object.exports.requireOrImport (/Users/victorneiman/Code/esm-ts-auto-mock-example/node_modules/mocha/lib/nodejs/esm-utils.js:48:32)
    at async Object.exports.loadFilesAsync (/Users/victorneiman/Code/esm-ts-auto-mock-example/node_modules/mocha/lib/nodejs/esm-utils.js:103:20)
    at async singleRun (/Users/victorneiman/Code/esm-ts-auto-mock-example/node_modules/mocha/lib/cli/run-helpers.js:125:3)
    at async Object.exports.handler (/Users/victorneiman/Code/esm-ts-auto-mock-example/node_modules/mocha/lib/cli/run.js:374:5)
```
