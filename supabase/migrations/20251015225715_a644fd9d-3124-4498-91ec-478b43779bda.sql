-- Add explicit DENY policies for UPDATE and DELETE operations
-- This ensures the appointments table remains insert-only for security

-- Deny all UPDATE operations on appointments table
CREATE POLICY "Deny all updates to appointments"
ON public.appointments
FOR UPDATE
TO anon, authenticated
USING (false);

-- Deny all DELETE operations on appointments table  
CREATE POLICY "Deny all deletes from appointments"
ON public.appointments
FOR DELETE
TO anon, authenticated
USING (false);

-- Add comment explaining the security model
COMMENT ON TABLE public.appointments IS 'Insert-only table for appointment bookings. Modifications are managed through Google Calendar by staff only.';