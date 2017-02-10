// 自定义模块
(function(window) {
	var demo = {};

    demo.message = function(msg, type){
        require(['util'], function(u){
            u.message(msg, '', type);
        });
    }

    if (typeof define === "function" && define.amd) {
		define(function(){
			return demo;
		});
	} else {
		window.demo = demo;
	}
})(window);