let boxes = document.querySelectorAll('.box');
let gameInfo = document.querySelector('.game-info');
let btn = document.querySelector("btn");

let currentPlayer;
let gameGrid;
let wimPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [2, 5, 8],
    [1, 4, 7],
    [0, 3, 6],

    [0, 4, 8],
    [2, 4, 7],
];
// starting value
function initGame() {
    currentPlayer = "X";
    gameGrid = ["", "", "",
        "", "", "",
        "", "", ""];
    // btn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
    console.log(`Current Player - ${currentPlayer}`);
}
initGame();
// Swap turn ke liye function 
function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }
}
// function checkGameOver(){
//      let answer;
//      wimPosition.forEach((position) => {
//         if(gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
//          (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[2]] === gameGrid[position[1]]){
//             if(gameGrid[position[0]]  === "X"){
//                 answer = "X";
//             }
//             else{
//                 answer("O");
//             }

//             box.forEach((box) =>{
//                 box.style.pointerEvents = "none";
//             })
//             // boxes[position[0]].classList.add(".win")
//             // boxes[position[1]].classList.add(".win")
//             // boxes[position[2]].classList.add(".win")
//             if (answer !== "") {
//                 gameInfo.innerText = `WINNER PLAYER - ${answer}`;
//                 return;
//             }
//         }

//     });
   


// }
// handle CLick function 
//  click karne ke baad kya kya karna hai
function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        swapTurn();
        checkGameOver();
        
    }
}
// boxes par event listener
boxes.forEach((box,index) =>{
    box.addEventListener("click", () => {
        handleClick(index);
    });
});

// btn.addEventListener("click", initGame) 