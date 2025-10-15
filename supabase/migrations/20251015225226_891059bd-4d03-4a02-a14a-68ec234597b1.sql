-- Remove the public SELECT policy (major security issue - exposes all customer data)
DROP POLICY IF EXISTS "Anyone can view appointments" ON public.appointments;

-- Keep public INSERT but add basic validation
DROP POLICY IF EXISTS "Anyone can create appointments" ON public.appointments;

CREATE POLICY "Public can create appointments with validation"
ON public.appointments
FOR INSERT
TO anon, authenticated
WITH CHECK (
  -- Ensure required fields are not empty
  parent_name IS NOT NULL AND 
  parent_name != '' AND
  phone IS NOT NULL AND 
  phone != '' AND
  child_name IS NOT NULL AND 
  child_name != '' AND
  service IS NOT NULL AND
  professional IS NOT NULL AND
  appointment_date IS NOT NULL AND
  appointment_time IS NOT NULL
);