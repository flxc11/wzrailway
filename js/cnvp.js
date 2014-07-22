define(function(require){
    var util = require("Public/util.js");
	//require("modernizr");
	require("myFocus");
	require("tab");
	require("txtscroller");
    $(function(){
    	$("#demo").myFocus({
			pattern:'mF_sohusports',
			width:553,
			height:263
    	});
    	$("#g-focus").myFocus({
			pattern:'mF_expo2010',
			width:360,
			height:262
    	});
    	$("#scrollDiv").Scroll({
    		line:1,
    		speed:500,
    		timer:3000,
    		up:"but_up",
    		down:"but_down",
    		Num: "but_num"
    	});
    	
		/**
		 * Note:
		 **********************
		 **********************
			$(".JC1").JC();
			util.nav({
				Lv1:"#header .nav li",
				Lv2:".level-2"
			})
			util.widget.addFav(element);
			util.widget.setHome(element);
			util.widget.setTime(element);
			util.widget.input(element);
			util.tabs({
				tab_nav:".main .row-1 .col-2 .hd span",
				tab_panel:".main .row-1 .col-2 .tabs",
				active : "on"
			});
			$(".demo").lightBox({
				imageLoading:'/templates/default/images/lightbox-ico-loading.gif',
				imageBtnPrev:'/templates/default/images/lightbox-btn-prev.gif',
				imageBtnNext:'/templates/default/images/lightbox-btn-next.gif',
				imageBtnClose:'/templates/default/images/lightbox-btn-close.gif',
				imageBlank:'/templates/default/images/lightbox-blank.gif'
			})
		*/
    })
})