
}
var i=0; //brojac koraka
var correctCount=0; //brojac tacnih odgovora
var counter=20; //brojac vremena
var stopCounter=1; //promenljiva koja sluzi za zaustavljanje vremena
var name=" "; //za ime ucesnika

fetch('podaci.json')
  .then(response => response.json())
    .then(data => {jsonData=data
    })

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
qPanel.style.visibility='hidden';
correctAnswer.style.visibility='hidden';

function start(){ 							//funkcija za zapocinjanje kviza
		if (document.getElementById("tb2").value==""){
			alert("Morate uneti ime!")
		}
		else{
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
		qPanel.style.visibility='visible';
		generate(0);
		startTimer();
		name=document.getElementById('tb2').value
		document.getElementById("nestaje").style.display = "none";
		}, 1000);
	}
		
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
function checkAnswer3(){ //funkcija koja broji poene ako je tacan odgovor 3
	if (jsonData[i].opt3==jsonData[i].ans){
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
		if (document.getElementById('tb1').value.toLowerCase() == jsonData[i].ans.toLowerCase()){ //tacan odgovor
			correctCount++;
			correctAnswer.style.visibility='visible';
			document.getElementById("correctAnswer").style.color="green";
			document.getElementById("correctAnswer").innerHTML="Odgovor je tacan!"
		}
		else { 														//netacan odgovor
			correctAnswer.style.visibility='visible';
			document.getElementById("correctAnswer").style.color="red";
			document.getElementById("correctAnswer").innerHTML="Odgovor je netacan! Tacan odgovor je: "  + jsonData[i].ans;
		}
	}
	disableButtons();
	btn0.disabled = 'true';
	timer.style.visibility = 'hidden';
	counter=20;
	stopCounter=0;
	setTimeout(function(){ 
		i++;
		generate(i);
		resetAnswers();
		correctAnswer.style.visibility='hidden';
		if (jsonData.length-1<i){ //funkcija koja proverava da li je doslo do poslednjeg pitanja
			quit();
		}
		else{
			stopCounter=1;
			timer.style.visibility = 'visible';
		}
		enableButtons();
	}, 3000);
}
function nextQuestion(){		//funkcija za preskakanje pitanja
	i++;
	stopCounter=0;
	counter=20;
	btn1.style.visibility = 'hidden';
	timer.style.visibility = 'hidden';
	disableButtons();
	setTimeout(function(){ 
		generate(i);
		if (jsonData.length-1<i){ //funkcija koja proverava da li je doslo do poslednjeg pitanja
			quit()
		}
		else{		
		stopCounter=1;
		timer.style.visibility = 'visible';
		}
		enableButtons();
	}, 3000);
}
function quit(){ 		//funkcija za odustajanje
	document.getElementById("question").innerHTML=name + " je osvojio " + correctCount + " poena!";
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
function disableButtons(){
	document.getElementById("opt1").disabled= true;
	document.getElementById("opt2").disabled= true;
	document.getElementById("opt3").disabled= true;
	document.getElementById("btn1").disabled= true;
	document.getElementById("btn2").disabled= true;
	document.getElementById("btn3").disabled= true;
}
function enableButtons(){
	document.getElementById("opt1").disabled= false;
	document.getElementById("opt2").disabled= false;
	document.getElementById("opt3").disabled= false;
	document.getElementById("btn1").disabled= false;
	document.getElementById("btn2").disabled= false;
	document.getElementById("btn3").disabled= false;
}
function resetAnswers(){
	document.getElementById("opt1").style.backgroundColor = "#eae0c2";
	document.getElementById("opt2").style.backgroundColor = "#eae0c2";
	document.getElementById("opt3").style.backgroundColor = "#eae0c2";
	document.getElementById("tb1").value="";
}
function reloadPage(){
	location.reload();
}
