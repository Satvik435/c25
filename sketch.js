const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls = []
var ball


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 110, 50, angle);
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
 
  
  tower.display();
  for(var i=0;i<balls.length;i++){
    showBalls(balls[i],i)
  }
  cannon.display(); 
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    ball.shoot()
  }
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    ball= new Cannonball(cannon.x-20,cannon.y+2)
    balls.push(ball)
  }

}
function showBalls(ball,i){
  if(ball){
    ball.display()
  }
}
