
var backgroundimg;
var Catimg,Catimg2,Cat ;
var Mouse;

function preload() {
    //load the images here
    backgroundimg=loadImage("images/garden.png");
    catimg=loadImage("images/cat1.png");
    mouse=loadImage("images/mouse3.png")
    Catimg2=loadImage("images/cat2.png")
   
 

}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    cat=createSprite(800,700,10,10);
    cat.addImage(catimg);
    cat.scale=0.2;
    Mouse=createSprite(200,700,100,100)
    Mouse.addImage(mouse);
    Mouse.scale=0.2;
  
  

}

function draw() {

    background(backgroundimg);
   

    drawSprites();
} 


function keyPressed(){
  if(keyCode === LEFT_ARROW){
   cat.velocityX=-5;
  }
  
if(cat.isTouching(Mouse)){
    cat.velocityX=0;
    cat.isTouching=Mouse;

}


}
