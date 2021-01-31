<?php 
    $conn = new mysqli('localhost', 'fiqz99', 'test1234', 'filmovi');
    $movie=$_POST['movies'];
    $movie = json_decode($movie,true);

   
    $mark= $movie["Rate"];
    $movieID=$movie["movieID"];

    $movies=$conn->query("SELECT * FROM filmovi");
    $isExisting=false;
    $avgRate=0;
    $numVotes=0;
    foreach($movies as $row){
        if($movie["movieID"]==$row["movie_id"]){
        $isExisting=true;
        }
    }
    if($isExisting){
        $filmovi=$conn->query("SELECT * FROM filmovi WHERE filmovi.movie_id = $movieID");
        foreach($filmovi as $m){
            $avgRate=$m["avg_rate"];
            $numVotes=$m["num_votes"];
        }
            

       if($avgRate==0){
            $avgRate=$mark;
            $numVotes=$numVotes+1;
        }
        else{
            $avgRate=($avgRate*$numVotes+$mark)/($numVotes+1);
            $numVotes=$numVotes+1;
        }



    
        $sql = "UPDATE filmovi SET  avg_rate = '$avgRate', num_votes = '$numVotes' WHERE movie_id = '$movieID'";
        if (mysqli_query($conn, $sql)){
            echo json_encode(array("statusCode"=>200));
        }
    }
    else{
        echo json_encode(array("statusCode"=>201));
    }

?>