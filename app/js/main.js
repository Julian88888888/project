

$(".language ").click(function () {
	$(this).toggleClass("open");
});

$(".product--item__heart ").click(function () {
	$(this).toggleClass("active");
});

$(".recommend-tab__item ").click(function () {
	$(this).toggleClass("active");
});

$(".clic-catalog-js  ").click(function () {
	$(this).toggleClass("open");
});

// $('.show-more-js').click(function () {
// 	$('.more-js').show();
// 	$(this).hide();
// });

$(function () {
	$('.recommend__box').slice(0, 1).show({
		start: function () {
			$(this).css({
				display: "flex"
			})
		}
	});
	$('.show-more-js').on('click', function (e) {
		e.preventDefault();
		$('.recommend__box:hidden').slice(0, 1).slideDown({
			start: function () {
				$(this).css({
					display: "flex"
				})
			}
		});
	})
})


$(function () {
	$('.brand-page__box').slice(0, 1).show({
		start: function () {
			$(this).css({
				display: "flex"
			})
		}
	});
	$('.show-more-js').on('click', function (e) {
		e.preventDefault();
		$('.brand-page__box:hidden').slice(0, 1).slideDown({
			start: function () {
				$(this).css({
					display: "flex"
				})
			}
		});
	})
})

$('.slide-home__box').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('.slide-home__prev'),
	nextArrow: $('.slide-home__next')
});

$('.slide-product').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 5,
	prevArrow: $('.slide-product__prev'),
	nextArrow: $('.slide-product__next'),
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		}
	]
});

$('.slide-product-one').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 5,
	prevArrow: $('.slide-product-one__prev'),
	nextArrow: $('.slide-product-one__next'),
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		}
	]
});

$('.brand__slide').slick({
	infinite: false,
	slidesToShow: 6,
	slidesToScroll: 6,
	prevArrow: $('.slide-brand__prev'),
	nextArrow: $('.slide-brand__next'),
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5
			}
		}
	]
});


$('.slide-product-category').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: $('.slide-product-category__prev'),
	nextArrow: $('.slide-product-category__next')
});

$('.slide-product-category-two').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: $('.slide-product-category-two__prev'),
	nextArrow: $('.slide-product-category-two__next')
});

$('.slide-product-category-three').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: $('.slide-product-category-three__prev'),
	nextArrow: $('.slide-product-category-three__next')
});

$('.slide-product-category-fo').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: $('.slide-product-category-fo__prev'),
	nextArrow: $('.slide-product-category-fo__next')
});



$('.brand__slide-category').slick({
	infinite: false,
	slidesToShow: 5,
	slidesToScroll: 5,
	prevArrow: $('.slide-brand-category__prev'),
	nextArrow: $('.slide-brand-category__next')
});



$('.search__input').on('input', function () {
	$('.search__closed').addClass('open');
	$('.open-search').addClass('open');
	$('.overlflov-search').addClass('active');
});

$('.search__input').on('change', function () {
	$('.search__closed').removeClass('open');
	$('.search__input').val('');
	$('.open-search').removeClass('open');
	$('.overlflov-search').removeClass('active');
});

$('.open-search__name').each(function () {
	var $this = $(this);
	let text = $this.text();
	let text1 = '';
	if ($this.text().length >= 42) {
		text1 = text.substring(0, 42);
		$this.html(text1 + '...');
	}
});

$(".user__click").click(function () {
	$('.popup-user').slideToggle();
});

$(".goods-info__more").click(function () {
	$(".goods-info__item").addClass('show');
});

$(".basket__box").click(function () {
	$('.basket').toggleClass('active');
});

