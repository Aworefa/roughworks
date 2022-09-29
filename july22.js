document.querySelector('h1').addEventListener('click', result)
var result = document.querySelector('#result').innerText
function result() {
    
    var age = document.querySelector('#carefor').value
    // document.querySelector('#result').innerText = 'lets go'
    if (age <= 16 && age > 0) {
        // console.log('let go go')
        document.querySelector('#result').innerText = "they can't drive"
    }
    else if (age <= 18 && age > 16) {
        document.querySelector('#result').innerText = "they can't hate from outside the club, because they can't even get in"
    }
    else if (age <= 21 && age > 18) {
        document.querySelector('#result').innerText = "they can not drink"
    }
    else if (age <= 25 && age > 21) {
        document.querySelector('#result').innerText = "they can not rent fancy cars affordably"
    }
    else if (age <= 30 && age > 25) {
        document.querySelector('#result').innerText = "they can not rent fancy cars affordably"
    }
    else {
        document.querySelector('#result').innerText = "there is nothing left to look forward too"
    }
}