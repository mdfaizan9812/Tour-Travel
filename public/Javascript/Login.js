var colour="yellow";
var blk="";

function focusname(){
	document.querySelector(".text-field label").style.color=colour;
}

function blurname(){
	document.querySelector(".text-field label").style.color=blk;
}

function focuspass(){
	document.querySelector(".Pass-field label").style.color=colour;
}

function blurpass(){
	document.querySelector(".Pass-field label").style.color=blk;
}