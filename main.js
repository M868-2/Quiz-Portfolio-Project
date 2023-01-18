// EVENT LISTENER
document.getElementById("submit-btn").addEventListener("click", btnClicked);

// GLOBAL VARIABLES
let btn = document.getElementById("submit-btn");
let frac = document.getElementById("total-score");
let f1 = document.getElementById("feedback1");
let f2 = document.getElementById("feedback2");
let f3 = document.getElementById("feedback3");
let f4 = document.getElementById("feedback4");
let f5 = document.getElementById("feedback5");
let msg = document.getElementById("end-note");
let qns = document.getElementById("questions");
let scr = document.getElementById("score-div");

function btnClicked() {
  // VARIABLES
  qn1 = true;
  qn2 = true;
  qn3 = true;
  qn4 = true;
  qn5 = true;
  let q1 = document.getElementById("qnOne").value;
  let q2 = document.getElementById("qnTwo").value.toLowerCase();
  let q3 = document.getElementById("qnThree").value;
  let q4 = document.getElementById("qnFour").value.toLowerCase();
  let q5 = document.getElementById("qnFive").value.toLowerCase();

  let scoreCounter = 0;

  // IF STATEMENTS
  if (q1 === "12" || q1 === "12 ") {
    scoreCounter++;
    f1.innerHTML = "correct";
  } else {
    f1.innerHTML = "incorrect";
    qn1 = false;
  }

  if (q2 === "cologne" || q1 === "cologne ") {
    scoreCounter++;
    f2.innerHTML = "correct";
  } else {
    f2.innerHTML = "incorrect";
    qn2 = false;
  }

  if (q3 === "10" || q3 === "10 ") {
    scoreCounter++;
    f3.innerHTML = "correct";
  } else {
    f3.innerHTML = "incorrect";
    qn3 = false;
  }

  if (q4 === "elephant" || q4 === "elephant " || q4 === "elephants" || q4 === "elephants ") {
    scoreCounter++;
    f4.innerHTML = "correct";
  } else {
    f4.innerHTML = "incorrect";
    qn4 = false;
  }

  if (q5 === "asia" || q5 === "asia ") {
    scoreCounter++;
    f5.innerHTML = "correct";
  } else {
    f5.innerHTML = "incorrect";
    qn5 = false;
  }

  frac.innerHTML = `${scoreCounter}/5`;

  if (scoreCounter < 5) {
    btn.innerHTML = "Retry";
    msg.innerHTML = "would you like to give to give the incorrect answers another try?";
    document.getElementById("submit-btn").addEventListener("click", rtryBtnClicked);

    function rtryBtnClicked() {
      // VARIALES, EXTRA STUFF
      qns.innerHTML = null;
      frac.innerHTML = null;
      msg.innerHTML = null;
      let points = 0;

      // IF STATEMENTS FOR ANY QUESTIONS USER GETS WRONG
      if ((qn1 === false)) {
        qns.innerHTML += `<p>How many continents and oceans are there?</p> <p><input id="qnOne" type="text"></p> <p id="feedback1" ></p> <hr>`;
      } 
      if ((qn2 === false)) {
        qns.innerHTML += `<p>Which German city is famous for the perfume it produces?</p> <p><input id="qnTwo" type="text"></p> <p id="feedback2" ></p> <hr>`;
      }  
      if ((qn3 === false)) {
        qns.innerHTML += `<p>How many events are there in a decathlon?</p> <p><input id="qnThree" type="text"></p> <p id="feedback3" ></p> <hr>`;
      }  
      if ((qn4 === false)) {
        qns.innerHTML += `<p>Which is the only mammal that cannot jump</p> <p><input id="qnFour" type="text"></p> <p id="feedback4" ></p> <hr>`;
      } 
      if ((qn5 === false)) {
        qns.innerHTML += `<p>India is a part of which continent?</p> <p><input id="qnFive" type="text"></p> <p id="feedback5" ></p> <hr>`;
      }
      qns.innerHTML += '<p><button id="submit-btn" >Submit</button></p>';

    }
  } else {
    msg.innerHTML = "So you're the smart one";
  }

}
