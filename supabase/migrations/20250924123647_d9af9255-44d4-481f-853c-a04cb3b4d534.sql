-- Create a new admin code for testing
INSERT INTO admin_codes (code, expires_at, is_used) 
VALUES ('ADMIN-2025-NEW', now() + interval '7 days', false);