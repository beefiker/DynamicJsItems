// * 크기를 되돌렸을 때 생기는 오류 대비
$(window).resize(function() {
	if (CurrentMenuValue == 1) {
		if ($(window).width() >= 800) {
			$("#navi").animate({ left: "-300px" }, 200);
			$("#Topmenu, #container").animate({ left: 0 }, 200);
			$(".Btncontainer").removeClass("change");
			CurrentMenuValue = 0;
		}
	}

	if (window.matchMedia("(max-width: 700px)").matches) {
		contact.scaling = 0.25;
	} else {
		contact.scaling = 0.3;
	}
});

// * Click animating code starts from here.

const page = $("html, body");

const logo = document.querySelector("#logoImg");
logo.addEventListener("click", () => {
	window.scrollTo({ top: document.querySelector("#box1").offsetTop, behavior: "smooth" });
});

$("#gotoA, #naviA").click(() => {
	const CurrentBoxTop = $("#box1").offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, "easeInExpo");
});
$("#gotoB, #naviB").click(() => {
	const CurrentBoxTop = $("#box2").offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, "easeInExpo");
});
$("#gotoC, #naviC").click(() => {
	const CurrentBoxTop = $("#box3").offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, "easeInExpo");
});
$("#gotoD, #naviD").click(() => {
	const CurrentBoxTop = $("#box4").offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, "easeInExpo");
});
$("#gotoE, #naviE").click(() => {
	const CurrentBoxTop = $("#box5").offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, "easeInExpo");
});
$("#gotoF, #naviF").click(() => {
	const CurrentBoxTop = $("#box6").offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, "easeInExpo");
});
$("#gotoG, #naviG").click(() => {
	const CurrentBoxTop = $("#box7").offset().top;
	page.stop().animate({ scrollTop: CurrentBoxTop }, 800, "easeInExpo");
});

const CurrentColor = "#636e72";
$("#gotoA").css({ color: CurrentColor });
$("#naviA").css({ color: CurrentColor });

