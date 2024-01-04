  
  function skyGradient(c1, c2) {
    noFill();
    let inc = .1;
    for (let i = -height/3; i < height/1.7; i=i+inc) {
        let inter = map(i, 0, height*.7, 0, 1);
        let c = lerpColor(c1, c2, inter);
      strokeWeight(2);  
      stroke(c);
      ellipse(width/2, i, width, height/2);
  }
  }



  function waterGradient(col1, col2) {
    noFill();
    let inc = 1;
    strokeWeight(1);
    for (let i = height/2.75-10; i < 2*height/2.75; i=i+inc) {
      let inter = map(i, height/5.5, 2*height/2.75, 0, 1);
      let c = lerpColor(col1, col2, inter);
        
      stroke(c);
      line(0, i, width, i);
  }
  }

//take in two colors, return 1 color that blends those colors based on trFader value

  function crossfade (color1, color2){
      let c1 = color(color1);
        let r1 = red(c1);
        let g1 = green(c1);
        let b1 = blue(c1);
        
      let c2 = color(color2);
        let r2 = red(c2);
        let g2 = green(c2);
        let b2 = blue(c2);

      let newR = map(trFader,0,1,r1, r2);
      let newG = map(trFader,0,1,g1, g2);
      let newB = map(trFader,0,1,b1, b2);

      newColor = color(newR, newG, newB);
      return(newColor);
        
  }
