document.getElementById('converter').addEventListener('click', conv);

function conv() {
    var degree = document.getElementById('celsius').value;
    document.getElementById('fahrenheit').value = (degree * 1.8) + 32;
    document.getElementById('report').innerHTML = (degree * 9/5) + 32 + '*f';
    if (degree === '') {
        document.getElementById('report').innerHTML = 'filling celsius gap'
    }
}