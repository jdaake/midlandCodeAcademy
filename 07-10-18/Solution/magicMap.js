(function(){
    var buttons = document.getElementsByClassName('button');
    for(var i=0; i < buttons.length; i++){
    
        buttons[i].addEventListener("click", function(e){
            move(e.target.id);
        })
    }
var player;
var destination;
var numMoves = 0;
map = {};

function generateMap(width, height){
    map.x = width;
    map.y = height;
    player = {x: Math.floor(Math.random() * width), y: Math.floor(Math.random()* height)}
    console.log(player)
    destination = {x: Math.floor(Math.random() * width), y: Math.floor(Math.random()* height)}
    checkDistance();
}   

function move(direction){
    switch(direction.toLowerCase()){
        case "north":
            checkValidity('y', 1, direction);
            break;
        case "south":
            checkValidity('y', -1, direction);
            break;
        case "west": 
            checkValidity('x', -1, direction);
            break;
        case "east":
            checkValidity('x', 1, direction);
            break;
        default:
            console.log("Please chose a valid move. Must me north, south, east, or west");
    }
}

function checkValidity(axis, change, direction){
    console.log(player, (player[axis] + change), map[axis] )
    if((player[axis] + change) > map[axis] || (player[axis] + change) < 0){
        console.log("You can't move any further "+ direction)
    }
    else{
        numMoves++;
        player[axis] += change;
        checkDistance();
    }

}

function checkDistance(){
var distanceX = player.x - destination.x;
var distanceY = player.y - destination.y;
var distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
if(distance > 0){
    console.log("You are "+distance + " meters away");
}
else{
    endGame();
}
}

function endGame(){
    console.log(`You found the treasure in ${numMoves} moves!`);
    numMoves = 0;
}

generateMap(101,101);
})()