/* =========================================================
   NYAY PATH LEGAL CONSULTANTS & SOLUTIONS PVT. LTD.
   script.js
   - Sticky navbar shadow
   - Mobile menu toggle
   - Scroll fade-in animations
   - Scroll-to-top button
   - Contact form handling
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky navbar shadow on scroll ---------- */
  var navbar = document.getElementById('navbar');
  function handleNavbarShadow() {
    if (window.scrollY > 10) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }
  handleNavbarShadow();
  window.addEventListener('scroll', handleNavbarShadow, { passive: true });

  /* ---------- Mobile menu toggle ---------- */
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');

  function closeMenu() {
    hamburger.classList.remove('is-open');
    navLinks.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a nav link is tapped (mobile)
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ---------- Scroll fade-in animations ---------- */
  var fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: reveal everything immediately
    fadeEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Scroll-to-top button ---------- */
  var scrollTopBtn = document.getElementById('scrollTopBtn');

  function toggleScrollTopBtn() {
    if (window.scrollY > 480) {
      scrollTopBtn.classList.add('is-visible');
    } else {
      scrollTopBtn.classList.remove('is-visible');
    }
  }
  toggleScrollTopBtn();
  window.addEventListener('scroll', toggleScrollTopBtn, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Professional contact form ---------- */
  var contactForm = document.getElementById('contactForm');
  var formNote = document.getElementById('formNote');
  var contactSubmit = document.getElementById('contactSubmit');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      var name = contactForm.name.value.trim();
      var phone = contactForm.phone.value.trim().replace(/\D/g, '');
      var email = contactForm.email.value.trim();
      var message = contactForm.message.value.trim();
      var phonePattern = /^[0-9]{10}$/;
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Let the browser handle the actual POST to FormSubmit after validation.
      if (!name || !phone || !email || !message) {
        e.preventDefault();
        formNote.textContent = 'कृपया नाम, फोन, ईमेल और संदेश सभी भरें।';
        formNote.className = 'contact__form-note is-error';
        return;
      }

      if (!phonePattern.test(phone)) {
        e.preventDefault();
        formNote.textContent = 'कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।';
        formNote.className = 'contact__form-note is-error';
        contactForm.phone.focus();
        return;
      }

      if (!emailPattern.test(email)) {
        e.preventDefault();
        formNote.textContent = 'कृपया सही ईमेल पता दर्ज करें।';
        formNote.className = 'contact__form-note is-error';
        contactForm.email.focus();
        return;
      }

      if (message.length < 10) {
        e.preventDefault();
        formNote.textContent = 'कृपया संदेश थोड़ा विस्तार से लिखें।';
        formNote.className = 'contact__form-note is-error';
        contactForm.message.focus();
        return;
      }

      // Add a clean subject dynamically with the visitor's name.
      var subjectField = contactForm.querySelector('input[name="_subject"]');
      if (subjectField) {
        subjectField.value = 'New Website Enquiry — ' + name;
      }

      // Send the visitor to the local thank-you page after FormSubmit completes.
      // On a real hosted site, window.location.origin resolves to the site's domain.
      var nextField = contactForm.querySelector('input[name="_next"]');
      if (nextField && window.location.protocol !== 'file:') {
        nextField.value = window.location.origin + '/thank-you.html';
      }

      // Native form submission is intentional: it avoids exposing any private
      // SMTP/API credentials in browser JavaScript.
      if (contactSubmit) {
        contactSubmit.disabled = true;
        contactSubmit.querySelector('span').textContent = 'भेजा जा रहा है…';
      }
      formNote.textContent = 'आपकी enquiry भेजी जा रही है…';
      formNote.className = 'contact__form-note is-success';
    });

    // Keep only digits in the phone field.
    contactForm.phone.addEventListener('input', function () {
      this.value = this.value.replace(/\D/g, '').slice(0, 10);
    });
  }

});

/* ---------- Consultation booking ---------- */
(function(){
  const form=document.getElementById('consultationForm'); if(!form) return;
  const date=document.querySelector('[name="date"]'), slot=document.getElementById('consultationSlot');
  const msg=document.getElementById('consultationMessage'), btn=document.getElementById('consultationSubmit');
  const api=(window.NYAY_PATH_API||'/api');
  fetch(api+'/config').then(r=>r.json()).then(c=>{const fee=document.getElementById('consultationFee'),upi=document.getElementById('upiId'),qr=document.getElementById('upiQr'); if(fee)fee.textContent='₹'+c.fee;if(upi)upi.textContent=c.upiId||'Not configured'; if(qr&&c.upiId&&window.QRCode)new QRCode(qr,{text:`upi://pay?pa=${encodeURIComponent(c.upiId)}&pn=Nyay%20Path&am=${c.fee}&cu=INR`,width:180,height:180});}).catch(()=>{});
  document.getElementById('copyUpi')?.addEventListener('click',()=>navigator.clipboard?.writeText(document.getElementById('upiId').textContent));
  date.min=new Date().toISOString().slice(0,10);
  async function loadSlots(){
    slot.innerHTML='<option>Loading...</option>';
    try{
      const r=await fetch(api+'/slots?date='+encodeURIComponent(date.value));
      const d=await r.json(); slot.innerHTML='';
      if(!d.slots?.length){slot.innerHTML='<option value="">No slots available</option>';return;}
      d.slots.forEach(s=>{const o=document.createElement('option');o.value=s.id;o.textContent=s.label;slot.appendChild(o)});
    }catch(e){slot.innerHTML='<option value="">Backend unavailable</option>'}
  }
  date.addEventListener('change',loadSlots);
  form.addEventListener('submit',async e=>{
    e.preventDefault(); msg.textContent=''; btn.disabled=true; btn.textContent='Submitting...';
    try{
      const fd=new FormData(form);
      const r=await fetch(api+'/bookings',{method:'POST',body:fd});
      const d=await r.json(); if(!r.ok) throw new Error(d.message||'Unable to submit request');
      msg.textContent='Request received. Booking ID: '+d.bookingId+'. Payment verification is pending.';
      form.reset(); slot.innerHTML='<option value="">Select date first</option>';
    }catch(err){msg.textContent=err.message}
    finally{btn.disabled=false;btn.textContent='Submit consultation request'}
  });
})();
