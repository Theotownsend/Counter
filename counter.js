let counterValue = 0;
const counterElement = document.getElementById("counter");

function updateCounterDisplay() {
  counterElement.textContent = counterValue;
  if (counterValue < 0) {
    counterElement.style.color = "red";
  } else if (counterValue > 0) {
    counterElement.style.color = "green";
  } else {
    counterElement.style.color = "black";
  }
}

function increaseCounter() {
  counterValue++;
  updateCounterDisplay();
}

function decreaseCounter() {
  counterValue--;
  updateCounterDisplay();
}

function resetCounter() {
  counterValue = 0;
  updateCounterDisplay();
}

//    Initial update to set the color based on initial value
updateCounterDisplay();
