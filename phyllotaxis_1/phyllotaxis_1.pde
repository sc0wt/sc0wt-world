float n = 0;
float c = 10;



void setup() {
  background (255);
  size(800,800);
  
  colorMode(HSB);
}

void draw() {
  
  float dR = PI/180;
  float d = dR * 137.5;
  
  float a = n * d;
  float r = c * sqrt(n);
  
  float x = r * cos(a) + width/2;
  float y = r * sin(a) + height/2;
  
  fill( 180, 255, 200);
  ellipse(x,y,(r/50)% 50,(r/50) %50);
  
  n++;
}