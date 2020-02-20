$(function () {

	/* Fixed Header */
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	// introH - это высота блока intro, 
	// intro.height берет высоту блока без учета padding
	// innerHeight - берет высоту блока с учетом padding.

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function () {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	}





	// console.log - выводит запись в консоль.

	/* Smooth scroll */

	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;
		/* $(elementId).offset(). - offset(отступ) данного элемента (elementId) от верха (top)  */

		console.log(elementOffset);

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700);
	});

});
