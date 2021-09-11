var bgImg;
var cat,mouse;
var catImg1,mouseImg1,catImg2,mouseImg2,catImg3,mouseImg3;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("catsitting",catImg1);
    cat.scale = 0.2;
    mouse = createSprite(100,600);
    mouse.addAnimation("mousestanding",mouseImg1);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.addAnimation("catstanding",catImg3);
        cat.changeAnimation("catstanding");
        mouse.addAnimation("mousestanding",mouseImg3);
        mouse.changeAnimation("mousestanding");
        cat.velocityX = 0;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing"); 
      mouse.frameDelay = 25;

      cat.velocityX = -5;
      cat.addAnimation("catrunning",catImg2);
      cat.changeAnimation("catrunning");
  }

}
