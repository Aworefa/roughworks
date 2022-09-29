var number1 = 12
var number2 = 20
var number3 = 50

console.log(number1+number2+number3)
var multiply = 15*15
console.log ("fifteen times fifteen equals", multiply) 
var float = 11/3
console.log ("three divided eleven", float)
console.log (50*50/50)
console.log (100%6)
console.log (60/200*100)
var numb1 = (10*15*60) + 120
var numb2 = (10*40) + (40/10)
var numb3 = (30*30) / (5*10)
console.log (numb1, numb2, numb3, number3, number2, number1)

num= number3 + 10
console.log ("add 10", num)
num= number3 - 5
console.log ("remove 5", num )
num= number3 * 2 / 5
console.log ("mutliply by 2, then divide by 5", num)

number3++
console.log(number3)

number3--
console.log(number3)
word1 = "aworefa"
word2 = "tobi"
word3 = "goes"
word4 = "to"
word5 = "club"
space = " "
fullstop = "."
console.log (word1, word2, word3, word4, word5, fullstop)
var thetruth = true
var alie = false
console.log(102>=1001)
console.log(80<=90)

var weather= function(temperature){
    console.log("the temperature outside is", temperature, "degrees centigrade" )
    if(temperature<=50) {
        console.log("it is cold outside, grab an overall")
    } else {
        console.log("it is getting hot outside")
    }
}
weather(70)
weather(20)
weather(80)





 
var wife= function(amount){
    console.log("the number of wives are ", amount, ", no do pass yourself")
    if(amount<=3){
        console.log("you will make heaven")
    } if(amount==2){
        console.log("you are a good person")
    } else {
        console.log("no do pass your body")
    }
}



    wife(2)
    wife(3)

var num= 1
while (num<=10) {
 if (num  !== 10) {
     console.log("the number is", num, "- less than 10");  
 } else{
     console.log("the number is", num, "-the loop is now over")
 }
 num++;
}

for (var num = 100; num >0 ;num--) {
   if(num % 2 ==0) console.log("the number is", num, "let it run");
    
}
var students= ["mary","adebayo","tolu","ola"]
students[4]= "dada"
console.log(students.length)
console.log(students[3])
var secondstudent= students[1][1]
var studentstring = students.toString()
console.log(studentstring)
var classsize= students.length
console.log(classsize)
var removedstudent= students.pop()
console.log(students.toString())
console.log(removedstudent)
students.push("sally")
console.log(students[4])
var removedstudent= students.shift([4])
console.log(students.toString())
console.log(removedstudent)
var newsize= students.unshift("fufu")
console.log(newsize)
console.log(students.toString())

var student= {
    name:"ade",
    age: 10,
    colour: "red",
    marks: {
        quiz: 45,
        quiz2: 55,
        quiiz3: 65
    }
} 
console.log(student)
student.gender="female"
student["height"]= "150 cm"
console.log(student.gender, student.height)
var operation={
    sum: function(x,y){return(x+y)},
    multiply: function(x,y){return(x*y)},
    subtract: function(x,y){return(x-y)},
    divide: function(x,y){return(x/y)},
    modulo: function(x,y) {return(x%y)},
}
console.log(operation.sum(2,4))
console.log(operation["multiply"](2,4))
console.log(operation.divide(2,4))
console.log(operation["subtract"](2,4))
console.log(operation.modulo(2,4))


var student = {
    name: "tobi", 
    age: 10
  }
  var student2 = {
    name: "Michael", 
    age: 12
  }
  var createStudent = function(name, age, height) {
    var student = {
      name: name, 
      age: age,
      height: height,   
      birthday: function(){
        this.age++; }
      }
    return student;
  }
  
  var student1 = createStudent("Mary", 10, "200cm");
  var student2 = createStudent("Michael", 12, "156cm");

  student1.birthday()
  console.log("Students:", student1.name, student2.name);
  console.log("Student:", student1.height, student2.height );
  console.log(student1.age, student2.age)

  var student=function(name, age){
    this.name= name;
    this.age= age;
    this.birthday= function(){
        this.age++
  }
}
  var student1= new student("tobi", 11)
  student1.birthday()
  console.log("student1;" + student1.name)
  console.log("student1:" + student1.age)

  var operation= {
      sum: function(x,y){ return x+y; },
      subtract: function(x,y){ return x-y; },
      multiply: function(x,y){ return x*y; },
      divide: function(x,y){ return x/y; },
  }
  console.log(operation.multiply(5,10)),
  console.log(operation["sum"](5,10), operation.divide(5,10))
  