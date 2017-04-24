
function login(){
	alert(1111);
	var userName = $("#userName").val().trim();
	var userPwd = $("#userPwd").val().trim();
	alert(userName+">>>>>"+userPwd);
	if(userName==""){
		alert("请输入用户名！");
		return;
	}
	
	if(userPwd == ""){
		alert(" 请输入密码！");
		return;
	}
	
	// ajax 请求登录
	$.ajax({
		//要用post方式      
	    type: "post",
	    data: {"userName":userName,"userPwd":userPwd},
	    //方法所在页面和方法名      
	    url: "http://192.168.0.104:8080/Furnish/login/AppLoginServlet.action",     
	       
	    dataType: "json",     
	    success: function(data) {
	    	// 装填数据
	    	if(data == '-1'){
	    		alert("您输入的用户名和密码不匹配!");	    		
	    	}else if(data == '0'){
	    		window.location.href='index.html';
	    	}else{
	    		console.log(data);
	    		alert("数据库异常，请稍后操作！");
	    		
	    	}
	    	
	    },     
	    error: function(err) {  
	       alert("登录异常！");    
	    }     
	}); 
	
	//QQ登录
	function qqlogin(){
		
	}
	
	//微信登录
	function weixinlogin(){
		
	}
	
}
