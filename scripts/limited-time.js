const offerEndDate = new Date();
offerEndDate.setDate(offerEndDate.getDate() + 7);

function updateCountdown() {
    const now = new Date();
    const timeRemaining = offerEndDate - now;

    if (timeRemaining <= 0) {
        document.getElementById('countdown').innerHTML = '<p>Offer has ended!</p>';
        clearInterval(countdownInterval);
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
