var ROCK = "piedra"
var PAPER = "papel"
var SICSSORS = "tijera"

var start = function(p1,p2){
    switch(p1 != p2){
        case p1 === ROCK && p2 === SICSSORS:
            alert("You win with ..." + ROCK);
            break;
        case p1 === PAPER && p2 === ROCK:
            alert("You win with ..." + PAPER);
            break;
        case p1 === SICSSORS &&  p2 === PAPER:
            alert("You win with ..." + SICSSORS);
            break;
        default:
            alert("You lost..! :,( ");
    };switch(true){
        case p1 === p2:
            alert("Drawn");
            break;
    }
    };