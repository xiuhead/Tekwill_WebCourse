//var string1 = "4+3*3-3", myResult;
var string1 = "4+3*3-3exp", myResult;
myResult = eval(string1);
document.getElementById("result").innerHTML = "Результат вычисления - " + myResult;