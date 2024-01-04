
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('Penguin265_' + skyColor1 + skyColorAM + iceColor1 + iceColor2, 'png'); // Save the canvas as an image with the filename 'myCanvas.png'
  }
}

// function keyPressed() {
//   // Use the UP and DOWN arrow keys to control the slider
//   if (keyCode === UP_ARROW) {
//     dslider.value(dslider.value() + 1)
//     hslider.value(hslider.value() + 10);
//     ;
//   } else if (keyCode === DOWN_ARROW) {
//     dslider.value(dslider.value() - 1);
//     hslider.value(hslider.value() - 10);

//   }
// }


function keyPressed() {
  // Use the UP and DOWN arrow keys to control the slider
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
    // Set the step size for continuous movement
    dstep = 0;
    hstep = 0;
    trstep = .01;
  }
}

function keyReleased() {
  // Reset the step size when the key is released
  dstep = 0;
  hstep = 0;
  trstep = 0;
}

function moveSlider(dstep, hstep) {
  // Move the slider based on the specified amount
  dslider.value(dslider.value() + dstep);
  hslider.value(hslider.value() + hstep);
  trslider.value(hslider.value() + trstep);
  

  }

  // function mousePressed() {
  //   if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
  //     let fs = fullscreen();
  //     fullscreen(!fs);
  //   }
  // }

  function showText(){

  fill(0);
  noStroke();
  // let currentFrameRate = frameRate();
  // text("w: " + width, 250, height-60);
  // text("h: " + height, 250, height-40);
  // text("m: " + m, 250, height-40);
  // text("s: " + s, 250, height-20); 
  // text("redrawnStarlinks " + redrawnStarlinks, 250, height-5); 
  // text("redrawnStarlinks " + redrawnStarlinks, 250, height-5); 

  // text("Current Time: " + h + ":" + nf(m,2) + ":" + nf(s,2), 20, height-50);  
  //text("d = " + dayOfYear, 20, height-10);  
  // text("skyColorDay = " + skyColorDay, 20, height-40);  
  // text("skyColorAM = " + skyColorAM, 20, height-20);  
  // text("iceColor1 = " + iceColor1, 200, height-40);  
  // text("iceColor2 = " + iceColor2, 200, height-20);  

  
  
  // text("Current Time: " + h + ":" + nf(m,2) + ":" + nf(s,2), 20, height-50);  
  // text("Sunrise Start: " + sunriseStartH + ":" + sunriseStartMin, 20, height-30);  
  // text("Sunrise End: " + sunriseEndH + ":" + sunriseEndMin, 20, height-10);  
  // text("Current Time: " + h + ":" + nf(m,2) + ":" + s, 20, height-50);  
  
  // text("Sunset Start: " + sunsetStartH + ":" + nf(sunsetStartMin,2), 200, height-30);  
  // text("Sunset End: " + sunsetEndH + ":" + nf(sunsetEndMin,2), 200, height-10);  
  // text("trFader: " + trFader, 20, height-70);

// text("Frame Rate: " + nf(currentFrameRate, 2, 2), 20, height - 20);
//console.log(saved);



if (keyIsPressed && keyCode === UP_ARROW) {
  moveSlider(dstep,hstep);


}

// Check if the DOWN arrow key is held down
if (keyIsPressed && keyCode === DOWN_ARROW) {
  moveSlider(-dstep, -hstep);


}
  }

