var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_img_object = "";

function updatePlayer() {
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(player_object);
    });
}

function updateBlockObj(get_image){
    fabric.Image.fromURL(get_image, function (img) {
        block_img_object = img;

        block_img_object.scaleToWidth(block_image_width);
        block_img_object.scaleToHeight(block_image_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(block_img_object);
    });
}

window.addEventListener('keydown', my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    if(e.shiftKey == true && keyPressed == '80'){
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '87'){
        updateBlockObj('wall.jpg');
        console.log("w");
    }
    if(keyPressed == '71'){
        updateBlockObj('ground.png');
        console.log("g");
    }
    if(keyPressed == '76'){
        updateBlockObj('light_green.png')
        console.log("l");
    }
    if(keyPressed == '84'){
        updateBlockObj('trunk.jpg')
        console.log("t");
    }
    if(keyPressed == '82'){
        updateBlockObj('roof.jpg')
        console.log("r");
    }
    if(keyPressed == '89'){
        updateBlockObj('yellow_wall.png')
        console.log("y");
    }
    if(keyPressed == '68'){
        updateBlockObj('dark_green.png')
        console.log("d");
    }
    if(keyPressed == '85'){
        updateBlockObj('unique.png')
        console.log("u");
    }
    if(keyPressed == '67'){
        updateBlockObj('cloud.jpg')
        console.log("c");
    }
}

function up() {
    if(player_y>=0){
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        updatePlayer();
    }
}

function down() {
    if(player_y<=500){
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
        updatePlayer();
    }
}

function left() {
    if(player_x>=0){
        player_x = player_x - block_image_width;
        canvas.remove(player_object);
        updatePlayer();
    }
}

function right() {
    if(player_x<=850){
        player_x = player_x + block_image_width;
        canvas.remove(player_object);
        updatePlayer();
    }
}