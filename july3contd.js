document.querySelector('body').style.textAlign = 'center';



document.querySelector('button').onclick = check;


function check() {
    var day = document.getElementById('answer').value;
    const classDay = 'monday';
    let weekend = 'saturday';
    let boringDay = 'sunday';
    // console.log(day)

    if (day === classDay) {
        console.log("it's a class day")
    }
    else if (day === weekend || day === boringDay) {
        alert('weekend to enjoy')
    }
    else {
        alert('its a boring day')
    }
}
document.querySelector('#secondButton').addEventListener('click', yell)

function yell() {
    var firstname = document.getElementById('firstname').value;
    var firstmiddlename = document.getElementById('firstmiddlename').value;
    var lastmiddlename = document.getElementById('lastmiddlename').value;
    var lastname = document.getElementById('lastname').value;

    const yelltext = `${firstname} ${firstmiddlename} ${lastmiddlename} ${lastname}`

    document.querySelector('#yelling').innerHTML = yelltext

    let yellthis = new SpeechSynthesisUtterance(yelltext)

    synth.speak(yellthis)

    if (firstname === '' || firstmiddlename === '' || lastmiddlename === '' || lastname === '') {
        document.querySelector('#yelling').innerHTML = 'complete your form'
    }
}