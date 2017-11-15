$(function(){
    $(".nav>.p").mouseover(function(){
        $(".nav #shi-wrapper").css('visibility','visible')
    }).mouseout(function(){
        $(".nav #shi-wrapper").css('visibility','hidden')
    })
    
    $('.nav>.p>#shi-wrapper>ol>li').mouseover(function(){
    	var _top=$(this).offset().top;
    	var _ptop=$(".nav>.p").offset().top;
    	var realtop=_top-_ptop;
        $(this).css('background','#ccc');
       $('.nav>.p>ul').show();
         $('.nav>.p>ul').css({'top':realtop+'px','left':239+'px'});
	 }).mouseout(function(){
	    $(this).css('background','white');
	    $('.nav>.p>ul').hide();
	 })
    $('.nav>.p>ul').mouseover(function(){
    	$(this).show();
    }).mouseout(function(){
    	$(this).hide();
    })
    
     $(document).on("click",function(e){
         var htmlObj=e.target;
         if($(htmlObj).attr('name')=='login-down'){
             $('header .login-down').show()
         }else{
            $('header .login-down').hide()
         }
     })

     $(document).on("click",function(e){
        var htmlObj=e.target;
        if($(htmlObj).attr('name')=='lan-down'){
            $('header .lan-down').show()
        }else{
           $('header .lan-down').hide()
        }
    })

    $(document).on("click",function(e){
        var htmlObj=e.target;
        if($(htmlObj).attr('name')=='all-search-class'){
            $('header .all-search-class').show()
        }else{
           $('header .all-search-class').hide()
        }
    })  
})

/*-----图书列表页鼠标悬停效果。------*/

//$(".cover-show").each(function(index){
//	$(this).mouseover(function(){
//		$(".cover-outlay").eq(index).addClass("cover-outlay-show")
//	}).mouseout(function(){
//		$(".cover-outlay").eq(index).removeClass("cover-outlay-show")
//	})
//})

