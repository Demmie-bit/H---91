function addUser(){
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location = "game.html"
}

function check(){
    Answer = document.getElementById("Answer").value;

    localStorage.setItem("Answer", Answer);

}

function Send(){
   number_1 = document.getElementById("number_1").value;
    number_2 = document.getElementById("number_2").value;

    localStorage.setItem("number_1", number_1);
    localStorage.setItem("number_2", number_2);
}