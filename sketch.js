var bullet, wall;
var thickess, speed, weight;

function setup() {
  createCanvas(1400,600);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);  

bullet = createSprite(50,150,50,10);
bullet.shapeColor = "white";
bullet.velocityX = speed;

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = "white";


}


function draw() {
  background("black"); 

  hasCollided();
  isTouching();
  
  drawSprites();
}

function hasCollided (lbullet , lwall){
  bulletRightEdge = 1bullet.x + 1bullet.width;
  wallLeftEdge = 1wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
   return false;
}

function (hasCollided(bullet , wall)) {
  bullet.velocityX = 0 ;
  var damage = 0.5 * weight * speed * speed/(thickness * thickess * thickess);

  if(damage>10){
    wall.shapeColor = colour(255,0,0);
  }

  if(damage<10){
    wall.shapecolour = colour(0,255,0);
  }
}

