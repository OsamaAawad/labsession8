import {createClient} from "@supabase/supabase-js";

const URL = "https://xspdkxfmdulurgezlyax.supabase.co"
const ApiKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzcGRreGZtZHVsdXJnZXpseWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3ODE4MzAsImV4cCI6MjA1NzM1NzgzMH0.y4yQ43y5Yl25LoOr3GUk77ypVZZs2XNuJJCE4LJY1So"

const supbase = createClient(URL,ApiKey)

export default supbase;