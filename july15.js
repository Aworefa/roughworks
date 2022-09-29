var today = 30;
today -= 10;
console.log(today);


// console.log(real);

const headingOne = document.querySelector('h1')

headingOne.addEventListener('click', addUp)

function addUp() {
    let inVal = document.querySelector('#dance').value
    var real = Number(inVal);
    real += 25
    console.log(today + real)
}

// document.getElementById('add').addEventListener('click', addUp)
// function addUp() {
//     var varInput = document.querySelector('#dance').value;
//     var real = Number(varInput);
//     real += 25
//     console.log(real);
// }


// var total = document.querySelector('h1').addEventListener('click', total);

// function total() {
//     console.log(today + real);
// }