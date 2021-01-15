const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;

var pink1,pink2,pink3,pink4,pink5,pink6,pink7,pink8,pink9;

var sling1;

var polygon,polygonImg;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup() {
    //create the canvas
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    //first set

    //create the ground
    ground1 = new Ground(520,550,500,20);

    //fourth layer
    blue1 = new BlueBox(400,500,40,40);
    blue2 = new BlueBox(440,500,40,40);
    blue3 = new BlueBox(480,500,40,40);
    blue4 = new BlueBox(520,500,40,40);
    blue5 = new BlueBox(560,500,40,40);
    blue6 = new BlueBox(600,500,40,40);
    blue7 = new BlueBox(640,500,40,40);
    //third layer
    blue8 = new BlueBox(440,450,40,40);
    blue9 = new BlueBox(480,450,40,40);
    blue10 = new BlueBox(520,450,40,40);
    blue11 = new BlueBox(560,450,40,40);
    blue12 = new BlueBox(600,450,40,40);
    //second layer
    blue13 = new BlueBox(480,400,40,40);
    blue14 = new BlueBox(520,400,40,40);
    blue15 = new BlueBox(560,400,40,40);
    //first layer
    blue16 = new BlueBox(520,350,40,40);

    //second set

    //create the ground for the second set
    ground2 = new Ground(920,250,300,20);

    //third layer
    pink1 = new PinkBox(840,200,40,40);
    pink2 = new PinkBox(880,200,40,40);
    pink3 = new PinkBox(920,200,40,40);
    pink4 = new PinkBox(960,200,40,40);
    pink5 = new PinkBox(1000,200,40,40);

    //second layer
    pink6 = new PinkBox(880,150,40,40);
    pink7 = new PinkBox(920,150,40,40);
    pink8 = new PinkBox(960,150,40,40);

    //first layer
    pink9 = new PinkBox(920,100,40,40);

    //create the stone
    polygon = Bodies.circle(150,400,20);
    World.add(world,polygon);

    //create the sling
    sling1 = new SlingShot(this.polygon,{x:100,y:420});

    Engine.run(engine);
}

function draw() {
    //set the background color
    background("lightgrey");

    textSize(50);
    text("Drag and release the hexagonal stone to launch it",50,50);

    //display the ground for the first set
    ground1.display();

    //display the first set
    blue1.display();
    blue2.display();
    blue3.display();
    blue4.display();
    blue5.display();
    blue6.display();
    blue7.display();
    blue8.display();
    blue9.display();
    blue10.display();
    blue11.display();
    blue12.display();
    blue13.display();
    blue14.display();
    blue15.display();
    blue16.display();

    //display the ground for the second set
    ground2.display();

    //display the second set
    pink1.display();
    pink2.display();
    pink3.display();
    pink4.display();
    pink5.display();    
    pink6.display();
    pink7.display();
    pink8.display();
    pink9.display();

    //set the image for the polygon
    imageMode(CENTER);
    image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
    

    //display the sling
    sling1.display();
    
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    sling1.fly();
}