let response;
let score;
let machineActive = true;
let para = document.querySelector("p");
let heading2 = document.querySelector("h2");
let inputScore = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", scoreResponse);

function scoreResponse() {
    score = inputScore.value;


    if (machineActive) {
        if (score >= 0 && score <= 19) {
            response = "That was a terrible score — total fail!";
            heading2.textContent = "Your Score is: " + score;
            para.textContent = response;
            para.style.color = "Black";
            heading2.style.color = "Black";
        }
        else if (score >= 20 && score <= 39) {
            response = "You know some things, but it\'s a pretty bad score. Needs improvement.";
            heading2.textContent = "Your Score is: " + score;
            para.textContent = response;
            para.style.color = "Black";
            heading2.style.color = "Black";
        } else if (score >= 40 && score <= 69) {
            response = "You did a passable job, not bad!";
            heading2.textContent = "Your Score is: " + score;
            para.textContent = response;
            para.style.color = "Black";
            heading2.style.color = "Black";
        }
        else if (score >= 70 && score <= 89) {
            response = "That\'s a great score, you really know your stuff.";
            heading2.textContent = "Your Score is: " + score;
            para.textContent = response;
            para.style.color = "Black";
            heading2.style.color = "Black";
        }
        else if (score >= 90 && score <= 100) {
            response = "What an amazing score! Did you cheat? Are you for real?";
            heading2.textContent = "Your Score is: " + score;
            para.textContent = response;
            para.style.color = "Black";
            heading2.style.color = "Black";
        }
        else {
            response = "Enter Score between 0 to 100";
            heading2.textContent = "Your Score is: " + score;
            para.textContent = response;
            para.style.color = "Red";
            heading2.style.color = "Red";
        }
    }
}