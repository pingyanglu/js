window.onload = function(){
	let box = $('.box')[0];

console.log(box)
	
	function l(){
		animate(box,{width:'500px',height:'500px'})
	}
	let x = setInterval(l, 60)
	function fn(){
		let w = parseInt(window.getComputedStyle(box,null).width);
		// console.log(w);
		if (w == 500) {
			clearInterval(t);
			box.style.background = 'green'
		}
		box.style.width = w+10+'px';
	}
	function animate (obj,attrObj) {
	for(let i in attrObj){
		let w = parseInt(window.getComputedStyle(obj,null)[i]);
		console.log(w)
		
		if (w == parseInt(attrObj[i])) {
			clearInterval(x);
			obj.style.background = 'green'
		}
		obj.style[i] = w+10+'px';
	}
}
// for( i in box){
// 	console.log(i)
// }

}
