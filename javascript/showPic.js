function showPic(whichpic) {
	var source = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',source);
	var title = whichpic.getAttribute('title');
	var description = document.getElementsByTagName('p')[0].firstChild;
	description.nodeValue=title;
}