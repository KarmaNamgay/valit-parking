canvas = document.getElementById("myCanvas");
ctx = canvas.

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_image = new Image();
	background_image.onload =uploadBackground;
	background_image.src =background_image;

	greencar_image = new Image();
	greencar_image.onload =uploadBackground;
	greencar_image.src =greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_image,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_image,greencar_x,greencar_y,greencar_width,greencar_height);

	
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPress=e.keyCode;
    console.log(keyPress);
    if(keyPress=="40"){
        down();
        console.log("Down Arrow Pressed")
    }
    if(keyPress=="38"){
        up();
        console.log("Up Arrow Pressed")
    }
    if(keyPress=="37"){
        left();
        console.log("Left Arrow Pressed")
    }
    if(keyPress=="39"){
        right();
        console.log("Right Arrow Pressed")
    }

}

function up()
{
	if(greencar_y >=0){
		greencar_y=greencar_y-10;
		uploadBackground()
		uploadgreencar()
		console.log("x position = " + rover_x + " and y position = " + rover_y);
	}
}

function down()
{
	if(greencar_y >=700){
		greencar_y=greencar_y+10;
		uploadBackground()
		uploadgreencar()
		console.log("x position = " + rover_x + " and y position = " + rover_y);
	}
}

function left()
{
	if(greencar_y >=0){
		greencar_x=greencar_x-10;
		uploadBackground()
		uploadgreencar()
		console.log("x position = " + rover_x + " and y position = " + rover_y);
	}
}

function right()
{
	if(greencar_y >=525){
		greencar_x=greencar_x+10;
		uploadBackground()
		uploadgreencar()
		console.log("x position = " + rover_x + " and y position = " + rover_y);
	}
}
