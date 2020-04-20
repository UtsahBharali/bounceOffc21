var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);
 // rect1= createSprite(300,200,50,50);
 movingRect.velocityX = -2;
}

function draw() {
  background(0,0,0);  
 //movingRect.x = World.mouseX;
 //movingRect.y = World.mouseY;

 movingRect.shapeColor = "green";
 fixedRect.shapeColor ="green";
// rect1.shapeColor = "red";
  bounceOff (fixedRect,movingRect);
  
 
  drawSprites();
}

