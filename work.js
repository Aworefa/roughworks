const sum= document.getElementById("test");
function mywork(p1, p2) {
    return p1+p2;
}
sum.innerHTML= mywork(2,3)
// var darkmode= document.querySelector("input")
// darkmode
if (new Date().getHours()<18) {
    document.getElementById("demo").innerHTML= "good day";
    document.querySelector("body").style.backgroundColor= "grey"
}
if (new Date().getHours()>18) {
  document.getElementById("demo").innerHTML= "good day";
  document.querySelector("body").style.backgroundColor= "blue"
}
const text= document.getElementById("bad")
// const player= function(playernumber){
//     text.innerHTML= "the player is number", playernumber, "he is from protugal";
// };
// player(7)

// const player = function (playernumber) {
//     console.log(
//       "The player number is ",
//       playernumber,
//       "and he plays for Manchester United"
//     );
  
//     if (playernumber != 7) {
//       console.log(
//         "His name is Crisriano Ronaldo and he's the greatest of all time"
//       );
//     }
//     else{
//         console.log("it will be messi or other goat alive")
//     }
//   };
  
//   player(7);

  const player = function (playernumber) {
    console.log(
      "The player number is ",
      playernumber,
      "and he plays for Manchester United"
    );
  
    if (playernumber > 10) {
      console.log(
        "His name is Crisriano Ronaldo and he's the greatest of all time"
      );
    }
    else if (playernumber < 65 && playernumber <= 80){ console.log("Still the wrong player"); }
    
    else { console.log("Not the right number for the greatest of all time!"); 
         }}
  
  player(7);
  
//   for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "";
//   };

let counter = "";
let i = 0;
while (i < 5) {
  counter += "<p> The number is " + i;
  i++;
}
document.getElementById("test").innerHTML = counter;

let tebt = "";
for (let i = 0; i < 5; i++) {
  tebt += "The number is " + i + "<br>";
}

document.getElementById("tevt").innerHTML = tebt;
const cars = [
  ["Tesla",20],
 ["Camry",20],
  ["BMW", 30],
];
document.getElementById("cool").innerHTML = cars[2][1];
document.getElementById("cool").style.backgroundColor= "red"

var students = [ 
  ["Mary"], 
  ["Barbara" ], 
  ["David"], 
  ["Alex"], 
];
let studentString = students.toString();
console.log(studentString);
let studentlenght = students.length;
console.log(studentlenght);
students.push("salli");
console.log(students.toString());
// console.log(students[4])
// let removedStudent = students.pop();
// console.log(students.toString());
// console.log(removedStudent);
// let removeStudent = students.shift();
// console.log(students.toString());
// console.log(removeStudent);
// var newSize = students.unshift("Joey");
// console.log(newSize);
// console.log(students.toString());
// let printStudents = function(students) {
//   console.log(students[0]);
//   console.log(students[1]);
//   console.log(students[2]);
//   console.log(students[3]); 
// }

// printStudents(students);

// var student = {
//   name: "Mary", 
//   age: 10, 
//   grades: {
//     quiz1: 90, 
//     quiz2: 88, 
//     quiz3: 95
//   }
// }
// student["gender"]= "female";
// student.height= "150cm";
// console.log(student.gender, student.height);
// delete student.gender;
// console.log(student.gender);
// student.updateAge= function () {
//   return ++student.age
// }
// console.log(student.age);
// let add = student.age + 1
// console.log(add)
// student.updateAge()
// console.log(student.age)
// console.log(student.name)

// var student = {
//   name: "Mary", 
//   age: 10, 
//   grades: [90, 88, 95]
// }

// for(property in student) {
//   console.log(property);
// }
// var createStudent = function(name, age) { 
//     var student = {     name: name,      age: age   };  
//     return student; }
// var student1 = createStudent("Mary", 10);
// var student2 = createStudent("Michael", 12); 
// console.log("Students:", student1.name, student2.name);
// var birthday= function (student) {
//   student.age++;
// }
// birthday(student1);
// console.log(student1.age)
// var createStudent = function(name, age) { 
//     var student = {     name: name,      age: age,      birthday: function(){      this.age++;     }   }  
//    return student; 
// };
//  var student1 = createStudent("Mary", 10);
//  var student2 = createStudent("Michael", 12); 
//  student1.birthday(); 
//  console.log(student1.age)
//  let join = function(x, y){ return x + y; }; 
//  let subtract = function(x, y){ return x - y; }; 
//  var multiply = function(x, y){ return x * y; }; 
//  let divide = function(x, y){ return x / y; };
//  console.log(join(2,5), divide(10,2))
//  var operations = {   sum: function(x, y){ return x + y; },
//      subtract: function(x, y){ return x - y; },    
//      multiply: function(x, y){ return x * y; },    
//      divide: function(x, y){ return x / y; },   
//      modulo: function(x, y){ return x % y;} };
// var  operations = [join, subtract, multiply, divide]; 
// for(var b = 0; b < operations.length; b++)
//      console.log(operations[b](5,10));
// let number = 30
// for (let d = 0; d < number; d++) {
//  console.log("go to " +d);
  
// }
// var h1 = document.querySelector('h1');
// console.log("h1 element's id value:", h1.className);
// console.log("h1 element:", h1.outerHTML);
// console.log("h1 element:", h1.innerHTML);
// h1.innerHTML= "Access an element with an id attribute using <br>document.getElementById()";
// var mainHeading = document.querySelector('.login');
// mainHeading.innerHTML = "Access an element with an id attribute using <code>document.querySelector()</code>"
var todoItems = document.querySelectorAll('#todos > li');
for(var y = 0; y < todoItems.length; y++) {
  todoItems[y].innerHTML = "Todo Item #" + (y+2);
}
var headings = document.getElementsByTagName('h1');
var paragraphs = document.getElementsByTagName('p');

for(var e = 0; e < headings.length; e++){
  headings[e].style.color = "green";
}

for(var e = 0; e < paragraphs.length; e++){
  paragraphs[e].style.color = "blue";
}