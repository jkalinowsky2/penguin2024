    
function showSky(){
  //color 1 = top, color 2= bottom
    switch (skyColorDay){                 //day sky
        case 0:
          color1 = color(140, 180, 215);
          color2 = color(255,255,255);
          break;
        case 1:
          color1 = color(210,210,210);  //gray
          color2 = color(230,230,230);  //gray
        break;
        case 2:
          color1 = color(255,255,255);  //white
          color2 = color(246,151,37);  //orange
        break;
        case 3:
          color1 = color(100,126,142);  //dark green
          color2 = color(126,165,116);  //green
        break;

        case 4:                         //Yellow-Pink
          color1 = color(245,243,174); 
          color2 = color(247,159,140);  
        break;

        case 5:
          color2 = color(239,163,198);  //pink
          color1 = color(142,226,250);  //blue
        break;

        case 6:
          color1 = color(247,172,187);  //pink
          color2 = color(252,195,161);  //peach
        break;

        case 7:
          // color1 = color(177,143,194);  //purple
          // color2 = color(246, 173,205);  //pink
          color1 = color(238, 45,118);  //pink
          color2 = color(243,136,177);  //purple
        break;

        case 8:
          // color1 = color(177,143,194);  //purple
          // color2 = color(246, 173,205);  //pink
          color1 = color(194,230,247);  //baby blue
          color2 = color(168,219,239);  //light baby blue
        break;
    }
    noStroke();
  
    if (h>12){
        skyColorAM = skyColorPM;      //sets sky color2 (not visible at 12) to the next days sky color 
    }

    if (h<=12){                       //gets AM sky color once skycolor has been set to skyColorPM; only needed if h slider is used
      getFile();
    }
  
    switch (skyColorAM){             //night sky
      case 0:                       //dark green
      //skyC2 = color(14,40,45);  
      color3 = color(10,28,30);  
      color4 = color(14,40,45);  
      lightTint = color (255,255,255);  
      break;
  
      case 1:
        skyC2 = color(29,14,43);    //purple
        color3 = color(20,11,30);    //purple
        color4 = color(29,14,43);    //purple
        lightTint = color (140,180,215);
      break;
  
      case 2:                     //Deep Blue
      //color3 = color(0,35,86);      
      color3 = color(0,26,58);      
      color4 = color (30,15,35);
      lightTint = color (140,160,225);
      break;
  
      case 3:   //yellow-pink
        color3 = color(175,30,93);
        color4 = color(238,233,45);   //yellow
        lightTint = color (238,233,145);
        isGradient = true;
        break;

      case 4:  //Soft Green
        color3 = color(100,126,142);  //dark green
        color4 = color(126,165,116);  //green
        lightTint = color (255,180,215);
        break;
  
      case 5:   //Asteroid Blue
        color3 = color(32,58,67);
        color4 = color(44,83,100);   
        lightTint = color (159,219,245);
        break;

        case 6:     //BLEH
          color3 = color(101,78,163);  //pink
          color4 = color(234,175,200);  //peach
          lightTint = color (120,209,205); //NEED NEW COLOR
        break;

        case 7:           //Pink Purple
          color3 = color(226,35,86);      
          color4 = color (30,15,44);
          lightTint = color (140,180,215);
        break;
    
      }
  
        let newColor1 = crossfade(color1, color3);
        let newColor2 = crossfade(color2, color4);
        skyGradient(newColor1, newColor2);
    }