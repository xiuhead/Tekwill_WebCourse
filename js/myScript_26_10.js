var string1 = "СуперМаркет, Маркет, ХиперМаркет, МиниМаркет - сколько слов а смысл тотже.";
document.getElementById("result").innerHTML = "Результат: <em>" + string1.lastIndexOf("Маркет")  + "</em>";