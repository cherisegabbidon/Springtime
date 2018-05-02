var r,b,g;

function setup() {
  // put setup code here
    createCanvas(500,500);
}

function draw() {
  // put drawing code here
    background("#82d7ff");
    //stem
    noStroke();
    fill("#5ed6a2");
    rect(240,169,20,500);
    //petals
    fill(r,g,b,255);
    ellipse(250,50,70,70);
    ellipse(199,100,70,70);
    ellipse(250,141,70,70);
    ellipse(300,100,70,70);
    //flower center
    fill("#ff75bc");
    ellipse(250,100,70,70);
    //text
    fill("#ffe138");
    stroke("#ff75bc");
    strokeWeight(3);
    textSize(30);
    text("spring",20,30);
    //clouds on the left
    noStroke();
    fill("#f4f6f9");
    ellipse(100,277,70,70);
    ellipse(166,277,70,70);
    ellipse(144,259,70,70);
    ellipse(144,280,70,70);
    //clouds on the right side
    ellipse(333,277,70,70);
    ellipse(399,277,70,70);
    ellipse(377,259,70,70);
    ellipse(377,280,70,70);
    //leaf
    fill("#5ed6a2");
    ellipse(200,360,70,40);
}

function mousePressed(){
    //change the value of the color variables everytime the mouse is pressed - independently of the condition for the transparency value
    r = random(255);
    g = random(255);
    b = random(255);
}