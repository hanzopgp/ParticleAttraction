function Particle(x,y){
	this.pos = createVector(x,y);
	this.prev = createVector(x,y);
	this.vel = createVector();
	this.acc = createVector();
	this.w = 5;
	this.color1 = random(255);
	this.color2 = random(255);
	this.color3 = random(255);

	this.show = function(){
		switch(mode){
			case 1 :
				//stroke(this.color1,this.color2,this.color3,70);
				//strokeWeight(this.w);
				//point(this.pos.x,this.pos.y);
				stroke(this.color1,this.color2,this.color3,40);
				strokeWeight(2);
				line(this.pos.x,this.pos.y,this.prev.x,this.prev.y);
				this.prev.x = this.pos.x;
				this.prev.y = this.pos.y;
				break;
			case 2 :
				stroke(this.color1,this.color2,this.color3,70);
				strokeWeight(this.w);
				point(this.pos.x,this.pos.y);
				stroke(this.color1,this.color2,this.color3,40);
				strokeWeight(2);
				line(this.pos.x,this.pos.y,this.prev.x,this.prev.y);
				this.prev.x = this.pos.x;
				this.prev.y = this.pos.y;
				break;
			case 3 :
				stroke(this.color1,this.color2,this.color3);
				strokeWeight(1);
				point(this.pos.x,this.pos.y);
				stroke(this.color1,this.color2,this.color3,40);
				strokeWeight(2);
				//line(this.pos.x,this.pos.y,this.prev.x,this.prev.y);
				//this.prev.x = this.pos.x;
				//this.prev.y = this.pos.y;
				break;
			default :
				stroke(this.color1,this.color2,this.color3,40);
				strokeWeight(2);
				line(this.pos.x,this.pos.y,this.prev.x,this.prev.y);
				this.prev.x = this.pos.x;
				this.prev.y = this.pos.y;
				break;
		}
		
	}

	this.update = function(){
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.acc.mult(0);
	}

	this.attractedBy = function(attractor){
		var attractorPos = createVector(attractor.pos.x, attractor.pos.y);
		var force = p5.Vector.sub(attractorPos, this.pos);
		var dsquared = force.magSq();
		dsquared = constrain(dsquared, 100, 500);
		var G = 0.5;
		var strength = (this.w + attractor.w)*G / dsquared;
		force.setMag(strength);
		this.acc.add(force);
	}

	this.repulsedBy = function(repulsor){
		var repulsorPos = createVector(repulsor.pos.x, repulsor.pos.y);
		var force = p5.Vector.sub(repulsorPos, this.pos);
		var dsquared = force.magSq();
		var G = 2;
		var strength = (this.w + repulsor.w)*G / dsquared;
		force.setMag(-strength);
		this.acc.add(force);
	}

}
