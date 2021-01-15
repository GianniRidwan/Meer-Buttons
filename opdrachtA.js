var green = document.createElement("button");
var red = document.createElement("button");
var blue = document.createElement("button");
var container = document.getElementById("container");

var textGreen = document.createTextNode("Button 1");
green.appendChild(textGreen);
container.appendChild(green);
green.style.backgroundColor = "green";
green.addEventListener("click", function(){
	document.body.style.backgroundColor = "green";
});

var textRed = document.createTextNode("Button 2");
red.appendChild(textRed);
container.appendChild(red);
red.style.backgroundColor = "red";
red.addEventListener("click", function(){
	document.body.style.backgroundColor = "red";
});

var textBlue = document.createTextNode("Button 3");
blue.appendChild(textBlue);
container.appendChild(blue);
blue.style.backgroundColor = "blue";
blue.addEventListener("click", function(){
	document.body.style.backgroundColor = "blue";
});