/*
1.
document.getElementById("phone_input").addEventListener("input", function() {
    var phone = document.getElementById("phone_input").value;
    var message = (/^[0-9]{9}$/.test(phone)) ? ("Правильный ввод!") : ("Неправильно введённый номер телефона!"); 
    document.getElementById("text").innerHTML = message;
})

2.
*/
document.getElementById("btn").addEventListener("click", function() {
    var myName = document.getElementById("val").value;
    var mess = (/^[A-zА-яăîșțâ]{2,10}([- ][A-zА-яăîșțâ]{2,10}){0,5}$/.test(myName)) ? ("Спасибо - всё правильно!"):("Вы неправильно ввели имя - допустимы буквы, минимум одна!"); 
    document.getElementById("txt").innerHTML = mess;
})
