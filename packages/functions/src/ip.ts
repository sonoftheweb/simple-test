import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import { supabaseClient } from './utils/db'

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const client = supabaseClient()
    const ip = event.requestContext.http.sourceIp
    const name = event.queryStringParameters?.name

    let response: { ip: string; greeting?: string } = { ip }

    if (name) {
      response.greeting = `${name}`
    }

    if (ip) {
      await client.from('ip').insert([{ ip: ip, name: name ?? null }])
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
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'error-code-400' }),
    }
  }
}
