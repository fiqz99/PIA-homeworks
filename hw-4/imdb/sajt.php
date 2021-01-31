<?php
  $conn = new mysqli('localhost', 'fiqz99', 'test1234', 'filmovi');
  $query= "SELECT * FROM filmovi";
  $query2="SELECT * FROM filmovi";
  $result=mysqli_query($conn, $query);
  $result2=mysqli_query($conn, $query2)
?>
<!DOCTYPE html>
<html>
    <head>
        <title >
        MOVIES
        </title>
        <link href="style.css" rel="stylesheet">
        
    </head>
     <body>
     <button onclick="location.reload()" id="logOut" class="btn1">LogOut</button><br><br>
        <div id="logIn" class="logSign">
          <label class="l1">Korisnicko ime:</label><br>
          <input type="text" id="liName" placeholder="Username or e-mail" class="tb1"><br><br>
          <label class="l1">Lozinka:</label><br>
          <input type="password" id="liPass" placeholder="Password" class="tb1"><br><br>
          <button id="logInBttn" onclick="logIn1()" class="btn1" class="tb1">Log in</button><br><br>
          <button id="newAcc" onclick="change1()" class="btn1" class="tb1">Nemas nalog?</button>
        </div>
        <div id="register" class="logSign">
          <label class="l1">Ime i prezime:</label><br>
          <input type="text" id="rName" class="tb1" placeholder="Name and Surname"><br><br>

          <label class="l1">E-mail:</label><br>
          <input type="email" id="rMail" class="tb1" placeholder="example@something.com"><br><br>

          <label class="l1">Korisnicko ime:</label><br>
          <input type="text" id="rUser" class="tb1" placeholder="Username"><br><br>

          <label class="l1">Lozinka:</label><br>
          <input type="password" id="rPass" class="tb1" placeholder="Password"><br><br>
          
          <button onclick="signUp()" id="regBttn" class="btn1">Register</button><br><br>
          <button onclick="change2()" id="oldAcc" class="btn1">Imas nalog?</button>
        </div>

        <div id="admin" class="admin">
          <h1 class="l1">ADMIN STRANICA</h1>
          <div id="adminButtons">
          <button onclick="addMovie()" id="addMov" class="btn2">Dodaj film</button>
          <button onclick="editMovie()" id="edMov" class="btn2">Izmeni/obrisi</button>
          <button onclick="location.reload()" id="rel" class="btn2">Izloguj se</button>
          </div>
          <div id="add">
            
            <label class="l1">Naziv filma:</label><br>
            <input type="text" id="Title" class="tb1" ><br><br>
  
            <label class="l1">Opis filma:</label><br>
            <input type="text" id="Description" class="tb1"><br><br>
  
            <label class="l1">Zanr:</label><br>
            <input type="text" id="Genre" class="tb1" ><br><br>
  
            <label class="l1">Scenaristi:</label><br>
            <input type="text" id="Writters" class="tb1" ><br><br>

            <label class="l1">Reziseri:</label><br>
            <input type="text" id="Directors" class="tb1" ><br><br>

            <label class="l1">Produkcija:</label><br>
            <input type="text" id="Producers" class="tb1"><br><br>

            <label class="l1">Glumci:</label><br>
            <input type="text" id="Actors" class="tb1" ><br><br>

            <label class="l1">Godina:</label><br>
            <input type="number" id="Year" class="tb1" min="1900" max="2020"><br><br>

            <label class="l1">Duzina trajanja:</label><br>
            <input type="number" id="Lenght" class="tb1" max="3000"><br><br>

            <label class="l1">Fotografija:</label><br>
            <input type="text" id="Photo" class="tb1"><br><br>

            <button onclick="addMovie2()" id="addMov2" class="btn2">Dodaj!</button>
            <button onclick="backAdmin()" id="addMov3" class="btn2">Vrati se!</button>
          </div>
          <button onclick="changeMovie3()" id="chMov3" >Izmeni</button>
          
          <div id="change">

            <table id="tabela" border="1px" style="width:600px; line-height:40px" background-color="blue">
              <tr>
                <th colspan="4"><h2>Tabela filmova</h2></th>
              </tr>
              <t>
                <th>ID</th>
                <th>Film</th>
                <th>Godina</th>
                <th>Fotografija</th>
              </t>
              <?php
                while($rows=mysqli_fetch_assoc($result))
                {
                  ?>
                  <tr>
                    <td><?php echo $rows['movie_id']; ?></td>
                    <td><?php echo $rows['title']; ?></td>
                    <td><?php echo $rows['year']; ?></td>
                    <td><img src=<?php echo $rows['picture_path']; ?> style="width:75px;height:150px;"></td>
                  </tr>
              <?php
                }
              ?>
            </table>
            
            <label class="l1">Unesite id filma koji zelite:</label><br>
            <input type="number" id="changeNum" class="tb1"><br><br>
            <div id="buttons2">
              <button onclick="changeMovie2()" id="chMov2" class="btn2">Izmeni</button>
              <button onclick="deleteMovie2()" id="delMov2" class="btn2">Obrisi!</button>
              <button onclick="backAdmin()" id="addMov3" class="btn2">Vrati se!</button>
            </div>      
          </div>
        
        </div>
        
        <div id="user">
          <h1 align="center" class="l1">IMDB</h1>
          
          <div class="organizacija">
              <?php
                while($rows1=mysqli_fetch_assoc($result2))
                {
                  ?>
                  <div class="container2">
                  <button onclick="showMoreLess()" class="btn2" id=<?php echo $rows1['movie_id']?>>more/less</button>
                  <div class="container">
                    <img src=<?php echo $rows1['picture_path']; ?> style="width:400px;height:750px;" class="image">
                      <div class="overlay">
                        <div class="text"><?php echo $rows1['title'];?></div>
                        <br><br><br><br><br>
                        <div class="text2">Description: <?php echo $rows1['description']; ?></div><br><br>
                        <div class="text2">Genre: <?php echo $rows1['genre']; ?></div><br><br>
                        <div class="text2">Actors: <?php echo $rows1['actors']; ?></div><br><br>
                        <div class="text2">Writters: <?php echo $rows1['written_by']; ?></div><br><br>
                        <div class="text2">Directors: <?php echo $rows1['directed_by']; ?></div><br><br>
                        <div class="text2">Producer: <?php echo $rows1['produced_by']; ?></div><br><br>
                        <div class="text2">Year: <?php echo $rows1['year']; ?></div><br><br>
                        <div class="text2">Lenght: <?php echo $rows1['lenght']; ?></div><br><br>
                        <div class="text2">Average rate: <?php echo $rows1['avg_rate']; ?></div><br><br>
                        <div class="text2">Number of votes: <?php echo $rows1['num_votes']; ?></div><br><br>
                        <div class="text2">IMDB movie ID: <?php echo $rows1['movie_id']; ?></div><br><br>
                      </div>
                  </div>
               </div>
              <?php
                }
                ?>
              <div class="ocena">
                <label class="l1">Movie id:</label><br>
                <input type="number" id="base_id" class="tb1"><br><br>
                <label class="l1">Rate 1-10:</label><br>
                <input type="number" id="user_rate" class="tb1" min="1" max="10"><br><br>
                <button onclick="rate()" id="addRate" class="btn2">Rate!</button>
              </div>
          </div>
          
        </div>

        <script src="script.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src= "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
        <script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script> 
        <script src="https://ajax.aspnetcdn.com/ajax/mvc/5.2.3/jquery.validate.unobtrusive.min.js"></script>

    </body>
</html>