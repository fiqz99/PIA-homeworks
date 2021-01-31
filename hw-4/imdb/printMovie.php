<?php
    $conn = new mysqli('localhost', 'fiqz99', 'test1234', 'filmovi');
    $movie=$_POST['movies'];
    $movie = json_decode($movie,true);
    $movieID=$movie["movieID"];

    $movies=$conn->query("SELECT * FROM filmovi");
    $isExisting=false;

    foreach($movies as $row){
        if($movieID==$row["movie_id"]){
        $isExisting=true;
        }
    }
    
    
    if($isExisting){
        $filmovi=$conn->query("SELECT * FROM filmovi WHERE movie_id = '$movieID'");
        foreach($filmovi as $m){
        echo json_encode(array('Existing' => $isExisting, 'Title' => $m["title"], 'Description' => $m["description"], 'Genre' => $m["genre"], 'Writters' => $m["written_by"],'Directors' => $m["directed_by"],'Producers' => $m["produced_by"], 'Actors' => $m["actors"], 'Year' => $m["year"], 'Lenght' => $m["lenght"], 'Photo' => $m["picture_path"]));
        
    }
    }
    else{
        echo json_encode(array('Existing'=> $isExisting));
    }


?>