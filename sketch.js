var cat1
var tom2
var tom3
var tom4
var jerry1
var jerry2
var jerry3
var jerry4
var keyCode
function preload() {
    // //load the images here
    bg = loadImage("images/garden.png"); 
    tomImg=loadAnimation("images/cat1.png")
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png")
    tomImg3=loadAnimation("images/cat4.png")
    jerryImg=loadAnimation("images/mouse1.png")
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryImg3=loadAnimation("images/mouse4.png")
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400)
   garden.addImage(bg)
tom=createSprite(900,700,50,50)
tom.addAnimation("tomResting",tomImg)
tom.scale=0.1;
jerry=createSprite(200,680,50,50)
jerry.addAnimation("jerryWalking",jerryImg)
jerry.scale=0.1


}

function draw() {

    background(0);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.addAnimation("tomResting",tomImg3)
        tom.changeAnimation("tomResting")
        jerry.addAnimation("jerryWalking", jerryImg3)
        jerry.changeAnimation("jerryWalking")
        tom.velocityX=0;
    }
    
    //Write condition here to evalute if tom and jerry collide
    keyPressed()
    drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW){
jerry.addAnimation("jerryWalking",jerryImg2)
jerry.changeAnimation("jerryWalking")
jerry.frameDelay=25;
tom.addAnimation("tomResting",tomImg2)
  tom.changeAnimation("tomResting")
  tom.velocityX=-3;
}

}
