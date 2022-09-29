function remove(x,y){
    console.log(x-y)
}
remove(9,3)

function tori(x,y,s){
    console.log(x*y*s%3)
}
tori(9,21,3)

function save(x,y,s){
    console.log(x*y*s)
}
save(2,3,4)

function medium(x,y,s){
    console.log((x+y)/s)
}
medium(4,2,3)

function hard(a,b,c,d){
    var good = a*b
    if(good > 100 ){
        console.log(c+d)
    }
    else if (good < 100){
        console.log(c-d)
    }else{
        console.log((a*b*c)/d)
    }
}
hard(20,5,3,4)