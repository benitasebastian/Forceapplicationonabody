const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var btn1;
var btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

/*The buttons we are creating are called image buttons, so arrow images we saw in the visual will be displayed 
on the canvas, and they will work like buttons.The buttons we are creating are called image buttons,
 so arrow images we saw in the visual will be displayed on the canvas, and they will work like buttons.
First, you create two variables as var btn1, btn2; Next, in the setup() function, we will create buttons. 
Button is created using the createImg() function, in the arguments. Then we will set the position and the
 size of the button. After that, we will attach the function with a button using the mouseClicked() function.
  We will pass the function name as an argument in this function.*/
   
   // Create functions to apply force on the body and attaching a function to the button on the canvas.
   // created the buttons which is not actually a button but an image which has been given mouseClicked power.
  btn1 = createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce); // On clicking the mouse a horizontal force will be applied. 
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce); // On clicking the mouse a vertical force will be applied.
  
  ground =new Ground(200,390,400,20); //Here we are creating objects of the class ground.Syntax: objectname=new lastname();
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

/*Matter.js offers us the function to apply the force on the body, where we can choose the body and points on 
which we want to apply the force on, direction, and the value of force. 
This function is called Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0}); 
Here the first argument is the body, the second is the x & y positions which is the initial amount of force 
applied on the body and the third is the amount and direction of the force in x and y-direction. 
If we apply +ve force in the x-direction, that will move the ball in the right direction and similarly,
 -ve force in the left direction. Similarly, +ve value of y will move the ball in the downward direction and 
 -ve value will move in the upward direction*/
function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
