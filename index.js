$(function () {
    const version = "v.1.5.5";
    const public_address = ["https://acequest.github.io/", "https://acequest.github.io/home.html"];
    const private_address = "http://127.0.0.1:5500/home.html";

    var scroll_pos;

    $(".version").replaceWith(version);

    if (public_address.includes(window.location.href) || private_address.includes(window.location.href)) {
        $(document).on("scroll", function() {
            scroll_pos = $(this).scrollTop();
            if (scroll_pos > 50) {
                $("nav").css("box-shadow", "0px 2px 10px rgba(0, 0, 0, 0.15)");
            } else {
                $("nav").css("box-shadow", "0px 0px 0px rgba(0, 0, 0, 0.15)");
            }
        });
    } else {
        $("nav").css("box-shadow", "0px 2px 10px rgba(0, 0, 0, 0.15)");
    }

    $(".hamburger").on("click", function() {
        $(".min-nav-area").addClass("active").css("z-index", "100");
    });

    $(".close").on("click", function() {
        $(".min-nav-area").removeClass("active").css("z-index", "-1");
    });

    $(".window-button").on("click", function() {
        $(".min-nav-area").removeClass("active").css("z-index", "-1");
    });

    $(".hidden-toggle").on("click", function() {
        $(".hidden-toggle").css("display", "none");
        $(".visible-toggle").css("display", "flex");
        $(".password input").attr("type", "password").css("font-family", "pass");
    });

    $(".visible-toggle").on("click", function() {
        $(".hidden-toggle").css("display", "flex");
        $(".visible-toggle").css("display", "none");
        $(".password input").attr("type", "text").css("font-family", "Montserrat");
    });

    
})
