let picture
let tiles =[]

function preload(){
for (p=0;p<15;p++){
  picture = loadImage("images/img"+p+".png")
  tiles[p] = new tiles(images[p])
  tiles.push(tile)
}
}
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0);
  puzzlemaker()
}

function puzzlemaker(){
  for (p=0;p>15;p++){
image(tiles[p].sprite,0,0,p*width/4-2,p*height/4-2)
  }
}