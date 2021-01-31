<?php
    	$conn = new mysqli('localhost', 'fiqz99', 'test1234', 'korisnici');
        $user=$_POST['user'];
    
    
        $user = json_decode($user,true);

        $ime=$user["nameSur"];
        $email=$user["email"];
        $nickName=$user["username"];
        $pwd=$user["password"];
        $sql="INSERT INTO `korisnici`(`nameSurname`, `e-mail`, `username`, `password`) VALUES ('$ime','$email','$nickName','$pwd')";
        $users=$conn->query("SELECT * FROM korisnici");
        $zauzeto=false;
        foreach ($users as $row){
            if($email==$row["e-mail"] || $ime==$row["username"]){
              $zauzeto=true;
              break;
            }
          }
    if($zauzeto==false){  
        if (mysqli_query($conn, $sql)) {
            echo json_encode(array("statusCode"=>200));
        } 
        else {
            echo json_encode(array("statusCode"=>201));
        }
    }
    else{
        echo json_encode(array("statusCode"=>202));
    }
        mysqli_close($conn);
    
?>