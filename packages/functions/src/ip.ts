import { APIGatewayProxyHandlerV2 } from 'aws-lambda'

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const ip = event.requestContext.http.sourceIp
  const name = event.queryStringParameters?.name

  let response: { ip: string; greeting?: string } = { ip }

  if (name) {
    response.greeting = `${name}`
  }

  return {
    statusCode: ip ? 200 : 400,
    headers: {
      'x-hello-world': 'JE',
    },
    body: ip
      ? JSON.stringify(response)
      : JSON.stringify({ error: 'error-code-100' }),
  }
}
