var score = 0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper, ground1, ground2, ground3;
var hexagon, sling;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var box17,box18,box19,box20,box21;
var box22,box23,box24;
var box25;


function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hexagon = new Hexagon(50,200);
	
	sling = new Slingshot(hexagon.body,{x:100, y:200});

	ground1 = new Ground(390,305,225,15);
	ground2 = new Ground(690,205,165,15);
  ground3 = new Ground(500,600,1000,15);

	box1 = new Box(300,275,30,40);
	box2 = new Box(330,275,30,40);
	box3 = new Box(360,275,30,40);
	box4 = new Box(390,275,30,40);
	box5 = new Box(420,275,30,40);
	box6 = new Box(450,275,30,40);
	box7 = new Box(480,275,30,40);

	box8 = new Box(330,235,30,40);
	box9 = new Box(360,235,30,40);
	box10 = new Box(390,235,30,40);
	box11 = new Box(420,235,30,40);
	box12 = new Box(450,235,30,40);
  
	box13 = new Box(360,195,30,40);
	box14 = new Box(390,195,30,40);
	box15 = new Box(420,195,30,40);
  
	box16 = new Box(390,155,30,40);

	box17 = new Box(630,165,30,40);
	box18 = new Box(660,165,30,40);
	box19 = new Box(690,165,30,40);
	box20 = new Box(720,165,30,40);
	box21 = new Box(750,165,30,40);	

	box22 = new Box(660,125,30,40);
	box23 = new Box(690,125,30,40);
	box24 = new Box(720,125,30,40);
	
	box25 = new Box(690,85,30,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  noStroke();
  textSize(35);
  fill(255);
  text("Score" + score, width - 300,50);

  drawSprites();
 
  ground1.display();
  ground2.display();
  ground3.display();
  hexagon.display();
  sling.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();

}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(hexagon.body);
  }
}

async function getBackgroundImg(){

  //fetch the timezone of a country
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  console.log(response);
  
  var responseJson = await response.json();

  var datetime = responseJson.datetime;
  console.log(datetime);

  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour>06 && hour<18){
      background(255);
  }else{
      background(70);
  }
      

}