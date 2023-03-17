let images=[]
let tiles =[]

function preload(){
for (p=0;p<16;p++){
  let picture = loadImage("images/img"+p+".png")
  images.push(picture)
}
}
function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(220);
  for(let tile of tiles)
  tile.display()
}

