var moving 
var fixed
var gameobject1
var gameobject2
var gameobject3

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,200,50,50);
  gameobject1 = createSprite(400,100,50,50);
  gameobject2 = createSprite(400,300,50,50);
  gameobject3 = createSprite(400,400,50,50);
 // moving.velocityX = 5;
  //fixed.velocityX = -5;
}

function draw() {
  background("blue"); 
  moving.x = mouseX ;
  moving.y = mouseY ; 
  drawSprites();
 isTouching(moving,fixed);
 if(isTouching(moving,gameobject1)){
  moving.shapeColor = "yellow";
  gameobject1.shapeColor = "pink" ;
 }
 if(isTouching(moving,gameobject2)){
   moving.shapeColor = "purple";
   gameobject2.shapeColor =  "red";
 }
 if(isTouching(moving,gameobject3)){
   moving.shapeColor = "orange";
   gameobject3.shapeColor = "brown";
 }
  }


 function isTouching(object1,object2){ 
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x-object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y-object1.y < object1.height/2 + object2.height/2){
      return true
     // object1.velocityX = -5;
      //object2.velocityX = 5;
    }
    else{
   return false
    } 
}