const startPage = document.querySelector('.start');
const countdownPage = document.querySelector('.countdown');
const startButton = document.querySelector('.start-button');
let timer = null;

function showStartPage() {
    startPage.style.display = 'block';
    countdownPage.style.display = 'none';
}

function showCountdownPage() {
    countdownPage.style.display = 'flex';
    startPage.style.display = 'none';
}

function setCountdownText(finished, goal, minutesLeft = 0) {
    if(!finished) {
        document.querySelector('.minutes-text').innerHTML = `
            <h3 class="title">${goal}</h3>
            <h3 class="title">${minutesLeft}</h3>
            <p class="content">${minutesLeft > 1 ? 'minutes' : 'minute'} left<p>
        `;
    } else {
        document.querySelector('.minutes-text').innerHTML = `
            <h3 class="title">${goal}</h3>
            <p class="content">Countdown finished</p>
        `;
    }
}

function countdown(seconds, goal) {
    timer = setInterval(function() {
        seconds--;
        const minutesLeft = Math.round(seconds / 60);
        setCountdownText(false, goal, minutesLeft);

        if(seconds === 0) {
            setCountdownText(true, goal);
            stopCountdown(timer);
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(timer);
}

function startCountdown() {
    const minutes = document.querySelector('.minutes-input').value;
    const goal = document.querySelector('.goal').value;

    if(!minutes) {
        alert('Please enter a number of minutes');
        return;
    }
    showCountdownPage();
    const initialSeconds = minutes * 60;

    countdown(initialSeconds, goal);
}

function resetCountdown() {
    stopCountdown();
    showStartPage();
}