var Ghost,GhostImage;
var Tower,TowerImage;
var PLAY = 1;
var END = 0;
var gameState=PLAY;
var Door,DoorImage;
var left,right,lefrImage,RightImage;
var DoorGroup;

function preload(){
  PlayerImage = loadImage("Player.png");
  RoadImage = loadImage("Road.png");
  CarImage = loadImage("Car.png");
  leftImage = loadImage("left arrow.png");
  RightImage = loadImage("right arrow.jpg");
}



function setup(){
createCanvas(600,600);
  Road = createSprite(300,300);
  Road.addImage(RoadImage);
  Player = createSprite(300,500);
  Player.addImage(PlayerImage);
  left = createSprite(200,200);
  left.addImage(leftImage);
  right = createSprite(400,200);
  right.addImage(RightImage);
  Player.scale = 0.3
  Road.scale = 0.9
  right.scale = 0.4
  left.scale = 0.1
  Road.velocityY = 3;
  CarGroup = new Group();
}

function draw(){
background("black");
  
  if(gameState==PLAY){
  
  if (keyDown("left_arrow")){
    Player.x = Player.x -5;
  }
  if (keyDown("right_arrow")){
    Player.x = Player.x +5;
  }
  cars();
  if (Road.y>600){
    Road.y = 400;
  }
    if (mousePressedOver(right)) {
    ( Player.x = Player.x +5);
    }
    
    if (mousePressedOver(left)) {
    ( Player.x = Player.x -5);
    }
  if(CarGroup.isTouching(Player)||Player.y>600){
    gameState = END;
  }
 
  drawSprites();
}
   if(gameState==END){
    background("red");
     textSize(40);
     fill("blue");
     stroke("Black");
     text("GAME OVER",200,200)
  }
  
}

function cars(){
  if (frameCount % 100 ==0 ){
    Car = createSprite(Math.round(random(100,500)),-50)
    Car.addImage(CarImage);
    Car.velocityY = 3;
    Car.scale = 0.10
    Car.lifetime = 250;
    Car.depth = Player.depth
    Player.depth +=1 ;
    CarGroup.add(Car);
  }
}
