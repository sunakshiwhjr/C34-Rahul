const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

var ground;
var box1,box2,box3,box4,box5,box6;

function setup() {

  createCanvas(2000,800);
  myEngine =  Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(1000,780,2000,50);

  box1 = new Box(900,100,70,70);
 /* box2 = new Box(1200,100,70,70);
  box3 = new Box(1200,100,70,70);
  box4 = new Box(1200,100,70,70);
  box5 = new Box(1200,100,70,70);
  box6 = new Box(1200,100,70,70);*/
}

function draw() {
  background("black");  
  
  fill("white");
  textSize(20);
  text(mouseX + "," + mouseY, mouseX,mouseY);

  Engine.update(myEngine);
  
  ground.display();
  box1.display();
  /*box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();*/

}