var stuff = document.createElement("div");
    stuff.innerHTML = "<h1>this is a calculator *decimals do not work except on square root button*</h1><br><br><br><br><button>click this for addition calculator</button><br><br><button>click this for subtraction calculator</button><br><br><button>click this for multiplication calculator</button><br><br><button>click this for divison calculator</button><br><br><button>click to find square root of number</button><br><br><br><p>btw if u get NOT VALID as an answer, you didn't enter numbers properly enter just number and nothing else</p><br><br><p>luqmaan made this basic calculator, this has no copyright do whatever the #### you want tbh i don't really care, since this is so basic there's no such thing as 'plagiarism' in this case, and also i left the source code unobfuscated so yeah edit and copy whatever you need <a>here</a></p>"
    document.body.appendChild(stuff);

var buttonEdit = document.getElementsByTagName("button");
    buttonEdit[0].setAttribute("onclick", "additionCalc()");
    buttonEdit[0].setAttribute("type", "button");
    buttonEdit[1].setAttribute("onclick", "subCalc()");
    buttonEdit[1].setAttribute("type", "button");
    buttonEdit[2].setAttribute("onclick", "multCalc()");
    buttonEdit[2].setAttribute("type", "button");
    buttonEdit[3].setAttribute("onclick", "divCalc()");
    buttonEdit[3].setAttribute("type", "button");
    buttonEdit[4].setAttribute("onclick", "sqrtCalc()");
    buttonEdit[4].setAttribute("type", "button");


var aEdit = document.getElementsByTagName("a");
    aEdit[0].setAttribute("href", "./script.js");
    aEdit[0].setAttribute("target", "_blank");


var titleEdit = document.getElementsByTagName("title");
    titleEdit[0].textContent = "Basic JS Calculator";


function additionCalc() {
    firstAddRes = prompt("enter first addend here");
    secondAddRes = prompt("enter second addend here");
    var firstAddRes = parseInt(firstAddRes);
    var secondAddRes = parseInt(secondAddRes);

    var addResult = firstAddRes+=secondAddRes;
    alert("Your sum is " + addResult + ".");

}

function subCalc() {
    firstSubRes = prompt("enter minuend here");
    secondSubRes = prompt("enter subtrahend here");
    var firstSubRes = parseInt(firstSubRes);
    var secondSubRes = parseInt(secondSubRes);

    var subResult = firstSubRes-=secondSubRes;
    alert("Your difference is " + subResult + ".");

}

function multCalc() {
    firstMultRes = prompt("enter multiplicand here");
    secondMultRes = prompt("enter multiplier here");
    var firstMultRes = parseInt(firstMultRes);
    var secondMultRes = parseInt(secondMultRes);

    var multResult = firstMultRes*=secondMultRes;
    alert("Your product is " + multResult + ".");
}

function divCalc() {
    firstDivRes = prompt("enter dividend here");
    secondDivRes = prompt("enter divisor here");
    var firstDivRes = parseInt(firstDivRes);
    var secondDivRes = parseInt(secondDivRes);

    var divResult = firstDivRes/=secondDivRes;
    alert("Your quotient is " + divResult + ".");
}

function sqrtCalc() {

    sqrtInput = prompt("enter number u wanna square root here");

    sqrtInput = parseInt(sqrtInput);

    var sqrtResult = Math.sqrt(sqrtInput);

    alert("Your answer is " + sqrtResult + ".");

}
