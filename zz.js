var canvas=document.getElementById("myCanvas")
draw = canvas.getContext("2d")
car_width= 120;
car_height=70;
car_x=10;
car_y=10;
car_image="race car1.jpeg";

function add(){
    background_image = new Image();
    background_image.onload=uploadbackground;
    background_image.src=background_image;

    car_imgtag = new Image;
    car_imgtag.onload = uploadbackground;
}

function uploadbackground(){
    draw.drawImage(background_image, 0, 0, canvas.width, canvas.height);
}

function upload_car(){
    draw.drawImage(car_imgtag, car_x, car_y, car_width, car_height)
}

window.addEventListener("keydown", mykeydown)

function mykeydown(){
 keyPressed = e.keyCode;
 
 if (keyPressed == '38'){
    car_up();
    console.log("up arrow");
}

if (keyPressed == '40'){
    car_down();
    console.log("down arrow");
}

if (keyPressed == '37'){
    car_left();
    console.log("left arrow");
}

if (keyPressed == '39'){
    car_right();
    console.log("right arrow");
}
}