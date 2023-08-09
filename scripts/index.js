const version = "v.1.6.2";
const publicAddress = ["https://acequest.github.io/", "https://acequest.github.io/index.html"];
const privateAddress = "http://127.0.0.1:5500/index.html";

var visitCount = localStorage.getItem("page_view");

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        $(`${obj}`).html(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

$(function () {
    $("#version").replaceWith(version);

    localStorage.setItem("page_view", Number(visitCount) + 1);

    var scroll_pos;
    var animated = false;
    /*Updated nav each page*/

    $(document).on("scroll", function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 50) {
            $("nav").addClass("active");
        } else {
            $("nav").removeClass("active");
        }

        if (scroll_pos > 600) {
            if (!animated) {
                animateValue(".hp3-1-count", 0, visitCount+10000, 5000);
                animateValue(".hp3-2-count", 0, 3, 5000);
                animateValue(".hp3-3-count", 0, 0, 5000);
                animated = true;
            }
        }
    });

    //fix
    $(".nav-expandable.nav-link").on("click", function () {
        $(".nav-expandable").each(function (i, obj) {
            $(`.${obj.classList[0]}.${obj.classList[1]}`).toggleClass("active");
        });
    });

    /** NAVIGATION */
    $(".hamburger").on("click", function () {
        $(".min-nav-area").addClass("active").css("z-index", "100");
    });

    $(".close").on("click", function () {
        $(".min-nav-area").removeClass("active").css("z-index", "-1");
    });

    $(".window-button").on("click", function () {
        $(".min-nav-area").removeClass("active").css("z-index", "-1");
    });
})
