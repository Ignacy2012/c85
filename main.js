canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

marsImage = ["mars.jpg","mars1.jpg","mars2.jpg","mars3.png","mars4.jpg"];
randomNumber = Math.floor(Math.random()*5)

background_image = marsImage[randomNumber];

rover_image = "rover.png";

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

function add(){

    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;

    if(keyPressed == "37"){
        left()
    }

    if(keyPressed == "38"){
        up()
    }

    if(keyPressed == "39"){
        right()
    }

    if(keyPressed == "40"){
        down()
    }
}

function left(){
    if(rover_x>=0){
        rover_x = rover_x - 10;
        uploadBackground();
        uploadrover();
    }
}

function right(){

    if(rover_x<=700){
        rover_x = rover_x + 10;
        uploadBackground();
        uploadrover();
    }
}

function up(){

    if(rover_y>=0){
        rover_y =rover_y - 10;
        uploadBackground();
        uploadrover();
    }
}

function down(){
    
    if(rover_y<=510){
        rover_y = rover_y + 10;
        uploadBackground();
        uploadrover();
    }
}
