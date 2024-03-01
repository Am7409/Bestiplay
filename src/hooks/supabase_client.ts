import { BASE_URL, ANON_KEY, SERVICE_KEY } from '@/env';
import { createClient } from '@supabase/supabase-js';


const supabase = createClient(BASE_URL, ANON_KEY);
export default supabase;
