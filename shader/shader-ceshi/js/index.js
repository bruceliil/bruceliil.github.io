// JavaScript Document
$(function(){


	var type = true
	var winH = $(window).height();
	var winW = $(window).width();
	var widScrollT = 0
	var productTween;			//滚动动画存储
	var time_x = 0;				//时间轴	
	var p1In = Power1.easeIn	//缓动函数
	var p1Out = Power1.easeOut	//缓动函数
	var p2In = Power2.easeIn	//缓动函数
	var p2Out = Power2.easeOut	//缓动函数

	var initalizeFun = function(){


		$(window).resize(function(){
			winH = $(window).height();
			winW = $(window).width();
			widScrollT = $(window).scrollTop();
		})

		$(".home_s1").addClass("one")
		$(".home_s1_bg").addClass("one")
		

		//计算滚动距离与时间轴关系
		var getTweenPercent = function(scrT){
			var h_time = 50;	//50屏，每屏1秒
			return scrT / (h_time*winH) * h_time	//滚动距离 / 内容区总高-1 * 秒数	
		}
		
		var resetTween=function(){

			productTween = new TimelineMax({repeat:0, repeatDelay:0,paused:true});

			productTween.insert('s1_1', time_x=0);
			productTween.insert('s1_2a', time_x+0.5);
			productTween.insert('s1_2b', time_x+0.7);
			productTween.insert('s1_2c', time_x+0.3);

			productTween.insert(TweenLite.to($(".home_s1_bg .vid"), 0.2, {opacity:0,ease: p1Out}),'s1_1' );

			productTween.insert(TweenLite.to($(".home_s1 .y1"), 0.5, {left:"80%",ease: p1Out}),'s1_1' );
			productTween.insert(TweenLite.to($(".home_s1 .y1"), 0.5, {left:"50%",ease: p1In}),'s1_2a' );
			productTween.insert(TweenLite.to($(".home_s1 .y1"), 1, {top:"190%",ease: p1In}),'s1_1' );

			productTween.insert(TweenLite.to($(".home_s1 .y2"), 0.7, {left:"60%",ease: p1Out}),'s1_1' );
			productTween.insert(TweenLite.to($(".home_s1 .y2"), 0.3, {left:"50%",ease: p1In}),'s1_2b' );
			productTween.insert(TweenLite.to($(".home_s1 .y2"), 1, {top:"190%",ease: p1In}),'s1_1' );

			productTween.insert(TweenLite.to($(".home_s1 .y3"), 0.3, {left:"80%",ease: p1Out}),'s1_1' );
			productTween.insert(TweenLite.to($(".home_s1 .y3"), 0.7, {left:"50%",ease: p1In}),'s1_2c' );
			productTween.insert(TweenLite.to($(".home_s1 .y3"), 1, {top:"190%",ease: p1In}),'s1_1' );

			productTween.insert(TweenLite.to($(".home_s1_bg"), 0.5, {opacity:0.5,ease: p1Out}),'s1_2c' );


			productTween.insert('s2_1', time_x+=1);

			productTween.insert(TweenLite.to($(".home_s2 .con_c .yuan"), 0.01, {scale:1,ease: p1Out}),'s2_1' );
			productTween.insert(TweenLite.to($(".home_s2 .con_c .yuan"), 0.01, {opacity:1,ease: p1Out}),'s2_1' );
			productTween.insert(TweenLite.to($(".home_s2 .con_c .line1 div"), 0.01, {scale:1,ease: p1Out}),'s2_1' );
			productTween.insert(TweenLite.to($(".home_s2 .con_c .line1 div"), 0.01, {opacity:1,ease: p1Out}),'s2_1' );
			productTween.insert(TweenLite.to($(".home_s2 .con_c .line2"), 0.01, {scale:1,ease: p1Out}),'s2_1' );
			productTween.insert(TweenLite.to($(".home_s2 .con_c .line2"), 0.01, {opacity:1,ease: p1Out}),'s2_1' );

			productTween.insert(TweenLite.to($(".home_s2 .con_c .li"), 0.01, {x:0,ease: p1Out}),'s2_1' );
			productTween.insert(TweenLite.to($(".home_s2 .con_c .li"), 0.01, {opacity:1,ease: p1Out}),'s2_1' );	

			productTween.insert(TweenLite.to($(".home_s1_bg"), 1, {opacity:0,ease: p1Out}),'s2_1' );


			productTween.insert('s2_2', time_x+=0.4);
			productTween.insert('s2_2a', time_x+0.5);
			productTween.insert('s2_2b', time_x+0.7);
			productTween.insert('s2_2c', time_x+0.3);

			productTween.insert(TweenLite.to($(".home_s1 .y1"), 0.5, {left:"25%",ease: p1Out}),'s2_2' );
			productTween.insert(TweenLite.to($(".home_s1 .y1"), 0.5, {left:"28%",ease: p1In}),'s2_2a' );
			productTween.insert(TweenLite.to($(".home_s1 .y1"), 1, {top:"313%",ease: p1In}),'s2_2' );

			productTween.insert(TweenLite.to($(".home_s1 .y2"), 0.7, {left:"60%",ease: p1Out}),'s2_2' );
			productTween.insert(TweenLite.to($(".home_s1 .y2"), 0.3, {left:"28%",ease: p1In}),'s2_2b' );
			productTween.insert(TweenLite.to($(".home_s1 .y2"), 1, {top:"313%",ease: p1In}),'s2_2' );

			productTween.insert(TweenLite.to($(".home_s1 .y3"), 0.3, {left:"50%",ease: p1Out}),'s2_2' );
			productTween.insert(TweenLite.to($(".home_s1 .y3"), 0.7, {left:"28%",ease: p1In}),'s2_2c' );
			productTween.insert(TweenLite.to($(".home_s1 .y3"), 1, {top:"313%",ease: p1In}),'s2_2' );

			productTween.insert('s2_3', time_x+1);

			productTween.insert(TweenLite.to($(".home_s3a .con_l"), 0.01, {scale:1,ease: p1Out}),'s2_3' );
			productTween.insert(TweenLite.to($(".home_s3a .con_l"), 0.01, {opacity:1,ease: p1Out}),'s2_3' );

			
			productTween.insert(TweenLite.to($(".home_s1 .yuan"), 0.2, {opacity:0,ease: p1Out}),'s2_3' );


			productTween.insert('s3_1', time_x+=1.4);
			productTween.insert('s3_2', time_x+=0.8);
			productTween.insert('s3_3', time_x+=0.8);
			productTween.insert('s3_4', time_x+=0.8);
			productTween.insert('s3_5', time_x+=0.8);
			productTween.insert('s3_6', time_x+=0.8);

			

			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic1"), 0.4, {scale:0.07}),'s3_1' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic1"), 0.4, {left:-300}),'s3_1' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic1"), 0.4, {top:-180}),'s3_1' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic2"), 0.4, {scale:1}),'s3_1' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic2"), 0.4, {left:0}),'s3_1' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic2"), 0.4, {top:0}),'s3_1' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic3"), 0.4, {scale:0.15}),'s3_1' );	

			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic2"), 0.4, {scale:0.07}),'s3_2' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic2"), 0.4, {left:-300}),'s3_2' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic2"), 0.4, {top:-180}),'s3_2' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic3"), 0.4, {scale:1}),'s3_2' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic3"), 0.4, {left:0}),'s3_2' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic3"), 0.4, {top:0}),'s3_2' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic4"), 0.4, {scale:0.15}),'s3_2' );	
			
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic3"), 0.4, {scale:0.07}),'s3_3' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic3"), 0.4, {left:-300}),'s3_3' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic3"), 0.4, {top:-180}),'s3_3' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic4"), 0.4, {scale:1}),'s3_3' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic4"), 0.4, {left:0}),'s3_3' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic4"), 0.4, {top:0}),'s3_3' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic5"), 0.4, {scale:0.15}),'s3_3' );	

			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic4"), 0.4, {scale:0.07}),'s3_4' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic4"), 0.4, {left:-300}),'s3_4' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic4"), 0.4, {top:-180}),'s3_4' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic5"), 0.4, {scale:1}),'s3_4' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic5"), 0.4, {left:0}),'s3_4' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic5"), 0.4, {top:0}),'s3_4' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic6"), 0.4, {scale:0.15}),'s3_4' );	
			
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic5"), 0.4, {scale:0.07}),'s3_5' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic5"), 0.4, {left:-300}),'s3_5' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic5"), 0.4, {top:-180}),'s3_5' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic6"), 0.4, {scale:1}),'s3_5' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic6"), 0.4, {left:0}),'s3_5' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic6"), 0.4, {top:0}),'s3_5' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic7"), 0.4, {scale:0.15}),'s3_5' );	

			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic6"), 0.4, {scale:0.07}),'s3_6' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic6"), 0.4, {left:-300}),'s3_6' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic6"), 0.4, {top:-180}),'s3_6' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic7"), 0.4, {scale:1}),'s3_6' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic7"), 0.4, {left:0}),'s3_6' );	
			productTween.insert(TweenLite.to($(".home_s3a .con_l .pic7"), 0.4, {top:0}),'s3_6' );	


			productTween.insert('s4_1', time_x+=1.6);
			productTween.insert('s4_1a', time_x-0.4);
			productTween.insert('s4_2', time_x+=0.2);

			productTween.insert(TweenLite.to($(".home_s4 .con_l"), 1.4, {y:"400px"}),'s4_1' );
			productTween.insert(TweenLite.to($(".home_s4 .con_r .li1"), 1.4, {y:"200px"}),'s4_1' );
			productTween.insert(TweenLite.to($(".home_s4 .con_r .li2"), 1.4, {y:"-200px"}),'s4_1a' );
			

			productTween.insert(TweenLite.to($(".home_s1_bg"), 1, {opacity:0.5,ease: p1Out}),'s4_2' );


			productTween.insert('s5_1', time_x+=1.6);
			productTween.insert(TweenLite.to($(".home_s1_bg"), 1, {opacity:0,ease: p1Out}),'s5_1' );


			// productTween.insert(TweenLite.to($(".home_s1 .y2"), 1, {left:"50%",ease: p2In}),'s1_1' );
			// productTween.insert(TweenLite.to($(".home_s1 .y2"), 1, {top:"190%",ease: p1Out}),'s1_1' );

			// productTween.insert(TweenLite.to($(".home_s1 .y3"), 1, {left:"50%",ease: p1Out}),'s1_1' );
			// productTween.insert(TweenLite.to($(".home_s1 .y3"), 1, {top:"190%",ease: p2In}),'s1_1' );






		}

		resetTween()

		$(window).scroll(function(){
			widScrollT = $(window).scrollTop();

			var seek=getTweenPercent(widScrollT);
			productTween.seek(seek);
			productTween.pause();


			$(".scrollbox").each(function(){
				let winhei = $(window).height()*0.7
				let thisTop = $(this).offset().top
				if(widScrollT >= thisTop - winhei){
					$(this).addClass("on");
				};
			});

			$(".home_s3a .con_r .li").each(function(){
				let ind = $(".home_s3a .con_r .li").index($(this));
				let objH = $(".home_s3a").outerHeight() / 7.5;
				let objT = $(".home_s3a").offset().top + 200
				if(widScrollT >= objT + ((ind-1) * objH) && widScrollT < objT + ((ind) * objH)){
					$(".home_s3a .con_r .li").removeClass("one")
					$(".home_s3a .con_r .li").eq(ind).addClass("one")
					$(".home_s3a .con_r .li").removeClass("nonebor")
					$(".home_s3a .con_r .li").eq((ind-1)<0?0:ind-1).addClass("nonebor")
				};
			});

			$(".home_s2 .con_c .list .li").hover(function(){
				let ind = $(this).index()
				$(".home_s2 .con_c .yuan .y").removeClass("one")
				$(".home_s2 .con_c .yuan .y").eq(ind).addClass("one")
				$(".home_s2 .con_c .list .li").removeClass("one")
				$(".home_s2 .con_c .list .li").eq(ind).addClass("one")
			})




		});

		$(".home_s1").addClass("on");

		
		var swiper6 = new Swiper('.home_s6 .swiper-container',{
			slidesPerView:"auto",
			speed: 50000,
			loop:true,
			centeredSlides: true,
			autoplay: {
				delay: 0,
			}
		});


	}



	//预加载load
	var loadimg_typr = true
	function loadimg(arr,funLoading,funOnLoad,funOnError){
		var numLoaded=0,
		numError=0,
		isObject=Object.prototype.toString.call(arr)==="[object Object]" ? true : false;
		var arr=isObject ? arr.get() : arr;
		for(a in arr){
			var src=isObject ? $(arr[a]).attr("data-src") : arr[a];
			preload(src,arr[a]);
		};
		function preload(src,obj){
			var img=new Image();
			img.onload=function(){
				numLoaded++;
				funLoading && funLoading(numLoaded,arr.length,src,obj);
				funOnLoad && numLoaded==arr.length && funOnLoad(numError);
				img.onload=null;
			};
			img.onerror=function(){
				numLoaded++;
				numError++;
				funOnError && funOnError(numLoaded,arr.length,src,obj);
			}
			img.src=src;
		};
	};
	var funloading_obj=function(n,total,src,obj){
		$(obj).attr("src",src).remove("data-src");
		var bfb = Math.round(n/total*100)
		$(".load .heng").css({ "width":bfb + "%" });
		if(n >= total-1){
			funloading_in();
		};
	};
	var funloading_in = function(){
		if(loadimg_typr){
			loadimg_typr = false
			// $(".load").fadeOut(600);
			setTimeout(function(){
				$(".load").addClass("load_no");
				$("body").removeClass("load_body");
				$("body").addClass("content_body");
			
				//执行初始化函数；
				initalizeFun();
			},1000)
		}
	}

	//执行初始化
	loadimg($(".load_img img[data-src!='']"),funloading_obj);
	setTimeout(function(){
		funloading_in();		
	},8000)
	//initalizeFun();



	//运动函数-滚动触发（元素起始位置，元素结束位置，运动起始位置，运动结束位置）
	var sMoveFun = function(oStart,oEnd,sStart,sEnd){
		var ret;
		if(widScrollT >= sStart && widScrollT <= sEnd){		//运行过程中
			ret = oStart + (oEnd - oStart) / (sEnd - sStart) * (widScrollT - sStart)
		}else if(widScrollT < sStart){	//进入之前
			ret = oStart
		}else if(widScrollT > sEnd){	//离开之后
			ret = oEnd
		}
		return ret;
	}


});