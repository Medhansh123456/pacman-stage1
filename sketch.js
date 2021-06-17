
//------------------------------------PACMAN-GAME----------------------------------------//

var pacman;
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10;
var w11,w12,w13,w14,w15,w16,w17,w18,w19,w20;
var w21,w22,w23;

function preload(){


 //pacman image---------------------------------------------------------------------------- 
    pc1=loadImage("images/pac1.png");
    pc2=loadImage("images/pac2.png");
    pc3=loadImage("images/pac3.png");
    pc4=loadImage("images/pac4.png");
  //pac man image---------------------------------------------------------------------------

   
    
}

//end of preload----------------------------------------------------------------------------

function setup(){
createCanvas(windowWidth,windowHeight);
  
  pacman=createSprite(width/2,height/1.2);
  pacman.addImage(pc1);
  pacman.scale=0.03;

  // Create border Wall---------------------------------------------------------------------------
   
  w1=createSprite(width/2.001,height/9.9,1290,5);
    w2=createSprite(width/2,height/7.1,1240,5);
    w3=createSprite(width/22.6,height/2,5,550);
    w4=createSprite(width/15.9,height/3.5,5,200);
    w5=createSprite(width/1.07,height/3.5,5,200);
    w6=createSprite(width/1.05,height/2,5,550);
    w7=createSprite(width/1.07,height/1.4,5,200);
    w8=createSprite(width/15.9,height/1.4,5,200);
    w9=createSprite(width/2.01,height/1.11,1295,5);
    w10=createSprite(width/2.001,height/1.16,1243,5);
    

  // Create border Wall---------------------------------------------------------------------------
 

  // Create Wall---------------------------------------------------------------------------

   w11=createSprite(width/2,height/1.8,200,5);
   w12=createSprite(width/2.32,height/1.94,5,60);
   w13=createSprite(width/1.760,height/1.94,5,60);
   w14=createSprite(width/2,height/3.8,200,15);
   w15=createSprite(width/4,height/3.8,200,15);
   w16=createSprite(width/1.33,height/3.8,200,15);
   w17=createSprite(width/1.33,height/1.35,200,15);
   w18=createSprite(width/4,height/1.35,200,15);
   w19=createSprite(width/4,height/2,200,15);
   w20=createSprite(width/2,height/1.35,200,15);
   w21=createSprite(width/1.33,height/2,200,15);
   w22=createSprite(width/1.14,height/2,10,350);
   w23=createSprite(width/7.8,height/2,10,350);

  // Create Wall---------------------------------------------------------------------------

}
// end of setup-----------------------------------------------------------------------------
function draw(){
  background(0);
  
 // add colour to wall-------------------------------------------------------------------------

 w1.shapeColor="blue";
 w2.shapeColor="blue";
 w3.shapeColor="blue";
 w4.shapeColor="blue";
 w5.shapeColor="blue";
 w6.shapeColor="blue";
 w7.shapeColor="blue";
 w8.shapeColor="blue";
 w9.shapeColor="blue";
 w10.shapeColor="blue";
 w11.shapeColor="blue";
 w12.shapeColor="blue";
 w13.shapeColor="blue";
 w14.shapeColor="blue";
 w15.shapeColor="blue";
 w16.shapeColor="blue";
 w17.shapeColor="blue";
 w18.shapeColor="blue";
 w19.shapeColor="blue";
 w20.shapeColor="blue";
 w21.shapeColor="blue";
 w22.shapeColor="blue";
 w23.shapeColor="blue";


 // add colour to wall-------------------------------------------------------------------------

 // colide pacman with wall------------------------------------------------------------------
  
 pacman.collide(w1);
 pacman.collide(w2);
 pacman.collide(w3);
 pacman.collide(w4);
 pacman.collide(w5);
 pacman.collide(w6);
 pacman.collide(w7);
 pacman.collide(w8);
 pacman.collide(w9);
 pacman.collide(w10);
 pacman.collide(w11);
 pacman.collide(w12);
 pacman.collide(w13);
 pacman.collide(w14);
 pacman.collide(w15);
 pacman.collide(w16);
 pacman.collide(w17);
 pacman.collide(w18);
 pacman.collide(w19);
 pacman.collide(w20);
 pacman.collide(w21);
 pacman.collide(w22);
 pacman.collide(w23);


// colide pacman with wall------------------------------------------------------------------

// pacman controls---------------------------------------------------------------------------------
  
  if (keyDown("left")) {
       pacman.addImage(pc2); 
    pacman.x = pacman.x-3;
   }
    
  if (keyDown("right")) {
    pacman.addImage(pc1);
    pacman.x = pacman.x+3;
   }
   
   if (keyDown("up")) {
  pacman.addImage(pc3)
   pacman.y = pacman.y-3;
   }
   
   
   if (keyDown("down")) {
     pacman.addImage(pc4);
     pacman.y=pacman.y+3;  
     }
//pacman controls--------------------------------------------------------------------------   
  
  drawSprites();
  
}
//End of draw-------------------------------------------------------------------------------

