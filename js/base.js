$(function(){
	var randomBgImg = Math.round( Math.random() * 4 ) + 1;
	// $("#fakeloader").fakeLoader({
 //        timeToHide:3000,
 //        zIndex:1000,
 //        spinner:"spinner7",
 //        bgColor:"rgba(255,255,255,0.2)",
 //        imagePath:"./images/back"+randomBgImg+".jpg"
 //    });

 	//背景
	$('body').attr("style","background:url('./images/back"+randomBgImg+".jpg')");
	window.setInterval(function(){
		randomBgImg = randomBgImg + 1;
		if(randomBgImg > 5){
			randomBgImg = 1;
		}
		$('body').attr("style","background:url('./images/back"+randomBgImg+".jpg')");
	},10000);



	$('.head-click').click(function(){
		if(!$('.head-click').hasClass('first')){
			$('.head-click').removeClass('second').addClass('first');
			$('.introduce').show();
			Typewriter();
		}else{
			$('.head-click').removeClass('first').addClass('second');
			$('.introduce').fadeOut().hide();
			TypewriterRemove();
		}
		if(!$('.title-image').hasClass('first-title')){
			$('.title-image').removeClass('second-title').addClass('first-title');
		}else{
			$('.title-image').removeClass('first-title').addClass('second-title');
		}

	})

	//卡片翻转效果
	if ( $('html').hasClass('csstransforms3d') ) {
	  $('.artGroup').removeClass('slide').addClass('flip');
	  $('.artGroup.flip').on('mouseenter',
	    function () {
	      $(this).find('.artwork').addClass('theFlip');
	    });
	  $('.artGroup.flip').on('mouseleave',
	    function () {
	      $(this).find('.artwork').removeClass('theFlip');
	    });
	} else {
	  $('.artGroup').on('mouseenter',
	    function () {
	      $(this).find('.detail').stop().animate({bottom:0}, 500, 'easeOutCubic');
	    });
	  $('.artGroup').on('mouseleave',
	    function () {
	      $(this).find('.detail').stop().animate({bottom: ($(this).height() + -1) }, 500, 'easeOutCubic');
	    });
	}
})

function Typewriter(){
	// 打字机效果
	window.setTimeout(function(){
		$('.type-it-1').typeIt({
		  whatToType:'Lokya',
		  typeSpeed: 300,
		  lifeLike: false,
		  showCursor: false
		});
		$('.type-it-2').typeIt({
		  whatToType:'前端汪，从业1.5年，喜欢前端技术。一入前端深似海，从此女友是路人啊！[滑稽！]',
		  typeSpeed: 100,
		  lifeLike: false,
		  showCursor: false
		});
		$('.type-it-3').typeIt({
		  whatToType:'Github主页',
		  typeSpeed: 100,
		  lifeLike: false,
		  showCursor: false
		});
		$('.type-it-4').typeIt({
		  whatToType:'Coding主页',
		  typeSpeed: 100,
		  lifeLike: false,
		  showCursor: false
		});
	},1500);
}
function TypewriterRemove(){
	$('.type-it-1').empty();
	$('.type-it-2').empty();
	$('.type-it-3').empty();
	$('.type-it-4').empty();
}
