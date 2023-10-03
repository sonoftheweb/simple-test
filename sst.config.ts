import { SSTConfig } from 'sst'
import { IpStack } from './stacks/IpStack'

export default {
  config(_input) {
    return {
      name: 'rest-api',
      region: 'us-east-1',
    }
  },
  stacks(app) {
    app.stack(IpStack)
  },
} satisfies SSTConfig
