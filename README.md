# Simple API Test
Simple welcome response: `https://bbh9pexwcb.execute-api.us-east-1.amazonaws.com/`

IP address response: `https://bbh9pexwcb.execute-api.us-east-1.amazonaws.com/ip-address?name=Soma`

---

This project is a REST API built with the Serverless Stack (SST) framework; a framework for building serverless applications. It's written in TypeScript and uses AWS Lambda for serverless functions.

The API has two endpoints:

1. GET / - This endpoint returns a welcome message.

2. GET /ip-address - This endpoint captures the IP address of the client making the request and optionally a name from the query string parameters. It then stores these in a Supabase database.

The project uses Supabase, an open-source Firebase alternative, for its database.

The project is organized into multiple packages, which are managed as workspaces using npm. The functions package contains the serverless function handlers, and the core package contain shared code or utilities.

The project configuration is defined in sst.config.ts, and the API stack is defined in stacks/IpStack.ts. The project uses environment variables to store sensitive information like the Supabase URL and key. These are accessed using the Config class from SST.

# Setup
## Requirement
1. AWS AIM credentials (get from team or make yours)
2. Supabase credentials (get from team or make yours)
3. AWS CLI for local test configured with AIM credentials

## Steps
- Clone this repository
- Navigate into the repository folder. `cd simple-test`
- Run `npm install`
- Run `npx sst secrets set SBURL {SupabaseUrl} && npx sst secrets set SBKEY {SupabaseAnonKey}` to save supabase secrets for dev use.
- Run `npm run dev` to start a live serverless instance in dev mode. Take note of the console URL for logs and tracking as well as setting up teams to monitor the api endpoint. 