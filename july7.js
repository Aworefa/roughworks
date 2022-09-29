// const contestants = document.querySelectorAll('img');

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
//     if(click.target.classList.contains()){
//         document.querySelector('#tobi').classList.toggle()

//     }else{
//         alert('wrong')
//     }
// }
document.querySelector('#final').addEventListener('click', hide)
function hide() {
    document.querySelector('#pic1').style.display = 'none'
    document.querySelector('#pic2').style.display = 'none'
}
// document.querySelector('#andi').addEventListener('click', find)

// function find(){
//     document.querySelector('#random').src = "../tobih/images/avatar-ali.png"
// }const andi = document.querySelector('#andi')
const andi = document.querySelector('#andi');
const claire = document.querySelector('#claire');
const sharleen = document.querySelector('#sharleen');

document.querySelector('#andinext').addEventListener('click', andiNext)
document.querySelector('#clairenext').addEventListener('click', claireNext)
document.querySelector('#sharleennext').addEventListener('click', sharleenNext)

function andiNext() {
    claire.classList.add('hidden')
    sharleen.classList.add('hidden')
    andi.classList.toggle('hidden')
}
function claireNext() {
    andi.classList.add('hidden')
    sharleen.classList.add('hidden')
    claire.classList.toggle('hidden')
}
function sharleenNext() {
    andi.classList.add('hidden') //give them the hidden class back 
    claire.classList.add('hidden')
    sharleen.classList.toggle('hidden')
}