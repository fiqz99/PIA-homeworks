<?php
    $conn = new mysqli('localhost', 'fiqz99', 'test1234', 'filmovi');
    $movie=$_POST['movies'];
    $movie = json_decode($movie,true);

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

    $sql="INSERT INTO `filmovi`(`title`, `description`, `genre`, `written_by`, `directed_by`, `produced_by`, `actors`, `year`, `lenght`, `picture_path`) VALUES ('$title','$description','$gerne','$writters','$directors','$producers','$actors','$year','$lenght','$picturePath')";

    if (mysqli_query($conn, $sql)){
        echo json_encode(array("statusCode"=>200));
    } 
    else {
        echo json_encode(array("statusCode"=>201));
    }

?>