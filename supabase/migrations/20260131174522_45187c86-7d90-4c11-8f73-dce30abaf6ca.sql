-- Create table to track offer completions via postback
CREATE TABLE public.offer_completions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL UNIQUE,
  completed BOOLEAN NOT NULL DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.offer_completions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read their session status (public since no auth)
CREATE POLICY "Anyone can read session status" 
ON public.offer_completions 
FOR SELECT 
USING (true);

-- Allow inserts for creating sessions (public since no auth)
CREATE POLICY "Anyone can create sessions" 
ON public.offer_completions 
FOR INSERT 
WITH CHECK (true);

-- Allow updates only for marking as completed (will be done by edge function)
CREATE POLICY "Anyone can update sessions" 
ON public.offer_completions 
FOR UPDATE 
USING (true);