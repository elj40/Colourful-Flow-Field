class Particle {
	constructor() {
		this.pos = createVector(0,0);
		this.prevPoint = createVector(0,0);
		this.vel = p5.Vector.random2D();
		this.acc = createVector(0,0);
		this.max = 7;
	}
	show() {
		stroke(c.r,c.g,c.b,100);
		//point(this.pos.x,this.pos.y);
		line(this.pos.x,this.pos.y,this.prevPoint.x,this.prevPoint.y);
	}
	update() {
		this.prevPoint = this.pos.copy();
		if (this.pos.x > width ) {this.pos.x = 0; this.prevPoint = this.pos.copy()};
		if (this.pos.x < 0     ) {this.pos.x = width; this.prevPoint = this.pos.copy()};
		if (this.pos.y > height) {this.pos.y = 0; this.prevPoint = this.pos.copy()};
		if (this.pos.y < 0     ) {this.pos.y = height; this.prevPoint = this.pos.copy()};
		this.vel.add(this.acc);
		this.vel.limit(this.max);
		
		this.pos.add(this.vel);
		this.acc.mult(0);
		
		//this.pos.x = 0 * (this.pos.x > width) + width * (this.pos.x < 0) + this.pos.x * (this.pos.x > 0 && this.pos.x < width);
		//this.pos.y = 0 * (this.pos.y > height) + height * (this.pos.y < 0) + this.pos.y * (this.pos.y > 0 && this.pos.y < height);
		
			
		
	}
	applyForce(force) {
		this.acc.add(force);
	}
	follow(vectors) {
		let x = floor(this.pos.x/scl);
		let y = floor(this.pos.y/scl);
		let index = x + y * cols;
		this.applyForce(vectors[index]);
	}
}