//弹层
var chName=$(".ord-body-cover .ord-adress:first-child").find('.ch-name').text();
var chTel=$(".ord-body-cover .ord-adress:first-child").find('.ch-tel').text();
var chAdress=$(".ord-body-cover .ord-adress:first-child").find('.ch-address').text();
$(".ord-recive-info .ord-adress").find('.ch-name').text(chName);
$(".ord-recive-info .ord-adress").find('.ch-tel').text(chTel);
$(".ord-recive-info .ord-adress").find('.ch-address').text(chAdress);
var flag=false;
function coverShow(){
	flag=false;
	$(".ord-body-cover").show();
}

$('.ord-choose-adress>img').click(function(){
	$(this).parent().parent().hide();
})
//点击选中地址
$('.ord-body-cover .ord-adress').click(function(){
	$(this).find('img').show();
	$(this).siblings().find('img').hide();
	$(this).css('border','2px solid #00a1e9');
	$(this).siblings().css('border-color','#ccc');
})

//新建地址
$('.ord-createAdress img').click(function(){
	$(this).parent().parent().hide();
})
$('.ord-recive-info .ord-adress ol .btn').click(function(){
	$(".ord-createAdress").show();
})
//取消新建地址
$('.ord-createAdress .ord-creatbtn .btn').click(function(){
	$('.ord-createAdress form ul input').val('');
	$('.tip-name').hide();
	$('.tip-link').hide();
	$('.tip-link2').hide();
	$('.tip-adress').hide();
})
//地址格式验证
function checkAdress(){
	var allname=$('.ord-createAdress form ul input').eq(0).val();
	var connect=$('.ord-createAdress form ul input').eq(1).val();
	var adress=$('.ord-createAdress form ul input').eq(2).val();
	var regconnect=/^1\d{10}$/;
	console.log(regconnect.test(connect))
	if(allname==''){
		$('.tip-name').show();
		return false;
	}else{
		$('.tip-name').hide();
	}
	if(connect==''){
		$('.tip-link2').show();
		$('.tip-link').hide();
		return false;
	}else if(!regconnect.test(connect)){
		$('.tip-link').show();
		$('.tip-link2').hide();
		return false;
	}else{
		$('.tip-link').hide();
		$('.tip-link2').hide();
	}
	if(adress==''){
		$('.tip-adress').show();
		return false;
	}else{
		$('tip-adress').hide();
	}
}
//地址切换

$('.ord-recive-info ul .btn').click(function(){
	flag=true;
	$(".ord-body-cover").show();
})
$(".ord-body-cover .ord-adress").click(function(){
    $(this).addClass('ord-adress-choose');
    $(this).siblings().removeClass('ord-adress-choose');
    if(flag){
    	$(".ord-body-cover .ord-fukuang").prepend($(this));
    	$(this).find('img').hide();
    	var mo=$(`<div class="ord-cover-moren">默认地址</div>`);
    	$(".ord-body-cover .ord-adress").find('.ord-cover-moren').remove();
    	$(this).append(mo)
    }
})
$('.ord-body-cover .confirm-cancel .btn').click(function(){
	var chName1=$(".ord-body-cover .ord-adress").filter('.ord-adress-choose').find('.ch-name').text();
	var chTel1=$(".ord-body-cover .ord-adress").filter('.ord-adress-choose').find('.ch-tel').text();
	var chAdress1=$(".ord-body-cover .ord-adress").filter('.ord-adress-choose').find('.ch-address').text();
	if(chName1){
		$(".ord-recive-info .ord-adress").find('.ch-name').text(chName1);
		$(".ord-recive-info .ord-adress").find('.ch-tel').text(chTel1);
		$(".ord-recive-info .ord-adress").find('.ch-address').text(chAdress1);
	}
	$(".ord-body-cover").hide();
})