var box1,box2;

function setup() {
  createCanvas(800,400);
 box1 = createSprite(400, 200, 50, 50);
 box2 =createSprite(400,50,50,50);
  box1.shapeColor = "red";
  box2.shapeColor = "red";
}

function draw() {
  background(255,255,255);  

box2.x = mouseX
box2.y = mouseY

if(box1.x-box2.x<box1.width/2+box2.width/2&&
  box2.x-box1.x<box1.width/2+box2.width/2&&
  box1.y-box2.y<box1.height/2+box2.height/2&&
  box2.y-box1.y<box1.height/2+box2.height/2){
box1.shapeColor = "blue"
box2.shapeColor = "blue"

}
else{
  box1.shapeColor = "red";
  box2.shapeColor = "red";
}

  drawSprites();
}