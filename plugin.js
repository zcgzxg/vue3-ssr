const { vuePlugin } = require('ssr-plugin-vue3')
const { exec } = require('child_process')

module.exports = {
  serverPlugin: {
    start: function () {
      const { stdout, stderr } = exec('npx ts-node ./src/main.ts')
      stdout.on('data', console.log)
      stderr.on('data', console.error)
    },
    build: function () {
      const build = new Promise((resolve, reject) => {
        exec('npx tsc -p ./tsconfig.build.json', (err, stdout, stderr) => {
          if (err) {
            reject(err)
            console.error(stderr)
          } else {
            resolve()
            console.log(stdout)
          }
        })
      })

      return build.then()
    },
    deploy: function () {}
  },
  clientPlugin: vuePlugin()
}
