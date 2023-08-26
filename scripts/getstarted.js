const courses = {
    "grade 10": {
        "ib": ["Math 10C IB", "Physics 25 IB"],
        "non-ib": ["Math 10C", "Science 10-1"]
    },
    "grade 11": {
        "ib": ["Math 20 IB", "Physics 20 IB"],
        "non-ib": ["Math 20-1", "Science 20-1", "Physics 20-1"]
    },
}

$(function () {
    var grade;
    var ibtf;
    var course;
    var sptf;


    $(".input-stage-1").css("display", "flex");
    setTimeout(function () {
        $(".input-stage-1").addClass("active");
    }, 1000);

    $(".input-1").on("click", function () {
        grade = this.classList[2].replace("-", " ");
        $(".progress-i").css("width", "25%");
        $(".input-stage-1").removeClass("active");
        setTimeout(function () {
            $(".input-stage-1").css("display", "none");
            $(".input-stage-2").css("display", "flex");
            setTimeout(function () {
                $(".input-stage-2").addClass("active");
            }, 500);
        }, 2000);
    });

    $(".input-2").on("click", function () {
        ibtf = this.classList[2];
        $(".progress-i").css("width", "50%");
        $(".input-stage-2").removeClass("active");
        courses[grade][ibtf].forEach(element => {
            $(".input-stage-3 .input-stage-buttons").append(`
            <button class="input-3 button ${element.replace(" ", "-")}">${element}</button>
            `)
        });
        setTimeout(function () {
            $(".input-stage-2").css("display", "none");
            $(".input-stage-3").css("display", "flex");
            setTimeout(function () {
                $(".input-stage-3").addClass("active");
            }, 500);
        }, 2000);
        console.log($(".input-stage-3 .input-stage-buttons").children());
    });

    $(".input-stage-buttons").on("click", ".input-3", function () {
        course = this.classList[2];
        $(".progress-i").css("width", "75%");
        $(".input-stage-3").removeClass("active");
        setTimeout(function () {
            $(".input-stage-3").css("display", "none");
            $(".input-stage-4").css("display", "flex");
            setTimeout(function () {
                $(".input-stage-4").addClass("active");
            }, 500);
        }, 2000);
    });
    $(".input-4").on("click", function () {
        $(".progress-i").css("width", "100%");
        $(".input-stage-4").removeClass("active");

        if (this.classList[2] == "yes") { sptf = true; } 
        else { sptf = false; }

        setTimeout(function () {
            $(".progress-o").css("opacity", "0");

            if (sptf) {
                window.location.href = "sign-up.html";
            } else {
                window.location.href = `${course.toLowerCase().replace(" ", "_")}.html`
            }
        }, 2000);
    });
})