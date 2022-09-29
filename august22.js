var food = {
    name: "rice",
    color: "red",

}
food.form = function(rice){
    console.log('boil your' + rice)
}
food.form(food.name)
console.log(food.name + " " +food.color)

let student ={
    name: 'tobi',
    age: 23,
    gender: 'male',
    colour: 'black',
    birthday : function(age){
        console.log(++age);
    }
    
    // birthday(this.age)
}
student.surName = function(name){
    console.log('aworefa' + ' ' + name);
}
student.surName(student.name)
student.birthday= function(age){
    console.log(++age)
}


function Human(oruko,ojo,genders,osu){
    this.oruko = oruko;
    this.ojo = ojo;
    this.genders = genders;
    this.osu = osu;
    this.elo = function(){
        console.log(++ojo);
    }
}

var firstboy = new Human('black', 23, 'male', true)

for (let i = 0; i < 25; i++) {
    // console.log('goog' + i)
    document.querySelector('#yoyo').innerHTML += ' ' + firstboy.oruko
    
}
// console.log('hhh')