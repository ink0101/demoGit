	//共享onload事件
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload!='function') {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(prepareGallery);
//绑定onload事件
function prepareGallery(){
	if (!document.getElementsByTagName) {
		return false;
	}
	if (!document.getElementById) {
		return false;
	}
	if (!document.getElementById('imagegallery')) {
		return false;
	}
	var gallery = document.getElementById('imagegallery');
	var links = gallery.getElementsByTagName('a');
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return !showPic(this);
		}
	}
}
//显示图片
function showPic(whichpic) {
	if (!document.getElementById('placeholder')) {
		return false;
	}
	var source = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',source);
	if (document.getElementById('description')) {
		var title = whichpic.getAttribute('title');
		var description = document.getElementById('description').firstChild;
		description.nodeValue=title;
	}
	return true;//虽然不太明白是为什么，但是不能删掉哦
}