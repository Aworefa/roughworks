const contestants = document.querySelectorAll('.contestant');

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))
//use to loop through the contestants
function checkForRose(click) {
    if (click.target.classList.contains('rose')) {
        document.querySelector('#nikki').classList.toggle('hidden')

    } else {
        alert('wrong')
    }
}
// function yell(word, other) {
//     alert(word)
//     alert(other)
// }
// yell('hello', 'bye bye')

function addUp(x, y) {
    alert(x + y)
}
addUp(2,3)
function wmup(x,y,z) {
    console.log(x*y*z)
}
wmup(3,4,2)
function jago(y,t){
    console.log(y%t)
}
jago(10,6)
for (let i = 0; i < 10; i+=2) {
    console.log(i);
}