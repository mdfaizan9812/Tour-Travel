document.querySelector(".button1").addEventListener("click",moreinfo1);
document.querySelector(".button2").addEventListener("click",moreinfo2);
document.querySelector(".button3").addEventListener("click",moreinfo3);
document.querySelector(".button4").addEventListener("click",moreinfo4);

function moreinfo1(){
	// resizing width of first container ie info1
	document.querySelector(".info1").classList.toggle("info10");
	// add content at end
	document.querySelector(".para1").classList.toggle("para10");


	var dots = document.querySelector("#dots1");
	var moreText = document.querySelector("#more1");
	var btnText = document.querySelector(".button1");
	if(dots.style.display === "none"){
		dots.style.display = "inline";
		btnText.innerHTML = "Read More";
		moreText.style.display = "none";
	}
	else{
		dots.style.display = "none";
		btnText.innerHTML = "Read Less";
		moreText.style.display = "inline";
	}
}

function moreinfo2(){
	// resizing width of first container ie info1
	document.querySelector(".info2").classList.toggle("info20");
	// add content at end
	document.querySelector(".para2").classList.toggle("para20");
	

	var dots = document.querySelector("#dots2");
	var moreText = document.querySelector("#more2");
	var btnText = document.querySelector(".button2");
	if(dots.style.display === "none"){
		dots.style.display = "inline";
		btnText.innerHTML = "Read More";
		moreText.style.display = "none";
	}
	else{
		dots.style.display = "none";
		btnText.innerHTML = "Read Less";
		moreText.style.display = "inline";
	}
}

function moreinfo3(){
	// resizing width of first container ie info1
	document.querySelector(".info3").classList.toggle("info30");
	// add content at end
	document.querySelector(".para3").classList.toggle("para30");
	// change name of button
	document.querySelector(".button3").classList.toggle("button30");

	var dots = document.querySelector("#dots3");
	var moreText = document.querySelector("#more3");
	var btnText = document.querySelector(".button3");
	if(dots.style.display === "none"){
		dots.style.display = "inline";
		btnText.innerHTML = "Read More";
		moreText.style.display = "none";
	}
	else{
		dots.style.display = "none";
		btnText.innerHTML = "Read Less";
		moreText.style.display = "inline";
	}
}

function moreinfo4(){
	// resizing width of first container ie info1
	document.querySelector(".info4").classList.toggle("info40");
	// add content at end
	document.querySelector(".para4").classList.toggle("para40");
	// change name of button
	document.querySelector(".button4").classList.toggle("button40");

	var dots = document.querySelector("#dots4");
	var moreText = document.querySelector("#more4");
	var btnText = document.querySelector(".button4");
	if(dots.style.display === "none"){
		dots.style.display = "inline";
		btnText.innerHTML = "Read More";
		moreText.style.display = "none";
	}
	else{
		dots.style.display = "none";
		btnText.innerHTML = "Read Less";
		moreText.style.display = "inline";
	}
}