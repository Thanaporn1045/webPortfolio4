window.onload = pageLoad;

function pageLoad(){
	var startbutton = document.getElementById("start");
	startbutton.onclick = startGame;
	var x = document.getElementById('clock');
	x.innerHTML = 0;
}

function startGame(){
	
	alert("Ready");
	var REDtext = document.getElementById("clock");
	if(!REDtext.classList.contains("invalid"))
	{
		
		REDtext.classList.remove("redalert");
		REDtext.classList.add("blackalert");
	}
	else
	{
		REDtext.classList.add("blackalert");
	}
	addBox(); 
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	x.innerHTML = second;
	
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK);
	
	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		
	
		if( allbox.length !=0 &&  second != 0)
		{ 
			second = second -1; x.innerHTML = second;
			if(second<10)
			{
				var REDtext = document.getElementById("clock");
				REDtext.classList.remove("blackalert");
				REDtext.classList.add("redalert");
			}
		}
		else if( allbox.length ==0 && second != 0 )
		{ clearInterval(timer); alert("You win!"); second = 0; x.innerHTML = second;}
		else if( allbox.length !=0 && second == 0 )
		{ clearInterval(timer); alert("Game over"); clearScreen(); second = 0; x.innerHTML = second;}
		

	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.classList.add(colorDrop);
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox,i);
	}
 }

function bindBox(box,i){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		var remove = document.getElementById("box"+i);
		remove.parentNode.removeChild(remove);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer div");
	//delete all  div
	 for (var i=0;i<allbox.length;i++){
		console.log(i);
	 	allbox[i].parentNode.removeChild(allbox[i]);
		
	 }
}

