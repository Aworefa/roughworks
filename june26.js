
document.getElementById('soso').innerHTML = 'we are going to school'

document.getElementById('red').onclick = changeRed;
document.getElementById('grey').onclick = changeGrey;
document.getElementById('brown').onclick = changeBrown;

function changeRed() {
    document.querySelector('body').style.backgroundColor = 'red'
    document.querySelector('body').style.color = 'white'
    document.getElementById('red').style.color = 'white'
    console.log('works')
}
function changeGrey() {
    document.querySelector('body').style.backgroundColor = 'grey'
    document.querySelector('body').style.color = 'white'
    document.getElementById('red').style.color = 'white'
};
function changeBrown() {
    document.querySelector('body').style.backgroundColor = 'brown'
    document.querySelector('body').style.color = 'white'
    document.getElementById('red').style.color = 'white'
};


// function red() {
//     document.querySelector('body').style.backgroundColor= 'red'
//     document.querySelector('body').style.color= 'white'
//     document.getElementById('red').style.color= 'white'
// };

// function grey(){
//     document.querySelector('body').style.backgroundColor= 'grey'
//     document.querySelector('body').style.color= 'white'
// };

// function brown(){
//     document.querySelector('body').style.backgroundColor= 'brown'
//     document.querySelector('body').style.color= 'white'
// }
var total= 0;

document.querySelector('#zero').addEventListener('click', makezero)
document.querySelector('#three').addEventListener('click', addthree)
document.querySelector('#nine').addEventListener('click', addnine)
document.querySelector('#two').addEventListener('click', subtwo)
function makezero() {
    total = 0
    document.querySelector('#result').innerText = total
}
function addthree() {
    total = total + 3
    document.querySelector('#result').innerHTML = total
}
function addnine() {
    total = total + 9
    document.querySelector('#result').innerHTML = total
}
function subtwo() {
    total = total - 2
    document.querySelector('#result').innerHTML = total
}
document.querySelector('#fifteen').addEventListener('click', addfifteen)
document.querySelector('#thirty').addEventListener('click', addthirty)

function addfifteen(){
    total += 15
    document.querySelector('#result').innerHTML = total
}
function addthirty(){
    total -= 30
    document.querySelector('#result').innerHTML = total
}