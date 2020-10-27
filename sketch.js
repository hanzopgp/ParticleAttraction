var particles = [];
var attractors = [];
var repulsors = [];
var nbParticles = 500;
var bool;
var tmp = 0;
var frameCount;

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(0); //lines
	for(var i = 0; i < nbParticles; i++){
		particles.push(new Particle(random(300,width-300), random(300,height-300)));
	}
}

function draw(){
	//background(0); //point
	push();
	strokeWeight(1);
	fill(0);
	stroke(0,0,255);
	rect(60,50,220,40);
	fill(255);
	textSize(32);
	text("Frame : " + frameCount, 80, 80);
	pop();

	// if(frameCount%250 == 0){
	// 	background(0);
	// }

	for(var i = 0; i < nbParticles; i++){
		for(var j = 0; j < attractors.length; j++){
			particles[i].attractedBy(attractors[j]);
		}
		particles[i].show();
		if(frameCount >= 300){
			for(var k = 0; k < repulsors.length; k++){
				particles[i].repulsedBy(repulsors[k]);
			}
			particles[i].update();
			particles[i].show();
		}
		
	}
	for(var i = 0; i < attractors.length; i++){
		attractors[i].show();
	}
	for(var j = 0; j < repulsors.length; j++){
		repulsors[j].show();
	}
}

function mousePressed(){
	if(bool){
		attractors.push(new Attractor(mouseX,mouseY))
	}
	else{
		repulsors.push(new Repulsor(mouseX,mouseY));
	}
}

function keyPressed(){
	bool = false;
	if(key == "b"){
		bool = true;
	}
	if(key == "n"){
		bool = false;
	}
	if(key == "p"){
		if(tmp == 0){
			noLoop();
			tmp = 1;
		}
		else{
			loop();
			tmp = 0;
		}

	}

}
