var  player,background,bg,playerImg
var obstacles,obstaclesImg,coins,coinsImg
var obstaclesGroup,coinsGroup,score=0;
var gameState ="play";
var button;

function preload() {
 playerImg = loadImage("player.png");
 backgroundImg = loadImage("background.jfif");
 obstaclesImg = loadImage("tiger.png")
 coinsImg = loadImage("coin.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2,height/2);
  bg.addImage(backgroundImg);
  bg.scale = 5.3;

  player = createSprite(width/2-600,height/2+280);
  player.addImage(playerImg);
  player.debug = true;
  player.setCollider("rectangle",-20,0,100,player.height);
  player.visible = false;
/*
  button = createButton("Click to play");
  button.position(width/2,height/2);
  button.class("customButton") */

  coinsGroup = new Group();
  obstaclesGroup = new Group();

}

function draw() {
background(0);
/*
if(gameState =="start"){
button.mousePressed(()=>{
  gameState = "play";
  button.hide()
})
}
*/
if(gameState == "play"){ 

  player.visible = true;
  createObstacle1(); 
  createObstacle2();
  createObstacle3();   
  createCoins();
  
  if(keyDown(UP_ARROW) && player.y>80){
    player.y -=3;
  
  }  
  
  if(keyDown(DOWN_ARROW) && player.y<672){
    player.y +=3;
  
  }  
  
  if(keyDown(RIGHT_ARROW) && player.x<1533){
    player.x +=3;
  
  }
  
  if(keyDown(LEFT_ARROW) && player.x>82){
    console.log("left")
    player.x -=3;
  
  }
/*
  if(player.isTouching(obstaclesGroup)){
    player.destroy();
  } */

  player.overlap(coinsGroup,function(collecter,collected){
    collected.destroy();
    score = score+10;
  })

  drawSprites();
}
  textSize(40);
  fill("white")
  text("Score : "+score,width/2-780,height/2-330);

}

function createCoins(){
  if(frameCount%180 == 0){
    coins = createSprite(random(width/2-200,width/2+650),random(height/2-300,height/2+300));
    coins.addImage(coinsImg);
    coins.scale =0.3 ;
    coins.lifetime = width/2-200;
    coinsGroup.add(coins);
  }

}

function createObstacle1(){
  if(frameCount%180 ==0){
    obstacles = createSprite(width/2+650,height/2-300);
    obstacles.addImage(obstaclesImg);
    obstacles.velocityY=2;
    obstacles.scale = 0.7;
    obstacles.lifetime = width/2;
    obstaclesGroup.add(obstacles);  
}
}



function createObstacle2(){
  if(frameCount%240 ==0){
    obstacles = createSprite(width/2+200,height/2-300);
    obstacles.addImage(obstaclesImg);
    obstacles.velocityY=3;
    obstacles.scale = 0.7;
    obstacles.lifetime = width/2;
    obstaclesGroup.add(obstacles);  
}
}

function createObstacle3(){
  if(frameCount%120 ==0){
    obstacles = createSprite(width/2-300,height/2-300);
    obstacles.addImage(obstaclesImg);
    obstacles.velocityY=4.5;
    obstacles.scale = 0.7;
    obstacles.lifetime = width/2;
    obstaclesGroup.add(obstacles);  
}
}
