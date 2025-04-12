import {createClient} from "@supabase/supabase-js"

const URL = 'https://ieduksvehaetfnjlosix.supabase.co'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllZHVrc3ZlaGFldGZuamxvc2l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MzI3MzksImV4cCI6MjA2MDAwODczOX0.CBX2eD7xnA5ihzyIcjvpp2nt075mKkOaSDWl99Zs3qo'

export const supabase = createClient(URL, API_KEY);