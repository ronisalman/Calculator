// Created by Roni Salman

const buttons=document.querySelectorAll(".button");
const display=document.querySelector("#display");


function buttonResponse(){

	for(let i=0;i<buttons.length;i++){
		const btn=buttons[i];
		buttons[i].addEventListener("click",function(){
			if(this.innerHTML==="="){
				calculate(btn);
			}
			else{
				display.innerHTML+=this.innerHTML;
			}
		});
	}

}

function calculate(btn){

	try{
		const answer=eval(display.innerHTML);
		console.log(answer);
	}
	catch(error){
		console.log(error);
	}

	display.innerHTML="";
}


function init(){

	buttonResponse();

}



init();