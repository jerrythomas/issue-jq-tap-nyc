# Issue with jq & tap nyc

Code runs without issues

```bash
node index.js
```

Tests fail with error

```bash
tap jq.spec.js
```

```error
test: jq.spec.js test jq
  origin:
    at:
      line: 462
      column: 3
      file: fs.js
      function: Object.openSync
    stack: |
      node_modules/node-jq/lib/exec.js:26:43
      new Promise (<anonymous>)
      exec (node_modules/node-jq/lib/exec.js:20:10)
      node_modules/node-jq/lib/jq.js:27:24
    errno: -13
    syscall: open
    code: EACCES
    path: /Users/Jerry/Code/experiments/issue-jq-tap-nyc/node_modules/node-jq/bin/jq
  found:
    !error
    name: Error
    message: "EACCES: permission denied, open
      '/Users/Jerry/Code/experiments/issue-jq-tap-nyc/node_modules/node-jq/bin/jq'"
    stack: >-
      Error:
          at Object.openSync (fs.js:462:3)
          at Proxy.readFileSync (fs.js:364:35)
          at mungeShebang (/usr/local/lib/node_modules/tap/node_modules/spawn-wrap/index.js:252:20)
          at munge (/usr/local/lib/node_modules/tap/node_modules/spawn-wrap/index.js:328:5)
          at ChildProcess.wrappedSpawn [as spawn] (/usr/local/lib/node_modules/tap/node_modules/spawn-wrap/index.js:89:5)
          at Proxy.spawn (child_process.js:548:9)
          at /Users/Jerry/Code/experiments/issue-jq-tap-nyc/node_modules/node-jq/lib/exec.js:26:43
          at new Promise (<anonymous>)
          at exec (/Users/Jerry/Code/experiments/issue-jq-tap-nyc/node_modules/node-jq/lib/exec.js:20:10)
          at /Users/Jerry/Code/experiments/issue-jq-tap-nyc/node_modules/node-jq/lib/jq.js:27:24
    errno: -13
    syscall: open
    code: EACCES
    path: /Users/Jerry/Code/experiments/issue-jq-tap-nyc/node_modules/node-jq/bin/jq
  stack: |
    Test.<anonymous> (jq.spec.js:13:7)
```

[node-tap-issue-669](https://github.com/tapjs/node-tap/issues/669)

Corey Farell pointed out that the issue is with `nyc v14` incompatibility with `node-jq`. Corey also provided a workaround which I have included in the scripts.

```bash
yarn add -D nyc
nyc tap --no-coverage
```
