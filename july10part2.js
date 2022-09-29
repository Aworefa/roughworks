function savage() {
   for (let i = 1; i < 22; i++) {
    document.querySelector('#savagetalks').innerHTML += ' 21 '
    
   } 
}
savage()

function first(x,r,t,y){
    console.log(x-r-t-y)
}
first(32,3,6,7)

function jumaji(x,y) {
    var addUp = x+y
    if(addUp > 50){
        alert('jumaji calling')
    }
}
jumaji(30,30)

function zebra(k,f){
    var fofo = k*f
    fofo = fofo%3
    if(fofo === 0){
        console.log('zebra')
    }else{
        alert('stupid')
    }
}
zebra(12,3)

var good = 'caro'
function fine() {
    for (let i = 1; i < 9; i++) {
        console.log(good )
    }
}
fine()
