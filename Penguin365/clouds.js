class Cloud{
    constructor(x,y,sclX, sclY){
        this.x = x 
        this.y = y;
        this.sclX = sclX;
        this.sclY = sclY;
        
        this.a = random ([4,4,8,10,20,30]);                         //assign transparancy to clouds
        this.inc = .01;                                             //set drift speed of clouds. smaller = slower

    }

    show(){
        fill(255,255,255, this.alpha);                  
        let stWght = map(this.y, 0,height/6, 50,10);
        noStroke();

        this.xVals = [0, 1, 2, 1, 0, -1, -2, -1];
        this.yVals = [50, 25, 0, -25, -50, -25, 0, 25];      
        
        for (let i = 0; i<this.yVals.length; i++){
            this.xVals[i] = this.xVals[i] * this.sclX;              //array for x values of cloud shapes
            this.yVals[i] = this.yVals[i] * this.sclY;              //array for y values of cloud shapes

          }

        for (let i=0; i<1; i++){  
            beginShape();
                for (let j=0; j<this.xVals.length; j++){
                    let yRan;
                    if(j>=2 && j<=5){
                        yRan = random(0,10);
                        }
                    else {yRan = random(20,0);}
                    buffer.curveVertex (this.x + this.xVals[j], this.y+this.yVals[j]+yRan); 
                    buffer.stroke(255,0,0);
                    buffer.strokeWeight(3);
                    }
            endShape();
        }
    } 

    move(){
        this.x = this.x + this.inc * (this.y/10);
        if (this.x>width+200){
                this.x = -400;
                }            
        }

    setAlpha(){
        this.alpha = map (trFader, 0,1, this.a, 0); 
        }
    }