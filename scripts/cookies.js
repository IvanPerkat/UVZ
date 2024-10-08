document.addEventListener('DOMContentLoaded', function() {
    var cookieBanner = document.getElementById('cookie-banner');
    var acceptCookiesButton = document.getElementById('accept-cookies');
    var declineCookiesButton = document.getElementById('decline-cookies');

    cookieBanner.classList.add('show');

    acceptCookiesButton.addEventListener('click', function() {
        cookieBanner.classList.remove('show');
    });

    declineCookiesButton.addEventListener('click', function() {
        cookieBanner.classList.remove('show');
    });
});
