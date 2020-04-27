const { test } = require('tap');
const jq = require('node-jq');

test('test jq', async t => {
  t.plan(1)
  const data = {a: 10};
  try {
    let result = await jq.run(".",
                              JSON.stringify(data),
                              { input: 'string' , output: 'json'});
    t.same(data, result)
  } catch (err) {
    t.error(err)
  }
});
