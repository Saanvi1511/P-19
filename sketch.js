var ghost ,ghostImg;
var tower , towerImg;
var ground , groundImg;
var wood , woodImg , woodG;
var stone , stoneImg , stoneG;

var boy , boyImg , boyb , boyG;
var girl , girlImg , girlb , girlG;
var invisibleGround;

var score = 0;

function preload(){
  ghostImg = loadImage("ghost1.png");
  towerImg = loadImage("1.jpg");
  woodImg = loadImage("wood.png");
  stoneImg = loadImage("stone.png");
  boyb = loadAnimation("BOY.png" , "BOY1.png" , "BOY2.png" , "BOY3.png");
}

function setup() {
  createCanvas(900 , 600);
  tower = createSprite(600,300);
  tower.addImage("tower",towerImg);
  tower.scale = 0.7;
  tower.velocityX = -5;

  ghost = createSprite(300 , 450);
  ghost.addImage(ghostImg);
  ghost.scale = 0.5;

  invisibleGround = createSprite(450,560,900,20);
  invisibleGround.visible = false;

  createBoy();

  woodG = new Group();
  stoneG = new Group();
}

function draw() {

  background(120);
  fill("black");
  
  score = score + Math.round(getFrameRate()/60);

  if (tower.x < 230){
    tower.x = 500;
  }

  text("Score:" +score , 50 , 50); 


  if (keyDown("space")) {
    boy.velocityY =  -10;
  }

  boy.velocityY = boy.velocityY + 0.8;
  boy.collide(invisibleGround);

  ghost.collide(invisibleGround);

  createWood();
  createStone();
  
  
  drawSprites();
}

   function createBoy() {
    boy = createSprite( 600 ,450);
    boy.addAnimation( "boycreate", boyb);
    boy.scale = 0.7;
    boy.setCollider("rectangle",0,0,boy.width,boy.height);
    boy.debug = true;
   // boy.velocityX = 5;

  }

function createWood() {
  if (frameCount % 120 === 0) {
    wood = createSprite(1220 , Math.round(random(500 , 518)));
    wood.addImage(woodImg);
    wood.scale = 0.3;
    wood.velocityX = -5;
    wood.lifetime = 500;
    wood.collide(invisibleGround);

    woodG.add(wood);
  }
}

function createStone() {
  if (frameCount % 210 === 0) {
    stone = createSprite(1220 , Math.round(random(500 , 518)));
    stone.addImage(stoneImg);
    stone.scale = 0.3;
    stone.velocityX = -5;
    stone.lifetime = 500;
    stone.collide(invisibleGround);

    stoneG.add(stone);
  }
}