$('.add').click(function () {
	var th = $(this).closest('.popup-basket__number').find('.count');
	let td = $(this).closest('.popup-basket__number').find('.sub');
	th.val(+th.val() + 1);
	if (th.val() > 1) {
		td.removeAttr("disabled");
	}
});
$('.sub').click(function () {
	var th = $(this).closest('.popup-basket__number').find('.count');
	let td = $(this).closest('.popup-basket__number').find('.sub');
	if (th.val() > 1) th.val(+th.val() - 1);
	if (th.val() == 1) {
		td.attr("disabled", "disabled");
	}
});









$('.popup-basket__number').each(function () {
	let inVal = $(this).closest('.popup-basket__number').find('.count');
	let inBtn = $(this).closest('.popup-basket__number').find('.sub');
	let inValNum = inVal.val();
	if (inValNum == 1) {
		inBtn.attr("disabled", "disabled");
	} else {
		inBtn.removeAttr("disabled");
	}

});


$('.search-sidebar__item').each(function () {
	let number = $(this).closest('.search-sidebar__item').find('.custom-checkbox');
	let item = $(this).closest('.search-sidebar__item').find('.search-page__list--hide');
	let more = $(this).closest('.search-sidebar__item').find('.search-sidebar__more span');
	more.text('Показать еще ' + (number.length - 2));
	$(more).click(function () {
		item.slideToggle();
		if (more.hasClass('active')) {
			more.removeClass('active')
			more.text('Показать еще ' + (number.length - 2));
		} else {
			more.addClass('active')
			more.text('Скрыть');
		}
	});


});


$('.like').each(function () {
	let likeTop = $(this).find('.like__like-top');
	let likeBottom = $(this).find('.like__like-bottom');
	likeTop.click(function () {
		likeTop.addClass("active");
		likeBottom.removeClass("active");
	});
	likeBottom.click(function () {
		likeTop.removeClass("active");
		likeBottom.addClass("active");
	});
});




$(".filter__click").click(function () {
	$('.filter__click').removeClass("active");
	$(this).toggleClass("active");
});


$('.goods-slide-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.goods-slide-nav__box '
});
$('.goods-slide-nav__box ').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.goods-slide-for',
	dots: false,
	centerMode: false,
	prevArrow: $('.goods-slide-nav__prev'),
	nextArrow: $('.goods-slide-nav__next'),
	focusOnSelect: false
});





$(function () {
	var newNumber = document.querySelectorAll('.statistics__number');
	let number = 0;
	let numberNam = [];
	let numberNam1 = [];
	let line = document.querySelectorAll('.statistics__band-line');
	for (var i = 0; i < newNumber.length; i++) {
		number += +newNumber[i].innerHTML;
	};
	for (let y = 0; y < newNumber.length; y++) {
		numberNam = newNumber[y].innerHTML / number * 100;
		numberNam = +numberNam.toFixed(2);
		numberNam1.push(numberNam);
	}
	for (let x = 0; x < line.length; x++) {
		line[x].style.width = numberNam1[x] + '%';
	}
})


$(function () {
	$(".review__review-box .review-one").slice(0, 2).show();
	$(".review__more").on('click', function (e) {
		e.preventDefault();
		$(".review__review-box .review-one:hidden").slice(0, 4).slideDown();
		if ($(".review__review-box .review-one:hidden").length == 0) {
			$("#load").fadeOut('slow');
		}
		$('html,body').animate({
			scrollTop: $(this).offset().top - 350
		}, 1500);
	});
});



$('.add').click(function () {
	var th = $(this).closest('.basket-one__number').find('.count');
	let td = $(this).closest('.basket-one__number').find('.sub');
	th.val(+th.val() + 1);
	if (th.val() > 1) {
		td.removeAttr("disabled");
	}
});
$('.sub').click(function () {
	var th = $(this).closest('.basket-one__number').find('.count');
	let td = $(this).closest('.basket-one__number').find('.sub');
	if (th.val() > 1) th.val(+th.val() - 1);
	if (th.val() == 1) {
		td.attr("disabled", "disabled");
	}
});

