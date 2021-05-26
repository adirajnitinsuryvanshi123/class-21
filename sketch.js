var fixed, moving,o1,o2;

function setup() {
  createCanvas(1200,800);
 fixed = createSprite(400, 100, 50, 80);
fixed.debug = true;
  moving = createSprite(400, 800,80,30);
  moving.shapeColor = "green";
  moving.debug = true;
  o1 = createSprite(800, 100, 20, 80);
  o1.shapeColor = "green";
  o2 = createSprite(200, 100, 30, 80);
  o2.shapeColor = "green";
  o1.debug = true;
  o2.debug = true;
 moving.velocityY = -5;
  fixed.velocityY = +5;
  o1.velocityX=-5
  o2.velocityX=5
}

function draw() {
  background("white");  
if(isTouching(o1,o2)){
  o1.shapeColor="blue"
  o2.shapeColor="blue"
}
else{
  o1.shapeColor="green"
  o2.shapeColor="green"
}
bounceOff(moving,fixed);
  drawSprites();
}
