//generate array of stars
let rotationSpeed;
let vOffset = 1500;
let theta = 0;
let revsPerDay = 25;
let rotationTime;
let vTest = 150;


function drawStars(){

    randomSeed(dayOfYear);
    stars.length = 0;
    for (let i = 0; i<starCount; i++ ){
        let x = random(-width, width*2);
        let y = random(-height, height*2);
        let r = random(1,1.6);
        stars.push(new Star(x, y, r));
        }
    }

class Star{
    constructor(x,y,d){
        this.x = x; 
        this.y = y;
        this.d = d;
        this.theta = 0;
        this.a = random (25,255);
        this.acc = random(1, 1.5);  //some stars rotate faster than others
        vOffset = map(sin(dayOfYear),-1,1,0,1500);   //sets arc of stars in sky throughout year

    }

    show(){
        fill(255,255,255, this.a);
        noStroke();
        if(this.x > 0 && this.x<width && this.y>0 && this.y < height/3){
            circle(this.x,this.y,this.d);
            } 

    }

    rotate(){
        angleMode(RADIANS);
        this.rad = dist(width/2, height/2+vOffset, this.x, this.y);
        this.x = this.rad*cos(this.theta*this.acc)+width/2;
        this.y = this.rad*sin(this.theta*this.acc)+height/2+vOffset;
        this.theta = map(thisFrame,0,framesPerDay, 0, revsPerDay*PI);  
    }

    twinkle(){
        let doTwinkle = random(1000);
        if (doTwinkle<900){ 
            let twinkle = sin(this.x*.1)*.7 % .4;
            this.a = map(twinkle,-1,1,-25,255)*trFader;
        }
        }
}




