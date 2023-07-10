"use strict"

let flag = "A-flag";

let counter = 9;

const squares = document.getElementsByClassName("square");

const squaresArray = Array.from(squares);

const a_1 = document.getElementById("a_1");
const a_2 = document.getElementById("a_2");
const a_3 = document.getElementById("a_3");
const a_4 = document.getElementById("a_4");
const a_5 = document.getElementById("a_5");

const b_1 = document.getElementById("b_1");
const b_2 = document.getElementById("b_2");
const b_3 = document.getElementById("b_3");
const b_4 = document.getElementById("b_4");
const b_5 = document.getElementById("b_5");

const c_1 = document.getElementById("c_1");
const c_2 = document.getElementById("c_2");
const c_3 = document.getElementById("c_3");
const c_4 = document.getElementById("c_4");
const c_5 = document.getElementById("c_5");

const d_1 = document.getElementById("d_1");
const d_2 = document.getElementById("d_2");
const d_3 = document.getElementById("d_3");
const d_4 = document.getElementById("d_4");
const d_5 = document.getElementById("d_5");

const e_1 = document.getElementById("e_1");
const e_2 = document.getElementById("e_2");
const e_3 = document.getElementById("e_3");
const e_4 = document.getElementById("e_4");
const e_5 = document.getElementById("e_5");

const newgamebtn_display = document.getElementById("newgame-btn");
const newgamebtn = document.getElementById("btn90");

const line1 = JudgeLine(squaresArray, ["a_1","a_2","a_3"]);
const line2 = JudgeLine(squaresArray, ["b_1","b_2","b_3"]);
const line3 = JudgeLine(squaresArray, ["c_1","c_2","c_3"]);
const line4 = JudgeLine(squaresArray, ["a_1","b_1","c_1"]);
const line5 = JudgeLine(squaresArray, ["a_2","b_2","c_2"]);
const line6 = JudgeLine(squaresArray, ["a_3","b_3","c_3"]);
const line7 = JudgeLine(squaresArray, ["a_1","b_2","c_3"]);
const line8 = JudgeLine(squaresArray, ["a_3","b_2","c_1"]);


const lineArray = [line1 , line2 , line3 , line4 , line5 , line6 , line7 , line8];

let winningLine = null;

const msgtxt1 = '<p class = "image"><img src = "img/penguins.jpg" width=61px height=61px></p><p class = "text">Penguins Attack!</p>';
const msgtxt2 = '<p class = "image"><img src = "img/whitebear.jpg" width=61px height=61px></p><p class = "text">WhiteBear Attack!</p>';
const msgtxt3 = '<p class = "image"><img src = "img/penguins.jpg" width=61px height=61px></p><p class = "text animate__animated animate__lightSpeedInRight">Penguins Win!</p>';
const msgtxt4 = '<p class = "image"><img src = "img/whitebear.jpg" width=61px height=61px></p><p class = "text animate__animated animate__lightSpeedInLeft">WhiteBears Win!</p>';
const msgtxt5 = '<p class = "image"><img src = "img/penguins.jpg" width=61px height=61px><img src="img/whitebear.jpg" width=61px height=61px></p><p class = "text animate__bounceIn">Draw!!</p>';

function JudgeLine(targetArray, idArray){
    return targetArray.filter(function(e){
        return(e.id === idArray[0] || e.id === idArray[1] || e.id === idArray[2]);
    });
}


 window.addEventListener("DOMContentLoaded",
    function(){
        setMessage("pen-turn");
    },false
);

a_1.addEventListener("click",
    function(){
        isSelect(a_1);
    },false
);

a_2.addEventListener("click",()=>{
    isSelect(a_2);
});

a_3.addEventListener("click",()=>{
    isSelect(a_3);
});

b_1.addEventListener("click",()=>{
    isSelect(b_1);
});

b_2.addEventListener("click",()=>{
    isSelect(b_2);
});

b_3.addEventListener("click",()=>{
    isSelect(b_3);
});

c_1.addEventListener("click",()=>{
    isSelect(c_1);
});

c_2.addEventListener("click",()=>{
    isSelect(c_2);
});

c_3.addEventListener("click",()=>{
    isSelect(c_3);
});


function isSelect(selectSquare){
    if(flag === "A-flag"){
        selectSquare.classList.add("js-pen-checked");
        selectSquare.classList.add("js-unclickable");


        if(isWinner("penguins")){
            setMessage("pen-win");
            gameOver("penguins");
            return;
        }
        setMessage("bear-turn");
        flag="B-flag";
    }else{
        selectSquare.classList.add("js-bear-checked");
        selectSquare.classList.add("js-unclickable");


        if(isWinner("bear")){
            setMessage("bear-win");
            gameOver("bear");
            return;
        }
        setMessage("pen-turn");
        flag="A-flag";
    }

    counter--;

    if(counter === 0){
        setMessage("draw");
        gameOver("draw");
    }
}

function isWinner(symbol){

    const result = lineArray.some(function(line){
        const subResult = line.every(function(square){
            if(symbol === "penguins"){
                return square.classList.contains("js-pen-checked");
            }

            if (symbol === "bear"){
                return square.classList.contains("js-bear-checked");
            }
        });
        if(subResult){ winningLine = line }
        return subResult;
    });
    return result;
}


function setMessage(id){
    switch(id){
        case "pen-turn":
            document.getElementById("msgtext").innerHTML=msgtxt1;
            break;
        case "bear-turn":
            document.getElementById("msgtext").innerHTML=msgtxt2;
            break;
        case "pen-win":
            document.getElementById("msgtext").innerHTML=msgtxt3;
            break;
        case "bear-win":
            document.getElementById("msgtext").innerHTML=msgtxt4;
            break;
        case "draw":
            document.getElementById("msgtext").innerHTML=msgtxt5;
            break;
        default:
            document.getElementById("msgtext").innerHTML=msgtxt1;
            break;
            
    }
}


function gameOver(status){
    squaresArray.forEach(function(square){
        square.classList.add("js-unclickable");
    });

    newgamebtn_display.classList.remove("js-hidden");

    if(status === "penguins"){
        if(winningLine){
            winningLine.forEach(function(square){
                square.classList.add("js-pen_highLight");
            });
        }
        $(document).snowfall({
            flakeColor : "rgb(255,240,245)",
            maxSpeed: 15,
            minSpeed: 15,
            maxSize: 20,
            minSize: 10,
            round: true
        });
    }else if(status === "bear"){
        if(winningLine){
            winningLine.forEach(function(square){
                square.classList.add("js-bear_highLight");
            });
        }

        $(document).snowfall({
            flakeColor : "rgb(87,87,87)",
            maxSpeed: 60,
            minSpeed: 70,
            maxSize: 15,
            minSize: 15,
            round: true
        });
    }
}

newgamebtn.addEventListener("click",()=>{
    flag = "A-flag";
    counter = 9;
    winningLine = null;
    squaresArray.forEach(function(square){
        square.classList.remove("js-pen-checked");
        square.classList.remove("js-bear-checked");
        square.classList.remove("js-unclickable");
        square.classList.remove("js-pen_highLight");
        square.classList.remove("js-bear_highLight");
    });

    setMessage("pen-turn");
    newgamebtn_display.classList.add("js-hidden");

    $(document).snowfall("clear");
});
