(() => {
  const measurementId = document.querySelector('meta[name="google-analytics-id"]')?.content.trim();
  const consentKey = 'mimos-analytics-consent';
  if (!/^G-[A-Z0-9]+$/.test(measurementId || '')) return;

  function bindInteractionEvents() {
    if (window.__mimosAnalyticsEventsBound) return;
    window.__mimosAnalyticsEventsBound = true;
    document.addEventListener('click', (event) => {
      const target = event.target.closest('a, button');
      if (!target || !window.gtag) return;
      if (target.matches('a[href^="https://wa.me/"]')) window.gtag('event', 'whatsapp_contact');
      if (target.matches('[data-add]')) window.gtag('event', 'add_to_cart');
      if (target.matches('[data-view]')) window.gtag('event', 'view_product_image');
    });
  }

  function startAnalytics() {
    if (localStorage.getItem(consentKey) !== 'granted' || window.__mimosAnalyticsLoaded) return;
    window.__mimosAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.append(script);
    bindInteractionEvents();
  }

  startAnalytics();
  window.addEventListener('mimos:analytics-consent', startAnalytics);
})();
