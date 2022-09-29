// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// var numElements = cleanestCities.length;
// for (var i = 0; i < numElements; i++);
//     if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
//     break;
//         }
//     };
//     if (matchFound === false) {
//     alert("It's not on the list");
// }
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        var full1 = fullNames.push(firstNames[0] + lastNames[0]);
    }
}
// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var firstChar = cityToCheck.slice(0, 1);
// console.log(firstChar)
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//     }
// }
// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var slice= firstNames.slice(2,5);
// console.log(slice)

var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers."
var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}
console.log(text)

var text = "To be or not to be.";
var segIndex = text.lastIndexOf("be");
console.log(segIndex)

var firstName = "tobiloba";
var firstChar = firstName.slice(0, 3) + "glo" + firstName.slice(6, 8);
console.log(firstChar)
// 08110211048

var firstName = "tobiloba";
var firstChar = firstName.slice(0, 1);
var firstchar = firstName.charAt(0)
console.log(firstChar);
console.log(firstchar);

var text = "i need some time out and chill with big boys! abi e no good"
for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === "!") {
        console.log("Exclamation point found!");
    }
    else {
        console.log("you need to work again")
    }
}
var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";
var newText = text.replace("World War II", "the Second world war");
text = text.replace(/World War II/g, "the Second World War");
console.log(newText);
console.log(text)

var scoreAvg = Math.random() * 10;
console.log(scoreAvg)
var numberOfStars = Math.round(scoreAvg);
console.log(numberOfStars);

var scoreAvg = 17.555555;
scoreAvg = Math.round(scoreAvg);
console.log(scoreAvg)
console.log(scoreAvg * 10)

var scoreAvg = Math.ceil(-.000001);
console.log(scoreAvg)

var scoreAvg = Math.floor(.999999);
console.log(scoreAvg);

var profit = "200" - "150"
console.log(profit);

// var currentAge = prompt("Enter your age.");
// var yearsEligibleToVote = currentAge - 18;
// console.log(yearsEligibleToVote)

let newyear = "300" + 50
console.log(newyear);

var floatingNumString = "24.9876";
var num = Number(floatingNumString);
console.log(num)
var newnum = num.toString()
console.log(newnum)
//controlling of decimal figure
var price = 9.95;
var taxRate = 6.5 / 100;
var total = price + (price * taxRate);
console.log(total)
var prettyTotal = total.toFixed(2);
console.log(prettyTotal)
var currencyTotal = "$" + prettyTotal;
console.log(currencyTotal)

var num = 1.555;
var str = num.toString();
if (str.charAt(str.length - 1) === "5") {
    str = str.slice(0, str.length - 1) + "6";
}
num = Number(str);
prettyNum = num.toFixed(2);
console.log(prettyNum)
// var ro= num.toFixed(2)
// console.log(ro)
var rightNow = new Date();
var dateString = rightNow.toString();
console.log(rightNow);
console.log(dateString)

var rightNow = new Date();
var theDay = rightNow.getDay();
console.log(theDay)

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay(); //number generated here is used to call out the position in the daynames array
var nameOfToday = dayNames[theDay]; //
console.log(nameOfToday);
//
var now = new Date();
var time = now.getTime();
var up = Math.round(time);
console.log(time);
console.log(up);
//
var today = new Date();
var doomsday = new Date("June 30, 2035");
console.log(doomsday);
var msToday = today.getTime();
var msDoomsday = doomsday.getTime();
var msDiff = msDoomsday - msToday;
console.log(msDiff);
var dDiff = msDiff / (1000 * 60 * 60 * 24 * 7 * 365);
dDiff = Math.floor(dDiff)
console.log(dDiff)
//
var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
console.log(daysTillDoom)

var d = new Date("July 21, 1983 13:25:00");
console.log(d)

var d = new Date();
d.setFullYear(2001);
console.log(d) //to change factors in date

var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
// alert("time: " + theHr + ":" + theMin);
console.log("time: " + theHr + ":" + theMin) //

function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    alert("Current time: " + theHr + ":" + theMin);
}
tellTime()

var whatever = "thor is here";
var greeting = "Hello, there."
function greetUser(greeting) {
    alert(greeting);
}
greetUser(whatever);


function showMessage(m, string, num) {
    console.log(m + string + num);
}
var month = "March";
showMessage(month, "'s winner number is ", 23);

