const jq = require('node-jq');

async function convert(){
  const data = {a: 10};
  try {
    let result = await jq.run(".",
                              JSON.stringify(data),
                              { input: 'string' , output: 'json'});
    return result;
  } catch (err) {
    t.error(err)
  }
}


convert().then((res) => {
  console.log(res);
  process.exit()
})
