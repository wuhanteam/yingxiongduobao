//$(function(){
//
//	//
//$(function () { 
//$(window).scroll(function () { 
//if ($(window).scrollTop() > 200) { 
//$(".searchbar").addClass("nav").css("top","0")
//$(".inputsea").css("opacity","1")
//} 
//else { } 
//}); 
//}); 
//});

// Index页面内容初始化
//$(function(){
//	alert(1111);
//// ajax请求 页面所需内容
//$.ajax(function(){
//		//要用post方式      
//	    type:"post",
//	    data:{"userName":"user1"},
//	    //方法所在页面和方法名      
//	    url: "http://192.168.0.104:8080/Furnish/serices/QueryAppIndexServlet.action",     
//	       
//	    dataType: "json",    
//	    
//	    success: function(data) {
//	    	 alert("初始化数据！");
//	    },
//	    error: function(err) {  
//	        alert("初始化出错");  
//	    } 
//	
//});
//
//});

$(document).ready(function(){
	init();
})

function init(){
	// alert(1111);
  // ajax请求 页面所需内容
  $.ajax({
  		//要用post方式      
	    type:"post",
	    data:{"userName":'1111'},
	    url:'http://192.168.0.104:8080/Furnish/services/QueryAppIndexServlet.action',
	    dataType: "json",
	    success: function(data) {
	    	 alert("初始化数据！");
	    },
	    error: function(err) {  
	    	console.log(err);
	        alert("初始化出错");  
	      
	    } 
  	
  });
}

//$(function () { 
//var bar=$(".searchbar");
//var top=bar.position().top;
//$(window).scroll(function () { 
//  if ($(window).scrollTop() > top) { 
//    $(".searchbar").addClass("nav").css("top","0");
//  } 
//  else{ 
//    $(".searchbar").removeClass("nav").css("top","0.5em");
//  } 
//}); 
//}); 