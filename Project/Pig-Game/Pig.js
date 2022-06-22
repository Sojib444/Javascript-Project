
"use strict";

//select
const new_Game = document.querySelector(".new-game");
const rollDice = document.querySelector(".btn--roll");
const img = document.querySelector(".dice");
const cureent_Score_Player_0 = document.querySelector("#current--0");
const cureent_Score_Player_1 = document.querySelector("#current--1");
const hold = document.querySelector(".btn--hold");
const popup = document.querySelector(".popup");
const win = document.querySelector("#win-score");



//first-actionaction
popup.classList.add("hidden");

//value define
let Curent_Score = 0;
let Current_Player = 0;

let Palyer_0_Final_Score = 0;
let Palyer_1_Final_Score = 0;


//function

const restart = function () {

    document.querySelector("#score--0").textContent = 0;

    document.querySelector("#score--1").textContent = 0;

    popup.classList.add("hidden");
    rollDice.classList.remove("hidden");
    Curent_Score = 0;
    Current_Player = 0;

    Palyer_0_Final_Score = 0;
    Palyer_1_Final_Score = 0;
    flag=false;


}

const Show_popup = function () {
    popup.classList.remove("hidden");
    rollDice.classList.add("hidden");
    console.log(Palyer_0_Final_Score);
    console.log(Palyer_1_Final_Score);
    if (Palyer_0_Final_Score > Palyer_1_Final_Score) {
        win.textContent = "1";
    }
    else {
        win.textContent = "2";
    }
}

let flag = false;
const cLick_Roll_Dice = function () {
    const random = Math.floor(Math.random() * 6 + 1);
    img.src = `./Image/dice-${random}.png`;
    if (random != 1) {
        Curent_Score += random;
        document.querySelector(`#current--${Current_Player}`).textContent = Curent_Score;
    }
    else if (random == 1) {

        document.querySelector(`#score--${Current_Player}`).textContent = Curent_Score;
        if (Current_Player == 0) {
            Palyer_0_Final_Score = Curent_Score;
        }
        else {
            Palyer_1_Final_Score = Curent_Score;
        }
        Curent_Score = 0;
        document.querySelector(`#current--${Current_Player}`).textContent = Curent_Score;
        if(Current_Player==0)
        {
            Current_Player=1;
        }
        else
        {
            Current_Player=0;
        }
        console.log(`cureent player ${Current_Player}`);
        if (Current_Player == 0) {
            flag = true;
        }
        if (flag == true) {
            Show_popup();
        }



    }
}





//clik

rollDice.addEventListener("click", cLick_Roll_Dice);
new_Game.addEventListener("click", restart);



