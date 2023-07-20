$(function () {
    var scroll_pos;
    var prev_scroll_pos;
    console.log(document.location.href.match(/[^\/]+$/)[0]);
    if (document.location.href.match(/[^\/]+$/)[0] == "index.html") {
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
        $("nav").css("box-shadow", "0px 2px 10px rgba(0, 0, 0, 0.15)");
    }

    $(".hamburger").on("click", function() {
        $(".min-nav").toggleClass("active");
        if ($(".min-nav").hasClass("active")) {
            $("nav").css("box-shadow", "0px 0px 0px rgba(0, 0, 0, 0.15)");
        } else {
            $("nav").css("box-shadow", "0px 2px 10px rgba(0, 0, 0, 0.15)");
        }

        if (document.location.href.match(/[^\/]+$/)[0] == "index2.html") {
            if (scroll_pos == 0 || !scroll_pos) {
                $(".min-nav").css("background-color", "rgb(56, 179, 255)");
            } else {
                $("nav").removeClass('scrolled').css("background-color", "#ffffff");
                $(".min-nav").css("background-color", "#fffff");
            }
            prev_scroll_pos = scroll_pos;
        }
    });
})
