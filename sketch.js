var fixed_rec;
var moving_rec;
function setup() {
  createCanvas(800,400);
  fixed_rec = createSprite(400, 200, 50, 50);
  fixed_rec.shapeColor = "red";
  fixed_rec.velocityX = -3;
  moving_rec = createSprite(0,200,50,50);
  moving_rec.shapeColor = "red";
  moving_rec.velocityX = 5;
 
  fixed_rec1 = createSprite(400, 20, 50, 50);
  fixed_rec1.shapeColor = "red";
  fixed_rec1.velocityY = 3;
  moving_rec1 = createSprite(400,430,50,50);
  moving_rec1.shapeColor = "red";
  moving_rec1.velocityY = -5;
}

function draw() {
  background(255,0,255);  
 // moving_rec.y = mouseY;
 // moving_rec.x = mouseX;


  if(moving_rec.x - fixed_rec.x < moving_rec.width/2 + fixed_rec.width/2
    && fixed_rec.x - moving_rec.x < moving_rec.width/2 + fixed_rec.width/2
    && moving_rec.y - fixed_rec.y < moving_rec.height/2 + fixed_rec.height/2 
    && fixed_rec.y - moving_rec.y < moving_rec.height/2 + fixed_rec.height/2){
moving_rec.shapeColor = "blue";
fixed_rec.shapeColor = "blue";
fixed_rec.velocityX = fixed_rec.velocityX*(-1);
moving_rec.velocityX = moving_rec.velocityX*(-1);
  }
 else{
moving_rec.shapeColor = "red";
fixed_rec.shapeColor = "red";
 }

 if(moving_rec1.x - fixed_rec1.x < moving_rec1.width/2 + fixed_rec1.width/2
  && fixed_rec1.x - moving_rec1.x < moving_rec1.width/2 + fixed_rec1.width/2
  && moving_rec1.y - fixed_rec1.y < moving_rec1.height/2 + fixed_rec1.height/2 
  && fixed_rec1.y - moving_rec1.y < moving_rec1.height/2 + fixed_rec1.height/2){
moving_rec1.shapeColor = "blue";
fixed_rec1.shapeColor = "blue";
fixed_rec1.velocityY = fixed_rec1.velocityY*(-1);
moving_rec1.velocityY = moving_rec1.velocityY*(-1);
}
else{
moving_rec1.shapeColor = "red";
fixed_rec1.shapeColor = "red";
}
  drawSprites();
}