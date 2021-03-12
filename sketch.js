var balloon;
var dataBase;
var balloonPositionDB;
var position;
function setup() {
  createCanvas(500,500);
  dataBase = firebase.database();
  console.log(dataBase);
 balloon = createSprite(250,250,10,10);
  balloon.shapeColor = "red";
  balloonPositionDB = dataBase.ref('ball/position');
  balloonPositionDB.on("value", readPosition, showError);
}

function draw() {
  background("white");
    if(keyDown(LEFT_ARROW)){
       writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
       writePosition(0,-1);
       balloon.scale = balloon.scale - 0.01;
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
        balloon.scale = balloon.scale + 0.01;
    }
     var balloonPosition = database.ref('balloon/height');
     balloonPosition.on("value", readPosition, showError);

    drawSprites();
    
}

function readHeight(data){

    height = data.val();
    console.log(height);

    balloon.x = height.x;
    balloon.y = height.y;
  
    
}

function updatePosition(x,y)
{
    dataBase.ref('balloon/height').set({
        'x' : height.x + x,
        'y' : height.y + y
    })
}

function showError()
{
    console.log("error in writing to the database");
}






