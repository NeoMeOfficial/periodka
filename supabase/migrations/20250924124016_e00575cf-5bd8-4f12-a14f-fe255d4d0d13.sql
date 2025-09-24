-- Reset the ADMIN-2025-DEMO code so it can be used again
UPDATE admin_codes 
SET is_used = false, used_at = NULL 
WHERE code = 'ADMIN-2025-DEMO';