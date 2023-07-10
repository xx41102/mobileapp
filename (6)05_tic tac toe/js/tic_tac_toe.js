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
const line2 = JudgeLine(squaresArray, ["a_2","a_3","a_4"]);
const line3 = JudgeLine(squaresArray, ["a_3","a_4","a_5"]);

const line4 = JudgeLine(squaresArray, ["b_1","b_2","b_3"]);
const line5 = JudgeLine(squaresArray, ["b_2","b_3","b_4"]);
const line6 = JudgeLine(squaresArray, ["b_3","b_4","b_5"]);

const line7 = JudgeLine(squaresArray, ["c_1","c_2","c_3"]);
const line8 = JudgeLine(squaresArray, ["c_2","c_3","c_4"]);
const line9 = JudgeLine(squaresArray, ["c_3","c_4","c_5"]);

const line10 = JudgeLine(squaresArray, ["d_1","d_2","d_3"]);
const line11 = JudgeLine(squaresArray, ["d_2","d_3","d_4"]);
const line12 = JudgeLine(squaresArray, ["d_3","d_4","d_5"]);

const line13 = JudgeLine(squaresArray, ["e_1","e_2","e_3"]);
const line14 = JudgeLine(squaresArray, ["e_2","e_3","e_4"]);
const line15 = JudgeLine(squaresArray, ["e_3","e_4","e_5"]);

const line16 = JudgeLine(squaresArray, ["a_1","b_1","c_1"]);
const line17 = JudgeLine(squaresArray, ["a_2","b_2","c_2"]);
const line18 = JudgeLine(squaresArray, ["a_3","b_3","c_3"]);
const line19 = JudgeLine(squaresArray, ["a_4","b_4","c_4"]);
const line20 = JudgeLine(squaresArray, ["a_5","b_5","c_5"]);


const line21 = JudgeLine(squaresArray, ["b_1","c_1","d_1"]);
const line22 = JudgeLine(squaresArray, ["b_2","c_2","d_2"]);
const line23 = JudgeLine(squaresArray, ["b_3","c_3","d_3"]);
const line24 = JudgeLine(squaresArray, ["b_4","c_4","d_4"]);
const line25 = JudgeLine(squaresArray, ["b_5","c_5","d_5"]);


const line26 = JudgeLine(squaresArray, ["c_1","d_1","e_1"]);
const line27 = JudgeLine(squaresArray, ["c_2","d_2","e_2"]);
const line28 = JudgeLine(squaresArray, ["c_3","d_3","e_3"]);
const line29 = JudgeLine(squaresArray, ["c_4","d_4","e_4"]);
const line30 = JudgeLine(squaresArray, ["c_5","d_5","e_5"]);


const line31 = JudgeLine(squaresArray, ["a_3","b_4","c_5"]);
const line32 = JudgeLine(squaresArray, ["a_2","b_3","c_4"]);
const line33 = JudgeLine(squaresArray, ["b_3","c_4","d_5"]);
const line34 = JudgeLine(squaresArray, ["a_1","b_2","c_3"]);
const line35 = JudgeLine(squaresArray, ["b_2","c_3","d_4"]);
const line36 = JudgeLine(squaresArray, ["c_3","d_4","e_5"]);
const line37 = JudgeLine(squaresArray, ["b_1","c_2","d_3"]);
const line38 = JudgeLine(squaresArray, ["c_2","d_3","e_4"]);
const line39 = JudgeLine(squaresArray, ["c_1","d_2","e_3"]);


const line40 = JudgeLine(squaresArray, ["a_3","b_2","c_1"]);
const line41 = JudgeLine(squaresArray, ["a_4","b_3","c_2"]);
const line42 = JudgeLine(squaresArray, ["b_3","c_2","d_1"]);
const line43 = JudgeLine(squaresArray, ["a_5","b_4","c_3"]);
const line44 = JudgeLine(squaresArray, ["b_4","c_3","d_2"]);
const line45 = JudgeLine(squaresArray, ["c_3","d_2","e_1"]);
const line46 = JudgeLine(squaresArray, ["b_5","c_4","d_3"]);
const line47 = JudgeLine(squaresArray, ["c_4","d_3","e_2"]);
const line48 = JudgeLine(squaresArray, ["c_5","d_4","e_3"]);




const lineArray = [line1 , line2 , line3 , line4 , line5 , line6 , line7 , line8 , line9 , line10 , line11 , line12 , line13 , line14 , line15 , line16 , line17 , line18 , line19 , line20 , line21 , line22 , line23 , line24 , line25 , line26 , line27 , line28 , line29 , line30 , line31 , line32 , line33 , line34 , line35 , line36 , line37 , line38 , line39 , line40 , line41 , line42 , line43 , line44 , line45 , line46 , line47 , line48];

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

a_4.addEventListener("click",()=>{
    isSelect(a_4);
});

a_5.addEventListener("click",()=>{
    isSelect(a_5);
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

b_4.addEventListener("click",()=>{
    isSelect(b_4);
});

b_5.addEventListener("click",()=>{
    isSelect(b_5);
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

c_4.addEventListener("click",()=>{
    isSelect(c_4);
});

c_5.addEventListener("click",()=>{
    isSelect(c_5);
});

d_1.addEventListener("click",()=>{
    isSelect(d_1);
});

d_2.addEventListener("click",()=>{
    isSelect(d_2);
});

d_3.addEventListener("click",()=>{
    isSelect(d_3);
});

d_4.addEventListener("click",()=>{
    isSelect(d_4);
});

d_5.addEventListener("click",()=>{
    isSelect(d_5);
});

e_1.addEventListener("click",()=>{
    isSelect(e_1);
});

e_2.addEventListener("click",()=>{
    isSelect(e_2);
});

e_3.addEventListener("click",()=>{
    isSelect(e_3);
});

e_4.addEventListener("click",()=>{
    isSelect(e_4);
});

e_5.addEventListener("click",()=>{
    isSelect(e_5);
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
            maxSpeed: 8,
            minSpeed: 3,
            maxSize: 12,
            minSize: 5,
            round: true
        });
    }else if(status === "bear"){
        if(winningLine){
            winningLine.forEach(function(square){
                square.classList.add("js-bear_highLight");
            });
        }

        $(document).snowfall({
            flakeColor : "rgb(253,238,239)",
            maxSpeed: 6,
            minSpeed: 3,
            maxSize: 13,
            minSize: 7,
            round: true
        });
    }
}

newgamebtn.addEventListener("click",()=>{
    flag = "A-flag";
    counter = 25;
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
