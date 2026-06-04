import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hugnzfmdughmewjfjzsm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1Z256Zm1kdWdobWV3amZqenNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NjUxODksImV4cCI6MjA5NTM0MTE4OX0.lRx4X2Vn-qVSYG23uV2_dnTDik-pMJ-JdiCTMVgejH0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
