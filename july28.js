document.querySelector('#help').addEventListener('click', help)
function help(){
    var called = parseInt(document.querySelector('#indriver').value)
    for (let i = 1; i <= called; i++) {
        document.querySelector('.cry').innerHTML += 'help <br>'
        
    }
}


// for (let i = 0; i < 5; i++) {
//     console.log('ade');
    
// }

