//遍历标题后边的元素节点，并设置样式
function styleHeaderSiblings() {
	if (!document.getElementsByTagName) {
		return false;
	}
	var headers = document.getElementsByTagName('h1');
	var elem;
	for(var i = 0;i <headers.length;i++){
		elem = getNextElement(headers[i].nextSibling);
		//elem.style.fontWeight = 'bold';
		//elem.style.fontSize = '1.2em';
		addClass(elem,"intro");
	}
}
//返回一个元素节点，而不是一个节点
function getNextElement(node) {
	if (node.nodeType==1) {
		return node;
	}
	if (node.nextSibling) {
		return getNextElement(node.nextSibling);
	}
	return null;
}

addLoadEvent(styleHeaderSiblings);