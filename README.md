# 🐝 Web UI & UX Final Project 🐝

_transform, transition, animation etc..._ 적용한 기능 및 아이템 소개

_Apply all fonts on a 15px basis. (15px/rem)_

## 📱 Apply Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## 🛠 Apply MediaQuery

```CSS
@media (min-width: 1300px) { }
@media (max-width: 1300px) { }
@media (max-width: 700px) { }
```

# 𝌞 Contents and Introduction

-   **🍔 Hamburger Menu 🍔**

    -   _HTML_

    ```html
    <div id="menuBtn">
        <div class="Btncontainer">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    </div>
    ```

    -   _CSS_

    ```CSS
    .Btncontainer {
        display: inline-block;
        cursor: pointer;
        position: relative;
        top: 0.46rem;
        left: -0.3rem;
    }

    .bar1,
    .bar2,
    .bar3 {
        width: 2.33rem;
        height: 0.33rem;
        background-color: var(--beeYellow);
        margin: 6px 0;
        transition: 0.2s;
    }

    .change .bar1 {
        transform: rotate(-45deg) translate(-9px, 6px);
    }
    .change .bar2 {
        opacity: 0;
    }
    .change .bar3 {
        transform: rotate(45deg) translate(-8px, -8px);
    }
    ```

    -   _JavaScript_

    ```js
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
    ```

*   **🔲 Cube 🔲**

    -   _HTML_

    ```HTML
    <section id="3Dcube">

        <ul id="buttonwrapper">
            <li id="cubeBtn1">1</li>
            <li id="cubeBtn2">2</li>
            <li id="cubeBtn3">3</li>
            <li id="cubeBtn4">4</li>
            <li id="cubeBtn5">5</li>
            <li id="cubeBtn6">6</li>
        </ul>

        <div id="cubewrap">
            <div id="cube">
                <div class="cub1"><img id="cubeimg" src="images/html_black.png" /></div>
                <div class="cub2"><img id="cubeimg" src="images/JAVA.png" /></div>
                <div class="cub3"><img id="cubeimg" src="images/Python.png" /></div>
                <div class="cub4"><img id="cubeimg" src="images/webui.png" /></div>
                <div class="cub5"><img id="cubeimg" src="images/php.png" /></div>
                <div class="cub6"><img id="cubeimg" src="images/DB_green.png" /></div>
            </div>
        </div>

    </section>
    ```

    -   _CSS_

    ```CSS
    #cubewrap {
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        transform-style: preserve-3d;
        transform: rotateX(-12deg) rotateY(-20deg); /* 살짝 기울여 3d 큐브 트랜지션을 확실히 볼 수 있게 */
    }

    #cube {
    	width: 50%;
    	height: 25%;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite; /* 반복횟수는 무제한 */
        animation-duration: 10s;
        transform-style: preserve-3d;
        transform-origin: 100% 100%;
    }

    #cube div {
        position: absolute;
        width: 200%;
        height: 0%;
    }

    #cube .cub1 {	transform: translatez(0);   }
    #cube .cub2 {	transform: rotatey(90deg) translatez(0);    }
    #cube .cub3 {	transform: rotatey(90deg) rotatex(90deg) translatez(0); }
    #cube .cub4 {	transform: rotatey(180deg) rotatez(90deg) translatez(0);    }
    #cube .cub5 {	transform: rotatey(-90deg) rotatez(90deg) translatez(0);    }
    #cube .cub6 {	transform: rotatex(-90deg) translatez(0);   }

    #cubeimg {
        width: 100%;
        margin-top: -50%;
    }

    #cube div:nth-child(3n + 2) {	opacity: 0.7;   }   /* 트랜지션을 확실하게 보여주기 위해*/
    #cube div:nth-child(3n + 3) {  	opacity: 0.9;   }  /* nth-child로 면마다 투명도를 조절 */

    ```

    -   _JavaScript_

    ```js
    /* 반응형에 대비한 css 속성 translateZ 설정 */
    /* translateZ는 args가 커질수록 멀어진다. */

    var wd = $("#cubewrap").width() / 2; /* 반응형 구현을 위한 사이징 */

    $("#cube > .cub1").css({	transform: "translateZ(" + wd + "px)"   });
    $("#cube > .cub2").css({	transform: "rotateY(90deg) translateZ(" + wd + "px)"  });
    $("#cube > .cub3").css({	transform: "rotateY(90deg) rotateX(90deg) translateZ(" + wd + "px)" });
    $("#cube > .cub4").css({	transform: "rotateY(180deg) rotateZ(90deg) translateZ(" + wd + "px)"    });
    $("#cube > .cub5").css({	transform: "rotateY(-90deg) rotateZ(90deg) translateZ(" + wd + "px)"    });
    $("#cube > .cub6").css({  	transform: "rotateX(-90deg) translateZ(0px) translateZ(" + wd + "px)"   });

    각 큐브버튼 클릭 이벤트 (() => {
        1번 버튼 클릭 시
        $("#cube").css({
            transform: "rotateY(0deg)",
            "transition-duration": "1.5s"
        });

        2번 버튼 클릭 시
        $("#cube").css({
            transform: "rotateY(-90deg)",
            "transition-duration": "1.5s"
        });

        3번 버튼
        $("#cube").css({
            transform: "rotateX(-90deg) rotateY(-90deg)",
            "transition-duration": "1.5s"
        });

        4번 버튼
        $("#cube").css({
            transform: " rotateY(180deg) rotateZ(90deg)",
            "transition-duration": "1.5s"
        });

        5번 버튼
        $("#cube").css({
            transform: " rotateX(-90deg) rotateY(180deg) rotateZ(90deg)",
            "transition-duration": "1.5s"
        });

        6번 버튼
        $("#cube").css({
            transform: " rotateX(90deg)",
            "transition-duration": "1.5s"
        });
    });
    ```

