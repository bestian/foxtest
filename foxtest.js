document.body.style.border = "10px solid gold"; // blue

console.log("This is an informational message");

var invis = function(os) {
	for (var i = 0; i < os.length; i++) {
	    os[i].style.opacity = '0.1'; // 0.1
	}
}

var xs = document.getElementsByClassName('bd');
var ys = document.getElementsByClassName('adslot');

invis(xs);
invis(ys);




console.log('ccc');