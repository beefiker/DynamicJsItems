// * 크기를 되돌렸을 때 생기는 오류 대비
$(window).resize(function() {
	if (CurrentMenuValue == 1) {
		if ($(window).width() >= 800) {
			$('#navi').animate({ left: '-300px' }, 200);
			$('#wrapper, #Topmenu').animate({ left: 0 }, 200);
			$('.Btncontainer').removeClass('change');
			CurrentMenuValue = 0;
		}
	}
});

// * Click animating jquery code starts from here.
const page = $('html, body');
$('#gotoA, #naviA').click(function() {
	const CurrentBoxTop = $('#box1').offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, 'easeInExpo');
});
$('#gotoB, #naviB').click(function() {
	const CurrentBoxTop = $('#box2').offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, 'easeInExpo');
});
$('#gotoC, #naviC').click(function() {
	const CurrentBoxTop = $('#box3').offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, 'easeInExpo');
});
$('#gotoD, #naviD').click(function() {
	const CurrentBoxTop = $('#box4').offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, 'easeInExpo');
});
$('#gotoE, #naviE').click(function() {
	const CurrentBoxTop = $('#box5').offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, 'easeInExpo');
});
$('#gotoF, #naviF').click(function() {
	const CurrentBoxTop = $('#box6').offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, 'easeInExpo');
});
$('#gotoG, #naviG').click(function() {
	const CurrentBoxTop = $('#box7').offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, 'easeInExpo');
});

const CurrentColor = '#636e72';
$('#gotoA').css({ color: CurrentColor });
$('#naviA').css({ color: CurrentColor });

// ! 셋인터벌로 브라우저 속도 조절 
setInterval(function() {
	$(window).scroll(function() {
		let browserY = $(document).scrollTop();
		let CurrentPageNum = 1;
		const page1Y = $('#box1').offset();
		const page2Y = $('#box2').offset();
		const page3Y = $('#box3').offset();
		const page4Y = $('#box4').offset();
		const page5Y = $('#box5').offset();
		const page6Y = $('#box6').offset();
		const page7Y = $('#box7').offset();

		if (browserY == page1Y.top) {
			CurrentPageNum = 0;
			$('.menuDesign').css({ color: 'white' });
			$('#gotoA').css({ color: CurrentColor });
			$('.navimenu').css({ color: 'white' });
			$('#naviA').css({ color: CurrentColor });
		} else if (browserY > page1Y && browserY == page2Y.top) {
			CurrentPageNum = 1;
			$('.menuDesign').css({ color: 'white' });
			$('#gotoA').css({ color: CurrentColor });
			$('.navimenu').css({ color: 'white' });
			$('#naviB').css({ color: CurrentColor });
		} else if ((browserY > page2Y.top && browserY < page3Y.top) || browserY == page2Y.top) {
			CurrentPageNum = 2;
			$('.menuDesign').css({ color: 'white' });
			$('#gotoB').css({ color: CurrentColor });
			$('.navimenu').css({ color: 'white' });
			$('#naviB').css({ color: CurrentColor });
		} else if ((browserY > page3Y.top && browserY < page4Y.top) || browserY == page3Y.top) {
			CurrentPageNum = 3;
			$('.menuDesign').css({ color: 'white' });
			$('#gotoC').css({ color: CurrentColor });
			$('.navimenu').css({ color: 'white' });
			$('#naviC').css({ color: CurrentColor });
		} else if ((browserY > page4Y.top && browserY < page5Y.top) || browserY == page4Y.top) {
			CurrentPageNum = 4;
			$('.menuDesign').css({ color: 'white' });
			$('#gotoD').css({ color: CurrentColor });
			$('.navimenu').css({ color: 'white' });
			$('#naviD').css({ color: CurrentColor });
		} else if ((browserY > page5Y.top && browserY < page6Y.top) || browserY == page5Y.top) {
			CurrentPageNum = 5;
			$('.menuDesign').css({ color: 'white' });
			$('#gotoE').css({ color: CurrentColor });
			$('.navimenu').css({ color: 'white' });
			$('#naviE').css({ color: CurrentColor });
		} else if ((browserY > page6Y.top && browserY < page7Y.top) || browserY == page6Y.top) {
			CurrentPageNum = 6;
			$('.menuDesign').css({ color: 'white' });
			$('#gotoF').css({ color: CurrentColor });
			$('.navimenu').css({ color: 'white' });
			$('#naviF').css({ color: CurrentColor });
		} else if (browserY >= page7Y.top) {
			CurrentPageNum = 7;
			$('.menuDesign').css({ color: 'white' });
			$('#gotoG').css({ color: CurrentColor });
			$('.navimenu').css({ color: 'white' });
			$('#naviG').css({ color: CurrentColor });
		}
	});
}, 700);

let CurrentMenuValue = 0; // * 메뉴 숨겨있을 때 0, 클릭해서 나타냈을 때 1
$('#menuBtn').click(function() {
	switch (CurrentMenuValue) {
		case 0:
			$('.Btncontainer').addClass('change');
			$('#navi').animate({ left: 0 }, 200);
			$('#Topmenu, #wrapper').animate({ left: '300px' }, 200);
			CurrentMenuValue = 1;
			break;
		case 1:
			$('.Btncontainer').removeClass('change');
			$('#navi').animate({ left: '-300px' }, 200);
			$('#wrapper, #Topmenu').animate({ left: 0 }, 200);
			CurrentMenuValue = 0;
			break;
	}
	if (CurrentMenuValue == 1) {
		$('.box').click(function() {
			$('.Btncontainer').removeClass('change');
			$('#navi').animate({ left: '-300px' }, 200);
			$('#wrapper, #Topmenu').animate({ left: 0 }, 200);
			CurrentMenuValue = 0;
		});
	}
});
