import { Api, Config, StackContext } from 'sst/constructs'

export function IpStack({ stack }: StackContext) {
  const SBURL = new Config.Secret(stack, 'SBURL')
  const SBKEY = new Config.Secret(stack, 'SBKEY')
  
  const api = new Api(stack, 'Api', {
    defaults: {
      function: {
        bind: [SBURL, SBKEY]
      }
    },
    routes: {
      'GET /': 'packages/functions/src/welcome.handler',
      'GET /ip-address': 'packages/functions/src/ip.handler',
    },
  })

  stack.addOutputs({
    ApiEndpoint: api.url,
  })
}
