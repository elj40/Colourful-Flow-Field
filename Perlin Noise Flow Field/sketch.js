var inc = 0.04;
var scl = 5;
var cols, rows;
var fr;
var particles = [];
var flowfield = [];

var c = {r: 100, g:100, b:100, diff: 0}

var zoff = 0;
function setup() {
  // put setup code here
  createCanvas(500,500);
 
  cols = floor(width / scl);
  rows = floor(height / scl);
  console.log(cols,rows);
  
  for (var i = 0; i < 250; i++) {
	particles[i] = new Particle();
  }
  flowfield = new Array(cols * rows);
  
  fr = createP('');
  background(220);
  
}

function draw() {
  // put drawing code here
  
  c.r += random(-25,25);	c.r = max(0, min(c.r, 255));
  c.g += random(-25,25);	c.g = max(0, min(c.g, 255));
  c.b += random(-25,25);	c.b = max(0, min(c.b, 255));
  
  var yoff = 0;
  for (var y = 0; y < rows + 1; y++) {
	  var xoff = 0;

	  for (var x = 0; x < cols + 1; x++) {
		  
		  var index = (x + y * cols);
		  var angle = noise(xoff,yoff,zoff) * PI*3.5;
		  var v = p5.Vector.fromAngle(angle);
		  v.setMag(1);
		  flowfield[index] = v;
		  xoff += inc;
	  }
	  yoff += inc;
	  
  }
  zoff += inc/30;
  
  
  for (let p of particles) {
	  p.follow(flowfield);
	  p.update();
	  p.show();
	  
  }
}
