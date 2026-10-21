// Google Analytics 4: visitas e cliques nos botões de contato.
(function () {
  'use strict';
  const measurementId = 'G-YXG39NGR1M';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(tag);

  document.addEventListener('click', function (event) {
    const link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    const destination = new URL(link.href, window.location.href);
    if (destination.protocol !== 'https:' || destination.hostname !== 'wa.me') return;
    const section = link.closest('section, header, footer');
    window.gtag('event', 'whatsapp_click', {
      send_to: measurementId,
      link_url: destination.origin + destination.pathname,
      button_text: link.textContent.trim(),
      button_location: section ? (section.id || section.tagName.toLowerCase()) : 'page',
      transport_type: 'beacon'
    });
  });
}());
