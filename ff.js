var h1 = document.createElement('h1');
h1.innerHTML = "A new HTML element!";

var content = document.querySelector('#content');
content.appendChild(h1);
var input = document.querySelector('input[type=text]');

console.log("input type:", input.getAttribute('id'));
console.log("input attributes:", input.getAttributeNames());
var input = document.querySelector('input[type=text]');

input.setAttribute('type', "radio");
input.removeAttribute('placeholder');

console.log(input.getAttributeNames());
var label = document.querySelector("label")
for (let i = 0; i< label.length; i++) {
  label.style.color = "red"
    }
    var button= document.querySelector("button");
    button.style.padding= "50px";
    button.style.backgroundColor= "yellow"
button.onclick = function() {
    var p = document.createElement('p');
    p.innerHTML = "<strong> Button Clicked!</strong>";

    var content = document.querySelector('body');
    content.appendChild(p);
}
var randomColor = function(){
  var rvalue = function() {
  	return Math.round(Math.random()*255); 
  }

 	return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
}

// get button element from DOM
var button = document.querySelector('button');

// create event listener to change background color on button click
button.onclick = function(){
	this.style.backgroundColor = randomColor();
}