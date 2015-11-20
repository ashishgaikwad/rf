var

s_bg,
s_car,
s_fg;


function Sprite(img, x, y, width, height) {
	this.img = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};


Sprite.prototype.draw = function(ctx, x, y) {
	ctx.drawImage(this.image, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};


function initSprites(img) {

	s_bg = new Sprite(img,   0, 0, 138, 114);
	s_bg.color = "#70C5CF"; // save background color

	s_fg = new Sprite(img, 0, 0, 320, 253);
	s_car = new Sprite(img, 320, 0, 47, 102);
}

