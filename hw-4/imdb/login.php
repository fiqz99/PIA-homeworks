<?php

	$conn = new mysqli('localhost', 'fiqz99', 'test1234', 'korisnici');
	$user=$_POST['user'];


	$user = json_decode($user,true);
	$users=$conn->query("SELECT * FROM korisnici");
	
	$isAdmin=false;
	$isExisting=false;

	foreach($users as $row){
		if($user["email"]==$row["e-mail"] || $user["email"]==$row["username"]){
			if($user["password"]==$row["password"]){
				if($row["admin"]==0){
				//"korisnik je administrator";
					$isAdmin=true;
					$isExisting=true;
				}
				else{
			//"korisnik je korisnik";
					$isAdmin=false;
					$isExisting=true;
				}
				
			}
		}
	}
	echo json_encode(array('Admin'=> $isAdmin, 'Existing'=> $isExisting));

	
	
	$conn->close();	
?>

