import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zjyxlhlrokmnrrvfaivp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqeXhsaGxyb2ttbnJydmZhaXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzNDE2ODIsImV4cCI6MjA5MDkxNzY4Mn0.aECPZRgzk52JA_bYgax4YkjFbCtO0kAVK8lmNY59bWI';

export const supabase = createClient(supabaseUrl, supabaseKey);
