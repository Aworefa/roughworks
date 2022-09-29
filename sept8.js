

document.querySelector('#check').addEventListener('click', ()=>{
    var book = document.querySelector('input').value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${book}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        var drinks = data
        console.log(drinks)
        document.getElementById('name').innerHTML = drinks.drinks[0].strDrink
        document.getElementById('instruction').innerHTML = drinks.drinks[0].strInstructions
        document.querySelector('img').src = drinks.drinks[0].strDrinkThumb
    })
    .catch(err => {
        console.log(`error ${err} `)
    })

})

// fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(`error ${err}`);
// })
// function check() {

   
//     if (book == "11007") {

//     } else {
//         console.log(drinks.drinks[0].strDrink)
//     }
// }
// console.log(book);

// document.querySelector('#check').addEventListener('click', check())
// function check(){
//     console.log('fool')
// }
// fetch('url')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(`error ${err}`);
// })