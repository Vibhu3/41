const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var raindrops = [];
 var umbrella;
var drops=[]
function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(400,800);
  umbrella = new Umbrella(180, 690, 225);

}

function draw() {
  background("black");
  umbrella.display(); 

  if(frameCount % 1 === 0){
    var drop = new Drops(random(0, windowWidth), -100,10);
    drops.push(drop);
  }

  for(var i = 0; i < drops.length; i++){
   // drops[i].fall(40);
    drops[i].velocityY++
    drops[i].display();
  }
}