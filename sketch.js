var cat,catImage,c1;
var rat,ratImage,r1;
var background,backgroundImage;

function preload() {
    
  ratImage =loadImage("images/mouse1.png");
  catImage =loadImage("images/cat2.png");
  backgroundImage =loadImage("images/garden.png");
  r1 =loadImage("images/mouse2.png");
  c1 =loadImage("images/cat1.png")

}

function setup(){
    createCanvas(1000,800);

    rat = createSprite(200,400,20,20);
    rat.addImage("rat",ratImage);
    rat.scale = 0.3;

    cat = createSprite(800,400,20,20);
    cat.addImage("cat",catImage);
    cat.scale = 0.3;

    background = createSprite(0,0,600,600);
    background.addImage(backgroundImage);
    background.scale = 3;


}

function draw() {
    background;

console.log(cat.x-rat.x);
    background.depth = cat.depth;
    cat.depth = cat.depth +1;

    background.depth = rat.depth;
    rat.depth = rat.depth +1;

     cat.x = World.mouseX
     cat.y = World.mouseY

    if (keyDown("UP_ARROW")) {
      rat.y = rat.y-4;
    }
    if (keyDown("DOWN_ARROW")) {
      rat.y = rat.y+4;
    }
    if (keyDown("RIGHT_ARROW")) {
      rat.x = rat.x+4;
    }
    if (keyDown("LEFT_ARROW")) {
      rat.x = rat.x-4;
    }

    if (cat.x - rat.x < 219 || rat.x - cat.x > 219) {
    
      

          cat.addImage("cat2",c1);
          cat.scale=0.3;
          cat.changeImage("cat2");
          rat.addImage("rat2",r1);
          rat.scale=0.3;
          rat.changeImage("rat2");
          cat.velocityX=0;
          rat.velocityX=0;
          cat.velocityY=0;
          rat.velocityY=0;
    }
    else {
      cat.addImage("cat",catImage);
      cat.scale=0.3;
      cat.changeImage("cat");
      rat.addImage("rat",ratImage);
      rat.scale=0.3;
      rat.changeImage("rat");
    }
 
    
 
   
    drawSprites();
}