function calcTot(merchTot) {
    var orderTot;
    if (merchTot >= 100) {
        orderTot = merchTot;
    }
    else if (merchTot < 50.01) {
        orderTot = merchTot + 5;
    }
    else {
        orderTot = merchTot + 5 + (.03 * (merchTot - 50));
    }
    return orderTot;
}
var theSum = 1000
addNumber();
function addNumber() {
    theSum = 2 + 2;

}
console.log(theSum)

function popup(message) {
    var message = 'who want me'
    alert(message);
}
function checkAddress(fieldId) {
    if (document.getElementById(fieldId).value !== "" + "@gmail.com") {
        alert("Email address required.");
    }
}

// function loading(){
//     var load = document.getElementById('load')
//     load.value= "loading..."
// }
var loading = () => document.getElementById('load').value = "loading..."

function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "60608":
            cityName = "Chicago";
            break;
        case "68114":
            cityName = "Omaha";
            break;
        case "53212":
            cityName = "Milwaukee";
            break;
        case "":
            cityName = "input zip code"
    }
    document.getElementById("city").value = cityName;
}


function expandLoris() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety ofdistinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById('slowLoris').innerHTML = expandedParagraph
}
function placeAList() {
    var place = "<ol><li>abuja</li><li>akure</li><li>ado</>";
    document.getElementById('listLoris').innerHTML = place;
}
function invisible() {
    var ugly = document.getElementById('image')
    ugly.className = "hidden"
}

function makeBig() {
    document.getElementById("p1").className += "big";
}
// function after() {
//     document.getElementById('after').src = "../bluetooth file/new work.png";
// }

//using js to change picture with onmouseover

// function after(eId, newPic) {

//     console.log(eId);
//     console.log(newPic);
//     document.getElementById(eId).src = newPic;
// }
// after("sisi", "../bluetooth file/visa.png");
// after("bobo", "../bluetooth file/mood.jpg");
// after("after", "../bluetooth file/new work.png");

function getAddress() {
    var link = document.getElementById("link1");
    link.href = "www.google.com"
    link.className = "jumbo"
}

// function enlargeForm() {
//     var frm = document.getElementById("link1");
//     frm.className = "jumbo";
// }
document.getElementById("link1").className = "jumbo"


var par = document.getElementsByTagName("p");
console.log(par.length)
par[7].innerText = "the movie is sweet"
// midtext= "i love jesus"
for (var i = 0; i < par.length; i++) {
    par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
}
// changing of an attribute
var target = document.getElementById("p2");
target.style.backgroundColor = "rgb(240,12,60)"
var hasClass = target.hasAttribute("class");
console.log(hasClass)

var tobi = document.getElementById("google")
tobi.setAttribute("href", "www.google.com")
var list = document.getElementById("p2").attributes
console.log(list)
//  var whole= document.childNodes[0].childNodes[0].childNodes[1].innerText;
//  whole= "no to scam"
//  console.log(whole);

var parent = document.getElementById("p2");
var target = parent.firstChild;
nName = target.nodeValue;
console.log(target)
console.log(nName)

var listing = document.getElementsByTagName("li");
var nooflist = listing.length
console.log(nooflist)
// listing[1].innerHTML= "no to food"
for (let i = 0; i < listing.length; i++) {
    if (listing[i].innerHTML === " ") {
        listing[i].innerHTML = "coming soon";
    }
}
var ass = document.getElementById("gogo").attributes
console.log(ass)
console.log(ass[1].nodeValue)
var good = document.querySelector("body")
var god = document.createElement('p')
god.setAttribute("class", "bingo")
var satan = document.createTextNode("hello universal")
god.appendChild(satan)
good.appendChild(god)

var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10
};
plan1.discountMonths = [6, 7, 11];

console.log(plan1.discountMonths[1])
console.log("The cost of the " + plan1.name + " package is $" + plan1["price"] + " per month.");

var deal3 = {

}
deal3.cost = 79.95;
deal3.name = "Super-saver";
deal3.features = ["Guarantee", "Free Ship"];
deal3.membersOnly = false;
deal3.market = undefined;
// delete deal3.market;
propertyExists = "market" in deal3;
console.log(propertyExists)
console.log(deal3)

var deal4 = {

}
console.log(deal4)
// console.clear()
console.dir(document.URL)
localStorage.setItem('name', 'john')

