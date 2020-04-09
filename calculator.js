// Created by Roni Salman

const buttons=document.querySelectorAll(".button");
const display=document.querySelector("#display");

let pressedEqual=false;


function buttonResponse(){

	for(let i=0;i<buttons.length;i++){
		const btn=buttons[i];
		buttons[i].addEventListener("click",function(){
			if(this.innerHTML==="="){
				calculate(btn);
			}
			else{
				//making sure equal was not pressed before adding onto existing display
				if(pressedEqual===false){
					display.innerHTML+=this.innerHTML;
				}
				else{
					pressedEqual=false;
					display.innerHTML="";
					display.innerHTML+=this.innerHTML;
				}
			}
		});
	}

}

function calculate(btn){

	pressedEqual=true;

	try{
		const answer=eval(display.innerHTML);
		display.innerHTML=answer;
	}
	//display error message if input calculation is not valid
	catch(error){
		display.innerHTML="Input Error";
	}

}


function init(){

	buttonResponse();

}



init();