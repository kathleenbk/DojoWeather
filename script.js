function loading() {
    alert("Loading weather report...");
}
var cookieJar = document.querySelector("#cookieJar")
console.log(cookieJar);

function accept() {
    console.log("Removing...");
    cookieJar.remove();
}

var ftemp = [75, 65, 80, 66, 69, 61, 78, 70];

var ctemp = [24, 18, 27, 19, 21, 16, 26, 21];

function c2f(temp) {
    return Math.round(9/5 * temp + 32);
};

function f2c(temp) {
    return Math.round(5/9 * (temp-32));
}

function convertTemp(elem) {
    console.log(elem.value);
    for(var i=1; i<=8; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempValue = parseInt(tempSpan.innerText);
        if(elem.value == "°C") {
            tempSpan.innerText = f2c(tempValue);
        } else {
            tempSpan.innerText = c2f(tempValue);
        }
    }
}