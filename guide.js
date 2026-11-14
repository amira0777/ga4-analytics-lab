'use strict';

const params = new URLSearchParams(window.location.search);
const target = new URL('contacts.html', window.location.href);
for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content']) {
  const value = params.get(key);
  if (value) target.searchParams.set(key, value);
}

const leadLink = document.querySelector('#lead-link');
leadLink.href = target.href;
leadLink.addEventListener('click', () => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', {
      button_name: 'guide_to_form',
      page_section: 'backend_guide',
      transport_type: 'beacon'
    });
  }
});
