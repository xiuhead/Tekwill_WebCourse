/*
1.
var myDate = new Date();
alert(myDate);

2.
var age = prompt("Введите числовое значение до 120, определяющее ваш возраст..."); 
var myMessage = "";
myMessage = (age>=18) ? "Вы взрослый..." : "Вы несовершеннолетний...";
document.getElementById("result").innerHTML = myMessage;
3.
function check() {
    var myNumber, myMessage;
    myNumber = document.getElementById("number").value;
    myMessage = (isNaN(myNumber)) ? "Вы не ввели число!!!" : "Вы ввели число - " + myNumber;
    document.getElementById("result").innerHTML = myMessage;
}
4.

if (new Date().getHours() > 10) {
    document.getElementById("result").innerHTML = "А за окном уже не утро!";
}
5.
if (new Date().getHours() < 10) {
    document.getElementById("result").innerHTML = "На улице утро!";
} else {
    document.getElementById("result").innerHTML = "А за окном уже не утро!";
}
6.
document.getElementById("result").innerHTML = (new Date().getHours() < 10) ? "На улице утро!" : "А за окном уже не утро!";

7.
var myDate = new Date().getHours();
if (myDate<10) {
    document.getElementById("result").innerHTML = "На улице утро!";
} else if (myDate < 16) {
    document.getElementById("result").innerHTML = "На улице обед!";
} else {
    document.getElementById("result").innerHTML = "За окном уже вечер!";
}
8.
*/

var myDay;
switch (new Date().getDay()) {
    case 0: myDay = "Воскресенье";  
            break;
    case 1: myDay = "Понедельник";  
            break;
    case 2: myDay = "Вторник";  
            break;
    case 3: myDay = "Среда";  
            break;
    case 4: myDay = "Четверг";  
            break;
    case 5: myDay = "Пятница";  
            break;
    case 6: myDay = "Суббота";  
            break;
    //default - не требуется - потому что в неделе ровно 7 дней
}
var myDate = new Date(), myHour = myDate.getHours(), myDateNmbr = myDate.getDate(), myMonth = myDate.getMonth()+1, myMinutes = myDate.getMinutes();
//когда минута меньше 10 - добавлю 0 впереди
myMinutes = (myMinutes > 9) ? myMinutes : '0' + myMinutes;
myDateNmbr = (myDateNmbr > 9) ? myDateNmbr : '0' + myDateNmbr;
myMonth = (myMonth  > 9) ? myMonth : '0' + myMonth;
//поскольку январю соответствует значению 0 - буду добавлять одну единицу каждому месяцу, чтобы понятнее отображать дату
document.getElementById("result").innerHTML = "Сегодня <em>" + myDay + "</em>, а дата " + myDateNmbr +"/" + myMonth + "/" + new Date().getFullYear() + ". <br /> И время сейчас " + myHour + ":" + myMinutes;
