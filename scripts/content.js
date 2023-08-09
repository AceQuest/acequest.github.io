

const quizDesc = {
    "Polynomial-and-Absolute-Values": {
        "Quiz-1": {
            "Title": "Review from Grade 10",
            "Description": "among us"
        },
        "Quiz-2": {
            "Title": "Classifying Systems and Applications",
            "Description": "ds"
        }
    }
}

$(function () {
    $(".quiz-link").on("click", function () {
        var unit = $(this).parents(".course-unit").attr("class").split(" ")[2];
        var quiz = $(this).parents(".quiz-button-area").attr("class").split(" ")[1];

        setTimeout(function () {
            if ($(`.${unit} .${quiz} .quiz-desc`).hasClass("active")) {
                $(`.${unit} .${quiz} .quiz-desc`).removeAttr("style")
                setTimeout(function () {
                    $(`.${unit} .${quiz} .quiz-desc`).removeClass("active");
                }, 50);
            } else {
                $(".quiz-desc.active").each(function (i, obj) {
                    $(`.${obj.parentElement.parentElement.parentElement.parentElement.classList[1]} .${obj.parentElement.classList[1]} .quiz-desc`).removeAttr("style")
                    setTimeout(function () {
                        $(`.${obj.parentElement.classList[1]} .quiz-desc`).removeClass("active");
                    }, 50);
                });

                $(`.${unit} .${quiz} .quiz-desc`)
                    .addClass("active");

                setTimeout(function () {
                    $(`.${unit} .${quiz} .quiz-desc`)
                        .css("animation-duration", "2s")
                        .css("animation-name", "quiz-desc-animate")
                        .css("animation-iteration-count", "infinite");
                }, 500);

                $(`.${unit} .${quiz} .quiz-title`).replaceWith(`<p class="quiz-title">${quizDesc[unit][quiz]["Title"]}</p>`);
                $(`.${unit} .${quiz} .quiz-contents`).replaceWith(`<p class="quiz-contents">${quizDesc[unit][quiz]["Description"]}</p>`);
            }
        }, 250);
    });
})
