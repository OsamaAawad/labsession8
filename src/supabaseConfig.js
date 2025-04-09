import {createClient} from "@supabase/supabase-js";

const URL = "https://voycdumtaytqpgfcpcmo.supabase.co"
const ApiKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZveWNkdW10YXl0cXBnZmNwY21vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxOTc1NDYsImV4cCI6MjA1OTc3MzU0Nn0.HAH9T87iF0bQK7vWeZ531vGU4VPrsQV3Jy8Bxco0U2w"

const supbase = createClient(URL,ApiKey)

export default supbase;