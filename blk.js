var headings = document.getElementsByTagName('h1');
var paragraphs = document.getElementsByTagName('p');

for(var i = 0; i < headings.length; i++){
  headings[i].style.color = "green";
}

for(var i = 0; i < paragraphs.length; i++){
  paragraphs[i].style.color = "blue";
}

var classred = document.getElementsByClassName("red");

for(var i = 0; i < classred.length; i++){
  classred[i].style.color = "red";}

  var h1 = document.createElement('h1');
h1.innerHTML = "A new HTML element!";