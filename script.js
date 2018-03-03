'use strict'
/* Написать функцию-калькулятор вручную введённого выражения (без использования функции eval и динамического описания функции new Function, если вы знаете о них).
Должны работать операции + - * / и скобки, числа должны приниматься целые, дробные (через точку), отрицательные
Например, вызываем функцию, передавая ей строку "2*(3+1)", функция возвращает 8.*/
function parseCalculationString(s) {
        var calculation = [],
        current = '';
    for (var i = 0, ch; ch = s.charAt(i); i++) {
        if ('*/+-'.indexOf(ch) > -1) {
            calculation.push(parseFloat(current), ch);
            current = '';
        } else {
            current += s.charAt(i);
        }
    }
    if (current != '') {
        calculation.push(parseFloat(current));
    }
    var result;
    var a = calculation[0];
    var op = calculation[1];
    var b = calculation[2];
    switch(op) {
        case '+': 
        result = a + b;
        break;
        case '-': 
        result = a - b;
        break;
        case '/': 
        result = a/b;
        break;
        case '*': 
        result = a*b;
        break;
        default:
        result = '';
        break;
    }
    return result;
}
var calculateButton = document.getElementById('calculate'),
    userInput = document.getElementById('userInput'),
    result = document.getElementById('result');
calculateButton.addEventListener('click', function() {
    result.innerHTML = "Результат равен " + parseCalculationString(userInput.value);
});























//var array = userInput.split('');
// for(var i = 0; i< vowels.length; i++){
//     var pos = 0;
//     var arr = [];
//     while (true) {
//         var found = array.indexOf(vowels[i], pos);
//         if (found == -1) break;
//         alert(found);
//         arr.push(pos);
//         console.log(arr);
//         pos = found +1;
//     }
// }
//console.log(array);
