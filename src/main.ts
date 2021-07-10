import * as path from 'path'
import * as Koa from 'koa'
import * as StaticServe from 'koa-static-server'
import { loadConfig, initialSSRDevProxy, getCwd } from 'ssr-server-utils'
import { render } from 'ssr-core-vue3'
import { Readable } from 'stream'

const app = new Koa()
const config = loadConfig()
const { serverPort, isDev } = config
process.env.NODE_ENV = isDev ? 'development' : 'production'

async function boot () {
  if (isDev) {
    await initialSSRDevProxy(app, {
      express: false
    })
  }

  app.use(async (ctx, next) => {
    if (!ctx.path.includes('.')) {
      try {
        const stream = await render<Readable>(ctx, { stream: true })
        ctx.type = '.html'
        ctx.body = stream
      } catch (e) {
        ctx.status = 500
        ctx.body =
          ((e as Error)?.message || 'no error message') +
          '\n' +
          (e as Error)?.stack
      }
    } else {
      await next()
    }
  })

  app.use(
    StaticServe({
      rootDir: path.join(__dirname, '../public'),
      rootPath: '/public'
    })
  )
  app.use(StaticServe({ rootDir: path.join(getCwd(), './build') }))

  app.listen(serverPort, () => {
    console.log(`server is listening http://localhost:${serverPort}`)
  })
}

boot().catch(console.error)
