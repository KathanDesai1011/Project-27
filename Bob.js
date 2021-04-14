class Bob{
	constructor(x,y,r){
		
		var options = {
            isStatic: false,
			restitution: 1,
			friction: 0,
			density: 0.8
		}

		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	
	display(){

		var rubberpos=this.body.position;		
		push()
		translate(rubberpos.x, rubberpos.y);
		rectMode(CENTER)
		strokeWeight(3);
		stroke("black");
		fill(rgb(255,20,147));
		ellipse(0,0,60,60);
		pop()
		
	}

}