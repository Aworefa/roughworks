
var clairePic = document.querySelector('#claire')
var nikkiPic = document.querySelector('#nikki')


document.querySelector('.contestant').addEventListener('click', both)

function both() {
    document.querySelector('#div').innerHTML = "she is the wrong contestant"
    document.querySelector('#div').classList.remove('hidden')
}

document.querySelector('.rose').addEventListener('click', changePic)
function changePic() {
    nikkiPic.classList.toggle('hidden')
    clairePic.classList.add('hidden');
    document.querySelector('#div').classList.add('hidden')
}
