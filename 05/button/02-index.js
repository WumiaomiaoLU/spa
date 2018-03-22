$(function(){
	//实例化定时器按钮

	var $btn1=timerButton({
		'container':'div.main',
		'title':'同意',
		'tlength':9,
		'enable':false
	});

	$btn1.on('timer-button-click',function(){
		alert('同意了！');
	});

	var $btn2=timerButton({
		'container':'div.main',
		'title':'发送短信',
		'tlength':60,
		'enable':true
	});

	$btn2.on('timer-button-click',function(){
		alert('短信已发送');
		this.enable=false;
	});
});