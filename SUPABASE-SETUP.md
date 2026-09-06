# Nyay Path — Supabase connection checklist

1. Create a Supabase project.
2. Open SQL Editor → paste and run `backend/supabase-schema.sql`.
3. Copy `backend/.env.example` to `backend/.env`.
4. Fill:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only)
   - `UPI_ID`
   - `CONSULTATION_FEE`
   - `ADMIN_EMAIL`
   - `ALLOWED_ORIGINS`
   - seed passwords
5. In `backend`, run `npm install`.
6. Run `npm run seed`.
7. Run `npm start`.
8. Open `http://localhost:3000/dashboard-login.html`.
9. Test:
   - Client login
   - Advocate login
   - Admin login
   - availability
   - booking + payment proof
   - admin verification
   - advocate confirmation
   - client status

IMPORTANT: Never paste the Supabase service/secret key into website HTML/JS or send it to the browser.
