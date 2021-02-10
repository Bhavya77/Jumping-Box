var canvas;
var music;
var box;
var wall1;
var wall2;
var wall3;
var wall4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

  box=createSprite(random(25,750),20,40,40)


  
 
  wall1=createSprite(100,580,200,30)
  wall1.shapeColor=("green")

  wall2=createSprite(300,580,200,30)
  wall2.shapeColor=("blue")

  wall3=createSprite(500,580,200,30)
  wall3.shapeColor=("red")

  wall4=createSprite(700,580,200,30)
  wall4.shapeColor=("yellow")

  //wall=createSprite(800,300,10,8000)
 
    //create box sprite and give velocity
   
    box.velocityX=5;
   box.velocityY=5; 
    
}

function draw() {
    background(rgb(169,169,169));
    

   edges= createEdgeSprites ();

  

   


  if(box.isTouching(wall1)){

     box.shapeColor=("green")
     
       box.velocityX=0;
       box.velocityY=0;

       }

       if(box.isTouching(wall2)){

        box.shapeColor=("blue")
      
        
       }
 
       if(box.isTouching(wall3)){
 
        box.shapeColor=("red")
      
        }
  
        if(box.isTouching(wall4)){
 
         box.shapeColor=("yellow")
      
       
        }
    

       box.collide(wall1)
  
       box.bounceOff(wall2)

       box.bounceOff(wall3)

       box.bounceOff(wall4)

       box.bounceOff(edges)
   
    //add condition to check if box touching surface and make it box

    drawSprites();

    
}
