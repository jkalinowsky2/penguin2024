let thisTr0, thisTr1, thisTr2, thisTr3, glowTr;
let sunriseStart,sunriseEnd, sunsetStart, sunsetEnd;
let sunriseStartH,sunriseEndH, sunsetStartH, sunsetEndH;
let sunriseStartMin,sunriseEndMin, sunsetStartMin, sunsetEndMin;
let skyColor1, skyColor2, skyColor3;
let showClouds;
let wispAngle;
let iceColor;
let showDarkensss = true;

function showLights(lt){
    tint(255,map(trFader, 0,1,0,225));
    image(imgIceDarkness, 0, 0);

for (i=0; i<1; i++){
    let pulseTime = 45;
    glowTr = trFader * map(sin(thisFrame/(PI*pulseTime)), -1,1,0,255);
    if(glowTr<0){
        lightTint.setAlpha(0);}
        else{
        lightTint.setAlpha(glowTr);
        }
    tint(lightTint, glowTr);
    image(imgGlow,0,0);

    pulseTime = 30;
    thisTr0 = trFader * map(cos(thisFrame/(PI*pulseTime)), -1,1,-10,255);
    if(thisTr0<0){
        lightTint.setAlpha(0);}
        else{
        lightTint.setAlpha(thisTr0);
        }
    tint(lightTint, thisTr0); 
    image(imgLights0,0,0);
    push();
    blendMode(OVERLAY);
    tint (lightTint, thisTr0*2);
    image(imgLights0r,0,height/3);
    pop();
    
  
    pulseTime = 45;
    thisTr1 = trFader * map(sin(thisFrame/(PI*pulseTime)), -1,1,-10,255);
    if(thisTr1<0){
        lightTint.setAlpha(0);}
        else{
        lightTint.setAlpha(thisTr1);
        }
    tint(lightTint, thisTr1);
    image(imgLights1,0,0);
    push();
    blendMode(LIGHTEST);
    tint (lightTint, thisTr1*2);
    image(imgLights1r,0,height/3);
    pop();

    pulseTime = 45;
    thisTr2 = trFader * map(cos(thisFrame/(PI*pulseTime)), -1,1,-10,255); 
    if(thisTr2<0){
        lightTint.setAlpha(0);}
        else{
        lightTint.setAlpha(thisTr2);
        }
    tint(lightTint, thisTr2);
    image(imgLights2,0,0);

    push();
    blendMode(OVERLAY);
    tint (lightTint, thisTr2*3);
    image(imgLights2r,0,height/3);
    pop();

    pulseTime = 30;
    thisTr3 = trFader * map(sin(thisFrame/(PI*pulseTime)), -1,1,-10,255);
    if(thisTr3<0){
        lightTint.setAlpha(0);}
        else{
        lightTint.setAlpha(thisTr3);
        }
    tint(lightTint, thisTr3);
    image(imgLights3,0,0);

    push();
    blendMode(OVERLAY);
    tint (lightTint, thisTr3*2);
    image(imgLights3r,0,height/3);
    pop();
}
    noTint();

}


class Sun{
    constructor(r){
       
        angleMode(RADIANS);
        push();
        dayOfYear = getDayOfYear(new Date());
        this.thetaSun = 0;
        this.x =100;
        this.y = 100;
        this.dia = scl*90;          //sets diameter of sun
        this.maxa = 140;             //alpha at center of sun
        this.inc = this.maxa/((this.dia)/2);
        pop();

    }

    show(){
        this.vertOffset = map (daylight, 0,20,500,3500);   //sets arc in sky based on daylight hours
        this.d = this.vertOffset+scl*1600;

        //add if to only draw if on screen
        if(this.x>-200 && this.x<width+200){

        fill(255,this.maxa);
        noStroke();
        let dia = this.dia;
        let thk = scl*15;
        thk = .12*this.dia;
        let prevThk = thk;
        let prevDia = dia;
        let thisThk = 0;
        for(let i=1; i<5; i++){
            noFill();
            stroke(255,this.maxa/(i*2));
            prevThk = thisThk; //console.log(prevThk);
            thisThk = thk*i; //console.log(thisThk);
            strokeWeight(thisThk);
            prevDia = dia;
            dia = (prevDia + prevThk) + (thisThk*.8);           //change last number for overlap
            circle(this.x, this.y, dia);
            

        }

        //GRADIENT SUN
        for (let i=0; i<this.dia+600; i++){
            this.a = this.maxa - this.inc*i/4;
            stroke(255,this.a);
            strokeWeight(2);
            circle(this.x, this.y, i);
        }
    }
    }

    go(){
        
        angleMode(DEGREES);
        let arcCenter = 90;
        let arcRange = 30;
        let sunAlt = map(daylight, 5, 17, 1.7,1.5);                     //adjust altitude of sun based on daylight hours

        this.thetaSun = map(currentSecond,0,secondsPerDay, arcCenter-arcRange, arcCenter+arcRange);         
        this.x = width/2-this.d * cos(this.thetaSun); 
        this.y = sunAlt*height+this.vertOffset-this.d * sin(this.thetaSun);    //vary 1.5 to 1.7 to raise and lower in sky

        let arcCenterMoon = 180;
        this.thetaMoon = map(currentSecond,0,secondsPerDay, arcCenterMoon-arcRange, arcCenterMoon+arcRange);         
        this.xMoon = width/2-this.d * cos(this.thetaMoon); 
        this.yMoon = 1.5*height+this.vertOffset-this.d * sin(this.thetaMoon);
        this.xMoon = 100;
        this.yMoon = 100;



        
    }
}

