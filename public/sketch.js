let socket = io();
let img;

//load background
function preload() {
  img = loadImage("back-of-postcard.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 150, 0);
  //hide cursor
  noCursor();
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}


function keyPressed() {
  //Captital D
  if (keyCode == "68") {
    socket.emit('dpres')
  }
  //e
  if (keyCode == "69") {
    socket.emit('epres')
  }
  //a
  if (keyCode == "65") {
    socket.emit('apres')
  }
  //r
  if (keyCode == "82") {
    socket.emit('rpres')
  }
  // Captial D using j
  if (keyCode == "74") {
    socket.emit('jpres')
  }
  //k
  if (keyCode == "75") {
    socket.emit('kpres')
  }
  //sentences
  //enter for main text
  if (keyCode == "13") {
    socket.emit('enterpres')
  }
  // h for greeting
  if (keyCode == "72") {
    socket.emit('hpres')
  }
}
