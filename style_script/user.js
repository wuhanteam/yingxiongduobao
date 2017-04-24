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

//显示或隐藏密码框里面的内容
$(function(){
  $(".eyeopen img").bind("click",function(){
    var status_img = $(this).attr("src");
    //console.log(status_img);

    if(status_img.indexOf("close")!=-1){//显示的
      $(this).attr("src","image/eye.jpg");
      $(this).parent().siblings('input').prop("type","text");//显示的
    }else{
      $(this).attr("src","image/close_eye.png");
      $(this).parent().siblings('input').prop("type","password");//隐藏
    }
  });
});



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