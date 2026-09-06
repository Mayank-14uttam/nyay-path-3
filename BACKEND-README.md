# Nyay Path backend integration

The original dashboards were a browser/localStorage prototype. This updated package adds a real backend foundation in `../backend`.

The implemented consultation path is:

Client form -> server validation -> database booking -> slot reservation transaction -> UPI transaction ID + proof upload -> PAYMENT_VERIFICATION_PENDING -> advocate/admin email notification.

Important: manual UPI proof is never treated as automatic payment success. Verification must be performed by an authorized operator.

See `../backend/README.md` for setup. For a public production launch, migrate to PostgreSQL/private object storage and complete authenticated dashboard APIs, email verification/password reset, and gateway webhook verification.
