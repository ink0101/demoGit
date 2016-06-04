addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);//一定要调用
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
	//编写与insertBefore相对的insertAfter函数
function insertAfter(newElenent,targetElemet){
	var parent=targetElemet.parentNode;
	if (parent.lastNode==targetElemet) {
		parent.appendChild('newElenent');
	}else{
		parent.insertBefore(newElenent,targetElemet.nextSibling);
	}
}


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
			if (showPic(this)) {
				return showPic(this)?false:true;
			}
		}
	}
}
//显示图片
function showPic(whichpic) {
	if (!document.getElementById('placeholder')) {
		return false;//检测placeholder是否存在
	}
	var source = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	if (placeholder.nodeName!='IMG') {
		return false;
	}
	placeholder.setAttribute('src',source);
	if (document.getElementById('description')) {
		var title = whichpic.getAttribute('title')?whichpic.getAttribute('title'):'';
		var description = document.getElementById('description').firstChild;
		if (description.nodeType==3) {
			description.nodeValue=title;
		}
	}
	return true;//虽然不太明白是为什么，但是不能删掉哦
}
//创建placeholder图片和description说明
function preparePlaceholder(){
	if (!document.createElement) {return false;}
	if (!document.createTextNode) {return false;}
	if (!document.getElementById) {return false;}
	if (!document.getElementById('imagegallery')) {return false;}
	var placeholder=document.createElement('img');
	var description=document.createElement('p');
	placeholder.setAttribute('id','placeholder');
	placeholder.setAttribute('src','images/show.jpg');
	placeholder.setAttribute('alt','show');
	description.setAttribute('id','description');

	var desctxt=document.createTextNode('show img');
	description.appendChild(desctxt);

	var gallery=document.getElementById('imagegallery');
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}