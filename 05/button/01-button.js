$(function(){
		var $btn=$('.main input'),
			timer,
			t=9;

		disableBtn();
		$btn.click(function(){
			alert('hello');
		});

		function enableBtn(){
			$btn.val('同意');
			$btn.removeAttr('disabled');
		}

		function disableBtn(){
			$btn.attr('disabled','disabled').val('同意('+t+'s)');
			//¶¨Ê±Æ÷
			timer=window.setInterval(function(){
				t--;
				if(t==0){
					enableBtn();
					window.clearInterval(timer);
					return;
				}

				$btn.val('同意('+t+'s)');
			},1000);
		}
	})