*   **↻ Rotate ↻**

    -   _HTML_

    ```html
    <img src="images/rotation.png" class="rotationImg" alt="bee" />
    ```

    -   _CSS_

    ```css
    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes reverse_rotating {
        from {
            transform: rotate(360deg);
        }
        to {
            transform: rotate(0deg);
        }
    }

    .rotationImg {
        width: 30%;
    }

    .rotating {
        animation: rotating 0.4s linear infinite;
        transform-origin: center;
    }
    .reverse_rotating {
        opacity: 1;
        width: 30%;
        animation: reverse_rotating 0.4s linear infinite;
        transform-origin: center;
    }
    ```

    -   _JavaScript_

    ```js
    let rotateImg = document.querySelector(".rotationImg");

    rotateImg.addEventListener("click", () => {
        // 클릭할때마다  클래스가 교차되게 토글을 부여함
        rotateImg.classList.toggle("rotating");
        rotateImg.classList.toggle("reverse_rotating");
    });
    ```

*   **🌀 Following circles 🌀**

    -   _HTML_

    ```html
    <svg class="followingCircle" viewBox="0 0 340 340">
        <circle id="circle1" class="circles" cx="170" cy="170" r="160" stroke="#FDF68C" />
        <circle id="circle2" class="circles" cx="170" cy="170" r="135" stroke="#F4CD2A" />
        <circle id="circle3" class="circles" cx="170" cy="170" r="110" stroke="#EDA323" />
        <circle id="circle4" class="circles" cx="170" cy="170" r="85" stroke="#D28D0D" />
        <img id="beeInsideCircle" src="images/bee.png" alt="bee_logo_img">
    </svg>
    ```

    -   _CSS_

    ```css
    .followingCircle {
        max-width: 15rem;
        width: 100%;
        height: auto;
        stroke-linecap: round;
    }

    circle {
        fill: none;
        stroke-width: 4;
    }

    circle:nth-of-type(1) {
        stroke-dasharray: 550px;
        animation-delay: -0.15s;
    }
    circle:nth-of-type(2) {
        stroke-dasharray: 500px;
        animation-delay: -0.3s;
    }
    circle:nth-of-type(3) {
        stroke-dasharray: 450px;
        animation-delay: -0.45s;
    }
    circle:nth-of-type(4) {
        stroke-dasharray: 300px;
        animation-delay: -0.6s;
    }

    @keyframes bingbing {
        50% {
            transform: rotate(360deg);
        }
    }

    .bingbing_active {
        animation-name: bingbing;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        transform-origin: 170px 170px;
        will-change: transform;
    }
    ```

    -   _JavaScript_
        -   🙅🏻‍♀️ No JavaScript

