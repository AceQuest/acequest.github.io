$(function () {
    var scroll_pos;
    var prev_scroll_pos;

    if (window.location.href == "https://acequest.github.io" || window.location.href == "https://acequest.github.io/index.html" || window.location.href == "http://127.0.0.1:5500/index.html") {
        alert(window.location.href);
        $(document).on("scroll", function() {
            scroll_pos = $(this).scrollTop();
            if (scroll_pos > 50) {
                $("nav").addClass('scrolled').css("background-color", "#ffffff");
            } else {
                $("nav").removeClass('scrolled').css("background-color", "rgb(56, 179, 255)");
            }

            if ((prev_scroll_pos || prev_scroll_pos == 0) && scroll_pos != prev_scroll_pos) {
                $(".min-nav").removeClass("active");
            }
        });
    } else {
        $("nav").css("box-shadow", "0px 2px 10px rgba(0, 0, 0, 0.15)", "background-color", "#ffffff");
    }

    $(".hamburger").on("click", function() {
        $(".min-nav-area").addClass("active").css("z-index", "100");
    });

    $(".close").on("click", function() {
        $(".min-nav-area").removeClass("active").css("z-index", "-1");
    });

    $(".window-button").on("click", function() {
        $(".min-nav-area").removeClass("active").css("z-index", "-1");
    })
})
