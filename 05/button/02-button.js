var timerButton=function(config){
		var $btn=$('<input id="timer-button" type="button" />'),
			timer,
			t=config.tlength;

		if(config.enable){
			enableBtn();
		}else{
			disableBtn();
		}

		$(config.container).append($btn);

		$btn.click(function(){
			$btn.trigger('timer-button-click');
		});

		function enableBtn(){
			$btn.val(config.title);
			$btn.removeAttr('disabled');
		}

		function disableBtn(){
			$btn.attr('disabled','disabled').val(config.title+'('+t+'s)');
			
			timer=window.setInterval(function(){
				t--;
				if(t==0){
					enableBtn();
					window.clearInterval(timer);
					return;
				}

				$btn.val(config.title+'('+t+'s)');
			},1000);
		}
		return $btn;
	};