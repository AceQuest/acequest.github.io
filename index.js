$(function () {
    const version = "v.1.5.8";
    const publicAddress = ["https://acequest.github.io/", "https://acequest.github.io/index.html"];
    const privateAddress = "http://127.0.0.1:5500/index.html";

    const difficultyParams = {
        "1-10": ["rgb(0, 194, 129)", "Very Easy"],
        "11-20": ["rgb(10, 194, 0)", "Easy"],
        "21-30": ["rgb(110, 194, 0)", "Easy"],
        "31-40": ["rgb(165, 194, 0)", "Somewhat Easy"],
        "41-50": ["rgb(194, 191, 0)", "Neutral"],
        "51-60": ["rgb(194, 165, 0)", "Neutral"],
        "61-70": ["rgb(194, 136, 0)", "Somewhat Hard"],
        "71-80": ["rgb(194, 97, 0)", "Hard"],
        "81-90": ["rgb(194, 52, 0)", "Hard"],
        "91-100": ["rgb(194, 16, 0)", "Very Hard"]
    };

    const formulaSheets = {
        "math_20": {
            "Title": "Mathematics 20",
            "Description": "Calculator in Degree Mode",
            "Quadratic Functions and Equations": [
                "y=ax^2+bx+c", 
                "y=a(x-p)^2+q", 
                "\\space", 
                "\\text {For} \\ ax^2+bx+c=0, \\newline x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}"],
            "Trigonometry": [
                "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}",
                "c^2=a^2+b^2-2ab\\cos C",
                "\\cos C=\\frac {a^2+b^2-c^2}{2ab}",
                "\\csc \\theta=\\frac{1}{\\sin \\theta}",
                "\\sec \\theta=\\frac{1}{\\cos \\theta}",
                "\\cot \\theta=\\frac{1}{\\tan \\theta}"
            ],
            "Sequences and Series": [
                "t_n=t_1+(n-1)d",
                "S_n=\\frac{n}{2}(2t_1+(n-1)d)",
                "S_n=\\frac{n}{2}(t_1+t_n)",
                "t_n=t_1r^{n-1}",
                "S_n=\\frac{t_1(r^n-1)}{r-1}",
                "S_n=\\frac{rt_n-t_1}{r-1}",
                "S_\\infty=\\frac{t_1}{1-r} \\text {for} -1<r<1"
            ]
        }
    }

    function getFormulaSheet(course) {
        $(".formula-sheet-top p:first-child").html(formulaSheets[course]["Title"]);
        $(".formula-sheet-top p:last-child").html(formulaSheets[course]["Description"]);
        var convertedHTML = [];
        Object.keys(formulaSheets[course]).forEach(function (i) {
            console.log(i);
            var formulas = [];
            if (i != "Title" && i != "Description") {
                formulaSheets[course][i].forEach(function (x) {
                    formulas.push(katex.renderToString(x));
                })
                convertedHTML.push(`
                <div class="formula-sheet-course">
                    <p>${i}</p>
                    <div class="katex">
                        ${formulas.join(katex.renderToString("\\newline"))}
                    </div>
                </div>
                `);
            }
        });
        return convertedHTML;
    }

    let questions = [
        {
            id: 1,
            question: "1+1=",
            answer: "2",
            questionType: "Multiple Choice",
            options: [
                "3",
                "2",
                "1",
                "7"
            ],
            difficulty: 10
        },
        {
            id: 2,
            question: "6 is a...",
            answer: "Kexin",
            questionType: "Selection",
            options: [
                "Rational Number",
                "Even Number",
                "Prime Number",
                "Natural Number"
            ],
            difficulty: 15
        },
        {
            id: 3,
            question: "1+1=",
            answer: "2",
            questionType: "Numerical Response",
            options: [null, null, null, null],
            difficulty: 50
        }
    ];

    $("#version").replaceWith(version);

    function getDifficultyParam(difficulty) {
        var difficultyParam;
        Object.keys(difficultyParams).forEach(function (i) {
            if (parseInt(i.split("-")[0]) <= difficulty && difficulty <= i.split("-")[1]) {
                difficultyParam = difficultyParams[`${i.split("-")[0]}-${i.split("-")[1]}`];
            }
        });
        return difficultyParam;
    };

    function getQuestion(questionNumber, objParent = ".question-area") {
        let questionName = questions[questionNumber].question;
        let questionType = questions[questionNumber].questionType;
        let [first, second, third, fourth] = questions[questionNumber].options;
        let difficulty = questions[questionNumber].difficulty;
        let difficultyColor = getDifficultyParam(difficulty)[0];
        let difficultyState = getDifficultyParam(difficulty)[1];

        const questionTypes = {
            "Multiple Choice": `
            <div class="question-choices question-mc">
                <div class="question-choice"><button id="button-A">A</button><p>${first}</p></div>
                <div class="question-choice"><button id="button-B">B</button><p>${second}</p></div>
                <div class="question-choice"><button id="button-C">C</button><p>${third}</p></div>
                <div class="question-choice"><button id="button-D">D</button><p>${fourth}</p></div>
            </div>`,
            "Selection": `
            <div class="question-choices question-sa">
                <div class="question-choice"><button id="button-A"></button><p>${first}</p></div>
                <div class="question-choice"><button id="button-B"></button><p>${second}</p></div>
                <div class="question-choice"><button id="button-C"></button><p>${third}</p></div>
                <div class="question-choice"><button id="button-D"></button><p>${fourth}</p></div>
            </div>`,
            "Numerical Response": `
            <div class="question-response-area question-nr">
                <input type="number"></input>
            </div>`
        }

        $(objParent).html(`
        <div class="question-left">
            <div class="question-text">
                <p class="question-n">Question 1. <span>1/25</span></p>
                <p class="question">${questionName}</p>
            </div>
            ${questionTypes[questionType]}
        </div>
        <div class="question-right">
            <div class="question-difficulty-resources">
                <div class="question-difficulty">
                    <p>Difficulty</p>
                    <div class="question-difficulty-o">
                        <div class="question-difficulty-i"></div>
                    </div>
                    <p class="question-difficulty-rating">${difficultyState}</p>
                </div>
                <div class="question-resources">
                    <p>Resources</p>
                    <button class="formula-sheet-button">Formula Sheet</button>
                    <div class="formula-sheet">
                        <div class="formula-sheet-top">
                            <p></p>
                            <p></p>
                        </div>
                        <div class="formula-sheet-bottom"></div>
                        <button class="formula-sheet-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <div class="close-hover"></div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="question-submit-solution">
                <button class="question-submit">Submit</button>
                <button class="question-give-up">Give Up</button>
            </div>
        </div>
        `);

        $(`${objParent} .question-difficulty-rating`).css("color", difficultyColor)
        $(`${objParent} .question-difficulty-i`).css("background-color", difficultyColor).css("width", `${difficulty}%`);
    };

    var scroll_pos;
    /*Updated nav each page*/

    if (publicAddress.includes(window.location.href) || privateAddress.includes(window.location.href)) {
        $(document).on("scroll", function () {
            scroll_pos = $(this).scrollTop();
            if (scroll_pos > 50) {
                $("nav").css("box-shadow", "0px 2px 10px rgba(0, 0, 0, 0.15)").css("background-color", "#ffffff");
            } else {
                $("nav").css("box-shadow", "0px 0px 0px rgba(0, 0, 0, 0.15)").css("background-color", "#add8e6");
            }
        });

    } else {
        $("nav").css("background-color", "#ffffff").css("box-shadow", "0px 2px 10px rgba(0, 0, 0, 0.15)");

        let randomQuestion = Math.floor(Math.random() * questions.length);
        getQuestion(randomQuestion, ".question-area");
    }

    $(".formula-sheet-bottom").html(getFormulaSheet("math_20"));

    $(".hamburger").on("click", function () {
        $(".min-nav-area").addClass("active").css("z-index", "100");
    });

    $(".close").on("click", function () {
        $(".min-nav-area").removeClass("active").css("z-index", "-1");
    });

    $(".window-button").on("click", function () {
        $(".min-nav-area").removeClass("active").css("z-index", "-1");
    });

    $(".hidden-toggle").on("click", function () {
        $(".hidden-toggle").css("display", "none");
        $(".visible-toggle").css("display", "flex");
        $(".password input").attr("type", "password").css("font-family", "pass");
    });

    $(".visible-toggle").on("click", function () {
        $(".hidden-toggle").css("display", "flex");
        $(".visible-toggle").css("display", "none");
        $(".password input").attr("type", "text").css("font-family", "Montserrat");
    });

    $(".question-mc button").on("click", function (button) {
        $(`.question-mc button.active`).each(function (i, obj) {
            $(`.question-mc .${obj.className}`).removeClass("active");
        });

        $(`.question-mc #${button.target.id}`).toggleClass("active");
    });

    $(".question-sa button").on("click", function (button) {
        $(`.question-sa #${button.target.id}`).toggleClass("active");
    });

    $(".formula-sheet-button").on("click", function () {
        $(".formula-sheet").css("display", "flex");
    });

    $(".formula-sheet-close").on("click", function () {
        $(".formula-sheet").css("display", "none");
    });
})
