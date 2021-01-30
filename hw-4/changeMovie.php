<?php
    $conn = new mysqli('localhost', 'fiqz99', 'test1234', 'filmovi');
    $movie=$_POST['movies'];
    $movie = json_decode($movie,true);
    
    $movieID=$movie["movieID"];
    $title = $movie["Title"];
    $description = $movie["Description"];
    $gerne = $movie["Genre"];
    $writters = $movie["Writters"];
    $directors = $movie["Directors"];
    $producers = $movie["Producers"];
    $actors = $movie["Actors"];
    $year = $movie["Year"];
    $lenght = $movie["Lenght"];
    $picturePath = $movie["Photo"];
    
   // $sql="UPDATE `filmovi` SET `title` = $title, `description` = $description, `genre` = $gerne, `written_by` = $writters, `directed_by` = $directors, `produced_by` = $producers, `actors` = $actors, `year` =  $year, `lenght` = $lenght, `picture_path` = $picturePath WHERE movie_id = $movieID";
    $sql = "UPDATE filmovi SET title = '$title', description = '$description', genre = '$gerne', written_by = '$writters', directed_by = '$directors', produced_by = '$producers', actors = '$actors', year = '$year', lenght = '$lenght', picture_path = '$picturePath' WHERE movie_id = '$movieID'";
    if (mysqli_query($conn, $sql)){//  $db->query($sql);
        echo json_encode(array("statusCode"=>200));
    } 
    else {
        echo json_encode(array("statusCode"=>201));
    }
?>