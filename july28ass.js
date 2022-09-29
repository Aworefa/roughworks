var gogo = 20
console.log(gogo);
var titi = 40
titi += 20
console.log(titi);

function sum(a, b, c, d) {
    console.log(a - b - c - d);
}
sum(10, 3, 1, 2)

function tere(x, y) {
    console.log(x % y)
}
tere(20, 7)

function great(r, t) {
    var goat = r + t
    // console.log(goat);
    if (goat > 50) {
        console.log('jumaji');
    }
}
great(50, 4)
function ungreat(r, t, m) {
    var cow = r * t * m
    // console.log(goat);
    if (cow % 3 === 0) {
        console.log('zebra');
    }
}
ungreat(3, 4, 5)

function july(word, number) {
    for (let i = 1; i <= number; i++) {
        console.log(word)
    }
}
july("ade", 6)
july('dada', 7)

document.querySelector('#callOff').addEventListener('click', callOff)
function callOff(weekday){
    // weekday = weekday.toLowerCase()
    var weekDays = document.getElementById('week').value
    if(weekDays === 'tuesday' || weekDays === 'monday' || weekDays === 'wednesday' || weekDays === 'thrusday' || weekDays === 'friday'){
        document.querySelector('#wow').innerHTML = 'week day'
    }
    else if (weekDays === 'sunday' || weekDays === 'saturday'){
        document.querySelector('#wow').innerHTML = 'weekend'
    }else{
        document.querySelector('#wow').innerHTML = 'try again'
    }
}

function countBythree(num) {
    for (let i = 0; i < num; i+=3) {
        console.log(i)
        
    }
}
countBythree(30)