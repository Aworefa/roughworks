var h1= document.querySelector('h1')
h1.innerHTML="i wish to change the header"
var h2= document.querySelector('h2')
console.log("h2 element's id valve", h2.id);
n
var h2= document.querySelector('h2');
console.log( "is the h2 element", h2.outerHTML)
var miniheading= document.getElementById('miniheading')
miniheading.innerHTML= " change the topic for me make we move to another topic using <code>document.getelementbyid</code>"
 var todolist= document.querySelectorAll('#todos >li');
 for (let i = 0; i < todolist.length; i++) {
    todolist[i].innerHTML = "todo item #", (i+i);
 }
 var h1= document.querySelector('h1')
 h1.style.border= "3px solid red"
 h1.style.padding="5px 10px"
 h1.style.width="50%";
var x = 2;
var y = 3;

var button = document.querySelector('button');
button.style.background= "blue"
button.onclick = function() {
  alert("Hello, World!");
}
 
