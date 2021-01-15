var container = document.getElementById("container");
container.style.width = "300px";
container.style.height = "240px";
container.style.backgroundColor = "grey";


for (i = 1; i <= 30; i++){
	const button = document.createElement("button");
	var text = document.createTextNode(i);
	button.appendChild(text);
	container.appendChild(button);
	button.style.backgroundColor = "green";
	button.style.width = "50px";
	button.style.height = "30px";
	button.style.margin = "5px";

	button.addEventListener("click", function(){
		button.style.backgroundColor = "red";
	});
}

