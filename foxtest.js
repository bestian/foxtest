document.body.style.border = "10px solid gold"; // blue

console.log("This is an informational message");

var invis = function(os, n) {
	for (var i = 0; i < os.length; i++) {
	    os[i].style.opacity = n;
	}
}
var xs = document.getElementsByClassName('bd');
var ys = document.getElementsByClassName('adslot');
var zs = document.getElementsByClassName('rt-ad');
invis(xs,0.1);
invis(ys,0,1);
invis(zs,0);



// Search //


var goods = document.getElementsByClassName('rt-store-goods-disp-mix');
for (var i = 0; i < goods.length; i++) {
	var g = goods[i];
	if (g.innerHTML.match(/(osaka_shop|nagi83510|alanlin12345|nomatter01|cw162535|darkstars555|tsubaki2007|niangniang_m|book_210|simiyasan)/)) {
		g.style.display = 'none';
		console.log('Hidden');
		//g.style.opacity = '0.2';
	}
} 



var imgs = document.getElementsByTagName('img');
for (var i = 0; i < imgs.length; i++) {
	var m = imgs[i];
	if (m.src.match(/\.gif$/)) {
		m.style.opacity = '0.1';
	}
} 



console.log('ccc');