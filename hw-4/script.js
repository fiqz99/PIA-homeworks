register.style.display="none";

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
                    //poziv funkcije stranica za admina
                    alert("Korisnik je admin");
                }
                else{
                    //poziv funkcije stranica za korisnika
                    alert("Korisnik postoji");
                }
            }
            else{
                alert("Uneti podaci nisu tacni!");
            }
        }
    });
}

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
