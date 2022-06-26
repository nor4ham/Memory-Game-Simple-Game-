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
let audioRight = new Audio('sound/right.wav');
let audioWrong = new Audio('sound/wrong.wav');
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
		counter++;
		audioRight.play();
		let score=document.getElementById("score")	
		score.innerHTML=counter;
		
	  
	}
	else{ 
		audioWrong.play();
		checkArry[0].setAttribute('style', 'opacity: 0;');
		checkArry[1].setAttribute('style', 'opacity: 0;');}
	flg = true;
	checkArry=[];	
  }
  level=2
  localStorage.setItem("level", level);
  let score=document.getElementById("level")	
  score.innerHTML=localStorage.getItem("score");


  const replay = document.getElementById("replay")
  replay.addEventListener('click', function handleClick(event) {
	horses.forEach(hores => {
		hores.setAttribute('style', 'opacity: 0;');
	    counter =0;
		let score=document.getElementById("score")	
		score.innerHTML=0;

		});
	
	});
	

