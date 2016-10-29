

var inc = 0.5;
var scl = 30;
var cols, rows;

var zoff=0;

var particles = [];

var flowfield = [];




function setup() {

  createCanvas(displayWidth, displayHeight);
 
  cols = floor(width / scl);
  rows = floor(height / scl);
  
  flowfield = new Array(cols* rows);
  
  for (var i = 0; i < 300; i++){
 	 particles[i] = new Particle();	  
  }
  
   background(255);

}

function draw() {
	background(255);
	var yoff = 0;

	loadPixels();
		 
  	for (var y = 0; y < rows; y++){
	  	var xoff = 0;
  		for (var x = 0; x < cols; x++){
  			//var b = (mouseY) + 50 ;
  			var index = (x + y * cols);
  			flowfield[index] = v;
  			var angle = noise(xoff, yoff, zoff) * TWO_PI;
  			var v = p5.Vector.fromAngle(angle);
  			v.setMag(0.5);
  			xoff += inc;
  			stroke(0,50);
  			//push();
  			//translate(x * scl, y * scl);
  			//rotate(v.heading());
  			//line(0,0,scl,0);
  			
  			//pop();

  			//rect(x * scl, y * scl, scl, scl);
  		}
  	
  		yoff += inc;
  		
  		zoff += .0005;
  	
	}
	
for (var i = 0; i < particles.length;  i++) {

	particles[i].follow(flowfield);
	particles[i].update();
	particles[i].edges();
	particles[i].show();
	

}

}