$(function () {

	let header = $("#header");
	let intro = $("#intro");
	let introH;
	let scrollPos = $(window).scrollTop();
	// introH - это высота блока intro, 
	// intro.height берет высоту блока без учета padding
	// innerHeight - берет высоту блока с учетом padding.



	$(window).on("scroll load resize", function () {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}


	});


	// console.log - выводит запись в консоль.



});
