function convertToGS(img) {
	//储存原始的色彩版
	img.color = img.src;

	//创建灰度版
	img.grayscale = createGSCanvas(img);

	//在mouseover/out 事件发生时切换图片
	img.onmouseover = function(){
		this.src = this.grayscale;
	}
	img.onmouseout = function(){
		this.src = this.color;
	}

	img.onmouseout();
}
//创建灰色版图像
function createGSCanvas(img) {
	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;

	var ctx = canvas.getContext('2d');
	ctx.drawImage(img,0,0);

	//注意：getImageData只能操作与脚本位于同一个域中的图片
	//循环遍历每个像素，求得RGB平均值，得到彩色值得对应灰度值
	var c = ctx.getImageData(0,0,img.width,img.height);
	for(var i=0;i<c.height;i++){
		for(var j=0;j<c.width;j++){
			var x = (i*4)*c.width+(j*4);
			var r = c.data[x];
			var g = c.data[x+1];
			var b = c.data[x+2];
			c.data[x] = c.data[x+1] = c.data[x+2] =(r+g+b)/3;
		}
	}
	//将灰度数据放回到画布的绘图环境中去，并返回原始的图像作为新灰度图片的源
	ctx.putImageData(c,0,0,0,0,c.width,c.height);
	return canvas.toDataURL();
}
//添加load事件
window.onload = function(){
	convertToGS(document.getElementById('avatar'));
}