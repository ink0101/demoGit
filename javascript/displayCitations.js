function displayCitations() {
	//方法检测
	if (!document.getElementsByTagName||!document.createElement||!document.createTextNode) {
		return false;
	}
	//取得所有引用
	var quotes = document.getElementsByTagName('blockquote');
	//遍历所有引用
	for(var i=0;i<quotes.length;i++){
		//如果没有cite属性，继续下次循环
		if (!quotes[i].getAttribute('cite')) {
			continue;
		}
		//保存cite属性
		var quotes_url = quotes[i].getAttribute('cite');
		//取得所有元素节点
		var quotes_children = quotes[i].getElementsByTagName('*');
		//如果没有元素节点，进入下次循环
		if (quotes_children.length<1) {
			continue;
		}
		//取得引用中最后一个元素节点
		var elem = quotes_children[quotes_children.length-1];
		//创建标记
		var link = document.createElement('a');
		var link_text = document.createTextNode('source');
		link.appendChild(link_text);
		link.setAttribute('href',quotes_url);
		var sup = document.createElement('sup');
		sup.appendChild(link);
		//将标记添加到最后一个元素节点
		elem.appendChild(sup);
	}
}
addLoadEvent(displayCitations);