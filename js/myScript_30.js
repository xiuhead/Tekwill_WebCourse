/*
1.
function getMyDate(){
    var d = new Date();
    document.getElementById('result').innerHTML = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
}

2.
function getMyDate(){
    var d = new Date();
    var myMonth = d.getMonth()+1;
    document.getElementById('result').innerHTML = (d.getDate()<10?'0'+ d.getDate():d.getDate()) + '/' + (myMonth<10?'0'+myMonth:myMonth) + '/' + d.getFullYear();
}

3.
function getMyDate(){
    var d = new Date();
    var myMonth = d.getMonth()+1;
    document.getElementById('result').innerHTML = "Сегодняшняя дата - " + (d.getDate()<10?'0'+ d.getDate():d.getDate()) + '/' + (myMonth<10?'0'+myMonth:myMonth) + '/' + d.getFullYear();
}

4.
function getMyName(myValue) {
    document.getElementById("name").innerHTML = "Добро пожаловать на нашу страничку: <strong>" + myValue + "</strong>";
}

5.
document.getElementById("myName").addEventListener("change", function() {
    var myValue = document.getElementById("myName").value;
    document.getElementById("name").innerHTML = "Добро пожаловать на нашу страничку: <strong>" + myValue + "</strong>";
})

6.
*/

document.getElementById("myName").addEventListener("input", function() {
    var name = document.getElementById("myName").value;
    document.getElementById('result').innerHTML = name;
})