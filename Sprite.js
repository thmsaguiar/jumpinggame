function Sprite(x, y, width, height){
	this.x = x;
	this.y = y;	
	this.width = width;
	this.height = height;

	this.drawing = function(){
		ctx.drawImage(img, this.x, this.y-5, this.width, this.height);
	}
	this.drawingBnc = function(x, y){
		ctx.drawImage(imgBnc, x, y, 50, 50);
	}
	this.drawingStr = function(x, y){
		ctx.drawImage(imgStr, x, y, 500, 300);
	}
	this.drawingFl = function(x, y){
		ctx.drawImage(imgFl, x-5, y-5, 610, 55);
	}
	this.drawingGo = function(x, y){
		ctx.drawImage(imgGo, x, y, 500, 300);
	}
	this.drawingRcd = function(x, y){
		ctx.drawImage(imgRcd, x, y, 500, 300);
	}
}

var bg = new Sprite(0, 0, 600, 600);