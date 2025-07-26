
  (function() {
    const banner = document.getElementById('cookieBanner');
    const accept = document.getElementById('acceptBtn');
    const deny   = document.getElementById('denyBtn');
    const close  = document.getElementById('closeBanner');

    if (!localStorage.getItem('notificationsDecision')) {
      setTimeout(() => banner.classList.add('visible'), 300);
    }

    function hideBanner() {
      banner.classList.remove('visible');
    }

    accept.addEventListener('click', () => {
      localStorage.setItem('notificationsDecision', 'accepted');
      hideBanner();
    });

    deny.addEventListener('click', () => {
      localStorage.setItem('notificationsDecision', 'denied');
      hideBanner();
    });

    close.addEventListener('click', hideBanner);
  })();

