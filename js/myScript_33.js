/*
var employee = {
    lastName:"Иванов", 
    firstName:"Яша", 
    phoneNumber:"077665544", 
    email: "iasha@mail.md"
};

//document.getElementById("result").innerHTML = employee.lastName;
var myText = "Объект <strong>'employee'</strong> имеет следующие свойства и значения:<br />";
for(key in employee) {
    myText += key + ": " + employee[key] + "<br />"; 
}
document.getElementById("result").innerHTML = myText;
*/
/*
var employee = {
    lastName:"Иванов", 
    firstName:"Яша", 
    phoneNumber:"077665544", 
    email: "iasha@mail.md",
getFullName: function() {
    return this.lastName + " " + this.firstName;
},
isFromMoldova: function() {
    return (/\.md$/.test(this.email)) ? "Данный сотрудник имеет молдавский электронный адресс!" : "Данный сотрудник не имеет молдавский электронный адресс!";
}
}
document.getElementById("result").innerHTML = employee.getFullName()+ "<br />" + employee.isFromMoldova();

*/
function Employee(lastName, firstName, phoneNumber, email) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.getFullName = function() {
        return this.lastName + " " + this.firstName;
    };
    this.isFromMoldova = function() {
        return (/\.md$/.test(this.email)) ? "Данный сотрудник имеет молдавский электронный адресс!" : "Данный сотрудник не имеет молдавский электронный адресс!";
    };
  }

var Employee1 = new Employee("Airinei", "Nelu", "089998877", "nelu@gmail.com");
var Employee2 = new Employee("Agafitei", "Ina", "067334455", "ina@mail.md");

//document.getElementById("result").innerHTML = Employee1.getFullName()+ " - " + Employee1.isFromMoldova()+ "<br />" +Employee2.getFullName()+ " - " + Employee2.isFromMoldova();
Employee1.getPhone = function(){
    return this.phoneNumber;
}
document.getElementById("result").innerHTML = Employee1.getFullName()+ " - " +Employee1.getPhone();
