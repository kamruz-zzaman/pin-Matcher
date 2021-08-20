function pin() {
    let getInputbtn = document.getElementById('pinShowInput');
    const randomNumber = Math.round(Math.random() * 10000);
    const randomNumberString = randomNumber + '';
    if (randomNumberString.length == 4) {
        getInputbtn.value = randomNumberString;
    }
    else {
        return pin();
    }
}

document.getElementById('keypad').addEventListener('click', function (event) {
    const inputNumbers = event.target.innerText;
    const getDisplayNumber = document.getElementById('display-number');
    if (isNaN(inputNumbers)) {
        if (inputNumbers == 'C') {
            getDisplayNumber.value = '';
        }
        if (inputNumbers == '<') {
            getDisplayNumber.value = getDisplayNumber.value.substring(0, getDisplayNumber.value.length - 1);
        }
    }
    else {
        const displayNumber = getDisplayNumber.value;
        const doubledNumber = displayNumber + inputNumbers;
        getDisplayNumber.value = doubledNumber;
    }
})
document.getElementById('submitBtn').addEventListener('click', function () {
    const inputNumbers = document.getElementById('display-number');
    const inputPin = document.getElementById('pinShowInput');
    const success = document.getElementById('success');
    const failed = document.getElementById('failed');
    const counting = document.getElementById('counting');
    const count = counting.innerText;
    let strCount = parseInt(count);
    if (inputNumbers.value == inputPin.value) {
        success.style.display = 'block';
        failed.style.display = 'none';
        inputPin.value = '';
        inputNumbers.value = '';
    }
    else {
        success.style.display = 'none';
        failed.style.display = 'block';

    }
})
