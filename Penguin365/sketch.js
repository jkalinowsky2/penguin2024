let scl;
let fr = 30;
let seconds = 60;
let minutes = 60;
let hours = 24;
let days = 365;
let secondsPerDay;
var totFrames;
let currentDate;
let dayOfYear;
let stars = [];
let starlinks = [];
let sun;
let starlinkCount = 14;
let starlinksIn;
let starCount, starCountIn;
var clouds = [];
let cloudCount = 25;
let newStars = true;

var lights = [];
let h, m, s;
let startFrame, framesPerDay, thisFrame, frameOfDay, startFrameOfDay;
let firstFrame = true;
let thetaOffset;
let currentSecond, currentMinute;
let fractRev;
let sundata;
let trCloud;
let sourceWidth = 1920;
let sourceHeight = 1080;
let trFader;
let showDarkness = true;
let skyC1, skyC2, skyC3;
let lightTint;
let readFile = true;
let frameCounter = 0;
let cloudImg;
let buffer;
let redrawClouds = true;
let redrawnStars = false;
let daylight;

let newStarlinks = false;
let redrawnStarlinks = false;

let hslider;
let slidermin;
let dslider;


let saved=0;

let startDay = 3;
let dstep =1;
let hstep = 10;





function preload() {
  imgPengComp = loadImage('PengComp19201080.png');
  imgIce = createImage(sourceWidth, sourceHeight);
  imgPeng = createImage(sourceWidth, sourceHeight);
  imgPengIce = createImage(sourceWidth, sourceHeight);
  imgIceDarkness = createImage(sourceWidth, sourceHeight);
  imgIceDarkness2 = createImage(sourceWidth, sourceHeight);
  imgIceDarkness3 = createImage(sourceWidth, sourceHeight);
  imgLights0 = createImage(sourceWidth, sourceHeight);
  imgLights1 = createImage(sourceWidth, sourceHeight);
  imgLights2 = createImage(sourceWidth, sourceHeight);
  imgLights3 = createImage(sourceWidth, sourceHeight);
  imgLights0r = createImage(sourceWidth, sourceHeight);
  imgLights1r = createImage(sourceWidth, sourceHeight);
  imgLights2r = createImage(sourceWidth, sourceHeight);
  imgLights3r = createImage(sourceWidth, sourceHeight);
  imgGlow = createImage(sourceWidth, sourceHeight);

  sundata = loadTable('sundata.csv', 'csv', 'header');



}

function setup() {
  //noLoop();
  //reset();
  var totFrames = fr * seconds * minutes * hours * days;
  frameRate(fr);
  createCanvas(windowWidth, windowHeight);
  width = sourceWidth;
  height = sourceHeight;
  let aspectRatio = height / width;
  copyImages();


  //logic to size to window
  if ((window.innerHeight/window.innerWidth)>(aspectRatio)){
    width = window.innerWidth;
    height = width * aspectRatio;
    console.log(window.innerHeight/window.innerWidth);
    }
  else {
      height = window.innerHeight;
      width = height/aspectRatio;
  }  
  
  if ((windowHeight/windowWidth)>(aspectRatio)){
    width = windowWidth;
    height = width * aspectRatio;
    console.log(windowHeight/windowWidth);
    }
  else {
      height = windowHeight;
      width = height/aspectRatio;
  }

  scl = height/1080;
  resizeImages();
  
  //createCanvas(windowWidth, windowHeight);
  lightTint = color(255, 255, 255);
  buffer = createGraphics(width, height);
  //skyBuffer = createGraphics(width,height);
  sun = new Sun();

  //test slider
  hslider = createSlider(0,24*60,24*60/2,1);
  hslider.position(width-600, height+10);
  hslider.style('width', '500px');

  dslider = createSlider(1,365,1,1);
  dslider.position(20, height+20);
  dslider.style('width', '1000px');

  trslider = createSlider(0,1,.5,.01);
  trslider.position(20, height+50);
  trslider.style('width', '1000px');

 


}
function reset(){
console.log("reset");
createCanvas(windowWidth, windowHeight);
// width = sourceWidth;
// height = sourceHeight;
// let aspectRatio = height / width;
// copyImages();
//  //logic to size to window
//  if ((window.innerHeight/window.innerWidth)>(aspectRatio)){
//   width = window.innerWidth;
//   height = width * aspectRatio;
//   console.log(window.innerHeight/window.innerWidth);
//   }
// else {
//     height = window.innerHeight;
//     width = height/aspectRatio;
// }  
// scl = height/1080;
// resizeImages();
// buffer = createGraphics(width, height);
}


function draw() {
  //dayOfYear = getDayOfYear(new Date());

  dayOfYear = dslider.value();

  randomSeed(dayOfYear);
  getFrame();

  if (readFile == true) {
    getFile();
    readFile = false;
  }


  if (h==0 && min == 1 && s == 1){          //re-read data file at 12:01:01
    readFile = true;
  }

  showSky();

  sun.show();
  sun.go();

  
  getFader();
  cloudCount = cloudCountIn;
  
  if (redrawClouds==true){

  for (let i = 0; i < cloudCount; i++) {

    let x = random(width);
    let y = random(0, height/4);
    //let randScl = random(.1, .25);
    let sclX = scl*130;                 //scales cloud x values
    let sclY = scl*.55;                 //scales cloud y values, lower = skinnier
    clouds.push(new Cloud(x, y, sclX, sclY));
    redrawClouds = false;
  }
}

  cloudCount = showClouds;
  // if (showClouds == '1'){
  for (let cloud of clouds) {
    cloud.show(buffer);     //delete buffer
    cloud.move(buffer);
    cloud.setAlpha(buffer);
  // }
}

  image(buffer,0,0);

  //thetaOffset = map(fractRev, 0, 86.4, 0, 2 * PI)
  starCount = starCountIn;

  ///Draws for 30 frames, need to fix!////
  if (h == 11 && m == 11 && s == 0 && redrawnStars == false) {      //draw new stars at 11:11:11 
    newStars = true;
    redrawnStars = true;        //makes sure stars are drawn once, each frame of this second
  }
    
  

  if (newStars == true) {
    drawStars();
    newStars = false;
  }


  for (let star of stars) {
    star.show();
    star.rotate();
    star.twinkle();
  }


  if (newStarlinks == true && starlinksIn == 1) {
    drawStarlinks();
    newStarlinks = false;
  }

  for (let starlink of starlinks){
      starlink.show();
      starlink.move();
    }

//  Logic for showing starlinks at 8:15:10 and 8:45:10 if starlinksIn = 1  //

    //if time is 8:15:10 or 8:45:10 and starlinks have not been drawn, set newStarlinks to true and mark as drawn //
if ((h == 20 && m == 15  && s == 10 && redrawnStarlinks==false) || (h == 20 && m == 45  && s == 10 && redrawnStarlinks==false)){      
  newStarlinks = true;
  redrawnStarlinks = true;        //makes sure starlinks are drawn once, each frame of this second
}

if ((h==12 && m ==1 && s ==1) || h==20 && m ==30 && s == 10) {               //resets starlinks as not drawn at midnight and 8:30:00pm
  newStarlinks = false;
  redrawnStars = false;
  redrawnStarlinks = false;
}
// End starlink logic  //

  showWater();
  image(imgIce, 0, 0);
  showScene();
  showLights(lightTint);
  
  showText();

 

}


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   resizeImages();
//   // fill(255,255,255,100);
//   // rect (0,0, windowWidth, windowHeight);
//   reset();
// }