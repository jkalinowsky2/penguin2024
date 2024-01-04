
function drawStarlinks(){

    
    for (let i = 0; i<starlinkCount; i++ ){
        let x = -10 + i - i*random(38,40);
        let y = 100+i;
        
        
        starlinks.push(new Starlink(x, y));
        }
    }

class Starlink{
    constructor(x,y){
        this.x = x 
        this.y = y;
        this.r = 1.25;
        this.spd=.25;
        if(starlinksIn == 1){
            this.alpha = 255}
        else {this.alpha =0;}

    }

    show(){
        fill(255,255,255);
        noStroke();
        if(this.x > 0 && this.x<width && this.y>0 && this.y < height/3){
        circle(this.x,this.y, this.r);

        } 

    }

    move(){
        this.x = this.x+this.spd;
    }
}