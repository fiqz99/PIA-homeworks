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
opt3.style.visibility = 'hidden';var i=0; //brojac koraka
var correctCount=0; //brojac tacnih odgovora
var counter=20; //brojac vremena
var stopCounter=1; //promenljiva koja sluzi za zaustavljanje vremena
var name=" "; //za ime ucesnika

btn1.style.visibility = 'hidden'; //pocetno stanje svih elemenata
btn2.style.visibility = 'hidden';
btn3.style.visibility = 'hidden';
optt1.style.visibility = 'hidden';
optt2.style.visibility = 'hidden';
optt3.style.visibility = 'hidden';
opt1.style.visibility = 'hidden';
opt2.style.visibility = 'hidden';
opt3.style.visibility = 'hidden';
tb1.style.visibility = 'hidden';
question.style.visibility = 'hidden';

function start(){ 							//funkcija za zapocinjanje kviza
		setTimeout(function(){ 
		btn0.style.visibility = 'hidden';
		btn2.style.visibility = 'visible';
		btn3.style.visibility = 'visible';
		optt1.style.visibility = 'visible';
		optt2.style.visibility = 'visible';
		optt3.style.visibility = 'visible';
		opt1.style.visibility = 'visible';
		opt2.style.visibility = 'visible';
		opt3.style.visibility = 'visible';
		tb2.style.visibility = 'hidden';
		question.style.visibility = 'visible';
		generate(0);
		startTimer();
		name=document.getElementById('tb2').value
		}, 1000);
		
}



function generate(index){						//funkcija koja povlaci pitanja iz baze
	if ((index+1)%3!=0 && jsonData.length>i){	//funkcija koja postavlja elemente za pitanja sa ponudjenim odgovorima
	document.getElementById("question").innerHTML=jsonData[index].q ;
	document.getElementById("optt1").innerHTML=jsonData[index].opt1 ;
	document.getElementById("optt2").innerHTML=jsonData[index].opt2 ;
	document.getElementById("optt3").innerHTML=jsonData[index].opt3 ;
	optt1.style.visibility = 'visible';
	optt2.style.visibility = 'visible';
	optt3.style.visibility = 'visible';
	opt1.style.visibility = 'visible';
	opt2.style.visibility = 'visible';
	opt3.style.visibility = 'visible';
	tb1.style.visibility = 'hidden';
	btn1.style.visibility = 'hidden';
	}
	else if (jsonData.length>i) // funkcija koja postavlja elemente za pitanje u kome se odgovor unosi sa tastature
	{
		btn1.style.visibility = 'visible';
		optt1.style.visibility = 'hidden';
		optt2.style.visibility = 'hidden';
		optt3.style.visibility = 'hidden';
		opt1.style.visibility = 'hidden';
		opt2.style.visibility = 'hidden';
		opt3.style.visibility = 'hidden';
		tb1.style.visibility ='visible';
		document.getElementById("question").innerHTML=jsonData[index].q ;
	}
}

function checkAnswer1(){ //funkcija koja broji poene ako je tacan odgovor 1
	if (jsonData[i].opt1==jsonData[i].ans){
		correctCount++;
	}
}
function checkAnswer2(){ //funkcija koja broji poene ako je tacan odgovor 2
	if (jsonData[i].opt2==jsonData[i].ans){
		correctCount++;
	}
}
function checkAnswer2(){ //funkcija koja broji poene ako je tacan odgovor 3
	if (jsonData[i].opt2==jsonData[i].ans){
		correctCount++;
	}
}	
function checkAnswer(){ 		//funkcija koja uporedjuje uneti odgovor sa tacnim odgovorom i broji poene
	if ((i+1)%3!=0){ 			//brojac poena za pitanja sa ponudjenim odgovorima
		if  (document.getElementById("optt1").innerHTML==jsonData[i].ans){		//podesavanje boje pozadine u skladu sa
		document.getElementById("opt1").style.backgroundColor = "green";   //tacnim odgovorom
		document.getElementById("opt2").style.backgroundColor = "red";
		document.getElementById("opt3").style.backgroundColor = "red";
		}
		if  (document.getElementById("optt2").innerHTML==jsonData[i].ans){
		document.getElementById("opt1").style.backgroundColor = "red";
		document.getElementById("opt2").style.backgroundColor = "green";
		document.getElementById("opt3").style.backgroundColor = "red";
		}
		if  (document.getElementById("optt3").innerHTML==jsonData[i].ans){
		document.getElementById("opt1").style.backgroundColor = "red";
		document.getElementById("opt2").style.backgroundColor = "red";
		document.getElementById("opt3").style.backgroundColor = "green";
		}
	}
	else  {				//brojac poena za pitanja u kojima se odgovor unosi sa tastature
		if (document.getElementById('tb1').value.toLowerCase() == jsonData[i].ans){ //tacan odgovor
			correctCount++;
			alert("Odgovor je tacan!");
		}
		else { 														//netacan odgovor
		alert("Odgovor je netacan! Tacan odgovor je " + jsonData[i].ans );
		}
	}
	counter=20;
	timer.style.visibility = 'hidden';
	stopCounter=0;
	
	setTimeout(function(){ 
		i++;
		generate(i);
		document.getElementById("opt1").style.backgroundColor = "white";
		document.getElementById("opt2").style.backgroundColor = "white";
		document.getElementById("opt3").style.backgroundColor = "white";
		document.getElementById("tb1").value="";
		if (jsonData.length-1<i){ //funkcija koja proverava da li je doslo do poslednjeg pitanja
			quit();
		}
		else{
			stopCounter=1;
			timer.style.visibility = 'visible';
		}
	}, 3000);
}
function nextQuestion(){		//funkcija za preskakanje pitanja
	i++;
	stopCounter=0;
	counter=20;
	btn1.style.visibility = 'hidden';
	timer.style.visibility = 'hidden';
	setTimeout(function(){ 
		generate(i);
		if (jsonData.length-1<i){ //funkcija koja proverava da li je doslo do poslednjeg pitanja
			quit()
		}
		else{		
		stopCounter=1;
		timer.style.visibility = 'visible';
		}
	}, 3000);
}
function quit(){ 		//funkcija za odustajanje
	document.getElementById("question").innerHTML=name + "je osvojio " + correctCount + " poena!";
	btn1.style.visibility = 'hidden'; 
	btn2.style.visibility = 'hidden';
	btn3.style.visibility = 'hidden';
	optt1.style.visibility = 'hidden';
	optt2.style.visibility = 'hidden';
	optt3.style.visibility = 'hidden';
	opt1.style.visibility = 'hidden';
	opt2.style.visibility = 'hidden';
	opt3.style.visibility = 'hidden';
	tb1.style.visibility = 'hidden';
	timer.style.visibility = 'hidden';
	stopCounter=0;
}

function startTimer(){
	document.getElementById('timer').innerHTML=counter;
	function timeIt(){
		if (stopCounter>0){
			counter--;
			document.getElementById('timer').innerHTML=counter;
		}
		else{
			document.getElementById('timer').innerHTML=counter;
		}
		if (counter==0){
			alert("Vreme za odgovor je isteklo!")
			checkAnswer();
}
	}
setInterval(timeIt, 1000); //postavljanje intervala na 1 sekundu
}
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
