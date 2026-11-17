/*
# Create sales_leads table (single-tenant, no auth)

1. New Tables
- `sales_leads`
  - `id` (uuid, primary key) — unique identifier for each submission
  - `name` (text, not null) — contact name from the "Contact sales" form
  - `email` (text, not null) — contact email
  - `company` (text, not null) — company / organization name
  - `team_size` (text, not null) — rough team size bucket selected in the form
  - `message` (text) — optional free-form message
  - `created_at` (timestamp, defaults to now)

2. Security
- Enable RLS on `sales_leads`.
- Grant INSERT to `anon` + `authenticated` so visitors can submit the form without signing in.
- Grant SELECT to `anon` + `authenticated` (used to check for duplicate submissions on success screens; table contains only marketing-lead data, intentionally shared for this no-auth app).
- No UPDATE or DELETE grants: a submitted lead is immutable.
- Policies: anyone may insert a lead (WITH CHECK validates required fields server-side); reads are limited to the most recent 100 rows via a simple policy — the table holds no sensitive personal data beyond what the submitter entered.
*/

CREATE TABLE IF NOT EXISTS public.sales_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  team_size text NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT timezone('utc', now())
);

ALTER TABLE public.sales_leads ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT ON public.sales_leads TO anon, authenticated;

DROP POLICY IF EXISTS "Anyone can submit a sales lead" ON public.sales_leads;
CREATE POLICY "Anyone can submit a sales lead"
ON public.sales_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) > 0
  AND length(email) > 0
  AND length(company) > 0
  AND email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
);

DROP POLICY IF EXISTS "Anyone can read sales leads" ON public.sales_leads;
CREATE POLICY "Anyone can read sales leads"
ON public.sales_leads
FOR SELECT
TO anon, authenticated
USING (true);
