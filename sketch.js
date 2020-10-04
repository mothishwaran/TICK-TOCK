


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  var hr=hour();
  var min=minute();
  var sec=second();

  point ()

  
  translate(400,200);
  rotate(-90);
 
  
  

  

 var h=map(hr % 12,0,12,0,360);
 var m=map(min,0,60,0,360);
 var s=map(sec,0,60,0,360);
 
 
push ();
noFill();
stroke (225,0,0);
strokeWeight(8);
arc(0,0,300,300,0,s)
pop();

push();
rotate(s);
strokeWeight(8)
stroke(225,0,0)
line (0,0,100,0);
pop();



push ();
noFill();
stroke (0,225,0); 
strokeWeight(8);
arc(0,0,280,280,0,m)
pop();

push();
rotate(m);
strokeWeight(8);
stroke(0,225,0)
line(0,0,90,0)
pop();
 
push ();
noFill();
stroke (0,0,225);
strokeWeight(8);
arc(0,0,260,260,0,h)
pop();


 push();
 rotate(h);
 strokeWeight(8)
 stroke(0,0,225);
 line(0,0,80,0);
 pop();
 

 

  drawSprites();
}