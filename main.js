import {getPosLeft, 
        getPosTop, 
        getNumberBackgroundColor,
        getNumberColor} from "./support.js"
import {move} from "./game.js"

var board = new Array(4)
const startGame = document.getElementById('newGameButton')
startGame.addEventListener('click', newGame)
document.addEventListener('keydown', function(event){
    switch(event.code){
        case 'ArrowUp':{move(board, 'up');updateView();generateOneNumberInProcess();break}
        case 'ArrowDown':{move(board, 'down');updateView();generateOneNumberInProcess();break}
        case 'ArrowLeft':{move(board, 'left');updateView();generateOneNumberInProcess();break}
        case 'ArrowRight':{move(board, 'right');updateView();generateOneNumberInProcess();break}
        default: {break}
    }
})

function newGame(){
    //initialize the grids
    init()
    //generate two random numbers
    generateOneNumber()
    generateOneNumber()
}

function init(){
    for(var i=0; i<4; i++){
        board[i] = Array(4)
        for(var j=0; j<4; j++){
            board[i][j] = 0
            var gridCell = $(`#${i}-${j}`)
            gridCell.css("top", getPosTop(i, j))
            gridCell.css("left", getPosLeft(i, j))
            gridCell.css("background-color", "#b2bec3")

            gridCell.css('display', 'flex')
            gridCell.css('align-items', 'center')
            gridCell.css('justify-content', 'center')
            gridCell.css('font-size', "300%")

            gridCell.text('')
        }
    }
    updateView()
}

function updateView(){
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var numberCell = $(`#${i}-${j}`);
            if(board[i][j]==0){
                numberCell.css("background-color", "#5b8bb9")
                numberCell.text('')
            }else{
                numberCell.css('background-color', getNumberBackgroundColor(board[i][j]));
                numberCell.css('color', getNumberColor(board[i][j]))
                numberCell.text(board[i][j])
            }
        }
    }
}

function generateOneNumber(){
    //1.generate a random position
    var randx;
    var randy;
    while(true){
        randx = parseInt(Math.floor(Math.random()*4))
        randy = parseInt(Math.floor(Math.random()*4))
        if(board[randx][randy]==0) break;
    }
    //2.generate a random number
    var randNumber = Math.random() < 0.5 ? 2 : 4
    //3.show the number on the position
    board[randx][randy] = randNumber
    updateView()
}

function generateOneNumberInProcess(){
    //1.check how many empty slots in the grids
    var emptySlots = []
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            if(board[i][j]==0){
                emptySlots.push({x:i, y:j})
            }
        }
    }
    if(emptySlots.length===0){
        console.log('GAME OVER')
        return
    }
    //2.randomly select one using random number
    var lotSize = emptySlots.length;
    var number = parseInt(Math.floor(Math.random()*lotSize))
    var x = emptySlots[number].x
    var y = emptySlots[number].y
    var randNumber = Math.random() < 0.5 ? 2 : 4
    //3.assign to the board and update view
    board[x][y] = randNumber
    updateView()
}

