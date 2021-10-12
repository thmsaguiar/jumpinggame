function Sprite(x, y, width, height){
	this.x = x;
	this.y = y;	
	this.width = width;
	this.height = height;

	this.drawing = function(){
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
	}
	this.drawingBnc = function(x, y){
		ctx.drawImage(imgBnc, x, y, 50, 50);
	}
}

var bg = new Sprite(0, 0, 600, 600);