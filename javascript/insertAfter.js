//在目标元素后增加新元素节点
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if (parent.lastNode==targetElement) {
		parent.appendChild('newElement');
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}