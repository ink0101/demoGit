function getNewContent() {
	var request = getHTTPObject();
	if (request) {
		request.open("GET","example.txt",true);
		request.onreadystatechange = function(){//事件处理函数，在服务器给XMLHttpRequest对象送回相应的时候触发
			if (request.readyState == 4) {
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);
	}else{
		alert('Sorry,your borwer doesn\'t support XMLHttpRequest');
	}
}
addLoadEvent(getNewContent);