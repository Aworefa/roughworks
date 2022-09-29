var h1 = document.createElement('h1');
h1.innerHTML = "list with javascript";

var content = document.querySelector('body');
content.appendChild(h1);

var ul = document.createElement('ul');
var li1 = document.createElement('li');
li1.innerHTML = "the first list";
var li2 = document.createElement('li');
li2.innerHTML = "the second list";
var li3 = document.createElement('li');
li3.innerHTML = "the third   list";

var content = document.querySelector('body');
content.appendChild(ul);
console.log("li:", li1.getAttributeNames());

 var content1 = document.querySelector('ul');
 content1.appendChild(li1);
 content1.appendChild(li2);
 content1.appendChild(li3);

 var h1 = document.querySelector('h1');
var input = document.querySelector('input[type=text]');

console.log("input type:", input.getAttributeNames('type'));

 