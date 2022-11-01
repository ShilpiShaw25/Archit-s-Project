var bean,beanImg;
var sussy,sussyImg;
var bgImg;
var bananaImg,bananaGroup;
var crown,crownImg;
var sound1;
var ground;
let timer = 6
var test;



function preload(){
    beanImg = loadImage("bean.png")
    sussyImg = loadImage("sussy.png")
   sound1 = loadSound("bgMusic.mp3")
    bgImg = loadImage("background.jpg")
    
 

}
function setup(){
    createCanvas(windowWidth,windowHeight)
    sussy = createSprite(400,650,60,60)
    sussy.addImage(sussyImg)
    sussy.scale = 0.2
    

    bean = createSprite(250,650,60,60)
    bean.addImage(beanImg)
    bean.scale = 0.4
    bean.visible = true;

    bananaGroup = new Group()
    
    

    // sound1.loop()
    
  
}
function draw(){
   // background(bgImg)
   background(255)
    //Sussy();
    sussy.velocityY=0;
    if(keyIsDown(UP_ARROW) ){
       // sussy.y=sussy.y+10;
       sussy.velocityY=-2;
       textSize(30)
        text("hello",500,300)
    }
    SpawnBananas();


   
    drawSprites();
   
 

}
function SpawnBananas(){
  if(frameCount % 70 === 0) {
    var banana = createSprite(600,100,40,20)
    banana.y = Math.round(random(100,550))
    banana.velocityX = -5
    banana.lifetime = 200
    bananaGroup.add(banana)

    

  } 

    
}
function time(){
if(frameCount % 60 === 0 && timer > 0 ){
console.log("in function")
}
if (timer == 0 ){
   text("game over" , 200,200)
}

}
