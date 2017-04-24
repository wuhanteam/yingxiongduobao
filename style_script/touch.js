function load() {
	var bx, ex, hx;
	var list = $(".cartlist");
	for(var i = 0; i < list.length; i++) {
		var elm = list[i];
		elm.addEventListener('touchstart', function(e) {
			touch(e, function(event) {
				bx = event.touches[0].clientX;
			});
		}, false);
		elm.addEventListener('touchmove', function(e) {
			var _this=this;
			touch(e, function(event) {
				hx = event.touches[0].clientX;
				$(_this).find('.pr').css({left :hx - bx });
			});
		}, false);
		elm.addEventListener('touchend', function(e) {
			var _this=this;
			touch(e, function(event) {
				//ex = event.changedTouches[0].clientX;
				var obj=$(_this).find('.pr');
				var of=obj.offset()
				var w=obj.width();
				if(of.left>w/2){
					obj.animate({
						left:w
					},500,function(){
						$(this).parent().remove();
					});
					
					
				}else{
					obj.animate({
						left:0
					},500);
				}
			});
		}, false);
	}

	function touch(event, callback) {
		var event = event || window.event;
		switch(event.type) {
			case "touchstart":
				if(callback) callback(event);
				break;
			case "touchend":
				if(callback) callback(event);
				break;
			case "touchmove":
				event.preventDefault();
				if(callback) callback(event);
				break;
		}
	}

}
window.addEventListener('load', load, false);