
var colorInput=document.querySelector("#colorPicker");
var gridHeight=document.querySelector("#inputHeight");
var gridWidth=document.querySelector("#inputWidth");
var gridCanvas=document.querySelector("#pixelCanvas");

function clickedBox(e){

	var t=colorInput.value;
	e.target.style.backgroundColor=t;

}

function makeGrid(){
	gridCanvas.innerHTML="";

	for(var e=document.createDocumentFragment(),t=0;t<gridHeight.value;t++){

		for(var r=document.createElement("tr"),n=0;n<gridWidth.value;n++){

			var d=document.createElement("td");

			r.appendChild(d);
		}

		r.addEventListener("click",clickedBox);

		e.appendChild(r);

	}

	gridCanvas.appendChild(e);

}

document.querySelector("form").addEventListener("submit",function(e){e.preventDefault(),makeGrid()});

