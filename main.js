// EVENT LISTENER
document.getElementById("submit-btn").addEventListener("click", btnClicked);

// GLOBAL VARIABLES
let frac = document.getElementById("total-score");
let f1 = document.getElementById("feedback1");
let f2 = document.getElementById("feedback2");
let f3 = document.getElementById("feedback3");
let f4 = document.getElementById("feedback4");
let f5 = document.getElementById("feedback5");
let msg = document.getElementById("end-note");

function btnClicked() {
    // VARIABLES
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
        f1.innerHTML = "incorrect"
    }

    if (q2 === "cologne" || q1 === "cologne ") {
        scoreCounter++;
        f1.innerHTML = "correct";
    } else {
        f1.innerHTML = "incorrect"
    }

    if (q3 === "10" || q3 === "10 ") {
        scoreCounter++;
        f1.innerHTML = "correct";
    } else {
        f1.innerHTML = "incorrect"
    }

    if (q4 === "elephant" || q4 === "elephant ") {
        scoreCounter++;
        f1.innerHTML = "correct";
    } else {
        f1.innerHTML = "incorrect"
    }

    if (q5 === "asia" || q5 === "asia ") {
        scoreCounter++;
        f1.innerHTML = "correct";
    } else {
        f1.innerHTML = "incorrect"
    }

    frac.innerHTML = `${scoreCounter}/5`;

    if (scoreCounter < 5) {
        msg.innerHTML = "would you like to give the incorrect answers another shot? If so, press retry button below:";
    } else {
        msg.innerHTML = "So you're the smart one";
    }
}