$('.basket-one__number').each(function () {
	let inVal = $(this).closest('.basket-one__number').find('.count');
	let inBtn = $(this).closest('.basket-one__number').find('.sub');
	let inValNum = inVal.val();
	if (inValNum == 1) {
		inBtn.attr("disabled", "disabled");
	} else {
		inBtn.removeAttr("disabled");
	}

});


$(function () {
	var tab = $('.tabs .tabs-items > div');
	tab.hide().filter(':first').show();

	// Клики по вкладкам.
	$('.tabs .tabs-nav a').click(function () {
		tab.hide();
		tab.filter(this.hash).show();
		$('.tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	// Клики по якорным ссылкам.
	$('.tabs-target').click(function () {
		$('.tabs .tabs-nav a[href=' + $(this).data('id') + ']').click();
	});
});

$(function () {
	var tab = $('.tabs-one .tabs-items-one > div');
	tab.hide().filter(':first').show();

	// Клики по вкладкам.
	$('.tabs-one .tabs-nav-one a').click(function () {
		tab.hide();
		tab.filter(this.hash).show();
		$('.tabs-one .tabs-nav-one a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	// Клики по якорным ссылкам.
	$('.tabs-target').click(function () {
		$('.tabs-one .tabs-nav-one a[href=' + $(this).data('id') + ']').click();
	});
});


$(".icon-eye").click(function () {
	$(this).toggleClass("active");
});

$(function () {
	$('.icon-eye').click(function () {
		if ($(this).hasClass('active')) {
			$(this).addClass('active');
			$('.tabs-one__input--password').attr('type', 'text');
		} else {
			$(this).removeClass('active');
			$('.tabs-one__input--password').attr('type', 'password');
		}
	});
});


$(function () {
	var tab = $('.tabs-registration__item');
	tab.hide().filter(':first').show();

	// Клики по вкладкам.
	$('.tabs-registration__nav a').click(function () {
		tab.hide();
		tab.filter(this.hash).show();
		$('.tabs-registration__nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	// Клики по якорным ссылкам.
	$('.tabs-target').click(function () {
		$('.tabs-registration__nav a[href=' + $(this).data('id') + ']').click();
	});
});

$(document).ready(function () {
	$(".arrow-scroll").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});
});
// $(document).ready(function () {
// 	$(".con-list__item").click(function () {
// 		$('.con-list__item').removeClass("active");
// 		$(this).toggleClass("active");
// 	});
// 	$('.con-list__item.active').click(function () {
// 		$(this).removeClass("active");
// 	});
// });



// $(function () {

// 	$(".con-list__item").on("click", function (e) {

// 		e.preventDefault();
// 		var $this = $(this);

// 		if (!$this.hasClass("active")) {
// 			$(".con-list__wrap").slideUp(800);
// 			$(".con-list__box").removeClass("active");
// 		}

// 		$this.toggleClass("active");
// 		$this.next().slideToggle();
// 	});


// });


$(function () {
	let xl = 1280;
	let lg = 992;
	let md = 768;
	let sm = 576;
	let wWidth = $(window).width();
	if (wWidth < xl && wWidth > lg) {
		$('.recently .recently__item:last').remove();
	}
	if (wWidth < lg && wWidth > md) {
		$('.recently .recently__item:gt(2)').remove();
		$('.recently .recently__item:gt(3)').remove();
	}
	if (wWidth < md && wWidth > sm) {
		$('.recently .recently__item:gt(2)').remove();
		$('.recently .recently__item:gt(3)').remove();
		$('.recently .recently__item:gt(1)').remove();
	}
});



$(".hamburger").click(function () {
	$('.nav-scroll').toggleClass("open");
	$('.nav-mobile').toggleClass("open");
	// $(this).toggleClass("active");
});

$(".nav-mobile__closed").click(function () {
	$('.nav-scroll').removeClass("open");
	$('.nav-mobile').removeClass("open");
	// $(this).toggleClass("active");
});