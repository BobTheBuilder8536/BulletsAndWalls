var bullet1,bullet2,bullet3;
var wall1,wall2,wall3;

var speed1,speed2,speed3;
var thick1,thick2,thick3;
var weight1,weight2,weight3;

function setup() {
  createCanvas(1600,400);
  
  thick1 = random(22,83);
  wall1 = createSprite(1200,70,thick1,100);
  wall1.shapeColor = rgb(80,80,80);
  wall1.lifetime = 99;
  thick2 = random(22,83);
  wall2 = createSprite(1200,200,thick2,100);
  wall2.shapeColor = rgb(80,80,80);
  wall2.lifetime = 99;
  thick3 = random(22,83);
  wall3 = createSprite(1200,330,thick3,100);
  wall3.shapeColor = rgb(80,80,80);
  wall3.lifetime = 99;
  
  speed1 = random(223,321);
  weight1 = random(30,52);
  bullet1 = createSprite(20, 70, 20, 10);
  bullet1.velocityX = speed1;
  bullet1.shapeColor = "white";
  bullet1.lifetime = 50;
  
  speed2= random(223,321);
  weight2 = random(30,52);
  bullet2 = createSprite(20, 200, 20, 10);
  bullet2.velocityX = speed2;
  bullet2.shapeColor = "white";
  bullet2.lifetime = 50;
  
  speed3 = random(223,321);
  weight3 = random(30,52);
  bullet3 = createSprite(20, 330, 20, 10);
  bullet3.velocityX = speed3;
  bullet3.shapeColor = "white";
  bullet3.lifetime = 50;
}

function draw() {
  background(0);
  
  if(frameCount % 100 === 0){  
    
    thick1 = random(22,83);
    wall1 = createSprite(1200,70,thick1,100);
    wall1.shapeColor = rgb(80,80,80);
    wall1.lifetime = 99;
    thick2 = random(22,83);
    wall2 = createSprite(1200,200,thick2,100);
    wall2.shapeColor = rgb(80,80,80);
    wall2.lifetime = 99;
    thick3 = random(22,83);
    wall3 = createSprite(1200,330,thick3,100);
    wall3.shapeColor = rgb(80,80,80);
    wall3.lifetime = 99;
    
    speed1 = random(223,321);
    weight1 = random(30,52);
    bullet1 = createSprite(20, 70, 20, 10);
    bullet1.velocityX = speed1;
    bullet1.shapeColor = "white";
    bullet1.lifetime = 50;
    
    speed2= random(223,321);
    weight2 = random(30,52);
    bullet2 = createSprite(20, 200, 20, 10);
    bullet2.velocityX = speed2;
    bullet2.shapeColor = "white";
    bullet2.lifetime = 50;
    
    speed3 = random(223,321);
    weight3 = random(30,52);
    bullet3 = createSprite(20, 330, 20, 10);
    bullet3.velocityX = speed3;
    bullet3.shapeColor = "white";
    bullet3.lifetime = 50;
  }
  
  wallCollide(bullet1,wall1,speed1);
  wallCollide(bullet2,wall2,speed2);
  wallCollide(bullet3,wall3,speed3);

  if(damageDone(weight1,speed1,thick1) > 10){
    wall1.shapeColor = rgb(255,0,0);
  } else{
    wall1.shapeColor = rgb(0,255,0);
  }
  if(damageDone(weight2,speed2,thick2) > 10){
    wall2.shapeColor = rgb(255,0,0);
  } else{
    wall2.shapeColor = rgb(0,255,0);
  }
  if(damageDone(weight3,speed3,thick3) > 10){
    wall3.shapeColor = rgb(255,0,0);
  } else{
    wall3.shapeColor = rgb(0,255,0);
  }

  drawSprites();
}

function damageDone(w,v,t){
  var damage;
  damage = 0.5 * w * v * v / (t * t * t);

  return damage;
}

function wallCollide(a,b,c){

  if((b.x - b.width/2) - (a.x + a.width/2) <= c){
    a.x = b.x - b.width/2;
  }

  if(a.x - b.x < b.width/2 + a.width/2 && b.x - a.x < b.width/2 + a.width/2){
    a.velocityX = 0;
  }
}