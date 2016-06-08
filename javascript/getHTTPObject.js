//通过对象检测技术检测了XMLHttpRequest对象，最终返回一个对象或者是false
function getHTTPObject() {
	if (typeof XMLHttpRequest == 'undefined') {
		XMLHttpRequest = function(){
			try{
				return new ActiveXObject("Msxml2.XMLHTTP.6.0");
			}catch(e){}
			try{
				return new ActiveXObject("Msxml2.XMLHTTP.3.0");
			}catch(e){}
			try{
				return new ActiveXObject("Msxml2.XMLHTTP");
			}catch(e){}
			return false;
		}
	}
	return new XMLHttpRequest();
}