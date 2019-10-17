$(document).ready(function(){
	jQuery(function(c){
		c(document).mouseup(function(a){
			var b=c(".display-block");b.is(a.target)||b.parent("div").is(a.target)||b.prev().is(a.target)||b.prev().prev().is(a.target)||b.prev("a").is(a.target)||c(".results").is("visible")||0!==b.has(a.target).length||(b.removeClass("display-block"),b.prev().hasClass("toggled")&&b.prev().removeClass("toggled"),b.prev().children().hasClass("toggled")&&b.prev().children().removeClass("toggled"))})});$("ul.date-list").bind("mousewheel DOMMouseScroll",
    function(c){var a=c.originalEvent;this.scrollTop+=70*(0>(a.wheelDelta||-a.detail)?1:-1);c.preventDefault()});$(".show-more").click(function(){$(".show-more").addClass("display-none");$(".more-items").addClass("display-block")});$(".burger").click(function(){$(".main-menu").is(":visible")?($(".mobile-menu-close").is(":visible")&&$(".mobile-menu-close").addClass("display-none"),$(".burger-bar").css("background-color","#777"),$(".main-menu").css("display","none"),$("body").css("overflow","auto")):($(".mobile-menu-close").is(":visible")&&
$(".mobile-menu-close").addClass("display-none"),$(".burger-bar").css("background-color","#333"),$(".main-menu").css("display","block"),$("body").css("overflow","hidden"),$(".modal-bg").addClass("display-none"),$(".toggled").removeClass("toggled"));$(".ads-100-90-select").is(":visible")&&$(".ads-100-90-select").addClass("display-none")});

    $("li.zodiac-item a").click(function(){
    	console.log('click li.zodiac-item a');
    	$("#zodiac-list").is(":visible")?($("#zodiac-list").removeClass("display-block"),$(this).children(".arrow").removeClass("toggled")):
    ($("#zodiac-list").addClass("display-block"),$(this).children(".arrow").addClass("toggled"))});

    $(".select-block div").click(function(){
		console.log('.select-block div');
    	if($(this).children("ul.date-list").is(":visible"))$(this).children("ul.date-list").removeClass("display-block"),$(this).children(".arrow").removeClass("toggled");else{var c=$(this).children("span").text();if("990">=$(window).width()){$(this).children(".arrow").addClass("toggled");$(this).hasClass("day")&&$(".mob-day").addClass("display-block");$(this).hasClass("month")&&
$(".mob-month").addClass("display-block");$(this).hasClass("year")&&$(".mob-year").addClass("display-block");$(this).hasClass("month-podbor")&&$(".mob-month-podbor").addClass("display-block");$(this).hasClass("older-podbor")&&$(".mob-older-podbor").addClass("display-block");$(".modal-bg").removeClass("display-none").scrollTop(0);$("body").css("overflow","hidden");$(".modal-bg ul.date-list").find("li.date-active").removeClass("date-active");var a=$(".modal-bg ul.date-list").find("*").filter(function(){return $(this).text()===
    c});a.addClass("date-active");a=$(".modal-bg ul.display-block");var b=$(".modal-bg ul.display-block").find("li.date-active");a.scrollTop(b.offset().top-a.offset().top+a.scrollTop());$(".ads-100-90-select").removeClass("display-none")}else $(this).children("ul.date-list").addClass("display-block"),$(this).children(".arrow").addClass("toggled"),a=$(this).children("ul.date-list").find("*").filter(function(){return $(this).text()===c}),a.addClass("date-active"),a=$(this).children("ul.date-list.display-block"),
    b=$(this).children("ul.date-list.display-block").find("li.date-active"),a.scrollTop(b.offset().top-a.offset().top+a.scrollTop())}});

$("ul.date-list li").click(function(){
	console.log('click ul.date-list li');

	$(this).siblings().removeClass("date-active");
	console.log('siblings');
	$(this).addClass("date-active");
	console.log('addClass');
	var c=$(this).text();
	console.log(c);
	$("div.toggled").prev("span").text(c);
	console.log('toggled');
	//if($(this).parent().parent().hasClass("month-podbor")||$(this).parent().hasClass("mob-month-podbor"))"\u043e\u0434\u043d\u043e\u0433\u043e \u0433\u043e\u0434\u0430"==$("#male_dir").html()?$(".older-podbor").addClass("display-none"):$(".older-podbor").hasClass("display-none")&&$(".older-podbor").removeClass("display-none");
	//console.log('1');
	//$(".modal-bg").is(":visible")&&($(this).parent().removeClass("display-block"),$(".modal-bg").addClass("display-none"),$(".toggled").removeClass("toggled"),$("body").css("overflow","auto"));
	//console.log('2');
	//$(".ads-100-90-select").addClass("display-none")
	//console.log('3');

});

    $(".calculate-button").click(function(){
		console.log('click calculate');
		console.log("fuck you");
		console.log($(".mobile-menu-close").attr('class'));
		document.getElementById("banner").style.width = `${window.outerWidth-20}px`
		console.log(window.outerWidth-20);
    	$(".mobile-menu-wrap").is(":visible")&&($(".mobile-menu-close").removeClass("display-none"),$(".mobile-menu-wrap").css("margin-left",
    "-15px"))
    	$(".mobile-menu-close").removeClass("display-none");
    	console.log($(".mobile-menu-close").attr('class'));


    });

$(".modal-bg").click(function(c){
	console.log('click .modal-bg');

	$(".results").is(c.target)||0!==$(".results").has(c.target).length||($("body").css("overflow","auto").css("padding-right","inherit"),$(".header").css("padding-right","inherit"),$(".modal-bg").addClass("display-none"),$(".results").addClass("display-none"),$(".toggled").removeClass("toggled"),$(".mobile-menu-close").is(":visible")&&$(".mobile-menu-close").addClass("display-none"))
});

$(".mobile-menu-close").click(function(){
	console.log('click .mobile-menu-close');
	$(".mobile-menu-close").addClass("display-none");
    $("body").css("overflow","auto").css("padding-right","inherit");$(".header").css("padding-right","inherit");$(".modal-bg").addClass("display-none");$(".results").addClass("display-none");$(".toggled").removeClass("toggled")})});