// ! 셋인터벌로 브라우저 속도 조절
setInterval(function() {
	$(window).scroll(() => {
		let browserY = $(document).scrollTop() + 350;
		let CurrentPageNum = 0;
		const page1Y = $("#box1").offset();
		const page2Y = $("#box2").offset();
		const page3Y = $("#box3").offset();
		const page4Y = $("#box4").offset();
		const page5Y = $("#box5").offset();
		const page6Y = $("#box6").offset();
		const page7Y = $("#box7").offset();

		const circle_1 = document.querySelector("#circle1");
		const circle_2 = document.querySelector("#circle2");
		const circle_3 = document.querySelector("#circle3");
		const circle_4 = document.querySelector("#circle4");

		if (browserY < page2Y.top) {
			CurrentPageNum = 0;
			$(".menuList").css({ color: "white" });
			$("#gotoA").css({ color: CurrentColor });
			$(".navimenu").css({ color: "white" });
			$("#naviA").css({ color: CurrentColor });
			$(".rotationImg").removeClass("rotating");
			$(".rotationImg").removeClass("reverse_rotating");
		} else if (browserY == page1Y.top && browserY < page2Y.top) {
			CurrentPageNum = 1;
			$(".menuList").css({ color: "white" });
			$("#gotoA").css({ color: CurrentColor });
			$(".navimenu").css({ color: "white" });
			$("#naviB").css({ color: CurrentColor });
		} else if ((browserY >= page2Y.top && browserY <= page3Y.top) || browserY == page2Y.top) {
			CurrentPageNum = 2;
			$(".menuList").css({ color: "white" });
			$("#gotoB").css({ color: CurrentColor });
			$(".navimenu").css({ color: "white" });
			$("#naviB").css({ color: CurrentColor });
			$(".rotationImg").addClass("rotating");

			circle_1.classList.remove("bingbing_active");
			circle_2.classList.remove("bingbing_active");
			circle_3.classList.remove("bingbing_active");
			circle_4.classList.remove("bingbing_active");
		} else if ((browserY >= page3Y.top && browserY <= page4Y.top) || browserY == page3Y.top) {
			CurrentPageNum = 3;
			$(".menuList").css({ color: "white" });
			$("#gotoC").css({ color: CurrentColor });
			$(".navimenu").css({ color: "white" });
			$("#naviC").css({ color: CurrentColor });
			$(".rotationImg").removeClass("rotating");
			$(".rotationImg").removeClass("reverse_rotating");

			circle_1.classList.add("bingbing_active");
			circle_2.classList.add("bingbing_active");
			circle_3.classList.add("bingbing_active");
			circle_4.classList.add("bingbing_active");
		} else if ((browserY >= page4Y.top && browserY <= page5Y.top) || browserY == page4Y.top) {
			CurrentPageNum = 4;
			$(".menuList").css({ color: "white" });
			$("#gotoD").css({ color: CurrentColor });
			$(".navimenu").css({ color: "white" });
			$("#naviD").css({ color: CurrentColor });

			circle_1.classList.remove("bingbing_active");
			circle_2.classList.remove("bingbing_active");
			circle_3.classList.remove("bingbing_active");
			circle_4.classList.remove("bingbing_active");
		} else if ((browserY >= page5Y.top && browserY <= page6Y.top) || browserY == page5Y.top) {
			CurrentPageNum = 5;
			$(".menuList").css({ color: "white" });
			$("#gotoE").css({ color: CurrentColor });
			$(".navimenu").css({ color: "white" });
			$("#naviE").css({ color: CurrentColor });
		} else if ((browserY >= page6Y.top && browserY <= page7Y.top) || browserY == page6Y.top) {
			CurrentPageNum = 6;
			$(".menuList").css({ color: "white" });
			$("#gotoF").css({ color: CurrentColor });
			$(".navimenu").css({ color: "white" });
			$("#naviF").css({ color: CurrentColor });
		} else if (browserY >= page7Y.top) {
			CurrentPageNum = 7;
			$(".menuList").css({ color: "white" });
			$("#gotoG").css({ color: CurrentColor });
			$(".navimenu").css({ color: "white" });
			$("#naviG").css({ color: CurrentColor });
		}
	});
}, 500);

let CurrentMenuValue = 0; // * 메뉴 숨겨있을 때 0, 클릭해서 나타냈을 때 1
$("#menuBtn").click(() => {
	switch (CurrentMenuValue) {
		case 0:
			$(".Btncontainer").addClass("change");
			$("#navi").animate({ left: 0 }, 200);
			$("#Topmenu, #container").animate({ left: "300px" }, 200);
			CurrentMenuValue = 1;
			break;
		case 1:
			$(".Btncontainer").removeClass("change");
			$("#navi").animate({ left: "-300px" }, 200);
			$("#Topmenu, #container").animate({ left: 0 }, 200);
			CurrentMenuValue = 0;
			break;
	}
	if (CurrentMenuValue == 1) {
		$(".box").click(() => {
			$(".Btncontainer").removeClass("change");
			$("#navi").animate({ left: "-300px" }, 200);
			$("#Topmenu, #container").animate({ left: 0 }, 200);
			CurrentMenuValue = 0;
		});
	}
});

/* cube sizing */

var wd = $("#cubewrap").width() / 2;
$("#cube > .cub1").css({
	transform: "translateZ(" + wd + "px)"
});
$("#cube > .cub2").css({
	transform: "  rotateY(90deg) translateZ(" + wd + "px)"
});
$("#cube > .cub3").css({
	transform: "rotateY(90deg) rotateX(90deg) translateZ(" + wd + "px)"
});
$("#cube > .cub4").css({
	transform: "rotateY(180deg) rotateZ(90deg) translateZ(" + wd + "px)"
});
$("#cube > .cub5").css({
	transform: "rotateY(-90deg) rotateZ(90deg) translateZ(" + wd + "px)"
});
$("#cube > .cub6").css({
	transform: "rotateX(-90deg) translateZ(0px) translateZ(" + wd + "px)"
});