## 그 외의 것들

---

### 🍔햄버거 메뉴를 클릭/터치하여 메뉴가 등장했을 때 <br> 브라우저 크기를 강제적으로 늘렸을 경우의 오류 대비

```js
$(window).resize(function () {
    if (CurrentMenuValue == 1) {
        if ($(window).width() >= 800) {
            $("#navi").animate({ left: "-300px" }, 200);
            $("#Topmenu, #container").animate({ left: 0 }, 200);
            $(".Btncontainer").removeClass("change");
            CurrentMenuValue = 0;
        }
    }
});
```

### ⬆️ window.scrollTo는 로고이미지에 적용

```js
const logo = document.querySelector("#logoImg");

logo.addEventListener("click", () => {
    window.scrollTo({ top: document.querySelector("#box1").offsetTop, behavior: "smooth" });
});
```

### ⛔️ 웹 성능 저하 방지

**동작을 하는 아이템들은 <br>_사용자가 인근 컨텐츠_ 를 보고있을때 실행**

```js
setInterval(function () {
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
            $(".rotationImg").removeClass("rotating");
            $(".rotationImg").removeClass("reverse_rotating");
        } else if ((browserY >= page2Y.top && browserY <= page3Y.top) || browserY == page2Y.top) {
            $(".rotationImg").addClass("rotating");

            circle_1.classList.remove("bingbing_active");
            circle_2.classList.remove("bingbing_active");
            circle_3.classList.remove("bingbing_active");
            circle_4.classList.remove("bingbing_active");
        } else if ((browserY >= page3Y.top && browserY <= page4Y.top) || browserY == page3Y.top) {
            $(".rotationImg").removeClass("rotating");
            $(".rotationImg").removeClass("reverse_rotating");

            circle_1.classList.add("bingbing_active");
            circle_2.classList.add("bingbing_active");
            circle_3.classList.add("bingbing_active");
            circle_4.classList.add("bingbing_active");
        } else if ((browserY >= page4Y.top && browserY <= page5Y.top) || browserY == page4Y.top) {
            circle_1.classList.remove("bingbing_active");
            circle_2.classList.remove("bingbing_active");
            circle_3.classList.remove("bingbing_active");
            circle_4.classList.remove("bingbing_active");
        }
    });
}, 500);
```

## PaperJS 🎧

```js
const paperItem = document.querySelector("#paperCanvas");

paperItem.addEventListener("click", () => {
    alert("Paper");
});

paper.install(window);

var canvas = document.getElementById("paperCanvas");
paper.setup(canvas);

var headphoneLeft = new Path.Ellipse({
    center: [-30, 50],
    radius: [50, 50],
    fillColor: "#f9c901",
    strokeColor: "#242424",
    strokeWidth: 2,
});
var headphoneRight = new Path.Ellipse({
    center: [130, 50],
    radius: [50, 50],
    fillColor: "#f9c901",
    strokeColor: "#242424",
    strokeWidth: 2,
});
var headphoneTop = new Path.Ellipse({
    center: [50, 30],
    radius: [100, 100],
    fillColor: "#f9c901",
    strokeColor: "#242424",
    strokeWidth: 2,
});
headphoneTop.removeSegment(3);

var head = new Path.Ellipse({
    center: [50, 50],
    radius: [100, 100],
    fillColor: "#242424",
});
var headphoneLine = new Path();
headphoneLine.strokeColor = "dark";
headphoneLine.strokeWidth = 3;
var start = new Point(155, 55);
headphoneLine.moveTo(start);
headphoneLine.lineTo(155, 150);
headphoneLine.lineTo(75, 150);

var microPhone = new Path.Ellipse({
    center: [75, 150],
    radius: [15, 10],
    fillColor: "#f9c901",
    strokeColor: "#242424",
    strokeWidth: 2,
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
    center: [50, 90],
    radius: [50, 50],
    fillColor: "#f9c901",
});

mouth.removeSegment(1);
var contact = new Group({
    children: [headphoneLine, headphoneTop, headphoneLeft, headphoneRight, head, mouth, microPhone, eyeLeft, eyeRight],
    applyMatrix: false,
});
if (window.matchMedia("(max-width: 700px)").matches) {
    contact.scaling = 0.25;
} else {
    contact.scaling = 0.3;
}
```
