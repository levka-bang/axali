
(function() {
  const banner = document.getElementById('cookieConsent');
  const acceptBtn = document.getElementById('acceptCookies');
  const declineBtn = document.getElementById('declineCookies');


  function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=');
      return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '');
  }


  if (!getCookie('cookieConsent')) {
      setTimeout(() => banner.classList.add('visible'), 200);
  }

  function setConsent(value) {

    document.cookie = `cookieConsent=${value}; max-age=${60*60*24*365}; path=/`;
    banner.classList.remove('visible');
  }  

  acceptBtn.addEventListener('click', () => setConsent('accepted'));
  declineBtn.addEventListener('click', () => setConsent('declined'));
})();
