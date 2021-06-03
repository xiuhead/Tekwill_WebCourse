/*
1.
var text = "";
for (var i = 1; i <= 5; i++) {
    text += "<strong>Выводится " + i + "-й элемент</strong><br />";    
}
document.getElementById("result").innerHTML = "Текстовая строка, полученная в цикле:<br />" + text;

2.

var text = "";
var i = 0;          //Объявляю и инициализирую переменную цикла
while (i <= 7) {    //Указываю условие выхода из цикла
    text += "<strong>Выводится " + i + "-е </strong>значение <br />";
    i++;            //Увеличиваю значение переменной цикла
}
document.getElementById("result").innerHTML = "Текстовая строка, полученная в цикле:<br />" + text;

3.

var text = "";
var i = 0;          //Объявляю и инициализирую переменную цикла
do {    
    text += "<strong>Выводится " + i + "-е </strong>значение <br />";
    i++;            //Увеличиваю значение переменной цикла
} while (i <= 7);   //Указываю условие выхода из цикла
document.getElementById("result").innerHTML = "Текстовая строка, полученная в цикле:<br />" + text;

4.
var text="<ul>";
var i = 1; 
while ( i <= 5 ) {   
    text += "<li>Элемент " + i + "</li>";
    i++;       
}
text = text + "</ul>"; 
document.getElementById("result").innerHTML = "Результат, полученный в цикле, является ... списком:<br />" + text;

5.
var text="<ul>";
var i = 1; 
while ( i <= 5 ) {   
    var value = prompt("Введи название цветка: ");
    text += "<li>" + value + "</li>";
    i++;       
}
text = text + "</ul>"; 
document.getElementById("result").innerHTML = "Результат, полученный в цикле, является ... списком:<br />" + text;
*/
6. Jocul

var choice = "false", message=""; 
var my_number = Math.floor(Math.random()*8);
while ( choice=="false" ) { 
    var ch_number = prompt("Угадай число которое я сгенерировал (число из интервала 1-7)..."); 
    if(ch_number==my_number) {
        message = "Молодец! Ты угадал число!";
        choice = "true";
    } else {
        message = "Попробуй ещё!";
        choice = "false";
    }       
}
document.getElementById("result").innerHTML = message + " И это число... " + my_number;
