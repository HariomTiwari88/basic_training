
//board
let board;
let boardWidth = 750;
let boardHeight = 250;
let context;

//Dino
let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY =boardHeight-dinoHeight;
let dinoImg;

//cactus
let cactusArray =[];
let cactus1Width =34;
let cactus2Width = 68;
let cactus3Width = 102;
let bigCactusWidth =120;
let cactusHeight = 70;
let cactusX = 650;
let cactusY = boardHeight -cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;
let bigCactus;

//physics
let velocityX = -8;
let velocityY = 0;
let gravity = 1;

//gameStatus
let gameOver = false;
let score=0;

let dino = {
    x:dinoX,
    y:dinoY,
    width:dinoWidth,
    height:dinoHeight
};

window.onload = function(){
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;

    context = board.getContext("2d")// used for drawing things over the board

    //To Draw intially the dinasaur
    // context.fillStyle="green";
    // context.fillRect(dino.x,dino.y,dino.width,dino.height);

    // to display dinoaur over the window
    dinoImg = new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = function(){
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    } 
    requestAnimationFrame(update);

    cactus1Img = new Image();
    cactus1Img.src = "./img/cactus1.png";

    cactus2Img = new Image();
    cactus2Img.src = "./img/cactus2.png";

    cactus3Img = new Image();
    cactus3Img.src = "./img/cactus3.png";

    bigCactus = new Image();
    bigCactus.src ="./img/bigCactus.png";

    setInterval(placeCactus,1000);
    document.addEventListener("keyup",jumpDino);
}

function update(){
    
    requestAnimationFrame(update);
     if(gameOver) return ;

    //resetting the board
    context.clearRect(0,0,boardWidth,boardHeight);
    
    //dino
    velocityY+=gravity;
    dino.y = Math.min(dino.y+velocityY,dinoY); // so that it can not go below the ground
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

    //cactus
    for(let i=0;i<cactusArray.length;i++){
        let cactus = cactusArray[i];
        cactus.x+= velocityX;
        context.drawImage(cactus.img,cactus.x,cactus.y,cactus.width,cactus.height);

        if(detectCollision(dino,cactus)){
            gameOver=true;
            highScore=Math.max(highScore,score);
            dinoImg.src ="./img/deadDino.png";
            dinoImg.onload = function(){
             context.drawImage(dinoImg,dino.x, dino.y, dino.width, dino.height);
            }
            return ;
        }
    }
//score
context.fillStyle ="black";
context.font = "20px courier";
score++;
context.fillText(score,5,20);
}

function jumpDino(event){
    if(gameOver) return ;

    if((event.code =="Space" || event.code=="ArrowUp")&& (dino.y==dinoY)){
        // console.log("inside condition");
     velocityY = -20;
    }
}

function placeCactus(){
    if(gameOver) return ;
    let cactus ={
        img :null,
        x:cactusX,
        y:cactusY,
        width:null,
        height:cactusHeight
    }
    let chooseCactus =Math.random();

    if(chooseCactus>0.9){
       cactus.img = cactus3Img;
       cactus.width = cactus3Width;
       cactusArray.push(cactus);
    }
    else if(chooseCactus>0.7){
        cactus.img = cactus2Img;
        cactus.width = cactus2Width;
       cactusArray.push(cactus);

    }
    else if(chooseCactus>0.6){ 
        cactus.img = bigCactus;
        cactus.width = bigCactusWidth;
        cactusArray.push(cactus);
    }
    else{
        cactus.img = cactus1Img;
        cactus.width = cactus1Width;
        cactusArray.push(cactus);
    }

    if(cactus.length>5){// it will make free memory which is not in use means the cactus which are gone are dleted
        cactus.shift();
    }

}

function detectCollision(a,b){
    console.log("now detecting collision");
    return a.x < b.x+b.width &&
          a.x+a.width >b.x &&
          a.y < b.y +b.height &&
          a.y+a.height > b.y;
}

