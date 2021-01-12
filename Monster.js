class Monster {
  constructor(x,y,r){
		var options = { 
			density: 5, 
			frictionAir: 0
		};
		
		this.image=loadImage("Monster-01.png");
		this.body=Bodies.circle(x, y, r/2, options);
		this.r = r;
		World.add(world, this.body);
	}

	display(){			
		var santaPos = this.body.position;		
		push();
		translate(santaPos.x, santaPos.y-100);
		rectMode(CENTER);
		fill(255,0,255);
		imageMode(CENTER);
		image(this.image, 0, 0, this.r, this.r);
		pop();	
	}
}
