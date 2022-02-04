const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, pig1;
var backgroundImg,platform;
var bird, slingShot;
var barra1, barra2, barra3, barra4;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    barra1 = new Ground(1000, 100, 250, 20);
    barra2 = new Ground(1050, 250, 200, 20);
    barra3 = new Ground(600, 300, 250, 20); 
    barra4 = new Ground(1164,210, 20, 100)

    box1 = new Box(950,20,70,70);
    box2 = new Box(1050,20,70,70);

    box3 = new Box(500,200,70,70);
    box4 = new Box(500,290,70,70);
    box5 = new Box(700,200,70,70);
    box6 = new Box(700,290,70,70);

    box7 = new Box(1100,200,70,70);

    log1 = new Log(1000,5,250, PI/2);
    log2 = new Log(600,250,300, PI/2);
    log3 = new Log(600,150,300, PI/2);

    pig1 = new Pig(1000, 50);
    pig3 = new Pig(600, 250);
    pig4 = new Pig(600, 200);
    pig5 = new Pig(1000, 200);
    pig6 = new Pig(600, 100);
    pig7 = new Pig(350, 350);

    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    
    ground.display();
    pig1.display();

    log1.display();
    log2.display();
    log3.display();

    pig3.display();
    pig4.display();
    pig5.display();
    pig6.display();
    pig7.display();
  
    bird.display();
    platform.display();

    barra1.display();
    barra2.display();
    barra3.display();
    barra4.display();
  
    slingshot.display();
}


function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
  
}

function keyPressed(){
    if(keyCode === 32){
      slingshot.attach(bird.body);
      
    }
}