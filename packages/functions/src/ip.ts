import { APIGatewayProxyHandlerV2 } from 'aws-lambda'

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const ip = event.requestContext.http.sourceIp

  return {
    statusCode: ip ? 200 : 400,
    headers: {
      'x-hello-world': 'JE'
    },
    body: ip
      ? JSON.stringify({ ip })
      : JSON.stringify({ error: 'error-code-100' }),
  }
}
