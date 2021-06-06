//var flowers = ["тюльпан", "подснежник", "незабудка", "лилия"];
//var flowers = new Array("тюльпан", "подснежник", "незабудка", "лилия");
/*
var flowers = [
            "тюльпан", 
            "подснежник", 
            "незабудка", 
            "лилия"
];
*/
/*
var fruits =[];
fruits[0] = "яблоко";
fruits[1] = "груша";
fruits[2] = "персик";
fruits[2] = "слива";
fruits[3] = "вишня";
//document.getElementById("result").innerHTML = fruits[0]+" - "+ fruits[1]+" - "+fruits[2]+" - "+fruits[3];
document.getElementById("result").innerHTML = fruits;
*/
/*
var flowers = ["тюльпан", "подснежник", "незабудка", "лилия"];
document.getElementById("result").innerHTML = "<h1>Мои любимые цветы:</h1><ul>";
var leng = flowers.length, items = "";
for (var i = 0; i < leng; i++) {
    items = items + "<li>" + flowers[i] + "</li>"; 
}
document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + items + "</ul>";
*/
/*
var flowers = ["тюльпан", "подснежник", "незабудка", "лилия"];
document.getElementById("result").innerHTML = "<h1>Мои любимые цветы:</h1><ul>";
var items = "";
for(var item in flowers) {
    items = items + "<li>" + flowers[item] + "</li>"; 
}
document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + items + "</ul>";
*/
/*
var colors = [
    ["Роза", "Тюльпан", "Нарцис", "Гладиолус"],
    ["Гиацинт", "Хризантема", "Крокус", "Сирень"],
    ["Ландыш", "Фиалка", "Лилия", "Пион"]
];
var content = document.getElementById("table");
var result = "<h1>Названия цветов из массива:</h1>";
result +="<table>";
for (var row = 0; row < colors.length; row++) {
    result += "<tr>";
    for (var col = 0; col < colors[row].length; col++) {
        result += "<td>" + colors[row][col] + "</td>";  
    }
    result += "</tr>";
}   
result += "</table>";
content.innerHTML = result; 
*/
/*
var flowers = ["тюльпан", "подснежник", "незабудка", "лилия"];
//flowers.pop();
//document.getElementById("result").innerHTML = flowers;
document.getElementById("result").innerHTML = flowers.pop();
*/
/*
var flowers = ["тюльпан", "подснежник", "незабудка", "лилия"];
//flowers.shift();
//document.getElementById("result").innerHTML = flowers;
document.getElementById("result").innerHTML = flowers.shift();
*/
/*
var flowers = ["тюльпан", "подснежник", "незабудка", "лилия"];
flowers.push("пион");
document.getElementById("result").innerHTML = flowers;
*/
/*
var flowers = ["тюльпан", "подснежник", "незабудка", "лилия"];
flowers.unshift("жасмин");
document.getElementById("result").innerHTML = flowers;
*/
/*
var flowers = ["тюльпан", "подснежник", "незабудка", "лилия"];
//flowers.splice(2, 0, "ландыш");
flowers.splice(2, 2, "ландыш");
document.getElementById("result").innerHTML = flowers;
*/
/*
var flowers = ["тюльпан", "подснежник", "незабудка", "лилия"];
flowers.sort();
flowers.reverse();
document.getElementById("result").innerHTML = flowers;
*/
var numbers = [7, 9, 8, 6, 5, 10, 101, 77, 667];
//numbers.sort();
//numbers.sort(function(x, y){return x - y});
numbers.sort(function(x, y){return y - x});
document.getElementById("result").innerHTML = numbers;
