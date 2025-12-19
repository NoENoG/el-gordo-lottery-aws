const drawDate = new Date('2025-12-22T09:00:00');

function checkLottery() {
    const now = new Date();
    const resultDisplay = document.querySelector('.results-container p');
    const userNumber = document.getElementById('ticketInput').value;

    if (now < drawDate) {
        resultDisplay.innerHTML = "⏳ <strong>Patience!</strong> The draw starts on Dec 22nd at 09:00 AM.";
        resultDisplay.style.color = "#d4af37";
        return;
    }

    if (userNumber.length !== 5) {
        resultDisplay.innerText = "Please enter a valid 5-digit number.";
        resultDisplay.style.color = "#aa192d";
        return;
    }

    resultDisplay.innerHTML = "Searching official records... 🔎";
    resultDisplay.style.color = "#2c3e50";

    fetch(`https://api.elpais.com/ws/LoteriaNavidadPremiados?n=${userNumber}`)
        .then(response => response.json())
        .then(data => {
            if (data.error === 0 && data.premio > 0) {
                 resultDisplay.innerHTML = `🎉 WINNER! Your prize: <strong>${data.premio}€</strong>! 🏆`;
                 resultDisplay.style.color = "#aa192d";
                 resultDisplay.style.fontSize = "1.5rem";
            } else if (data.error === 0 && data.premio === 0) {
                resultDisplay.innerText = "No prize for this number. Better luck next year! 🎄";
                resultDisplay.style.color = "#2c3e50";
            } else {
                resultDisplay.innerText = "No results found yet. Try again in a few minutes.";
            }
        })
        .catch(error => {
            console.error(error);
            resultDisplay.innerHTML = "⚠️ <strong>Connection Error.</strong> The server might be sleeping until Dec 22.";
            resultDisplay.style.color = "orange";
        });
}

function updateTimer() {
    const now = new Date().getTime();
    const distance = drawDate.getTime() - now;

    if (distance < 0) {
        const btn = document.querySelector(".input-section button");
        if(btn) btn.disabled = false;
        
        const wrapper = document.getElementById("countdown-wrapper");
        if(wrapper) wrapper.innerHTML = "<h2 style='color:#aa192d'>LIVE DRAW IN PROGRESS! 🔴</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(document.getElementById("days")) {
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }
}

function shareApp() {
    const text = "Check your El Gordo tickets here! 🎄🎟️";
    const url = "https://bit.ly/elgordo-lottery"; 
    window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, '_blank');
}

updateTimer();
setInterval(updateTimer, 1000);


const ticketInput = document.getElementById('ticketInput');

ticketInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    
    if (e.target.value.length > 5) {
        e.target.value = e.target.value.slice(0, 5);
    }
});