const stepDisplay = document.getElementById('stepDisplay');
    const timerDisplay = document.getElementById('timer');
    let isRunning = false;
    let timerInterval;
    let minutes = 50;
    let seconds = 0;

    function showAllSteps() {
      const steps = [
        "1. Spread pizza sauce evenly on the base.",
        "2. Add marinated paneer, capsicum, onions, and tomatoes.",
        "3. Sprinkle grated mozzarella cheese generously.",
        "4. Add oregano and chilli flakes to taste.",
        "5. Bake in a preheated oven at 200°C for 10-12 mins.",
        "6. Serve hot and enjoy your delicious Paneer Pizza!"
      ];
      stepDisplay.innerHTML = steps.map(step => `<p>${step}</p>`).join('');
    }

    function toggleTimer() {
      if (!isRunning) {
        isRunning = true;
        timerDisplay.style.color = "#2a2a2a";
        startCountdown();
      } else {
        if (timerInterval) {
          clearInterval(timerInterval);
          isRunning = false;
          timerDisplay.style.color = "orange";
        } else {
          resetTimer();
          isRunning = true;
          startCountdown();
        }
      }
    }

    function startCountdown() {
      timerInterval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timerInterval);
          timerDisplay.textContent = "⏰ Done!";
          timerDisplay.style.color = "green";
          return;
        }
        if (seconds === 0) {
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }
        timerDisplay.textContent = `Cooking Timer: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      }, 1000);
    }

    function resetTimer() {
      clearInterval(timerInterval);
      minutes = 50;
      seconds = 0;
      timerDisplay.textContent = "Cooking Timer: 50:00";
      timerDisplay.style.color = "#2a2a2a";
      timerInterval = null;
    }