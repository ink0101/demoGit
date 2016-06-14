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