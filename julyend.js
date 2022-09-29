// // var fire = [2,4,5,6];
// // var rere = [3,4,5,6]
// // console.log( rere[rere.length-1])

// function shout(){
//     var fire = [3,4,5,6]
//     if(fire[0] < 1 ){
//         console.log('hi')
//     }else if(fire[0] > fire[fire.lenght -1 ]){
//         console.log('bye')
//     }else{
//         console.log('we are close')
//     }
// }
// // var rere = [6,3,2,1]
// // shout(rere)
let raw = [3,2,4,8]
// var c2 = raw[0]
// var c1 = raw
function close(arr) {
    var c1 = arr[0];
    var c2 = arr[arr.lenght - 1]
    if(c1 < c2 ){
        console.log('hi');
    }else if (arr[0] > arr[arr.lenght - 1]){
        console.log('bye')
    }else{
        console.log('we close in an hour')
    }
}

close(raw)

