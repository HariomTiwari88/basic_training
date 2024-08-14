//game place
let board;
let boardH=300;
let boardW=800;
let context;

//physics
let velocityX = -10;
let velocityY = 0;
let gravity = 1;
let reducer = 1;

//apple
let appleHeight = 80;
let appleWidth = 80;
let appleY = boardH-appleHeight;
let appleImg;
let bittedAppleImg;
let GameOver = false;
let apple = {
    x:50,
    y:appleY,
    height:appleHeight,
    width:appleWidth
};

//obstacle
let cactusArray = [];
let cactus1Width = 34;
let cactus2Width = 80;
let bigCactusWidth =100;
let pacImgWidth = 80;
let eaterImgWidth = 100;
let cactusH = 80;
let cactusX = 650;
let cactusY = boardH - cactusH;


//images
let cactus1Img;
let cactus2Img;
let bigCactus;
let pacImg;
let eaterImg;

//score
let score = 0;
let remain = 100;

let GameOverImg;

window.onload = function(){
    board = document.getElementById("board");
    board.width = boardW;
    board.height = boardH;

    context = board.getContext("2d");

    appleImg =new Image();
    appleImg.src = "./img/apple.png";
        appleImg.onload = function(){
                context.drawImage(appleImg,apple.x,apple.y,apple.height,apple.width);
            } 

    requestAnimationFrame(update);
    
    cactus1Img = new Image();
    cactus1Img.src = "./img/cactus1.png";

    cactus2Img = new Image();
    cactus2Img.src = "./img/cactus2.png";

    bigCactus = new Image();
    bigCactus.src = "./img/bigCactus.png";

    pacImg = new Image();
    pacImg.src = "./img/pacImg.png";

    eaterImg = new Image();
    eaterImg.src = "./img/eater1.png";

    GameOverImg = new Image();
    GameOverImg.src = "./img/gameOver.jpg";

    setInterval(placeCactus,1000);
    document.addEventListener("keyup",jumpApple);
}

function update(){
    if(GameOver) {
        // context.drawImage(GameOverImg,10,10,300,500);
        return ;}
    requestAnimationFrame(update);
    context.clearRect(0,0,boardW,boardH);
    velocityY += gravity;
    apple.y = Math.min(apple.y+velocityY,appleY); //on Ground
    
   
    context.drawImage(appleImg,apple.x,apple.y,apple.height,apple.width);
        
    //Eaters
    for(let i = 0;i<cactusArray.length;i++){
        let cactus = cactusArray[i];
        cactus.x += velocityX;
        context.drawImage(cactus.img,cactus.x,cactus.y,cactus.width,cactus.height);

        if(detectCollision(apple,cactus)){
                apple.height -= reducer;
                apple.width -= reducer;
                remain -= 0.5;
                if(apple.height<=1)  GameOver=true;
                if(GameOver){
                    context.drawImage(GameOverImg,100,40,350,250);
                    return 
                }
                context.drawImage(appleImg, apple.x, apple.y, apple.width, apple.height);
        }
}
score++;
context.fillStyle ="black";
context.font = "20px courier";
context.fillText(`SCORE :${score}`,5,20);
context.fillStyle ="black";
context.font = "20px courier";
context.fillText(`REMAIN :${remain}`,650,20);
}


function jumpApple(event){
    if(GameOver) {
        // context.drawImage(GameOverImg,10,10,300,500);
        return ;}
    if((event.code =="Space" || event.code=="ArrowUp")&& (apple.y==appleY)){
     velocityY = -20;
    }
}

function placeCactus(){
    if(GameOver) {
        // context.drawImage(GameOverImg,10,10,300,500);
        return ;}
    let cactus ={
        img :null,
        x:cactusX,
        y:cactusY,
        width:null,
        height:cactusH
    }
    let chooseCactus =Math.random();// o to 0.999999...

    if(chooseCactus>0.9){
       cactus.img = cactus2Img;
       cactus.width = cactus2Width;
       cactusArray.push(cactus);
    }
    else if(chooseCactus>0.8){
        cactus.img = cactus1Img;
        cactus.width = cactus1Width;
       cactusArray.push(cactus);
    }
    else if(chooseCactus>0.7){ 
        cactus.img = bigCactus;
        cactus.width = bigCactusWidth;
        cactusArray.push(cactus);
    }
    else if(chooseCactus>0.4){
        cactus.img = pacImg;
        cactus.width = pacImgWidth;
        cactusArray.push(cactus);
    }
    else{
        cactus.img = eaterImg;
        cactus.width = eaterImgWidth;
        cactusArray.push(cactus);
    }

    if(cactus.length>6){// free memory which is gone
        cactus.shift();
    }
}

function detectCollision(a,b){
    return a.x < b.x+b.width &&
          a.x+a.width >b.x &&
          a.y < b.y +b.height &&
          a.y+a.height > b.y;
}
