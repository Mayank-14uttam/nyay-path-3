# NYAY PATH — Updated Package

This is the original Nyay Path project updated in-place rather than replaced with a generic template.

## What changed
- Preserved the existing `site/` design, branding and pages.
- Added a real consultation booking section to the public website.
- Added date/slot availability loading from a backend API.
- Added UPI ID + dynamic QR configuration.
- Added transaction ID and payment-proof upload.
- Added server-side validation and transactional slot reservation.
- Added SQLite persistence, unique slot protection, audit log and email notification foundation.
- Replaced the old backend README with the actual setup/flow for this package.

## Run
See `backend/README.md`.

## Important
The original HTML dashboards are still visual prototypes and are retained for reference. They are not being falsely presented as a complete authenticated production admin/client/advocate system yet. The backend foundation is included so the next development pass can wire those dashboards to real authenticated APIs.
