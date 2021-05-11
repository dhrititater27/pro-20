var car, wall
var speed, weight

function setup() {
  createCanvas(1000,400);

  speed=random(55,90);
  weight=random(300,900);

  car=createSprite(50,200,50,50);
  wall=createSprite(900,200,60,height/2);
 
}

function draw() {
  background("black"); 
  
  car.velocityX=speed;

  if(wall.x-car.x<(wall.width+car.width)/2 ){

  car.velocityX=0

  var deformation = 0.5 * weight * speed * speed/22500;

  if(deformation>180){
    car.shapeColor="red";
  }
  
  if(deformation<180 && deformation>100){
    car.shapeColor="yellow";
  }
  
  if(deformation<100){
    car.shapeColor="blue";
  }

  }


  drawSprites();
}
