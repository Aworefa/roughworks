// setInterval(() => {
//     document.querySelector('#timeleft').innerHTML -= 1
//     document.querySelector('.fly').addEventListener('click', () => {
//        var noduck= parseInt(document.querySelector('#body').innerHTML)
//        noduck += 1
//         document.querySelector('.fly').style.display = none
//     })

// }, 1000);

const images = document.querySelectorAll('img')
let bodycount = 0
let timelet = 20

Array.from(images).forEach(i => i.addEventListener('click', killer))

function killer(bird) {
    bird.target.style.display = 'none'
    bodycount++
    timelet = 10
    document.querySelector('#body').innerHTML = bodycount
}
let timer = setInterval(() => {
    timelet--
    document.querySelector('#timeleft').innerHTML = timelet
    if (timelet <= 0) {
        clearInterval(timer)
        Array.from(images).forEach(i => i.style.dislay = 'none')
    }
}, 1000);

timer()