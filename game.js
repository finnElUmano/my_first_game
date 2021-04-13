var ROCK = "piedra"
var PAPER = "papel"
var SICSSORS = "tijera"

var start = function(p1,p2){
    if(p1 != p2) {
        if (p1 === ROCK && p2 === SICSSORS){
            console.log("Win with .." + ROCK);
        }else if(p1 === PAPER && p2 === ROCK){
            console.log("Win with .." + PAPER);
        }else if(p1 === SICSSORS && p2 === PAPER){
            console.log("Win with .." + SICSSORS);
        } else{
            console.log("loser");
        }
    }else if(p1 === p2){
        console.log("empate perro :,V")
    }
};