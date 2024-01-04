
let color1, color2;

function copyImages(){
    imgIce.copy(imgPengComp, 0,0, width,height,0,0,width,height);
    imgPeng.copy(imgPengComp, 0, height, width,height,0,0,width,height);
    imgPengIce.copy(imgPengComp, 0, height*2+100, width,height-100,0,0,width,height+100);
    imgIceDarkness.copy(imgPengComp, 0,height*3, width,height,0,0,width,height);
    
    imgLights0.copy(imgPengComp, 0,height*4, width/2,height/3,0,0,width/2,height/3);
    imgLights1.copy(imgPengComp, 0,height*5, width,height/3,0,0,width,height/3);
    imgLights2.copy(imgPengComp, 0,height*6, width,height/3,0,0,width,height/3);
    imgLights3.copy(imgPengComp, width/2,height*4, width/2,height/3,width/2,0,width/2,height/3);

    imgLights0r.copy(imgPengComp, 0,height*4+height/3, width/2,height,0,0,width/2,height);
    imgLights1r.copy(imgPengComp, 0,height*5+height/3, width,height,0,0,width,height);
    imgLights2r.copy(imgPengComp, 0,height*6+height/3, width,height,0,0,width,height);
    imgLights3r.copy(imgPengComp, width/2,height*4+height/3, width/2,height,width/2,0,width/2,height);
    imgGlow.copy(imgPengComp, 0,height*7, width,height,0,0,width,height);

}

function resizeImages(){
    imgIce.resize(width, height);
    imgPeng.resize(width, height);
    imgPengIce.resize(width, height);
    imgIceDarkness.resize(width, height);
    imgIceDarkness2.resize(width, height);
    imgIceDarkness3.resize(width, height);
    //imgStars.resize(width, height);
    imgLights0.resize(width, height);
    imgLights1.resize(width, height);
    imgLights2.resize(width, height);
    imgLights3.resize(width, height);
    imgLights0r.resize(width, height);
    imgLights1r.resize(width, height);
    imgLights2r.resize(width, height);
    imgLights3r.resize(width, height);
    imgGlow.resize(width, height);
  }

     // Function to calculate the day of the year
function getDayOfYear(date) {
    let startOfYear = new Date(date.getFullYear(), 0, 0);
    let diff = date - startOfYear;
    let oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

function showScene(){
    let floatTimeX = 100;
    let floatTimeY = 250;
    let pengX = map(sin((thisFrame/fr)/(PI*floatTimeX)), -1,1,-width/4,width/4);  
    let pengY = map(sin(thisFrame/(PI*floatTimeY)), -1,1,-height/200,height/200);
    image(imgPengIce, pengX,pengY);
    image(imgPeng, 0, 0); 
  
    }

  
function getFrame(){
    h = hour();
    m = minute();
    s = second();

    h=22;
    // m = 10;
    // s=25;
    slidermin = hslider.value();
    h = floor(hslider.value()/60);
    m = hslider.value()-(h*60);
 

    framesPerDay = hours*minutes*seconds*fr;
    secondsPerDay = hours*minutes*seconds;
    currentSecond = (h*60*60)+(m*60)+ (s);
    currentMinute = (h*60)+(m);
    rotationSpeed = (revsPerDay*2*PI)/framesPerDay;
    rotationTime = 86400/revsPerDay;
    fractRev = currentSecond % rotationTime;
    vertOffset = map(sin((TWO_PI / 365) * dayOfYear), -1, 1, -200, 500); 
    

    if (firstFrame == true){
    startFrame = (dayOfYear * framesPerDay) +  (h*60*60*fr) + (m*60*fr) + (s*fr);
    firstFrame = false;

    }
    thisFrame = startFrame + frameCount;

    }

    function getFile(){
      let row0, row;
      row0 = sundata.getRow(dayOfYear-2);
      row = sundata.getRow(dayOfYear-1);
   
    if(dayOfYear==1){
      row0 = sundata.getRow(dayOfYear+363);
    }


        sunriseStartH = row.getNum('sunriseStartH');
        sunriseStartMin = row.getNum('sunriseStartMin');
        sunriseEndH = row.getNum('sunriseEndH');
        sunriseEndMin = row.getNum('sunriseEndMin');
        sunsetStartH = row.getNum('sunsetStartH');
        sunsetStartMin = row.getNum('sunsetStartMin');
        sunsetEndH = row.getNum('sunsetEndH');
        sunsetEndMin = row.getNum('sunsetEndMin');

        cloudCountIn = row.getNum('cloudCount');

        iceColorAM = row.getNum('iceColorAM');
        iceColorDay = row.getNum('iceColorDay');
        iceColorPM = row.getNum('iceColorPM');

        skyColorAM = row.getNum('skyColorAM');
        skyColorDay = row.getNum('skyColorDay');
        skyColorPM = row.getNum('skyColorPM');

        starCountIn = row.getNum('starCount');
        starCountIn0 = row0.getNum('starCount');
        starlinksIn = row.getNum('starlinks');

        daylight = abs(sunsetStartH-sunriseEndH);



    }
 
    function getFader(){ 
      sunriseStart = (sunriseStartH * 60) + (sunriseStartMin); 
      sunriseEnd = (sunriseEndH * 60) + (sunriseEndMin); 
      sunsetStart = (sunsetStartH * 60) + (sunsetStartMin); 
      sunsetEnd = (sunsetEndH * 60) + (sunsetEndMin); 
  
      if (currentMinute<sunriseStart){                     //night
          trFader = 1;
      }
      else if (currentMinute<sunriseEnd){                  //sunrise
          fadeFrame = ((h * 60 * 60) + (m * 60) + (s)) * fr;
          startFade = sunriseStart * 60 * fr;
          endFade = sunriseEnd * 60 * fr;
          trFader = map(fadeFrame, startFade, endFade, 1,0)
      }
      else if (currentMinute<sunsetStart){                 //daylight to 6pm
          trFader = 0;
      }
      else if (currentMinute<sunsetEnd){                   //sunset 7-9pm
          fadeFrame = ((h * 60 * 60) + (m * 60) + (s)) * fr;      //updates trFader once per second
          startFade = sunsetStart * 60 * fr;
          endFade = sunsetEnd * 60 * fr;
          trFader = map(fadeFrame, startFade, endFade, 0,1)
          
      }
      else {trFader = 1;}

      //trFader = trslider.value();
  
  }