/*-------图片失真调整--------*/
window.onload=function(){
	var aHeight=$(".img-container").eq(0).height();
	var aWidth=$(".img-container").eq(0).width();
	var ahalfHeight=aHeight/2;
	var aTop=$(".img-container").height()/2;
	$(".img-container img").each(function(){		
		var imgWidth=$(this).width();		
		var halfImgHeight=$(this).height()/2;
		var imgTop=aTop-halfImgHeight;
		if(imgWidth>=aWidth){	
			$(this).css({"width":"100%","margin-top":imgTop+"px"})
			imgWidth=$(this).width();		
			halfImgHeight=$(this).height()/2;
			imgTop=aTop-halfImgHeight;
			$(this).css({"width":"100%","margin-top":imgTop+"px"})
		}else{
			$(this).css({"width":imgWidth+"px","margin-top":imgTop+"px"})
			imgWidth=$(this).width();		
			halfImgHeight=$(this).height()/2;
			imgTop=aTop-halfImgHeight;
			$(this).css({"width":imgWidth+"px","margin-top":imgTop+"px"})
		}
	})
	
	/*---------显示全部效果------------------*/
	
	var des_author_height=$(".des-options-author .des-change-height").height();//90
	var des_catalog_height=$(".des-options-catalog .des-change-height").height();//306
	var des_content_show_height=$(".des-options-content-show .des-change-height").height()//332
	var shop_car_market_height=$('.ord-recive-info1 .shop-markt-list ul').height()//30
	if(des_author_height>=90){
		$(".des-options-author .des-show-btn a").show();
		$(".des-options-author .des-show-btn a span").text('显示全部');
		$(".des-options-author .des-change-height").css('height',90+'px');
	}
	if(des_catalog_height>=306){
		$(".des-options-catalog .des-show-btn a").show();
		$(".des-options-catalog .des-show-btn a span").text('显示全部');
		$(".des-options-catalog .des-change-height").css('height',306+'px');
	}
	if(des_content_show_height>=332){
		$(".des-options-content-show .des-show-btn a").show();
		$(".des-options-content-show .des-show-btn a span").text('显示全部');
		$(".des-options-content-show .des-change-height").css('height',332+'px');
	}
	if(shop_car_market_height>=5){
		$(".ord-recive-info1 .shop-markt-list>a").show();
		$(".ord-recive-info1 .shop-markt-list a span").text('展开');
		$(".ord-recive-info1 .shop-markt-list ul").css('height',5+'px');
	}
	$('.des-options-author .des-show-btn a').click(function(){
		if($(this).find('span').text()=='显示全部'){
			$(this).children('img').addClass('des-arrow-down');
			$(this).parent().prev().css('height',des_author_height+'px');
			$(this).find('span').text('关闭显示');
		}else{
			$(this).parent().prev().css('height',90+'px');
			$(this).find('span').text('显示全部');
			$(this).children('img').removeClass('des-arrow-down');
		}
	})
	$('.des-options-catalog .des-show-btn a').click(function(){
		if($(this).find('span').text()=='显示全部'){
			$(this).children('img').addClass('des-arrow-down');
			$(this).parent().prev().css('height',des_catalog_height+'px');
			$(this).find('span').text('关闭显示')
		}else{
			$(this).parent().prev().css('height',306+'px');
			$(this).find('span').text('显示全部');
			$(this).children('img').removeClass('des-arrow-down');
		}
	})
	
	$('.des-options-content-show .des-show-btn a').click(function(){
		if($(this).find('span').text()=='显示全部'){
			$(this).children('img').addClass('des-arrow-down');
			$(this).parent().prev().css('height',des_content_show_height+'px');
			$(this).find('span').text('关闭显示');
		}else{
			$(this).parent().prev().css('height',332+'px');
			$(this).find('span').text('显示全部');
			$(this).children('img').removeClass('des-arrow-down');
		}
	})
	$(".ord-recive-info1 .shop-markt-list>a").click(function(){
		if($(this).find('span').text()=='展开'){
			$(this).children('img').addClass('des-arrow-down');
			$(this).parent().find('ul').css('height',shop_car_market_height+'px');
			$(this).find('span').text('关闭');
		}else{
			$(this).parent().find('ul').css('height',5+'px');
			$(this).find('span').text('展开');
			$(this).children('img').removeClass('des-arrow-down');
		}
	})
}

/*---------右侧栏点击变色效果--------------*/
	$('.aside dl').mouseover(function(){
		var index=$(this).index();
		$(this).find('img').attr('src','assets/images/'+index+'.png');
		$(this).css('color','#0099ff')
	}).mouseout(function(){
		var index=$(this).index();
		$(this).find('img').attr('src','assets/images/'+index+'-'+index+'.png')
		$(this).css('color','#666')
	})
/*---------右侧栏点击变色效果--------------*/

/*----------模拟checkbox-------------*/
$(document).on("click",".shi-checkbox .check-box-lab",function(){	
	console.log($(this).next().prop('checked'))
	if($(this).next().prop('checked')==false){
		$(this).css('opacity',1);
	}else{
		$(this).css('opacity',0);
	}
})
/*----------模拟select-------------*/

$(document).on('click','.shi-select-input',function(){
		$(this).next('ul').show()
})
$(document).on('click','.shi-select ul li',function(){
	var content=$(this).text();
	$(this).parent().prev().val(content);
	console.log($(this).parent().prev().val())
	$(this).parent().hide();
})
/*--------------------------------返回顶部-----------------------------------*/
$(".back-top").click(function () {
		$(document).scrollTop()
        var speed=150;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });
/*-----------------------------------获取文档高度------------------------------*/
var docHeight = $(document).height();
$('.inq-cover').height(docHeight)

$('.des-info-right').find('.des-inquery-price').click(function(){
	$(".inq-cover").show();
})

$('.inq-cover-content .inq-cover-bottom .inq-cancel').click(function(){
	$(".inq-cover").hide();
})

$('.inq-cover-content .inq-cover-bottom .inq-cancel').click(function(){
	$(".inq-cover").hide();
})

$(".inq-cover-content>p>img").click(function(){
	$(".inq-cover").hide();
})

