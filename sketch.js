let ground, leftwall, rightwall, ceiling, ball, ball2, paddle, bottom, myscore, obstacle1, obstacle2, obstacle3, obstacle4, backimg, bloop, gameover, introtrans 
myscore = 0
function setup() {

  new Canvas();
  world.gravity.y = 4
  leftwall = new Sprite(20, 400, 40, 1200, 'static');//wall
  leftwall.color = '#07090F';//leftwall code
  
  rightwall = new Sprite(830, 400, 40, 1200, 'static');
  rightwall.color = '#07090F';//rightwall code
  
  ceiling = new Sprite(250, 0, 1200, 40, 'static');
  ceiling.color = '#07090F';// ceiling code
  
  bottom = new Sprite(250, 800, 1200, 40, 'static');
  bottom.color = '#07090F';// bottom code
  
  ball = new Sprite(400, 200, 50);
  ball.color = '#5AD2F4';
  ball2 = new Sprite(300, 200, 50);
  ball2.color = '#5AD2F4';//code to do with the two balls
  
  paddle = new Sprite(300, 300, 100, 40, 'kinetic');
  paddle.color = '#D1495B'// paddle code
  
  obstacle1 = new Sprite(75, 300, 100, 40, 'kinetic');
  obstacle1.color = '#FFD972';//obstacle1 code
  
  obstacle2 = new Sprite(725, 300, 100, 40, 'kinetic');
  obstacle2.color = '#A7E8BD';//obstacle2 code
  
  ball.speed = 50;
  ball.bounciness = 0.7;
  ball2.speed = 50;
  ball2.bounciness = 0.7;//speed and bounciness of balls code 
  
  obstacle3 = new Sprite(225, 500, 100, 40, 'kinetic');
  obstacle3.color = '#40476D';//obstacle3 code
  
  obstacle4 = new Sprite(575, 500, 100, 40, 'kinetic');
  obstacle4.color = '#593F62';//obstacle4 code
  
  instructions = new Sprite(width/2, height/2,width, height,'static');
    instructions.color = "pink";
    instructions.text ="keep the balls in the air for as long as you can and score the most points, good luck ";
  instructions.textSize = 20;
  instructions.textColor = "purple";
    instructions.life = 200// disappears after 200 milliseconds
  instructions.layer = 100// on top of everything 


}//end setup function


function draw() {
  background(255);
  imageMode(CENTER);
  image(backimg, width/2, height/2, width, height);
  paddle.moveTowards(mouse, 0.30)
  if (paddle.collides(ball)) {
    console.log("hit")
    myscore = myscore + 1
    paddle.text = myscore
    ball.vel.y = -20
  }//logging the score 
  if (ball.collides(bottom)) {
    console.log("game over");
    alert("game over");
    ball.remove();
    ball2.remove();
    paddle.remove();
  }// game over code 

  if (paddle.collides(ball2)) {
    console.log("hit")
    myscore = myscore + 1
    paddle.text = myscore
    ball2.vel.y = -20
  }// logging the score with ball two 
  if (ball2.collides(bottom)) {
    console.log("game over");
    alert("game over");
    ball2.remove();
    ball.remove();
    paddle.remove();
  }// game over code for ball2 

}//end draw function

function preload(){
backimg = loadImage('/backgroundimg.jpg');
}// end of preload function 
