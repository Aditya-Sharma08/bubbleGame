var timer = 59;
var score = 0;
var hitrn = 0;
var highscore = 0;

function makeBubble() {
  var clutter = "";

  for (let i = 1; i <= 96; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#panelbtm").innerHTML = clutter;
}

function topBar() {
  document.querySelector("#paneltop").innerHTML = `<div id="paneltop">
    <div class="elem">
        <h2>Hit</h2>
        <div id="hitlist" class="box"><h3>0</h3></div>
    </div>
    <div class="elem">
        <h2>Timer</h2>
        <div id="time" class="box"><h3>60</h3>
        </div>
    </div> 
    <div class="elem">
        <h2>Score</h2>
        <div id="res" class="box"><h3>0</h3></div>
    </div>
    </div>`;
}

function timerFunc() {
  var interval = setInterval(() => {
    if (timer >= 0) {
      document.querySelector("#time").innerHTML = `<h3>${timer}</h3>`;
      timer--;
    } else {
      clearInterval(interval);
      document.querySelector("#panelbtm").innerHTML = `<div id="panelbtm">
            <div class="start">
                <h1>GAME OVER</h1> 
                <h3>SCORE: ${score}</h3>
                <h5>HIGH SCORE: ${highscore}</h5>
                <button>Play Again!</button>
            </div> 
            </div>`;

      document.querySelector(
        "#paneltop"
      ).innerHTML = `<div id="paneltop" style="justify-content: center">
            <div class="elem">
                <h2>Made with💚by @adityakahanhai_</h2>
            </div> 
            </div>`;

      document.querySelector("button").addEventListener("click", function () {
        console.log("restart");
        timer = 59;
        score = 0;
        playGame();
      });
    }
  }, 1000);
}

function setHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitlist").innerHTML = `<h3>${hitrn}</h3>`;
}

function scoreFunc() {
  document
    .querySelector("#panelbtm")
    .addEventListener("click", function (dets) {
      var num = Number(dets.target.textContent);
      if (num === hitrn) {
        score += 10;
        if (score > highscore) {
          highscore = score;
        }
        makeBubble();
        setHit();
        document.querySelector("#res").textContent = score;
      }
    });
}

function playGame() {
  document.querySelector("button").addEventListener("click", function () {
    makeBubble();
    topBar();
    setHit();
    scoreFunc();
    timerFunc();
  });
}

function playAgain() {}

playGame();
