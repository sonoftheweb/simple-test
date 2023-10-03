import { Api, StackContext } from 'sst/constructs'

export function IpStack({ stack }: StackContext) {
  const api = new Api(stack, 'Api', {
    routes: {
      'GET /': 'packages/functions/src/welcome.handler',
      'GET /ip-address': 'packages/functions/src/ip.handler',
    },
  })

  stack.addOutputs({
    ApiEndpoint: api.url,
  })
}
