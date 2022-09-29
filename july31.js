let food = 'rice';
console.log(food)

var back = ['bread', 'beans', 'dodo']
console.log(back[0][1]);
//alert(back.charat(1))

var doings = (x,y,z) => {
    console.log(x/y*z)
}
doings(6,3,5)
var cubic= (x) =>{
    console.log(x*x*x)
    //math.cbrt(x)
}
cubic(5)

// document.querySelector('#month').addEventListener('click', reading)
// function reading(){
//     document.querySelector('#read').innerHTML = 'type in your month'
// }
document.querySelector('#read').addEventListener('click', reading)
function reading(){
    var goto = document.getElementById('month').value
    if(goto === 'august'|| goto === 'july'){
        console.log('yay')
    }else if(goto === 'june'){
        console.log('maybe');
    }else{
        alert('nan')
    }
}
var reload = (num) => {
    for (let i = 1; i <= num; i++) {
        if( i%5 !== 0 ){
            console.log(i)
        }
        
    }
}
reload(80)
