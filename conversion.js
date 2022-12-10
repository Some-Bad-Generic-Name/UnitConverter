var input = parseFloat(document.getElementById("input").value);

var typesOne = document.getElementById('typesOne');
var firstType = typesOne.options[typesOne.selectedIndex].value;

var typesTwo = document.getElementById('typesTwo');
var secondType = typesTwo.options[typesTwo.selectedIndex].value;


function convert() {
    input = parseFloat(document.getElementById("input").value);

    typesOne = document.getElementById('typesOne');
    firstType = typesOne.options[typesOne.selectedIndex].value;

    typesTwo = document.getElementById('typesTwo');
    secondType = typesTwo.options[typesTwo.selectedIndex].value;

    if (firstType == secondType) { document.getElementById("ouput").innerHTML = input; }
    if (firstType == "Celsius" && secondType == "Fahrenheit") { document.getElementById("ouput").innerHTML = celsiusToFahrenheit() }
    if (firstType == "Fahrenheit" && secondType == "Celsius") { document.getElementById("ouput").innerHTML = fahrenheitToCelsius() }
}

function celsiusToFahrenheit() {
    var value = (input * 9 / 5) + 32;
    return value;
}

function fahrenheitToCelsius() {
    var value = (input - 32) * 5 / 9;
    return value;
}