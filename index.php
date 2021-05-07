<!-- Le but de ce projet est de reproduire un minuteur, un chronomètre, un réveil, et une horloge -->

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/56188ecd90.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="ressources/style.css">
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

                <br><br><br><br>

            <div class="stopwatch">
                <h1><span class="gold">GOLD</span> STOPWATCH</h1>
                <div class="circle">
                    <span class="time" id="display">00:00:00</span>
                </div>

                <div class="controls">
                    <button class="buttonPlay">
                    <img id="playButton" src="https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/play-button_opkxmt.svg" />

                    <img id="pauseButton" src="https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/pause-button_pinhpy.svg" />
                    </button>

                    <button class="buttonReset">
                    <img id="resetButton" src="https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/reset-button_mdv6wf.svg" />
                    </button>

                    <button id="lapButton">Lap</button>
                    
                    <ul id="lapDisplay">
                    
                    </ul>

                    <button id="clearButton">Clear</button>
                </div>
            </div>

            <br><br><br><br>


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