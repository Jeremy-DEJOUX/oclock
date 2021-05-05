<!-- Le but de ce projet est de reproduire un minuteur, un chronomètre, un réveil, et une horloge -->

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/56188ecd90.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>O'clockt</title>
    
</head>
    <body>
        <header></header>

        <main>
            <h1>O'Clock</h1>

            <div>
                <h2>Minuteur</h2>
                <i class="far fa-hourglass"></i>

                <form name="formulaire">
                    <input type="number" name="Clock" id="minuteur">

                    <label for="Time">Time:</label>
                    <input type="number" name="Time" id="my_Minuteur">
                    <button id="send_minuteur">Envoyer</button> <br>

                    <button id="more_time"> + </button>
                    <button id="less_time"> - </button>

                    
                </form>
            </div>

            <div>
                <h2>Chronomètre</h2>
                <i class="fas fa-stopwatch"></i>
            </div>

            <div>
                <h2>Réveil</h2>
                <i class="fas fa-bell"></i>
            </div>

            <div>
                <h2>Horloge</h2>
                <i class="fas fa-clock"></i>
                <span id="horloge"></span>
            </div>
        </main>

        <footer></footer>
        <script src="ressources/script.js"></script>
    </body>
</html>