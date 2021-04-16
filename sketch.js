var hr,mn,sc
var hrang,mnang,scang


function setup() {
  createCanvas(800,400);
angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  translate(200,200)
  rotate(-90)
  hr = hour();
  mn = minute();
  sc = second();
  hrang = map(hr%12,0,12,0,360)
  mnang = map(mn,0,60,0,360)
  scang = map(sc,0,60,0,360)
  push()
  rotate(hrang)
  stroke("red")
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  push()
  rotate(mnang)
  stroke("green")
  strokeWeight(7)
  line(0,0,70,0)
  pop()
  push()
  rotate(scang)
  stroke("blue")
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  noFill()
  stroke("blue")
  strokeWeight(7)
  arc(0,0,300,300,0,hrang)
  noFill()
  stroke("green")
  strokeWeight(7)
  arc(0,0,280,280,0,mnang)
  noFill()
  stroke("red")
  strokeWeight(7)
  arc(0,0,260,260,0,scang)
}
