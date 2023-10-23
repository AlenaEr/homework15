
let hours;
while (true) {
    const input = +prompt("Введіть кількість годин:");
    hours = parseFloat(input);

    if (!isNaN(hours)) {
        break;
    } else {
        alert("Будь ласка, введіть число.");
    }
}

let seconds = hours * 3600;

alert(`У ${hours} годинах ${seconds} секунд.`);

let hoursInput = document.getElementById("hours");
let secondsInput = document.getElementById("seconds");
let result = document.getElementById("result");
let resultSeconds = document.getElementById("resultSeconds");

hoursInput.addEventListener("input", () => {
    let hours = parseFloat(hoursInput.value);
    if (!isNaN(hours)) {
        let seconds = hours * 3600;
        result.textContent = seconds;
    } else {
        result.textContent = "0";
    }
});

secondsInput.addEventListener("input", () => {
    let seconds = parseFloat(secondsInput.value);
    if (!isNaN(seconds)) {
        let hours = seconds / 3600;
        resultSeconds.textContent = hours;
    } else {
        resultSeconds.textContent = "0";
    }
});
