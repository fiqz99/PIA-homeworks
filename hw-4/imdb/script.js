//pocetna stanja elemenata 
register.style.display="none";
admin.style.display="none";
user.style.display="none";
add.style.display="none";
change.style.display="none";
buttons2.style.display="inline";
chMov3.style.display="none";
logOut.style.display="none";
sakrij=0;
brojFilmova=0;

//promena izmedju stranice za login i registraciju
function change1(){
    liName.Text = "";
    liPass.Text = "";
    register.style.display="inline";
    logIn.style.display="none";
}
function change2(){
    register.style.display="none";
    logIn.style.display="inline";
}
//funkcija koja izvrsava login
function logIn1(){
    let data=JSON.stringify({
        "email"     : document.getElementById("liName").value,
        "password"  : document.getElementById("liPass").value
    });
    $.ajax({
        url: 'login.php',
        type: 'post',
        data: {user: data},
        success: function(answer){
            console.log(answer);
            let info= JSON.parse(answer);
            if(info['Existing']){
                if(info['Admin']){
                    admin.style.display="inline";
                    logIn.style.display="none";
                }
                else{
                    user.style.display="inline";
                    logIn.style.display="none";
                    logOut.style.display="inline";
                }
            }
            else{
                alert("Uneti podaci nisu tacni!");
            }
        showMoreLess();
        }
    });
}
//funkcija koja izvrsava registraciju
function signUp(){
    let data=JSON.stringify({
        "nameSur"     : document.getElementById("rName").value,
        "email"       : document.getElementById("rMail").value,
        "username"    : document.getElementById("rUser").value,
        "password"    : document.getElementById("rPass").value
    });
    $.ajax({
        url: 'register.php',
        type: 'post',
        data: {user: data},
        success: function(dataResult){
            var dataResult = JSON.parse(dataResult);
					if(dataResult.statusCode==200){
						$("#butsave").removeAttr("disabled");
						$('#fupForm').find('input:text').val('');
						$("#success").show();
                        $('#success').html('Data added successfully !'); 
                        alert("Uspesno ste se registrovali!");
                        location.reload();					
					}
					else if(dataResult.statusCode==201){
					   alert("Error occured !");
                    }
                    else if (dataResult.statusCode==202){
                        alert("Nalog sa tim podacima vec postoji! Pokusajte ponovo!");
                        location.reload();
                    }
        }
    });
}
//funkcija koja vodi do elemenata za dodavanje filma na admin stranici
function addMovie(){
    add.style.display="inline";
    adminButtons.style.display="none";
}
//funkcija koja dodaje film u bazu podataka
function addMovie2(){
    let data=JSON.stringify({
        "Title"             : document.getElementById("Title").value,
        "Description"       : document.getElementById("Description").value,
        "Genre"             : document.getElementById("Genre").value,
        "Writters"          : document.getElementById("Writters").value,
        "Directors"         : document.getElementById("Directors").value,
        "Producers"         : document.getElementById("Producers").value,
        "Actors"            : document.getElementById("Actors").value,
        "Year"              : document.getElementById("Year").value,
        "Lenght"            : document.getElementById("Lenght").value,
        "Photo"             : document.getElementById("Photo").value
    });
    $.ajax({
        url: 'addMovie.php',
        type: 'post',
        data: {movies: data},
        success: function(dataResult){
            var dataResult = JSON.parse(dataResult);
					if(dataResult.statusCode==200){
						$("#butsave").removeAttr("disabled");
						$('#fupForm').find('input:text').val('');
						$("#success").show();
                        $('#success').html('Data added successfully !'); 
                        alert("Uspesno ste se uneli novi film!");
                        backAdmin();				
					}
					else if(dataResult.statusCode==201){
					   alert("Error occured !");
                    }
        }
    });
}
//funkcija koja vodi nazad na admin stranicu
function backAdmin(){
    document.getElementById("Title").value = "";
    document.getElementById("Description").value = "";
    document.getElementById("Genre").value = "";
    document.getElementById("Writters").value = "";
    document.getElementById("Directors").value = "";
    document.getElementById("Producers").value = "";
    document.getElementById("Actors").value = "";
    document.getElementById("Year").value = "";
    document.getElementById("Lenght").value = "";
    document.getElementById("Photo").value = "";
    document.getElementById("changeNum").value="";
    change.style.display="none";
    add.style.display="none";
    adminButtons.style.display="inline";
    buttons2.style.display="none";
    chMov3.style.display="none";
}
//funkcija koja vodi na stranicu za promenu podataka o filmu ili brisanje filma iz baze
function editMovie(){
    change.style.display="inline";
    adminButtons.style.display="none";
    buttons2.style.display="inline";
}
//funkcija koja brise film iz baze
function deleteMovie2(){
    let data=JSON.stringify({
        "movieID"     : document.getElementById("changeNum").value
    });
    $.ajax({
        url: 'deleteMovie.php',
        type: 'post',
        data: {movies: data},
        success: function(dataResult){
            var dataResult = JSON.parse(dataResult);
					if(dataResult["Existing"]){
                        alert("Film je uspesno uklonjen! Promene ce biti vidljive pri ponovnom ucitavanju stranice!");
                        backAdmin();				
					}
					else {
					   alert("Ne postoji film za uneti ID!");
                    }
        }
    });
}
//ucitavanje podataka o filmu u textboxove kako bi se kasnije promenili
function changeMovie2(){
    let data=JSON.stringify({
        "movieID"     : document.getElementById("changeNum").value
    });
    $.ajax({
        url: 'printMovie.php',
        type: 'post',
        data: {movies: data},
        success: function(dataResult){
            console.log(dataResult);  
            var dataResult = JSON.parse(dataResult);
            
                        if(dataResult["Existing"]){
                        document.getElementById("Title").value = dataResult["Title"];
                        document.getElementById("Description").value = dataResult["Description"];
                        document.getElementById("Genre").value = dataResult["Genre"];
                        document.getElementById("Writters").value = dataResult["Writters"];
                        document.getElementById("Directors").value = dataResult["Directors"];
                        document.getElementById("Producers").value = dataResult["Producers"];
                        document.getElementById("Actors").value = dataResult["Actors"];
                        document.getElementById("Year").value = dataResult["Year"];
                        document.getElementById("Lenght").value = dataResult["Lenght"];
                        document.getElementById("Photo").value = dataResult["Photo"];
                        add.style.display="inline";
                        change.style.display="none";
                        buttons2.style.display="none";
                        chMov3.style.display="inline";
                        addMov2.style.display="none";
                        //addMov3.style.display="none";			
					}
					else {
					   alert("Ne postoji film za uneti ID!");
                    }
        }
    });
    
}
//promena postojecih podataka iz tabele
function changeMovie3(){
    let data=JSON.stringify({
        "movieID"           : document.getElementById("changeNum").value,
        "Title"             : document.getElementById("Title").value,
        "Description"       : document.getElementById("Description").value,
        "Genre"             : document.getElementById("Genre").value,
        "Writters"          : document.getElementById("Writters").value,
        "Directors"         : document.getElementById("Directors").value,
        "Producers"         : document.getElementById("Producers").value,
        "Actors"            : document.getElementById("Actors").value,
        "Year"              : document.getElementById("Year").value,
        "Lenght"            : document.getElementById("Lenght").value,
        "Photo"             : document.getElementById("Photo").value
    });
    $.ajax({
        url: 'changeMovie.php',
        type: 'post',
        data: {movies: data},
        success: function(dataResult){
            console.log(dataResult);
            var dataResult = JSON.parse(dataResult);
					if(dataResult.statusCode==200){
						$("#butsave").removeAttr("disabled");
						$('#fupForm').find('input:text').val('');
						$("#success").show();
                        $('#success').html('Data added successfully !'); 
                        alert("Uspesno ste se izmenili film!");
                        backAdmin();				
					}
					else if(dataResult.statusCode==201){
					   alert("Greska!");
                    }
        }
    });
}
function showMoreLess(){
    var divsToHide2 = document.getElementsByClassName("text2");
    var divsToHide = document.getElementsByClassName("text");
    if(sakrij==0){
         
        for(var i = 0; i < divsToHide.length; i++){
            divsToHide[i].style.display = "inline"; 
        }
        for(var i = 0; i < divsToHide2.length; i++){
            divsToHide2[i].style.display = "none"; 
        }
        sakrij=1;
    }
    else{
        for(var i = 0; i < divsToHide.length; i++){
            divsToHide[i].style.display = "none"; 
        }
        for(var i = 0; i < divsToHide2.length; i++){
            divsToHide2[i].style.display = "inline"; 
        }
       // document.getElementById("moreLess").innerHTML="Prikazi Manje";
        sakrij=0;
    }
}
function rate(){
    let data=JSON.stringify({
        "movieID"           : document.getElementById("base_id").value,
        "Rate"              : document.getElementById("user_rate").value,
    });
    $.ajax({
        url: 'rateMovie.php',
        type: 'post',
        data: {movies: data},
        success: function(dataResult){
            console.log(dataResult);
            var dataResult = JSON.parse(dataResult);
					if(dataResult.statusCode==200){
                        alert("Ocena je uspesno dodata!");
					}
					else if(dataResult.statusCode==201){
                        alert("Greska!");
                     }
        }
    });
}
