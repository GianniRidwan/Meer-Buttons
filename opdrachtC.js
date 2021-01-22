var container = document.getElementById("container");

color = ["green", "red", "purple", "blue", "black", ""];

for (i = 1; i <= 30; i++){
	var button = document.createElement("button");
	button.innerText = i;
	button.style.backgroundColor = "green";
	button.addEventListener("click", function(){
		this.style.backgroundColor = color[color.indexOf(this.style.backgroundColor) + 1];
		var last = color.length -1;
		console.log(last)
		if (color.length -1 == color.indexOf(this.style.backgroundColor)){
			this.remove();
		}
	});
	container.appendChild(button);
}