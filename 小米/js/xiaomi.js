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
	// console.log(asides)
	let mains = $('.main',asides)[0];
	// console.log(mains)
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
	jiantouL.onclick = function(){
		if(!flag){
			return
		}
		moveL()
		flag = false;
	}
	jiantouR.onclick = function(){
		if(!flag){
			return
		}
		move()
		flag = false;
	}
	// console.log(byuanlis)
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
	let danpinul = document.querySelector('ul.circle');
	let circleli = document.querySelector('.circle li')
	console.log(circleli)
	let xinpinzuo = document.querySelector('div.xinpinzuo');
	let xinpinyou = xinpinzuo.nextElementSibling; 
	let d = setInterval(danpin,10000000)
	let xinpinzuoyou = document.querySelector('div.xinpinzuoyou');
	let w = parseInt(getComputedStyle(circleli,null).width)*5;
	// console.log(w)
	let i = 0;
	console.log(xinpinzuoyou)

	function danpin(){
		let danpinulleft = window.getComputedStyle(danpinul,null).left;
		if (danpinulleft == '0px') {
			danpinul.style.left = '-1226px';
			xinpinyou.style.color = '#e0e0e0';
			xinpinzuo.style.color = '#b0b0b0';
		}
		if(danpinulleft == '-1226px'){
			danpinul.style.left = '0px';
			xinpinzuo.style.color = '#e0e0e0';
			xinpinyou.style.color = '#b0b0b0';
		}
	} 
	xinpinyou.onclick = function(){
		
		if(i == 3){
			return
		}
		i++;
		danpinul.style.left = `${-w*i}px`;
		xinpinyou.style.color = '#b0b0b0';
		xinpinzuo.style.color = '#b0b0b0';
		if(i==3){
			xinpinyou.style.color = '#e0e0e0';
			xinpinzuo.style.color = '#b0b0b0'
		}
	}
	xinpinzuo.onclick = function(){
		if(i == 0){
			return
			
		}
		i--;
		danpinul.style.left = `${-w*i}px`;
		xinpinzuo.style.color = '#b0b0b0';
		xinpinyou.style.color = '#b0b0b0';
		if(i == 0){
			xinpinzuo.style.color = '#e0e0e0';
			xinpinyou.style.color = '#b0b0b0';
		}
		
	}

	xinpinzuoyou.onmousemove=function(){
		clearInterval(d)
	}
	xinpinzuoyou.onmouseout=function(){
		d = setInterval(danpin,10000000)
	}
	window.onscroll = function(){
		console.log(document.documentElement.scrollTop)
		console.log(document.body.scrollTop)
	}
//////////////////////////////////区域加载///////////////////////////////
	let ch = innerHeight;
	let floor = document.querySelectorAll('.floor')
				console.log(floor);
	let floorArr = [];
	let btnlefts = document.querySelector('div.pleft')
	let plefts = btnlefts.querySelectorAll('li');
	let color = ['red','green','blue','skyblue','pink','#343423','#953454','#953454','#953454'];
	floor.forEach(element=>{
		floorArr.push(element.offsetTop)
	})
	let weibu = document.querySelector('.weibu')
	let flag1 = true;
	let search = document.querySelector('.search')
	let flag2 = true;
	plefts.forEach((element,index)=>{
		element.onclick = function(){
			for (let i = 0; i < plefts.length; i++) {
				plefts[i].style.background = 'none';
			}
			flag1 = false;
			element.style.background = color[index];
			animate(document.body,{scrollTop:floorArr[index]},function(){flag1 = true})
		}
		
	})
	window.onscroll = function(){
		if (!flag1) {
			return;
		}

		let scrollTop = document.body.scrollTop;
		if (scrollTop >= 500) {
			if (flag2) {
				flag2 = false;
				console.log(1)
				search.style.top = 0;
			}
		}
		if (scrollTop <= 500) {
			if (!flag2) {
				flag2 = true;
				console.log(2)
				search.style.top = '-50px';
			}
		}
		floorArr.forEach((value,index) =>{
			if (scrollTop+ch>=value){
				for (let i = 0; i < plefts.length; i++) {
				plefts[i].style.background = 'none';
			}
			plefts[index].style.background = color[index];
				let imgs = floor[index].getElementsByTagName('img');
				for (let i = 0; i <imgs.length; i++) {
					imgs[i].src = imgs[i].getAttribute('zidingyi')
				}
			}
		})
	}

	// let floor = querySelectorAll()
	/*function move(){
		num++;
			if (num==bannerlis.length) {
				num = 0;
			}
		for (let i = 0; i < bannerlis.length; i++) {
			bannerlis[i].style.display = 'none';
			byuanlis[i].style.background = 'rgba(23, 23, 28, 0.5)';

		}
		bannerlis[num].style.display = 'block';
		byuanlis[num].style.background = 'rgba(225, 225, 225, 0.5)';
		
	}
	console.log(bannerlis.length)
	jiantouL.onclick = function(){
		num = num-1;
		if (num <= -1) {
			num = bannerlis.length-1;
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
		if (num == bannerlis.length) {
			num = 0;
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
		
	}*/
}
