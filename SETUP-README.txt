NYAY PATH — CONTACT FORM SETUP
================================

WHAT WAS CHANGED
----------------
1. Added an Email field to the contact form.
2. Contact form now posts to FormSubmit:
   https://formsubmit.co/dsoul3219@gmail.com
3. Email notification is configured for:
   dsoul3219@gmail.com
4. Notification includes:
   - Visitor name
   - Phone number
   - Email address
   - Message
   - Submission subject
5. Added validation, anti-spam honeypot, loading state and professional success/error messages.
6. Added thank-you.html.
7. Improved form styling and micro-interactions.

IMPORTANT — FIRST-TIME EMAIL ACTIVATION
---------------------------------------
FormSubmit may send a confirmation/activation email to dsoul3219@gmail.com the first time
the form is submitted. Open that email and confirm/activate the destination address.
After activation, future website enquiries can arrive in that inbox.

BEFORE PUBLISHING
-----------------
The website now sets the thank-you URL automatically from the live site's domain.
You do not need to edit _next after uploading the site. Keep thank-you.html in the same
folder as index.html.

FILES
-----
index.html
style.css
script.js
thank-you.html

NOTE
----
No SMTP password or private email credential is stored in the website code.
The form uses FormSubmit so a static HTML/CSS/JS site can receive email notifications
without running its own server.
