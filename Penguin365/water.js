let iceColor1;
let iceC11, iceC12, iceC21, iceC22;

function showWater(){   
  
  if(h<=12){
    iceColor1 = iceColorDay;
    iceColor2  = iceColorAM;
  }
  else {      //DAY
    iceColor1 = iceColorDay;
    iceColor2 = iceColorPM;      //sets water color2 (not visible at 12) to the next days sky color 
    }
    

  switch (iceColor1){    
      case 0:
        iceC11 = color(255,255,255);   //light ice blue //top color
        iceC12 = color(135,180,210);   //ice blue   //bottom color
        break;
      case 1:
        iceC11 = color(255,255,255);    ///white
        iceC12 = color(255,255,255);    ///white
        break;
      case 2:
        iceC11 = color(141,187,216);   //summer blue
        iceC12 = color(141,187,216);   //summer blue
        break;
      case 3:
        iceC12 = color(115,147,126);  //dark green
        iceC11 = color(136,163,148);  //green
        break;
      case 4:
        iceC12 = color(250,250,250);    ///white
        iceC11 = color(243,183,116);    ///orange
        break;
      case 5:
        iceC11 = color(239,163,198);    ///pink
        iceC12 = color(142,226,250);    ///slate blue
        break;
      case 6:
        iceC12 = color(249,179,162);  //peach
        iceC11 = color(249,215,207);  //peach
        break;
      case 7:
        iceC11 = color(242,170,199);  //light
        iceC12 = color(238, 45,118);  //pink
        break;
      case 8:
        iceC12 = color(194,230,247);  //light
        iceC11 = color(168,219,239);  //pink
        break;
        
  }

  switch (iceColor2){                 
    case 0:
      iceC21 = color(203,231,239);   //ice blue
      iceC22 = color(203,231,239);   //ice blue
      break;
    case 1:
      iceC21 = color(255,255,255);    ///white
      iceC22 = color(255,255,255);    ///white
      break;
    case 2:
      iceC21 = color(141,187,216);   //sumer blue
      iceC22 = color(141,187,216);   //sumer blue
      break;
    case 3:
      iceC21 = color(100,126,142);  //dark green
      iceC22 = color(126,165,116);  //green
      break;
    case 4:
      iceC21 = color(208,30,93);    ///aqua
      iceC22 = color(208,30,93);    ///aqua
      break;
    case 5:
      iceC21 = color(239,163,198);    ///pink
      iceC22 = color(142,226,250);    ///slate blue
      break;
    case 6:
      iceC21 = color(255,205,194);    ///peach
      iceC22 = color(255,205,194);    ///peach
      break;
    case 7:
        iceC12 = color(226,35,86);  //peach
        iceC11 = color(226,35,86);  //peach
        break;
    
}

    let waterColor1 = crossfade(iceC11, iceC21);
    let waterColor2 = crossfade(iceC12, iceC22);
    waterGradient (waterColor1, waterColor2);

  }
