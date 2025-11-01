let display = document.getElementById('display');

function appendValue(value) {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '×', '÷'];

    // ป้องกันใส่เครื่องหมายติดกัน
    if (operators.includes(value) && operators.includes(lastChar)) return;

    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // แปลงสัญลักษณ์ × ÷ เป็น * / ก่อนคำนวณ
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        const result = Function('"use strict";return (' + expression + ')')();
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}