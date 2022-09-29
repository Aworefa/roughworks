function changecolor() { 
    var dd1 = document.getElementById("d1");
    var dd2 = document.getElementById("d2");
    dd1.className = "blueback";
    dd2.className = "yellowback";
}
    function changetext() { 
        var dd1 = document.getElementById("d1");
        var dd2 = document.getElementById("d2");
    

    dd1.innerHTML = "bonjour"
    dd2.innerHTML = "solo"   
}
function changefont() { 
    var dd1 = document.getElementById("d1");
    var dd2 = document.getElementById("d2");


dd1.style.fontFamily = "Arial"
dd2.style.fontSize = "20px"
}

function addTask () {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered 
    if (newTask != "") {
        // create new HTML list item
        var item = document.createElement("li");
        // add HTML for buttons and new task text
        // Note, need to use '' because of "" in HTML
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + newTask;

        // add new item as part of existing list
        document.getElementById("tasks").appendChild(item); 

        /* Step 4 below here */ 
    }
}

// change styling used for given item
function markDone (item) {
    item.className = 'finished';
}

/* Step 7 below here */
function remove (item) {
    // remove item completely from document
    item.remove();
}

/* Step 11 below here */
function doAbout() {
    var element = document.getElementById("divabout");
    element.innerHTML = "im blvk the boss";
    element.className = "aboutcolor";
}

/* Step 14 below here */
function clearAbout() {
    var element = document.getElementById("divabout");
    element.innerHTML = "";
}
