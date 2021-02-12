class rubber {
 constructor(x,y,radius){
     var options ={
      'resistution':0.3,
      'friction':5,
      'density':1
     }
     this.body = Bodies.circle(x, y,radius, options);
     
     World.add(world, this.body);
     }
    
     display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("brown");
        circle(0, 0, this.radius);
        pop();  
     }
 }
