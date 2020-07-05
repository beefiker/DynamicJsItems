/* function msieversion() {  // ! ie browser check function But deosn't needed this time
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        // If Internet Explorer, return version number

        $("#buttonwrapper,#cubewrap,#controltxt,#controltxt1").hide();
        $("#explorer").show();
        $(".shine").css({
            color: "rgba(255, 255, 255, 1)",
            background: "rgba(255, 255, 255, 0)",
        });
    } else {
        // If another browser, return 0
        $("#explorer").hide();

        $("#buttonwrapper,#cubewrap,#controltxt").show();
        return false;
    }
}
msieversion(); */

// * 크기를 되돌렸을 때 생기는 오류 대비
$(window).resize(function () {
    if (CurrentMenuValue == 1) {
        if ($(window).width() >= 800) {
            $("#navi").animate({ left: "-300px" }, 200);
            $("#wrapper, #Topmenu").animate({ left: 0 }, 200);
            $(".Btncontainer").removeClass("change");
            CurrentMenuValue = 0;
        }
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
setInterval(function () {
    $(window).scroll(() => {
        let browserY = $(document).scrollTop();
        let CurrentPageNum = 1;
        const page1Y = $("#box1").offset();
        const page2Y = $("#box2").offset();
        const page3Y = $("#box3").offset();
        const page4Y = $("#box4").offset();
        const page5Y = $("#box5").offset();
        const page6Y = $("#box6").offset();
        const page7Y = $("#box7").offset();

        if (browserY <= page1Y.top) {
            CurrentPageNum = 0;
            $(".menuDesign").css({ color: "white" });
            $("#gotoA").css({ color: CurrentColor });
            $(".navimenu").css({ color: "white" });
            $("#naviA").css({ color: CurrentColor });
            $(".honeybeeImg").removeClass("rotating");
            $(".honeybeeImg").removeClass("reverse_rotating");
        } else if (browserY == page1Y.top && browserY == page2Y.top) {
            CurrentPageNum = 1;
            $(".menuDesign").css({ color: "white" });
            $("#gotoA").css({ color: CurrentColor });
            $(".navimenu").css({ color: "white" });
            $("#naviB").css({ color: CurrentColor });
            $(".honeybeeImg").removeClass("rotating");
            $(".honeybeeImg").removeClass("reverse_rotating");
        } else if ((browserY > page2Y.top && browserY < page3Y.top) || browserY == page2Y.top) {
            CurrentPageNum = 2;
            $(".menuDesign").css({ color: "white" });
            $("#gotoB").css({ color: CurrentColor });
            $(".navimenu").css({ color: "white" });
            $("#naviB").css({ color: CurrentColor });
            $(".honeybeeImg").addClass("rotating");
        } else if ((browserY > page3Y.top && browserY < page4Y.top) || browserY == page3Y.top) {
            CurrentPageNum = 3;
            $(".menuDesign").css({ color: "white" });
            $("#gotoC").css({ color: CurrentColor });
            $(".navimenu").css({ color: "white" });
            $("#naviC").css({ color: CurrentColor });
            $(".honeybeeImg").removeClass("rotating");
            $(".honeybeeImg").removeClass("reverse_rotating");
        } else if ((browserY >= page4Y.top && browserY < page5Y.top) || browserY == page4Y.top) {
            CurrentPageNum = 4;
            $(".menuDesign").css({ color: "white" });
            $("#gotoD").css({ color: CurrentColor });
            $(".navimenu").css({ color: "white" });
            $("#naviD").css({ color: CurrentColor });
        } else if ((browserY >= page5Y.top && browserY < page6Y.top) || browserY == page5Y.top) {
            CurrentPageNum = 5;
            $(".menuDesign").css({ color: "white" });
            $("#gotoE").css({ color: CurrentColor });
            $(".navimenu").css({ color: "white" });
            $("#naviE").css({ color: CurrentColor });
        } else if ((browserY >= page6Y.top && browserY < page7Y.top) || browserY == page6Y.top) {
            CurrentPageNum = 6;
            $(".menuDesign").css({ color: "white" });
            $("#gotoF").css({ color: CurrentColor });
            $(".navimenu").css({ color: "white" });
            $("#naviF").css({ color: CurrentColor });
        } else if (browserY >= page7Y.top) {
            CurrentPageNum = 7;
            $(".menuDesign").css({ color: "white" });
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
            $("#Topmenu, #wrapper").animate({ left: "300px" }, 200);
            CurrentMenuValue = 1;
            break;
        case 1:
            $(".Btncontainer").removeClass("change");
            $("#navi").animate({ left: "-300px" }, 200);
            $("#wrapper, #Topmenu").animate({ left: 0 }, 200);
            CurrentMenuValue = 0;
            break;
    }
    if (CurrentMenuValue == 1) {
        $(".box").click(() => {
            $(".Btncontainer").removeClass("change");
            $("#navi").animate({ left: "-300px" }, 200);
            $("#wrapper, #Topmenu").animate({ left: 0 }, 200);
            CurrentMenuValue = 0;
        });
    }
});

/*cube*/

var wd = $("#cubewrap").width() / 2;
$("#cube > .cub1").css({
    transform: "translateZ(" + wd + "px)",
});
$("#cube > .cub2").css({
    transform: "  rotateY(90deg) translateZ(" + wd + "px)",
});
$("#cube > .cub3").css({
    transform: "rotateY(90deg) rotateX(90deg) translateZ(" + wd + "px)",
});
$("#cube > .cub4").css({
    transform: "rotateY(180deg) rotateZ(90deg) translateZ(" + wd + "px)",
});
$("#cube > .cub5").css({
    transform: "rotateY(-90deg) rotateZ(90deg) translateZ(" + wd + "px)",
});
$("#cube > .cub6").css({
    transform: "rotateX(-90deg) translateZ(0px) translateZ(" + wd + "px)",
});

$("#btngoto1").click(() => {
    $("#cube").css({
        transform: "rotateY(0deg)",
        "transition-duration": "1.5s",
    });
});

$("#btngoto2").click(() => {
    $("#cube").css({
        transform: "rotateY(-90deg)",
        "transition-duration": "1.5s",
    });
});
$("#btngoto3").click(() => {
    $("#cube").css({
        transform: "rotateX(-90deg) rotateY(-90deg)",
        "transition-duration": "1.5s",
    });
});
$("#btngoto4").click(() => {
    $("#cube").css({
        transform: " rotateY(180deg) rotateZ(90deg)",
        "transition-duration": "1.5s",
    });
});
$("#btngoto5").click(() => {
    $("#cube").css({
        transform: " rotateX(-90deg) rotateY(180deg) rotateZ(90deg)",
        "transition-duration": "1.5s",
    });
});
$("#btngoto6").click(() => {
    $("#cube").css({
        transform: " rotateX(90deg)",
        "transition-duration": "1.5s",
    });
});

let bee = document.querySelector(".honeybeeImg");
bee.addEventListener("click", () => {
    bee.classList.toggle("rotating");
    bee.classList.toggle("reverse_rotating");
});
