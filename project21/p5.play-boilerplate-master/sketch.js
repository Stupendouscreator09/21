
var wall,thickness;
var bullet, speed,weight;

function setup() {
  createCanvas(1600,800);


  wall = createSprite(1200,200,thickness,1500);
  wall.shapeColor = "blue";

  thickness = random(22,83);

  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;

  speed = random(223,321);
  weight = random(30,52);



  line = createSprite(250,260,1800,10);

  bullet1 = createSprite(50,300,50,50);
  bullet1.velocityX = speed;

  line1 = createSprite(250,360,1800,10);
  
bullet2 = createSprite(50,400,50,50);
bullet2.velocityX = speed;

line2 = createSprite(250,460,1800,10);

bullet3 = createSprite(50,500,50,50);
bullet3.velocityX = speed;
  
line3 = createSprite(250,560,1800,10);

  
}

function draw() {
  background(255,255,255); 
  


if (wall.x - bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation > 180){
    bullet.shapeColor = color(255,0,0);
  }

if(deformation < 180 && deformation > 100){
  bullet.shapeColor = color(230,230,0);
}

if(deformation < 100){
  bullet1.shapeColor = color(0,225,0);
}
}

if (wall.x - bullet1.x < (bullet1.width+wall.width)/2){
  bullet1.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation > 180){
    bullet1.shapeColor = color(255,0,0);
  }

if(deformation < 180 && deformation > 100){
  bullet1.shapeColor = color(230,230,0);
}

if(deformation < 100){
  bullet1.shapeColor = color(0,225,0);
}
}

if (wall.x - bullet2.x < (bullet2.width+wall.width)/2){
  bullet2.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation > 180){
    bullet2.shapeColor = color(255,0,0);
  }

if(deformation < 180 && deformation > 100){
  bullet2.shapeColor = color(230,230,0);
}

if(deformation < 100){
  bullet2.shapeColor = color(0,225,0);
}
}

if (wall.x - bullet3.x < (bullet3.width+wall.width)/2){
  bullet3.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation > 180){
    bullet3.shapeColor = color(255,0,0);
  }

if(deformation < 180 && deformation > 100){
  bullet3.shapeColor = color(230,230,0);
}

if(deformation < 100){
  bullet3.shapeColor = color(0,225,0);
}
}


  drawSprites();

bullet.collide(wall);
bullet1.collide(wall);
bullet2.collide(wall);
bullet3.collide(wall);

line1.collide(wall);
line2.collide(wall);
line3.collide(wall);

function  hasCollided(Lbullet, Lwall)
{
bulletRightEdge= lbullet.x +lbullet.width;
wallLeftEgde = lwall.x;
if(bulletRightEdge >=wallLeftEgde) {
  return true;
}
return false;


if(hasCollided(bullet, wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * (thickness * thickness * thickness);

  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }

  if (damage < 10){
    wall.shapeColor = color(0,255,0);
  }
}

if(hasCollided(bullet1, wall))
{
  bullet1.velocityX = 0;
  var damage = 0.5 * weight * speed * (thickness * thickness * thickness);

  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }

  if (damage < 10){
    wall.shapeColor = color(0,255,0);
  }

}if(hasCollided(bullet2, wall))
{
  bullet2.velocityX = 0;
  var damage = 0.5 * weight * speed * (thickness * thickness * thickness);

  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }

  if (damage < 10){
    wall.shapeColor = color(0,255,0);
  }

}if(hasCollided(bullet3, wall))
{
  bullet3.velocityX = 0;
  var damage = 0.5 * weight * speed * (thickness * thickness * thickness);

  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }

  if (damage < 10){
    wall.shapeColor = color(0,255,0);
  }
}

}
}