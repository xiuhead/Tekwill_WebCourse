/*
1.
function getYourName(){
    return prompt("Напиши своё имя: ");
}
document.getElementById("result").innerHTML = "Ваше имя - <strong>" + getYourName() + "</strong>";
2.

function grossSalary(tariffSalary, bonus){
    return tariffSalary*1.25 + bonus;
}
document.getElementById("result").innerHTML = "Расчетный доход составляет: " + grossSalary(7200, 1770) + " леев";
3.

function idealWeight(){
    var height = prompt("Какой у тебя рост? (введи значение в см - от 100 до 250) ");
    return height-100;
}
document.getElementById("result").innerHTML = "Идеальный вес, к которому ты можешь стремиться - это: " + idealWeight() + "кг.";
4.
function idealWeight(){
    var height = prompt("Какой у тебя рост? (введи значение в см - от 100 до 250) ");
    return height-100;
}
var getMyWeight = idealWeight();
document.getElementById("result").innerHTML = "Идеальный вес, к которому ты можешь стремиться - это: " + getMyWeight + "кг.";
5.

var getMyWeight = function(){
    var height = prompt("Какой у тебя рост? (введи значение в см - от 100 до 250) ");
    return height-100;
};
document.getElementById("result").innerHTML = "Идеальный вес, к которому ты можешь стремиться - это: " + getMyWeight() + "кг.";
6.

function circleAria(r) {
    var pi = Math.PI;
    return Math.round(pi*r*r);
}
var radius = 9;
document.getElementById("result").innerHTML = "Площадь круга с радиусом - " + radius + ", будет " + circleAria(radius);
document.getElementById("result1").innerHTML = "Посмотрим значение переменной, определённой в функции " + pi;
7.

function circleAria(r) {
    return Math.round(pi*r*r);
}
var radius = 9, pi = Math.PI;
document.getElementById("result").innerHTML = "Площадь круга с радиусом - " + radius + ", будет " + circleAria(radius);
document.getElementById("result1").innerHTML = "Посмотрим значение переменной, определённой в функции " + pi;
8.
*/

function coneArea() {
    var pi = Math.PI, radius = 5, lateralLength = 10;
    function circleArea(pi, r) {
        return Math.round(pi*r*r);
    }
    function lateralArea(pi, r, s) {
        return Math.round(pi*r*s);
    }
    return circleArea(pi, radius) + lateralArea(pi, radius, lateralLength);
}
var radius = 9;
document.getElementById("result").innerHTML = "Площадь конуса будет: " + coneArea();
