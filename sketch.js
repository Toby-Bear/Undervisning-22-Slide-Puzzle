let images=[]
const tiles =[]
let puzzles

function preload(){
for (p=0;p<4;p++){
  for (y=0;y<4;y++){
    let image = loadImage("images/img"+p+".png")
  images.push(image)
  tiles.push(new tile(windowWidth/4*p,windowHeight/4*y,images[p],windowWidth,windowHeight))  
  }
}
}
function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(220);
  for(let tile of tiles){
    tile.display()

  }
}