$("#cubeBtn1").click(() => {
	$("#cube").css({
		transform: "rotateY(0deg)",
		"transition-duration": "1.5s"
	});
});

$("#cubeBtn2").click(() => {
	$("#cube").css({
		transform: "rotateY(-90deg)",
		"transition-duration": "1.5s"
	});
});
$("#cubeBtn3").click(() => {
	$("#cube").css({
		transform: "rotateX(-90deg) rotateY(-90deg)",
		"transition-duration": "1.5s"
	});
});
$("#cubeBtn4").click(() => {
	$("#cube").css({
		transform: " rotateY(180deg) rotateZ(90deg)",
		"transition-duration": "1.5s"
	});
});
$("#cubeBtn5").click(() => {
	$("#cube").css({
		transform: " rotateX(-90deg) rotateY(180deg) rotateZ(90deg)",
		"transition-duration": "1.5s"
	});
});
$("#cubeBtn6").click(() => {
	$("#cube").css({
		transform: " rotateX(90deg)",
		"transition-duration": "1.5s"
	});
});

let rotateImg = document.querySelector(".rotationImg");

rotateImg.addEventListener("click", () => {
	rotateImg.classList.toggle("rotating");
	rotateImg.classList.toggle("reverse_rotating");
});

// ! paperJS code start here
const paperItem = document.querySelector("#paperCanvas");

paperItem.addEventListener("click", () => {
	alert("Paper");
});

paper.install(window);
var canvas = document.getElementById("paperCanvas");

paper.setup(canvas);

var headphoneLeft = new Path.Ellipse({
	center: [ -30, 50 ],
	radius: [ 50, 50 ],
	fillColor: "#f9c901",
	strokeColor: "#242424",
	strokeWidth: 2
});
var headphoneRight = new Path.Ellipse({
	center: [ 130, 50 ],
	radius: [ 50, 50 ],
	fillColor: "#f9c901",
	strokeColor: "#242424",
	strokeWidth: 2
});
var headphoneTop = new Path.Ellipse({
	center: [ 50, 30 ],
	radius: [ 100, 100 ],
	fillColor: "#f9c901",
	strokeColor: "#242424",
	strokeWidth: 2
});
headphoneTop.removeSegment(3);

var head = new Path.Ellipse({
	center: [ 50, 50 ],
	radius: [ 100, 100 ],
	fillColor: "#242424"
});
var headphoneLine = new Path();
headphoneLine.strokeColor = "dark";
headphoneLine.strokeWidth = 3;
var start = new Point(155, 55);
headphoneLine.moveTo(start);
headphoneLine.lineTo(155, 150);
headphoneLine.lineTo(75, 150);

var microPhone = new Path.Ellipse({
	center: [ 75, 150 ],
	radius: [ 15, 10 ],
	fillColor: "#f9c901",
	strokeColor: "#242424",
	strokeWidth: 2
});

var eyeLeft = new Path();
eyeLeft.strokeColor = "#f9c901";
eyeLeft.strokeWidth = 15;
eyeLeft.moveTo(10, 15);
eyeLeft.lineTo(10, 55);

var eyeRight = new Path();
eyeRight.strokeColor = "#f9c901";
eyeRight.strokeWidth = 15;
eyeRight.moveTo(90, 15);
eyeRight.lineTo(90, 55);

var mouth = new Path.Ellipse({
	center: [ 50, 90 ],
	radius: [ 50, 50 ],
	fillColor: "#f9c901"
});

mouth.removeSegment(1);
var contact = new Group({
	children: [
		headphoneLine,
		headphoneTop,
		headphoneLeft,
		headphoneRight,
		head,
		mouth,
		microPhone,
		eyeLeft,
		eyeRight
	],
	applyMatrix: false
});
if (window.matchMedia("(max-width: 700px)").matches) {
	contact.scaling = 0.25;
} else {
	contact.scaling = 0.3;
}
