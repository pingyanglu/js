$(function(){
	let box = $('.box')[0];
	let small = $('img',box)[0];
	let box1 = $('.box1')[0];
	let big = $('img',box1)[0];
	let opcity = $('.opcity',box)[0];
	let zhezhao = document.querySelector('.zhezhao');
	let zhangsan = $('#zhangsan');
	console.log(zhangsan)
	opcity.onmousemove = function(e){
		let ox = e.offsetX,oy = e.offsetY;
		let xw = parseInt( getComputedStyle(box,null).width);
		let yh = parseInt( getComputedStyle(box,null).height);
		console.log(xw)
		let X = xw - ox;
		let Y = yh - oy;
		let zhezhaow = zhezhao.offsetWidth;
		let zhezhaoh = zhezhao.offsetHeight;
		let zhezhaoL = ox-zhezhaow/2;
		let zhezhaoT = oy-zhezhaoh/2;
		let bigL = -2*ox;
		let bigT = -2*oy;
		if(zhezhaoL <=0){
			zhezhaoL = 0;
		}
		if(zhezhaoL >=xw-zhezhaow){
			zhezhaoL = xw-zhezhaow;
		}
		console.log(zhezhaoL)
		if(zhezhaoT <=0){
			zhezhaoT = 0;
		}
		if(zhezhaoT >=xw-zhezhaoh){
			zhezhaoT = xw-zhezhaoh;
		}
		if(2*X <= 300){
		bigL = -300;
		
		}
		if(2*Y <= 300){
		
		bigT = -300;
		}
		zhezhao.style.left = zhezhaoL+'px';
		zhezhao.style.top = zhezhaoT+'px';
		big.style.left = bigL+'px';
		big.style.top = bigT+'px';
	}
})