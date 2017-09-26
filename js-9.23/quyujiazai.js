window.onload = function(){
	let ch = innerHeight;
	let floor = document.querySelectorAll('.floor');
	console.log(floor)
	let floorArr = [];
	floor.forEach(element=>{
		floorArr.push(element.offsetTop)
	})
	window.onscroll = function(){
		let scrollTop = document.body.scrollTop;
		floorArr.forEach((value,index) =>{
			if (scrollTop+ch>value+200){
				let imgs = floor[index].getElementsByTagName('img');
				for (let i = 0; i <imgs.length; i++) {
					imgs[i].src = imgs[i].getAttribute('zidingyi')
				}
			}
		})
	}
}