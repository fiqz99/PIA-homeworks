var i=0;
var c=0;
var correctCount=0;
btn1.style.visibility = 'hidden';
btn2.style.visibility = 'hidden';
btn3.style.visibility = 'hidden';
optt1.style.visibility = 'hidden';
optt2.style.visibility = 'hidden';
optt3.style.visibility = 'hidden';
opt1.style.visibility = 'hidden';
opt2.style.visibility = 'hidden';
opt3.style.visibility = 'hidden';
question.style.visibility = 'hidden';

function start(){
		btn0.style.visibility = 'hidden';
		btn1.style.visibility = 'visible';
		btn2.style.visibility = 'visible';
		btn3.style.visibility = 'visible';
		optt1.style.visibility = 'visible';
		optt2.style.visibility = 'visible';
		optt3.style.visibility = 'visible';
		opt1.style.visibility = 'visible';
		opt2.style.visibility = 'visible';
		opt3.style.visibility = 'visible';
		question.style.visibility = 'visible';
}

generate(0);
function generate(index){
	document.getElementById("question").innerHTML=jsonData[index].q ;
	document.getElementById("optt1").innerHTML=jsonData[index].opt1 ;
	document.getElementById("optt2").innerHTML=jsonData[index].opt2 ;
	document.getElementById("optt3").innerHTML=jsonData[index].opt3 ;
}

function checkAnswer(){
	if (document.getElementById("opt1").checked && jsonData[i].opt1==jsonData[i].ans){
		correctCount++;
	}
	if (document.getElementById("opt2").checked && jsonData[i].opt2==jsonData[i].ans){
		correctCount++;
	}
	if (document.getElementById("opt3").checked && jsonData[i].opt3==jsonData[i].ans){
		correctCount++;
	}
	i++;
	
	if (jsonData.length-1<i){
		document.write("Your score is: " + correctCount);
	}
	generate(i);
}
function nextQuestion(){
	i++;
	if (jsonData.length-1<i){
		document.write("Your score is: " + correctCount);
	}
}
function quit(){
	document.write("Your score is: " + correctCount);
}
