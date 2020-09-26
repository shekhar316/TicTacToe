
function resetScore(){
  window.location.reload();
  document.p1score = 0;
  document.p2score = 0;
  document.total = 0;
}


function startGame(){
  for (var i = 1; i<=9; i=i+1){
    clearBox(i);
  }
  // document.gamestatus = false;
  document.player1 = document.getElementById("p1").value;
  document.player2 = document.getElementById("p2").value;
  if(document.player1 == ""){
    document.player1 = "Player 1";
  }
  if(document.player2 == ""){
    document.player2 = "Player 2";
  }

  document.getElementById("p1name").innerText = document.player1;
  document.getElementById("p2name").innerText = document.player2;
  document.getElementById("p1score").innerText = document.p1score;
  document.getElementById("p2score").innerText = document.p2score;
  document.chances = 0;
  
  document.winner = null;
  if(document.total % 2 == 0){
    document.turn = "X";
    sendMsg("'" + document.player1 + "' start the game");
  }
  else{
    document.turn = "O";
    sendMsg("'" + document.player2 + "' start the game");
  }
  

}

function clearBox(number){
  document.getElementById(number).innerText="";
}

function sendMsg(msg){
  document.getElementById("status").innerText = msg;
}

function nextMove(box){
  if(document.winner != null){
    if(document.turn == "X"){
      sendMsg("'" + document.player1 + "' already has won the game.");
    }
    else{
     sendMsg("'" + document.player2 + "' already has won the game."); 
    }
    
  }else if(document.chances == 9){
    sendMsg("It's a Tie.");
    }
    else{
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
  document.chances = document.chances + 1;
  if(checkWinCombinations(document.turn)){
    if(document.turn == "X"){
      sendMsg("'" + document.player1 + "' has won the game.");
      document.total = document.total + 1;
      document.winner = document.player1;
      document.p1score = document.p1score + 1;
      document.getElementById("p1score").innerText = document.p1score; 
      document.getElementById("total").innerText = document.total; 
    }
    else{
        sendMsg("'" + document.player2 + "' has won the game.");
        document.winner = document.player2;
        document.total = document.total + 1;
        document.p2score = document.p2score + 1;
        document.getElementById("p2score").innerText = document.p2score;
        document.getElementById("total").innerText = document.total;
      }
    
    

  } else if(document.chances == 9){
      sendMsg("It's a Tie.");
      document.total = document.total + 1;
      document.getElementById("total").innerText = document.total;
  }
  
  else {
    if(document.turn == "X"){
    document.turn = "O";
    sendMsg("It's " + document.player2 + "'s turn.");
    }else{
      document.turn = "X";
      sendMsg("It's " + document.player1 + "'s turn.");
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

