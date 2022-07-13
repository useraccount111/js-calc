var calculatorBody = document.createElement("div");
    calculatorBody.innerHTML = "<h1>this is a calculator *decimals do not work except on square root button*</h1><br><br><b>How to use calculator for addition, subtraction, multiplication and division: You will need to know the terminology for addition, subtraction, multiplication and division. <a>Here is a diagram explaining it well.</a></b><br><br><br><br><button>click this for addition calculator</button><br><br><button>click this for subtraction calculator</button><br><br><button>click this for multiplication calculator</button><br><br><button>click this for divison calculator</button><br><br><button>click to find square root of number</button><br><br><br><br><br><p>luqmaan made this basic calculator, this has no copyright do whatever the #### you want tbh i don't really care, since this is so basic there's no such thing as 'plagiarism' in this case, and also i left the source code unobfuscated so yeah edit and copy whatever you need <a>here</a></p>"
    document.body.appendChild(calculatorBody);

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
    aEdit[0].setAttribute("href", "https://s3.eu-central-1.amazonaws.com/ly2015-fst-test-bucket-2/calc/fdjasklf.png");
    aEdit[0].setAttribute("target", "_blank");
    aEdit[1].setAttribute("href", "./script.js");
    aEdit[1].setAttribute("target", "_blank");


var titleEdit = document.getElementsByTagName("title");
    titleEdit[0].textContent = "Basic JS Calculator";

// * var linksAppend = document.createElement("div");
// *    linksAppend.innerHTML = "<link></link>";
// *    document.body.appendChild(linksAppend);

// * var linksEdit = document.getElementById("link");
// *    linksEdit[0].setAttribute("rel", "canonical");
// *    linksEdit[0].setAttribute("href", "https://s3.eu-central-1.amazonaws.com/ly2015-fst-test-bucket-2/calc/index.html");

function additionCalc() {
    firstAddRes = prompt("enter first addend here");
    secondAddRes = prompt("enter second addend here");
    
    if (firstAddRes == "" || secondAddRes == "") {
        alert("Please enter proper values.");
    } else {
        
        var firstAddRes = parseInt(firstAddRes);
        var secondAddRes = parseInt(secondAddRes);
        
        var addResult = firstAddRes+=secondAddRes;
        alert("Your sum is " + addResult + ".");
        
    }

}

function subCalc() {
    firstSubRes = prompt("enter minuend here");
    secondSubRes = prompt("enter subtrahend here");
    
    if (firstSubRes == "" || secondSubRes == "") {
        alert("Please enter proper values.");
    } else {
        
        var firstSubRes = parseInt(firstSubRes);
        var secondSubRes = parseInt(secondSubRes);
        
        var subResult = firstSubRes-=secondSubRes;
        alert("Your difference is " + subResult + ".");
    }

}

function multCalc() {
    firstMultRes = prompt("enter multiplicand here");
    secondMultRes = prompt("enter multiplier here");
    
    if (firstMultRes == "" || secondMultRes == "") {
        alert("Please enter proper values.");
    } else {
        
        var firstMultRes = parseInt(firstMultRes);
        var secondMultRes = parseInt(secondMultRes);
        
        var multResult = firstMultRes*=secondMultRes;
        alert("Your product is " + multResult + ".");
    }
}

function divCalc() {
    firstDivRes = prompt("enter dividend here");
    secondDivRes = prompt("enter divisor here");
    
    if (firstDivRes == "" || secondDivRes == "") {
        alert("Please enter proper values.");
    } else {
        
        var firstDivRes = parseInt(firstDivRes);
        var secondDivRes = parseInt(secondDivRes);
        
        var divResult = firstDivRes/=secondDivRes;
        alert("Your quotient is " + divResult + ".");
    }
}

function sqrtCalc() {

    sqrtInput = prompt("enter number u wanna square root here");
    
    if (sqrtInput == "") {
        alert("Please enter a proper value.");
    } else {
        
        sqrtInput = parseInt(sqrtInput);
        
        var sqrtResult = Math.sqrt(sqrtInput);
        
        alert("Your answer is " + sqrtResult + ".");

    }

}
