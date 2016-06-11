function displayAbbreviations() {
	//方法检测
	if (!document.getElementsByTagName) {
		return false;
	}
	if (!document.createElement) {
		return false
	}
	if (!document.createTextNode) {
		return false;
	}
	//取得所有缩略语
	var abbreviations = document.getElementsByTagName('abbr');
	if (abbreviations.length<1) {
		return false;
	}
	//遍历缩略语，存到数组中
	var defs = new Array();
	for(var i=0;i<abbreviations.length;i++){
		var current_abbr = abbreviations[i];
		//如果abbr没有子节点，进行下一次循环
		if (current_abbr.childNodes.length<1) {
			continue;
		}
		var definition = current_abbr.getAttribute('title');
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	//创建标记
	var dlist = document.createElement('dl');
	for(key in defs){
		var definition = defs[key];
		var dtitle = document.createElement('dt');
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement('dd');
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	//如果dlist列表没有子节点，退出函数
	if (dlist.childNodes.length<1) {
		return false;
	}
	//创建标题
	var header = document.createElement('h2');
	var header_text = document.createTextNode('Abbreviations');
	header.appendChild(header_text);
	//将标记插入到文档中
	document.getElementsByTagName('body')[0].appendChild(header);
	document.getElementsByTagName('body')[0].appendChild(dlist);

}
//添加共享事件
addLoadEvent(displayAbbreviations);