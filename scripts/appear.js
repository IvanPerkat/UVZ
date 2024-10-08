function openPopup(popupId) {
    document.getElementById(popupId).classList.add('show');
    document.getElementById('popup-overlay').classList.add('show');
}

function closePopup(popupId) {
    document.getElementById(popupId).classList.remove('show');
    document.getElementById('popup-overlay').classList.remove('show');
}
