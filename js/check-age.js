function closePage() {
    window.history.back();

    if (window.parent != null) {
        setTimeout(window.close, 150);
    }
}

function acceptAge() {
    var intro = document.querySelector('.intro');
    var checkAgeButtons = document.querySelector('#check-age-buttons');

    intro.style.display = 'none';
    checkAgeButtons.style.display = 'none';

    var introMess = document.querySelector('.intro-mess');
    var languageButtons = document.querySelector('#download-button');

    introMess.style.display = 'block';
    languageButtons.style.display = 'block';
}

function onAccept() {
    acceptAge();
}

function onDecline() {
    closePage();
}

function init() {
    var acceptBtn = document.querySelector('.js-confirm-age');
    var declineBtn = document.querySelector('.js-decline-age');

    acceptBtn.addEventListener('click', onAccept);
    declineBtn.addEventListener('click', onDecline);
}

init();
