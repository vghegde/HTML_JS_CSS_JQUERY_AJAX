

var names = [ "img1.jpg", "img2.jpg", "img3.jpg" ];

var i=0;
setInterval(function() {
	postMessage(names[i++ % names.length]);
	
},1000)

