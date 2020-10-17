var fixedRect, movingRect;
var obj1, obj2, obj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

obj1=createSprite(200,400,50,20);
obj2= createSprite(800,400,50,20);
obj3= createSprite(500,400,50,20);

obj1.shapeColor="blue";
obj3.shapeColor=rgb(0,255,241);
obj2.shapeColor="red";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  obj1.velocityX=4;
  obj2.velocityX=-4;
}

function draw() {
  background(0,0,0);  
  bounceOff(obj1, obj2);
  
  drawSprites();
}

