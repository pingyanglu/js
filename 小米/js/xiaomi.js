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
/////////////////////////////////
	let num = 0;
	let t = setInterval(move,1000)

	mains.onmouseover = function(){
		clearInterval(t);
	}
	mains.onmouseout = function(){
		t = setInterval(move,1000)
	}
	function move(){
			if (num==bannerlis.length) {
				num = 0;
			}
		for (let i = 0; i < bannerlis.length; i++) {
			bannerlis[i].style.display = 'none';
			byuanlis[i].style.background = 'rgba(23, 23, 28, 0.5)';

		}
		bannerlis[num].style.display = 'block';
		byuanlis[num].style.background = 'rgba(225, 225, 225, 0.5)';
		num++;
	}
	console.log(bannerlis.length)
	jiantouL.onclick = function(){
		num = num-1;
		if (num <= -1) {
			num = bannerlis.length;
		}
		for (let i = 0; i < bannerlis.length; i++) {
			bannerlis[i].style.display = 'none';
			byuanlis[i].style.background = 'rgba(23, 23, 28, 0.5)';

		}
		bannerlis[num].style.display = 'block';
		byuanlis[num].style.background = 'rgba(225, 225, 225, 0.5)';
		
	}
	jiantouR.onclick = function(){
		num = num+1;
		if (num <= -1) {
			num = bannerlis.length;
		}
		for (let i = 0; i < bannerlis.length; i++) {
			bannerlis[i].style.display = 'none';
			byuanlis[i].style.background = 'rgba(23, 23, 28, 0.5)';

		}
		bannerlis[num].style.display = 'block';
		byuanlis[num].style.background = 'rgba(225, 225, 225, 0.5)';
		
	}
	let now = 0;
	for (let i = 0; i < byuanlis.length; i++) {
		byuanlis[i].onclick = function(){
			for (let i = 0; i < bannerlis.length; i++) {
				bannerlis[i].style.display = 'none';
			}
			
			bannerlis[i].style.display = 'block';
			for (let j = 0; j < bannerlis.length; j++) {
			byuanlis[j].style.background = 'rgba(23, 23, 28, 0.5)';
		}
			byuanlis[i].style.background = 'rgba(225, 225, 225, 0.5)';
			now = i;
			num = i;
		}
		
	}
}
