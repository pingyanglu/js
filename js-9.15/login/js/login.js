let user = document.getElementById("user");
let pass = document.getElementById("pass");
let tijiao = document.getElementById('tijiao');
// location.assign('file:///C:/Users/haoge/Desktop/javascript/js-9.15/login/loginno.html')
tijiao.onclick = function(){
	if (user.value =='zhangsan' && pass.value ==123456) {
		alert('success');
	}else{
		location.href='loginno.html';
	}
}