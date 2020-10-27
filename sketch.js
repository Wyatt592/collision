var fixedRect
var movingRect
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(500, 200, 100, 25)
}

function draw() {
  background(0); 
  movingRect.x = mouseX
  movingRect.y = mouseY
  
  if (movingRect.width/2 + fixedRect.width/2 > movingRect.x - fixedRect.x 
    && movingRect.width/2 + fixedRect.width/2 > fixedRect.x - movingRect.x 
    && movingRect.height/2 + fixedRect.height/2 > movingRect.y - fixedRect.y 
    && movingRect.height/2 + fixedRect.height/2 > fixedRect.y - movingRect.y){
  
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
  }
else{
  movingRect.shapeColor = "blue"
  fixedRect.shapeColor = "blue"
}
  drawSprites();
}