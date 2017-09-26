class Drag{
	constructor(obj){
		this.obj = obj;
	};
	move(){
		let that = this;
		console.log(this.obj)
		this.obj.addEventListener('mousedown',function(e){
			let ox = e.offsetX,oy =e.offsetY; 
			document.addEventListener('mousemove',fn);
			this.addEventListener('mouseup',function(){
				document.removeEventListener('mousemove', fn);
			})
			function fn(e){
				let lefts = e.clientX-ox,tops = e.clientY - oy;
				that.obj.style.left = `${lefts}px`;
				that.obj.style.top = `${tops}px`;
			}
		})
	};
	star(){};
}