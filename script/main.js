let ai = 0;
let player = 0;

let player1 = 0;
let player2 = 0;
let multigame = false;

let player_1=-1;
let player_2=-1;


// 0 paper
// 1 scissors
// 2 rock

function singlemode() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("singleplayermode").style.display = "block";
}
function multimode() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("multiplayermode").style.display = "block";
    multigame = true;

}

// single mode

function myclick() {
    if (document.getElementById("gamestate").innerHTML == "START") {
        let ai_choice = Math.floor(Math.random() * 3);
        if (ai_choice == 0) {
            document.getElementById("ai").innerHTML = "Computer Chose Paper";
        } else if (ai_choice == 1) {
            document.getElementById("ai").innerHTML = "Computer Chose Scissors";
        } else {
            document.getElementById("ai").innerHTML = "Computer Chose Rock";
        }
        let p = document.querySelector('input[name="play"]:checked');
        game(p.value, ai_choice);
        document.getElementById("gamestate").innerHTML = "PLAY AGAIN";

    } else {
        document.getElementById("gamestate").innerHTML = "START";
        document.getElementById("ai").innerHTML = "Your Turn !";
        document.getElementById("state").innerHTML = "Rock Paper Scissors";
        document.getElementById("state").style.color = "white";
    }

}

function game(p1, p2) {
    if (p1 == p2) {
        document.getElementById("state").innerHTML = "DRAW";
        document.getElementById("state").style.color = "white";
    } else if (p1 == 0 && p2 == 2 || p1 == 1 && p2 == 0 || p1 == 2 && p2 == 1) {
        document.getElementById("state").innerHTML = "YOU WON";
        document.getElementById("state").style.color = "green";
        player++;
        document.getElementById("score").innerHTML = "You " + player + ":" + ai + " Ai";
    } else {
        document.getElementById("state").innerHTML = "YOU LOST";
        document.getElementById("state").style.color = "red";
        ai++;
        document.getElementById("score").innerHTML = "You " + player + ":" + ai + " Ai";
    }
}

// multi mode

document.onkeydown = function (event) {
    if (multigame) {
        playerchoice(event);
    }
}

function playerchoice(event) {
    let key = event.key;

    if (key == 'A' || key == "a") {
        player_1 = 0;
    }
    else if (key == 'S' || key == "s") {
        player_1 = 1;
    }
    else if (key == 'D' || key == "d") {
        player_1 = 2;
    }

    if (key == "ArrowLeft") {
        player_2 = 0;
    }
    else if (key == "ArrowUp") {
        player_2 = 1;
    }
    else if (key == "ArrowRight") {
        player_2 = 2;
    }


    if (player_1 != -1 && player_2 != -1) {
       
        multiplayergame(player_1, player_2);
    }

}

function multiplayergame(p1, p2) {
    let p1choice,p2choice;
    p1choice = find(p1);
    p2choice = find(p2);
    if (p1 == p2) {
        document.getElementById("multistate").innerHTML = "DRAW";
        document.getElementById("multistate").style.color = "white";
        document.getElementById("player1").innerHTML = "Chose "+p1choice;
        document.getElementById("player2").innerHTML = "Chose "+p2choice;
        player_1 = -1;
        player_2 = -1;

    } else if (p1 == 0 && p2 == 2 || p1 == 1 && p2 == 0 || p1 == 2 && p2 == 1) {
        document.getElementById("multistate").innerHTML = "PLAYER 1 WON";
        document.getElementById("multistate").style.color = "green";
        player1++;
        document.getElementById("multiscore").innerHTML = "Player 1 --- " + player1 + " : " + player2 + " --- Player 2";
        document.getElementById("player1").innerHTML = "Chose "+p1choice;
        document.getElementById("player2").innerHTML = "Chose "+p2choice;
        player_1 = -1;
        player_2 = -1;
    } else {
        document.getElementById("multistate").innerHTML = "PLAYER 2 WON";
        document.getElementById("multistate").style.color = "green";
        player2++;
        document.getElementById("multiscore").innerHTML = "Player 1 --- " + player1 + " : " + player2 + " --- Player 2";
        document.getElementById("player1").innerHTML = "Chose "+p1choice;
        document.getElementById("player2").innerHTML = "Chose "+p2choice;
        player_1 = -1;
        player_2 = -1;
    }
}

function find(choice){
    let stringchoice;
    if (choice == 0) {
        stringchoice="Paper";
    } else if (choice == 1) {
        stringchoice ="Scissors";
    } else {
        stringchoice="Rock";
    }
    return stringchoice;
} 
    
    