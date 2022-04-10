// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
console.log(a*b);
// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7;
let d = 9;
document.querySelector('.out-2').textContent = 7 / 9;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3;
let f = 5;
document.querySelector('.out-3').textContent = 3 + 5;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = '3';
let f1 = 5;
document.querySelector('.out-4').textContent = +e1 + f1;

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3;
let f2 = 0;
document.querySelector('.out-5').textContent = e2 / f2;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-6').textContent = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out-7').textContent = e4 * f4;

// Task 8.
// По нажатию на кнопку .b-8 выполняется функция, которая выводит в div.out-8 то, что пользователь ввел в input.i-8.

let inputIn = document.querySelector('.i-8');
let btn = document.querySelector('.b-8');
let div = document.querySelector('.out-8');

function t8() {
    let data = +inputIn.value;
    div.innerHTML = data;
}
btn.onclick = t8;


// Task 9.
// По нажатию на кнопку .b-9 выполняется функция t9, которая выводит в div.out-9 то, что пользователь ввел в input.i-9. Добавьте очистку input после нажатия кнопки.

let inputIn9 = document.querySelector('.i-9');
let btn9 = document.querySelector('.b-9');
let div9 = document.querySelector('.out-9');

function t9() {
 let data9 = +inputIn9.value
 div9.innerHTML = data9;
 inputIn9.value = '';
}

btn9.onclick = t9;

// Task 10.
// По нажатию на кнопку .b-10 выполняется функция t10, которая выводит в div.out-10 то, что пользователь ввел в input.i-10 умноженное на 20.

let inputIn10 = document.querySelector('.i-10');
let btn10 = document.querySelector('.b-10');
let div10 = document.querySelector('.out-10');

function t10() {
 let data10 = +inputIn10.value
 div10.innerHTML = data10 * 20;
}

btn10.onclick = t10;

// Task 11.
// По нажатию на кнопку .b-11 выполняется функция t11, которая выводит на страницу в .out-11 число, которое ввел пользователь в i-11 и к нему добавленное число 55. В этой задаче мы не приводим к числу полученное из input.

let inputIn11 = document.querySelector('.i-11');
let btn11 = document.querySelector('.b-11');
let div11 = document.querySelector('.out-11');

function t11() {
 let data11 = inputIn11.value;
 div11.innerHTML = data11 + 55;
}

btn11.onclick = t11;

// Task 12.
// По нажатию на кнопку выполняется функция t12. Функция должна получить данные из input i.12-1 и i.12-2 (пользователь вводин в них фамилию и имя). После чего вывести в .out-12  строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия. Обращаю ваше внимание - с этого момента мы работаем строго по заданию. Hello - с большой буквы. Между Hello имя один пробел (вы же включили отображение пробелов?). Вы не добавляете "от себя" - запятые, любые другие слова и символы. Аналогичные правила действуют и дальше по курсу.

let inputName = document.querySelector('.i-12-1');
let inputSurName = document.querySelector('.i-12-2');
let btn12 = document.querySelector('.b-12');
let div12 = document.querySelector('.out-12');

function t12() {
let inputNameValue = inputName.value;
let inputSurNameValue = inputSurName.value;
div12.innerHTML = `Hello ${inputNameValue} ${inputSurNameValue}`;
}

btn12.onclick = t12;

// Task 13.
// При нажатии кнопки .b-13 выполняется t13. Функция получает из input.i-13-1 и .i-13-2 числа в переменные a, b. После чего в .out-13 выводит их сумму. Преобразовывайте a, b в числа!!!!

let inputFirst = document.querySelector('.i-13-1');
let inputSecond = document.querySelector('.i-13-2');
let btn13 = document.querySelector('.b-13');
let div13 = document.querySelector('.out-13');

function t13() {
let a = +inputFirst.value;
let b = +inputSecond.value;
div13.innerHTML = a + b;
}

btn13.onclick = t13;

// Task 14.
// По нажатию кнопки .b-14 выполняется функция t14. Она заменяет значение value в input.i-14 на строку 'Go';

let input14 = document.querySelector('.i-14');
let btn14 = document.querySelector('.b-14');

function t14() {
input14.value = 'Go';
}

btn14.onclick = t14;

// Task 15.
//  По нажатию кнопки .b-15 выполняется функция t15. Она присваивает .i-15 свойство style.border = "4px solid red";

let input15 = document.querySelector('.i-15');
let btn15 = document.querySelector('.b-15');

function t15() {
input15.style.border = '4px solid red';
}

btn15.onclick = t15;

// Task 16.
//По нажатию на кнопку .b-16 выполняется функция t16. Функция получает из .i-16-1 и i-16-2 числа. Выведите в .out-16 сумму данных чисел по нажатию кнопки b-16. Не переводите полученное из input в число!!!!

let inputFirst16 = document.querySelector('.i-16-1');
let inputSecond16 = document.querySelector('.i-16-2');
let btn16 = document.querySelector('.b-16');
let div16 = document.querySelector('.out-16');

function t16() {
let a16 = inputFirst16.value;
let b16 = inputSecond16.value;
div16.innerHTML = a16 + b16;
}

btn16.onclick = t16;

// Task 17.
// По нажатию на кнопку .b-17 выполняется функция t17. Функция получает из .i-17 число. Изучите работу кода и запомните отличия. Попробуйте ввести числа 5, 4zz, zz4, -200, 33.05

function t17() {
    let a = document.querySelector('.i-17').value;
    document.querySelector('.out-17-1').innerHTML = +a;
    document.querySelector('.out-17-2').innerHTML = parseInt(a, 10);
    document.querySelector('.out-17-3').innerHTML = Number(a);
}

document.querySelector('.b-17').onclick = t17;

// Task 18.
//  По нажатию на кнопку .b-18 выполняется функция t18. Функция получает из .i-18 число в переменную a. Выводит в out-18 результат операции parseFloat(a). Попробуйте ввести значения 5, 33.02, 33.9a, -20.01

function t18() {
 let a18 = document.querySelector('.i-18').value;
 document.querySelector('.out-18').innerHTML = parseFloat(a18);
}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// По нажатию кнопки .b-19 функция t19 дожна в out-19 вывести сумму двух отрицательных чисел из input .i-19-1 и .i-19-2. 

function t19() {
let a191 = +document.querySelector('.i-19-1').value;
let a192 = +document.querySelector('.i-19-2').value;
let summ = a191 + a192;
document.querySelector('.out-19').innerHTML = summ;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// При нажатии на кнопку .b-20 в out-20 выводится число - сколько раз была нажата кнопка .b-20;

let count = 0;

function t20() {
    count = count + 1; // можно сократить count++
    document.querySelector('.out-20').innerHTML = count;
}

document.querySelector('.b-20').onclick = t20;