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

    $sql="DELETE FROM filmovi WHERE movie_id = '$movieID'";
    $movies=$conn->query("SELECT * FROM filmovi");
    $isExisting=false;

    foreach($movies as $row){
        if($movieID==$row["movie_id"])
        $isExisting=true;
    }

    if($isExisting){
        mysqli_query($conn, $sql);
    }

    echo json_encode(array('Existing'=> $isExisting));
?>