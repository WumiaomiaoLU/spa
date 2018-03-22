var showPsw=function(config){		
 	var $psw=('<input type="password" id="psw" /><img src="images/eye_closed.png" id="tu">');
	
	$(config.container).append($psw); 
	$("#psw").attr("autofocus","autofocus");
		  
	$("#tu").mouseover(function(){
	    $("#tu").attr("src","images/eye_open.png");
	    $("#psw").attr("type","text");//是密码可见将类型改为text即可；
	    }
	);
	    
	$("#tu").mouseout(function(){
	    $("#tu").attr("src","images/eye_closed.png");
	    $("#psw").attr("type","password");
	   }
	);	 
};	 