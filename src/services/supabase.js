
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lslgjxwaozqjrwtwctqx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbGdqeHdhb3pxanJ3dHdjdHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMjgzNjYsImV4cCI6MjAyNzgwNDM2Nn0.mHDiWFwji5-s2EJN-H-sJeWFub-VS0TI8YXe98deF6s'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;