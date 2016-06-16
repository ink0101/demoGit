//设置元素的移动位置
function moveElement(elementID,final_x,final_y,interval){
	//检测方法是否支持
	if (!document.getElementById) {
		return false;
	}
	if (!document.getElementById(elementID)) {
		return false;
	}

	var elem = document.getElementById(elementID);
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	var dist = 0;
	//检测初始位置是否存在，不存在设置默认为0，0
	if (!elem.style.left) {
		elem.style.left = "0px";
	}
	if (!elem.style.top) {
		elem.style.top = "0px";
	}
	//清除队列
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	//控制移动
	if (xpos == final_x && ypos == final_y) {
		return true;
	}
	if (xpos<final_x) {
		dist = Math.ceil((final_x - xpos)/10);
		xpos = xpos + dist;
	}
	if (xpos>final_x) {
		dist = Math.ceil((xpos-final_x)/10)
		xpos = xpos - dist;
	}
	if (ypos<final_y) {
		dist = Math.ceil((final_y - ypos)/10);
		ypos = ypos + dist;
	}
	if (ypos>final_y) {
		dist = Math.ceil((ypos -final_y)/10);
		ypos = ypos - final_y;
	}
	elem.style.left = xpos+"px";
	elem.style.top = ypos+"px";
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";//这里为什么要这么写？
	//保持动画稳定
	elem.movement = setTimeout(repeat,interval);
}