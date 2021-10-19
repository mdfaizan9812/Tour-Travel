document.querySelector(".button1").addEventListener("click",moreinfo);
 
function moreinfo(){
	
	
	// resizing width of first container ie info1
	document.querySelector(".info1").classList.toggle("info10");
	// add content at end
	document.querySelector(".para").classList.toggle("para10");
	// change name of button
	document.querySelector(".button1").classList.toggle("button10");
	
}