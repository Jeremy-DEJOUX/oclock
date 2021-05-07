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

            <section>
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
            </section>

                <br><br><br><br>

            <section class="stopwatch">
                <h1>STOPWATCH</h1>

                <article class="circle">
                    <span class="time" id="display">00:00:00</span>
                </article>

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
            </section>

            <br><br><br><br>


            <section>
                <h2>Réveil</h2>
                <i class="fas fa-bell"></i>
                <span id="reveil"></span>


                <div id='alarm-container'>
                    <h3>Set Alarm Time</h3>

                    <label>
                        <div>
                        <select id='alarmhrs' ></select>
                        </div>
                    </label>


                    <label>
                        <div>
                        <select id='alarmmins' ></select>
                        </div>
                    </label>


                    <label>
                        <div>
                        <select id='alarmsecs' ></select>
                        </div>
                    </label>


                    <label>
                        <div>
                            <select id="ampm">
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </label>
                </div>
            </section>

            <section>
                <h2>Horloge</h2>
                <i class="fas fa-clock"></i>
                <span id="horloge"></span>
            </section>
        </main>

        <footer></footer>

        <script src="ressources/script.js"></script>
    </body>
</html>