function calcAnnual(percentIfDisc) {
    var bestPrice = plan1.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < plan1.discountMonths.length; i++) {
        if (plan1.discountMonths[i] === thisMo) {
            bestPrice = plan1.price * percentIfDisc;
            break;
        }
    }
    return bestPrice * 12;
}

let amount = calcAnnual(.85)
console.log(amount)
var double = function (x) {
    return x * x
}
console.log(double(2))

function Plan(name, price, space, transfer, pages, discountMonths) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    Plan.prototype.calcAnnual = function (percentIfDisc) {
        var bestPrice = this.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === thisMo) {
                bestPrice = this.price * percentIfDisc;
                break;
            }
        }
        return bestPrice * 12;
    };
}
var plan1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
var p2 = new Plan("Premium", 5.99, 500, 5000, 50, [6, 7, 11]);
var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);
console.log(plan1)
console.log(p2)
console.log(p3)
var annualPrice = p2.calcAnnual(.85)
console.log(annualPrice)
var month = p2.discountMonths;
console.log(month)
var gotTheProperty = "price" in plan1
console.log(gotTheProperty)

var listOfProperties = [];
for (var prop in plan1) {
    if (plan1.hasOwnProperty(prop)) {
        listOfProperties.push(prop);
    }
}
console.log(listOfProperties)
//calcannual is an inherited property which is not display when using hasownproperty
var isOwnedProperty = plan1.hasOwnProperty("calcAnnual");
console.log(isOwnedProperty);

var whereWeAt = window.location.href;
console.log(whereWeAt);
var theDomain = window.location.hostname;
var tutu = document.URL
console.log(tutu)
console.log(theDomain);
// window.location.href= "http://www.me.com";
// var buhari= document.getElementById('buhari');
function newwebsite() {
    return location.replace('www.google.com')
    // return window.location.reload()
}
// var box= document.getElementById('box');
// box.innerHTML= Math.round(Math.random()*10)

// var whereUserCameFrom = document.referrer;
// console.log(whereUserCameFrom)


function newebsite() {
    // var monkeyWindow = window.open();
    // var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brownrobes with large hoods covering their heads.</p>";
    // return monkeyWindow.document.write(windowContent);
    // return window.open('pero.html')
    // return window.location.reload()
    var monkeyWindow = window.open("pero.html", "win1", "width=420,height=380,left=500,top=200");
    return monkeyWindow
}

//var windowSpecs = "'faq.html', 'faq', 'width=420,height=380,left=200,top=100'";
//var faqPage = window.open(windowSpecs);
// function checkForPopBlocker() {
//     var testPop = window.open("", "", "width=100,height=100");
//     if (testPop === null || typeof (testPop === "undefined")) {
//         alert("Please disable your popup blocker.");
//     }
//     testPop.close();
// }
function checkForLastName() {
    if (document.getElementById("lastNameField").value.length === 0) {
        alert("Please enter your last name");
        document.getElementById("lastNameField").focus();
        document.getElementById("lastNameField").style.background = "yellow";
        return false
        // return document.getElementById('warning').innerHTML= 'Please enter your last name';
    }
    document.getElementById("lastNameField").style.background = "white";
}

function checkForSelection() {
    if (document.getElementById("states").selectedIndex === 0) {
        alert("Please select a state.");
        return false;
    }
}
//this is a function where u we inport the id as parameter of the function
//function checkForSelection(selecID) {
// var target = document.getElementById(selecID);
// if (target.selectedIndex === 0) {
// alert("Please select a state.");
// return false;
// }
// }

function validateRadios() {
    var radios = document.getElementsByName("r1");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    alert("Please check one.");
    return false;
}
function greetings() {
    try {
        var greeting = "Hello world!";
        aler(greeting);
    }
    catch (err) {
        alert(err);
    }
}

function checkPassword() {
    try {
        var pass = document.getElementById("f1").value;
        if (pass.length < 8) {
            throw "Please enter at least 8 characters.";
        }
        if (pass.indexOf(" ") !== -1) {
            throw "No spaces in the password, please.";
        }
        var numberSomewhere = false;
        for (var i = 0; i < pass.length; i++) {
            if (isNaN(pass(i, i + 1)) === false) {
                numberSomewhere = true;
                break;
            }
        }
        if (numberSomewhere === false) {
            throw "Include at least 1 number.";
        }
    }
    catch (err) {
        alert(err);
    }
}
