function startGame(){
  for (var i = 1; i<=9; i=i+1){
    clearBox(i);
  }
  document.turn = "X";
  document.winner = null;
  sendMsg("'" + document.turn + "' start the game");

}

function clearBox(number){
  document.getElementById(number).innerText="";
}

function sendMsg(msg){
  document.getElementById("status").innerText = msg;
}

function nextMove(box){
  if(document.winner != null){
    sendMsg("'" + document.turn + "' already has won the game.");
  }else {
    if(box.innerText == ''){
      box.innerText = document.turn;
      changeTurn();
    }
    else{
      sendMsg("It's " + document.turn + "'s turn. \nThat box is already used.");
    }
  }

}

function changeTurn(){
  if(checkWinCombinations(document.turn)){
    sendMsg("'" + document.turn + "' has won the game.");
    document.winner = document.turn;s
  }else {
    if(document.turn == "X"){
    document.turn = "O";
    sendMsg("It's " + document.turn + "'s turn.");
    }else{
      document.turn = "X";
      sendMsg("It's " + document.turn + "'s turn.");
    }
  }
}

function checkWin(x,y,z,move){
  var result = false;
  if(getBoxno(x) == move && getBoxno(y) == move && getBoxno(z) == move){
    result = true;
  }
  return result;
}

function getBoxno(number){
  return document.getElementById(number).innerText;
}

function checkWinCombinations(move){
  var result = false;
  if(checkWin(1,2,3,move) ||
  checkWin(4,5,6,move) ||
  checkWin(7,8,9,move) ||
  checkWin(1,4,7,move) ||
  checkWin(2,5,8,move) ||
  checkWin(3,6,9,move) ||
  checkWin(1,5,9,move) ||
  checkWin(3,5,7)){
    result = true;
  }
  return result;
}