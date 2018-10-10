var xoff = 0.0;
var xincrement = 0.01;
function setup() {
  createCanvas(800, 800);
	 background(0);
  noStroke();
}
function draw() {
  fill(0, 10);
  rect(0,0,width,height);
	var n = noise(xoff)*width;
	for(var x = 0;x<= width;x+=50){
		for(var y =0;y<=height;y+=50){
			 xoff += xincrement;
		fill(random(255),0,random(255));
		ellipse(x,n,25,25);

			if ( mouseX >x-25 && mouseX <= x+25  &&
    mouseY >= n-25 && mouseY <= n+25) {
    x += random(-5, 5);
   n += random(-5,5);
				fill(0,random(255),random(255));
				ellipse(x,n,50,50);
		}
	}
	}
	  	for(var y = 0;y<= width;y+=50){
		for(var x =0;x<=height;x+=50){
			 xoff += xincrement;
		fill(random(255),0,random(255));

					if ( mouseX >x-25 && mouseX <= x+25  &&
    mouseY >= n-25 && mouseY <= n+25) {
    y += random(-5, 5);
   n += random(-5,5);
						fill(255,255,255);
							ellipse(y,n,50,50);
						ellipse(n,y,50,50);
					}

		}
		}
}
