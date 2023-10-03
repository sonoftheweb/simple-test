import { Config } from 'sst/node/config'
import { Database } from 'src/types/supabase'
import { createClient } from '@supabase/supabase-js'

export const supabaseClient = () => {
  const supabaseUrl = Config.SBURL
  const supabaseKey = Config.SBKEY
  const client = createClient<Database>(supabaseUrl, supabaseKey)
  return client
}
