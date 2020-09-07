//Create variables here
var dog , happyDog , database , foodS , foodStock ,dogImage; 

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  dog = createSprite(250,250,20,10);
  dog.addImage("dog",dogImage);
  dog.scale = 0.2;
  
}


function draw() {  

  background(46,139,87);

  //add styles here
  textSize(25);
  fill("white");
  text(foodS,240,350);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dog1",happyDog);
  }

  text("press up arrow to feed your pet",100,20);

  drawSprites();
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x - 1;
  }
  database.ref('/').update({Food : x})
}