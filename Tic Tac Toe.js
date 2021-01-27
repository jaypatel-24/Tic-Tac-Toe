const maingrp = [];

const grp1 = ['1', '2', '3'];
const grp2 = ['4', '5', '6'];
const grp3 = ['7', '8', '9'];

const grp4 = ['1', '4', '7'];
const grp5 = ['2', '5', '8'];
const grp6 = ['3', '6', '9'];

const grp7 = ['1', '5', '9'];
const grp8 = ['3', '5', '7'];

maingrp.push(grp1);
maingrp.push(grp2);
maingrp.push(grp3);

maingrp.push(grp4);
maingrp.push(grp5);
maingrp.push(grp6);

maingrp.push(grp7);
maingrp.push(grp8);


document.querySelector('#button1').addEventListener("click", markThePosition);
document.querySelector('#button2').addEventListener("click", markThePosition);
document.querySelector('#button3').addEventListener("click", markThePosition);

document.querySelector('#button4').addEventListener("click", markThePosition);
document.querySelector('#button5').addEventListener("click", markThePosition);
document.querySelector('#button6').addEventListener("click", markThePosition);

document.querySelector('#button7').addEventListener("click", markThePosition);
document.querySelector('#button8').addEventListener("click", markThePosition);
document.querySelector('#button9').addEventListener("click", markThePosition);

document.querySelector('#restart').addEventListener("click", restartGame);

let player=0;
let turn = 0;
let grp =[];
for(let i=0;i<maingrp.length;i++) {
    grp.push(maingrp[i].slice());
}

function markThePosition(){
    turn += 1;
    let symbol ='O';
    if(player % 2 == 0)
    symbol = 'X';

    player++;

    document.getElementById(this.id).value = symbol;
    const value = (this.id).substring(6,7);
    
    for(let i=0;i<grp.length;i++) {
        for(let j=0;j<3;j++) {
            if(grp[i][j] == value) {
                grp[i][j] = symbol;
            }
        }
    }
    checkGameStatus(this.id);
}

function checkGameStatus() {
    for(let i=0;i<grp.length;i++) {
        if(grp[i][0] == grp[i][1] && grp[i][1] == grp[i][2]) {
            if(grp[i][0] == 'X')
            document.getElementById('result').innerHTML = 'Player 1 Won';
            else if(grp[i][0] == 'O')
            document.getElementById('result').innerHTML = 'Player 2 Won';

            disableButtons();
        } 
    }
    if(turn == 9){
        document.getElementById('result').innerHTML = 'Tie';
        disableButtons();
    }

}

function restartGame() {
    player=0;
    turn=0;
    updateMainarray();
    enableButtons();

    document.getElementById("button1").value = "";
    document.getElementById("button2").value = "";
    document.getElementById("button3").value = "";

    document.getElementById("button4").value = "";
    document.getElementById("button5").value = "";
    document.getElementById("button6").value = "";

    document.getElementById("button7").value = "";
    document.getElementById("button8").value = "";
    document.getElementById("button9").value = "";

    document.getElementById('result').innerHTML = 'Match Result: ';

}

function disableButtons() {
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;

    document.getElementById("button4").disabled = true;
    document.getElementById("button5").disabled = true;
    document.getElementById("button6").disabled = true;

    document.getElementById("button7").disabled = true;
    document.getElementById("button8").disabled = true;
    document.getElementById("button9").disabled = true;
}

function enableButtons() {
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;

    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;

    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    document.getElementById("button9").disabled = false;
}

function updateMainarray() {
    grp.length = 0;
    for(let i=0;i<maingrp.length;i++) {
        grp.push(maingrp[i].slice());
    }
}