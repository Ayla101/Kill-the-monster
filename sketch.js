const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  //wall 1
  b1 = new Box(600, 100, 70, 70);
  b2 = new Box(600, 100, 70, 70);
  b3 = new Box(600, 100, 70, 70);
  b4 = new Box(600, 100, 70, 70);
  b5 = new Box(600, 100, 70, 70);
  b6 = new Box(600, 100, 70, 70);
  b7 = new Box(600, 100, 70, 70);

  //wall 2
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(900, 100, 70, 70);
  box8 = new Box(900, 100, 70, 70);

  //wall 3
  B1 = new Box(700, 100, 70, 70);
  B2 = new Box(700, 100, 70, 70);
  B3 = new Box(700, 100, 70, 70);
  B4 = new Box(700, 100, 70, 70);
  B5 = new Box(700, 100, 70, 70);
  B6 = new Box(700, 100, 70, 70);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  //wall 2
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()

  //wall 1
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()

   //wall 3
   B1.display()
   B2.display()
   B3.display()
   B4.display()
   B5.display()
   B6.display()

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
