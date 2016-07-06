function draw() {
	var canvas = document.getElementById('draw-in-me');
	if (canvas.getContext) {
		//返回一个用于在画布上绘图的环境，目前唯一合法的参数就是2d
		var ctx = canvas.getContext('2d');
		//在一个画布中开始子路径的一个新的集合
		ctx.beginPath();
		//把窗口的左上角移动到一个坐标
		ctx.moveTo(120.0,32.0);

		//通过使用表示三次贝塞尔曲线的指定控制点，向当前路径添加一个点
		ctx.bezierCurveTo(120.0,36.4,116.4,40.0,112.0,40.0);
		//开始一条路径，移动到位置（8.0，40.0）
		ctx.lineTo(8.0,40.0);

		ctx.bezierCurveTo(3.6,40.0,0.0,36.4,0.0,32.0);
		ctx.lineTo(0.0,8.0);

		ctx.bezierCurveTo(0.0,3.6,3.6,0.0,8.0,0.0);
		ctx.lineTo(112.0,0.0);

		ctx.bezierCurveTo(116.4,0.0,120.0,3.6,120.0,8.0);
		ctx.lineTo(120.0,32.0);

		//关闭一条打开的子路径
		ctx.closePath();
		//填充当前图像，默认颜色为黑色
		ctx.fill();
		//设置或返回当前线条的宽度，以像素计
		ctx.lineWidth = 2.0;
		//设置或返回笔触的颜色、渐变或模式
		ctx.strokeStyle = "rgb(255,255,255)";
		//绘制当前路径的边框，与fill()方法相对
		ctx.stroke();
	}
}
window.onload = draw;