var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
};
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height)
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object)
    });
};
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '76'){
        new_image('l&shift');
        console.log("l was pressed");
        
    }
    if(keyPressed == '38'){
        up();
        console.log("up arrrow was pressed");
    }
    if(keyPressed == '40'){
        down();
        console.log("down arrrow was pressed");
    }
    if(keyPressed == '37'){
        left();
        console.log("left arrrow was pressed");
    }
    if(keyPressed == '39'){
        right();
        console.log("right arrrow was pressed");
    }
    if(keyPressed == '66'){
        new_image('b.jfif');
        console.log("b was pressed");
    }
    if(keyPressed == '67'){
        new_image('c.jfif');
        console.log("c was pressed");
    }
    if(keyPressed == '76'){
        new_image('L');
        console.log("l was pressed");
    }
    if(keyPressed == '77'){
        new_image('m.jfif');
        console.log("m was pressed");
    }
    if(keyPressed == '89'){
        new_image('y.jfif');
        console.log("y was pressed");
    }
    if(keyPressed == '118'){
        new_image('v.jpg');
        console.log("v was pressed");
    }
}
function up(){
    if (player_y > 0){
        player_y= player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when up arrow is pressed , X = " + player_x + "y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if (player_y < 500){
        player_y= player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when up arrow is pressed , X = " + player_x + "y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x > 0){
        player_x= player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when up arrow is pressed , X = " + player_x + "y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_x < 950){
        player_x= player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when up arrow is pressed , X = " + player_x + "y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}