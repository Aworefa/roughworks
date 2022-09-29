let coour = ['red', 'black', 'orange', 'brown']

coour.forEach((x, i) => console.log(x, i))

// for (let i = 0; i < coour.length; i++) {
//     const fish = coour[i];
//     console.log(fish)

// }

var runAm = [1, 2, 3, 4, 5];
runAm.forEach(banger)
function banger(x, i) {
    // if (x === 5) {
    //     var cutup = x * 2
    //     console.log(cutup)
    // }
    var cutup = x * 2
    // var cookup = [cutup]
    console.log(cutup);
    // console.log(cookup);
}

function muulti(arr) {
    let prod = 1
    for (let i = 0; i < arr.length; i++) {
        prod *= arr[i];
    }
    console.log(prod);
}
muulti([1, 2, 3])


function calling(tall) {
    let newarr = []
    for (let i = 0; i < tall.length; i++) {
        var futt = tall[i]
        if (futt % 2 === 0) {
            newarr.push(futt)
        }

    }
    return newarr
}
calling([1, 2, 3, 4, 5, 10, 56, 77])

