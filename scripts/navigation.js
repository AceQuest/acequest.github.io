$(function () {
    $(".nav-link").on("mouseon", function () {
        $(`.${this.className} p`).addClass("active");
    }).on("mouseleave", function () {
        $(`.${this.className} p`).removeClass("active");
    });
})