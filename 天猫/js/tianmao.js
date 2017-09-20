window.onload = function(){

////////////////////////////////////////////////////////
	let cekuang = document.getElementsByClassName('cekuang');
	let lis = cekuang[0].getElementsByTagName('li');
	let item = document.getElementsByClassName('item');
	for (let i = 0; i < lis.length; i++) {
		lis[i].onmouseover = function(){
			item[i].style.display = 'block';
		}
		lis[i].onmouseout = function(){
			item[i].style.display = 'none';
		}
	}
	let bannerBox = document.getElementsByClassName('banner-box')[0];
	let bannerlis = bannerBox.getElementsByTagName('li');
	let banneryuan = document.getElementsByClassName('yuan-kuang')[0];
	let byuanlis = banneryuan.getElementsByTagName('li');
	let asides = $('aside')[0];
	console.log(asides)
	let mains = $('.main',asides)[0];
	console.log(mains)
	let jiantouL = $('.jiantou-left')[0];
	let jiantouR = $('.jiantou-right')[0];
	let imgW = parseInt(window.getComputedStyle(bannerBox,null).width);
	let now = 0;
	let next = 0;
	let flag = true;
/////////////////////////////////
	let num = 0;
	let t = setInterval(move,3000)

	mains.onmouseover = function(){
		clearInterval(t);
	}
	mains.onmouseout = function(){
		t = setInterval(move,3000)
	}
	
	console.log(byuanlis)
	for (let i = 0; i < byuanlis.length; i++) {
		byuanlis[i].onclick = function(){
			if(now == i){return}
			byuanlis[now].style.background = 'rgba(23, 23, 28, 0.5)';
			byuanlis[i].style.background = 'rgba(225, 225, 225, 0.5)';
			bannerlis[i].style.left = imgW+'px';
			animate(bannerlis[now],{left:-imgW});
			animate(bannerlis[i],{left:0});
			now =next = i;
		}
	}
	function move(){
		next++
		if (next == bannerlis.length) {
			next = 0;
		} 
		for (let i = 0; i < byuanlis.length; i++) {
			byuanlis[i].style.background = 'rgba(23, 23, 28, 0.5)';
		}
		console.log(now)
		byuanlis[next].style.background = 'rgba(225, 225, 225, 0.5)';
		bannerlis[next].style.left = imgW+'px';
		animate(bannerlis[now],{left:-imgW});
		animate(bannerlis[next],{left:0},function(){
			flag = true;
		});
		now = next
	}
	function moveL(){
		next--
		if (next < 0) {
			next = bannerlis.length;
		}
		console.log(next)
		bannerlis[next].style.left = -imgW+'px';
		animate(bannerlis[now],{left:imgW});
		animate(bannerlis[next],{left:0},function(){
			flag = true;
		});
		now = next
	}
}
// window.onload = function(){

// ////////////////////////////////////////////////////////
// 	let cekuang = document.getElementsByClassName('cekuang');
// 	let lis = cekuang[0].getElementsByTagName('li');
// 	let item = document.getElementsByClassName('item');
// 	for (let i = 0; i < lis.length; i++) {
// 		lis[i].onmouseover = function(){
// 			item[i].style.display = 'block';
// 		}
// 		lis[i].onmouseout = function(){
// 			item[i].style.display = 'none';
// 		}
// 	}
// 	let bannerBox = document.getElementsByClassName('banner-box')[0];
// 	let bannerlis = bannerBox.getElementsByTagName('li');
// 	let banneryuan = document.getElementsByClassName('yuan-kuang')[0];
// 	let byuanlis = banneryuan.getElementsByTagName('li');
// 	let backgs = $('.backg')[0];
// 	let mains = $('main',backgs)[0];
// /////////////////////////////////
// 	let num = 0;
// 	let t = setInterval(move,1000)
// 	console.log(banneryuan)
// 	mains.onmouseover = function(){
// 		clearInterval(t);
// 	}
// 	mains.onmouseout = function(){
// 		t = setInterval(move,1000)
// 	}
// 	function move(){
// 		num++;
// 			if (num==bannerlis.length) {
// 				num = 0;
// 			}
// 		for (let i = 0; i < bannerlis.length; i++) {
// 			bannerlis[i].style.display = 'none';
// 			byuanlis[i].style.background = 'rgba(23, 23, 28, 0.5)';

// 		}
// 		bannerlis[num].style.display = 'block';
// 		byuanlis[num].style.background = 'rgba(225, 225, 225, 0.5)';
		
// 	}

// //又麻烦又难的className
// 	for (let i = 0; i < byuanlis.length; i++) {
// 		byuanlis[i].onclick = function(){
// 			for (let i = 0; i < byuanlis.length; i++) {
// 				bannerlis[i].className = 'item1';
// 			}
// 			bannerlis[i].className = 'item1 block';
// 		}
// 	}
// //let
// 	let now = 0;
// 	for (let i = 0; i < byuanlis.length; i++) {
// 		byuanlis[i].onclick = function(){
// 			for (let i = 0; i < bannerlis.length; i++) {
// 				bannerlis[i].style.display = 'none';
// 			}
			
// 			bannerlis[i].style.display = 'block';
// 			for (let j = 0; j < bannerlis.length; j++) {
// 			byuanlis[j].style.background = 'rgba(23, 23, 28, 0.5)';
// 		}
// 			byuanlis[i].style.background = 'rgba(225, 225, 225, 0.5)';
// 			now = i;
// 			num = i;
// 		}
		
// 	}
// //var
// 	/*let now = 0;
// 	for (var i = 0; i < byuanlis.length; i++) {
// 		byuanlis[i].index = i;
// 		byuanlis[i].onclick = function(){	
// 			bannerlis[now].style.display = 'none';
// 			bannerlis[this.index].style.display = 'block';
// 			now = this.index;
// 		}
// 	}*/
// //垃圾测试
// /*for (var i = 0; i < arr.length; i++) {
	
// }
// let arr[i]= (function(){
// 	return function(){
// 		alert(1);
// 	}
// })*/
// //闭包
// 	/*let now = 0;
// 	for (var i = 0; i < bannerlis.length; i++) {
// 		byuanlis.index = i;
// 		byuanlis[i].onclick = (function(i){
// 			return function(){
// 			bannerlis[now].style.display = 'none';
// 			bannerlis[i].style.display = 'block';
// 			now = i;
// 			console.log()
// 			}
// 		})(i)
// 	}*/
// //自调用方式	
// /*	let a = (function(i){
// 		return function(){
// 			alert(i)
// 		}
// 	})(5)()*/

// }
