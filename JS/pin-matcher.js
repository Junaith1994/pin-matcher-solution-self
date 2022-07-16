function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4) {
        const pinDisplay = document.getElementById('pin-display');
        pinDisplay.value = pinString;
    }
    else {
        generatePin();
    }
}

document.getElementById('calc-buttons').addEventListener('click', function(event) {
    const button = event.target.innerText;
    const numberDisplay = document.getElementById('number-display');
    if(isNaN(parseInt(button)) || (button.length > 1)) {
        console.log("Not a Number !!");
        if(button == "C") {
            numberDisplay.value = '';
        }
    }
    else {numberDisplay.value = numberDisplay.value + button; }
})

function pinMatcher() {
    const pinError = document.getElementById('pin-error');
    const pinMatched = document.getElementById('pin-matched');
    const pinDisplay = document.getElementById('pin-display').value;
    const numberDisplay = document.getElementById('number-display').value; 
    if(pinDisplay == numberDisplay) {
        pinMatched.style.display = 'block';
        pinError.style.display = 'none';
    }
    else{
        pinMatched.style.display = 'none';
        pinError.style.display = 'block';
    }
}