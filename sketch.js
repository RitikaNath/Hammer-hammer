const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new  Plane(600,height,1200,20)
    hammer = new  Hammer(10,100);
    rubber = new  Rubber(500,300,50);
    stone = new Stone(200,300);
    iron = new Iron(600,500);
   mar1 = new Marble(400,200,8);
   mar2 = new Marble(404,200,8);
   mar3 = new Marble(408,200,8);
   mar4 = new Marble(412,200,8);
   mar5 = new Marble(416,200,8);
   mar6 = new Marble(420,200,8);
   mar7 = new Marble(424,200,8);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   rubber.display();
   stone.display(); 
   iron.display();
   mar1.display();
   mar2.display();
   mar3.display();
   mar4.display();
   mar5.display();
   mar6.display();
   mar7.display();
   
}