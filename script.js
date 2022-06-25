let imgs = ['img/horses/1.webp', 'img/horses/2.webp', 'img/horses/3.webp',
 'img/horses/4.webp', 'img/horses/5.webp', 'img/horses/6.webp', 'img/horses/1.webp',
 'img/horses/2.webp', 'img/horses/3.webp', 'img/horses/4.webp', 'img/horses/5.webp',
 'img/horses/6.webp'];
 let main=document.getElementById("main")	

imgs.forEach(function (item) {
    main.innerHTML+='<div class="horses"><img class="horseImage"src="'+item+'"></div>';
});
const horses = document.querySelectorAll(".horseImage")
flg = true;
let checkArry = [];
let counter =0;
horses.forEach(hores => {
	hores.addEventListener('click', function handleClick(event) {
		if(flg){
			hores.setAttribute('style', 'opacity: 1;');
			if(checkArry.length==0){
				checkArry[0]=hores;
			}
			else if (checkArry.length==1){
				checkArry[1]=hores;
			}
		   if(checkArry.length==2){
				flg = false;
				setTimeout(check, 700);
			}
	
		}
	else{return}
	
	});
  });
  function check(){
	if(checkArry[0].src==checkArry[1].src){
		alert("goof")
		counter++;
		let score=document.getElementById("score")	
		score.innerHTML=counter;
	  
	}
	else{ 
		checkArry[0].setAttribute('style', 'opacity: 0;');
		checkArry[1].setAttribute('style', 'opacity: 0;');}
	flg = true;
	checkArry=[];	
  }
/* 


var main = document.getElementsByClassName("main")[0],
all_div = document.getElementsByTagName("div"),
div,
img;


var audioRight = new Audio('sound/right.wav');
var audioWrong = new Audio('sound/wrong.wav');

var rArray = ['img/horses/1.webp', 'img/horses/2.webp', 'img/horses/3.webp', 'img/horses/4.webp', 'img/horses/5.webp', 'img/horses/6.webp', 'img/horses/1.webp', 'img/horses/2.webp', 'img/horses/3.webp', 'img/horses/4.webp', 'img/horses/5.webp', 'img/horses/6.webp'];

function lettersFunction() {
for (var i = 0; i <= 11; i = i + 1) {
	div = document.createElement("div");
	main.appendChild(div);
	img = document.createElement("img");
	img.setAttribute("src", rArray[i]);
	img.setAttribute("id", rArray[i]);
	div.appendChild(img);
}

}
lettersFunction();



var x = [],
flag = true;
for (var i = 0; i <= all_div.length - 1; i++) {
all_div[i].onclick = function () {

	if (!flag) return;
	this.firstChild.style.opacity = "1";
	if (x.length == 0) {
		var x = [],
		x[0] = this;
	} else if (x.length == 1) {
		x[1] = this;

	}

	if (x.length == 2) {
		flag = false;
		setTimeout(check, 700);

	}

};

}

function check() {

if (x[0].firstChild.id === x[1].firstChild.id) {
	audioRight.play();
	//alert("Okay, Great go to the next ones");
} else {
	audioWrong.play();
	//alert("Sorry, Not identcical try agin");         
	x[0].firstChild.style.opacity = "0";
	x[1].firstChild.style.opacity = "0";

}
x = [];
flag = true;
}
 */