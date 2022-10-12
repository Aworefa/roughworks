setInterval(() => {
    document.querySelector('.wiggle').classList.add('wiggle')
    setTimeout(() => {
        document.querySelector('.wiggle').classList.remove('wiggle')  
    }, 400);
}, 10000);