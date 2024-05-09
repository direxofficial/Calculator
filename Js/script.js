let clear = document.getElementById('clear'),
    divide = document.getElementById('divide'),
    erase = document.getElementById('erase'),
    multiplication = document.getElementById('multiplication'),
    subtraction = document.getElementById('subtraction'),
    addition = document.getElementById('addition'),
    equal = document.getElementById('equal'),
    num0x3 = document.getElementById('num0x3'),
    dot = document.getElementById('dot'),
    num9 = document.getElementById('num9'),
    num8 = document.getElementById('num8'), 
    num7 = document.getElementById('num7'),
    num6 = document.getElementById('num6'),
    num5 = document.getElementById('num5'),
    num4 = document.getElementById('num4'),
    num3 = document.getElementById('num3'),
    num2 = document.getElementById('num2'),
    num1 = document.getElementById('num1'),
    num0 = document.getElementById('num0'),
    consoleBox = document.getElementById('console_box');

num0x3.addEventListener('click', () => {
    let num0x3Value = num0x3.value;
    consoleBox.value += num0x3Value;
});

num0.addEventListener('click', () => {
    let num0Value = num0.value;
    consoleBox.value += num0Value;
});

num1.addEventListener('click', () => {
    let num1Value = num1.value;
    consoleBox.value += num1Value;
});

num2.addEventListener('click', () => {
    let num2Value = num2.value;
    consoleBox.value += num2Value;
});

num3.addEventListener('click', () => {
    let num3Value = num3.value;
    consoleBox.value += num3Value;
});

num4.addEventListener('click', () => {
    let num4Value = num4.value;
    consoleBox.value += num4Value;
});

num5.addEventListener('click', () => {
    let num5Value = num5.value;
    consoleBox.value += num5Value;
});

num6.addEventListener('click', () => {
    let num6Value = num6.value;
    consoleBox.value += num6Value;
});

num7.addEventListener('click', () => {
    let num7Value = num7.value;
    consoleBox.value += num7Value;
});

num8.addEventListener('click', () => {
    let num8Value = num8.value;
    consoleBox.value += num8Value;
});

num9.addEventListener('click', () => {
    let num9Value = num9.value;
    consoleBox.value += num9Value;
});

divide.addEventListener('click', () => {
    let divideValue = divide.value;
    consoleBox.value += divideValue;
});

multiplication.addEventListener('click', () => {
    let multiplicationValue = multiplication.value;
    consoleBox.value += multiplicationValue;
});

subtraction.addEventListener('click', () => {
    let subtractionValue = subtraction.value;
    consoleBox.value += subtractionValue;
});

addition.addEventListener('click', () => {
    let additionValue = addition.value;
    consoleBox.value += additionValue;
});

dot.addEventListener('click', () => {
    let dotValue = dot.value;
    consoleBox.value += dotValue;
});

clear.addEventListener('click', () => {
    consoleBox.value ='';
});

erase.addEventListener('click', () => {
    let consoleValue = String(consoleBox.value);
    consoleBox.value = consoleValue.substring(0, (consoleValue.length - 1));
});

equal.addEventListener('click', () => {
    let equalValue = equal.value;
    consoleBox.value = eval(consoleBox.value);
});
