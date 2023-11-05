const version = "v.1.5.8";

const difficultyParams = {
    "1-10": ["#4cff43", "Very Easy"],
    "11-20": ["#88ee00", "Easy"],
    "21-30": ["#acdc00", "Easy"],
    "31-40": ["#c7c900", "Somewhat Easy"],
    "41-50": ["#ddb500", "Neutral"],
    "51-60": ["#eda000", "Neutral"],
    "61-70": ["#f98a00", "Somewhat Hard"],
    "71-80": ["#ff7205", "Hard"],
    "81-90": ["#ff5b2c", "Hard"],
    "91-100": ["#ff4343", "Very Hard"]
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


class Quiz {
    constructor(courseName, unitName, quizName, numOfQuestions) {
        this.courseName = courseName;
        this.unitName = unitName;
        this.quizName = quizName;
        this.numOfQuestions = numOfQuestions;

        this.questionsList = []; // id
        this.questionNumber = 0;
        this.numberOfQuestions;
    }

    setUpQuiz() {
        /*
        for (var i = 0; i <= this.numOfQuestions; i++) {
            this.questionsList.push(Math.floor(Math.random() * questions[this.courseName][this.unitName][this.quizName].length));
        }
        */
        this.questionsList = [0, 0, 0, 0];
        this.numberOfQuestions = this.questionsList.length;
    }

    getDifficultyParam(difficulty) {
        var difficultyParam;
        Object.keys(difficultyParams).forEach(function (i) {
            if (parseInt(i.split("-")[0]) <= difficulty && difficulty <= i.split("-")[1]) {
                difficultyParam = difficultyParams[`${i.split("-")[0]}-${i.split("-")[1]}`];
            }
        });
        return difficultyParam;
    }

    nextQuestion() {
        let randomQuestion = this.questionsList.pop(Math.floor(Math.random() * this.questionsList.length) - 1);
        this.questionNumber = this.questionNumber + 1;
        this.getQuestion(randomQuestion);
    }

    getQuestion(randomQuestion) {
        let questionName = questions[this.courseName][this.unitName][this.quizName][randomQuestion].questionName;
        let answer = questions[this.courseName][this.unitName][this.quizName][randomQuestion].answer;
        let questionType = questions[this.courseName][this.unitName][this.quizName][randomQuestion].questionType;
        let [first, second, third, fourth] = questions[this.courseName][this.unitName][this.quizName][randomQuestion].options;
        let difficulty = questions[this.courseName][this.unitName][this.quizName][randomQuestion].difficulty;

        let difficultyColor = this.getDifficultyParam(difficulty)[0];
        let difficultyState = this.getDifficultyParam(difficulty)[1];

        const questionTypes = {
            "Multiple Choice": `
            <div class="question-choices question-mc">
                <div class="question-choice"><button class="button-A">A</button><p>${first}</p></div>
                <div class="question-choice"><button class="button-B">B</button><p>${second}</p></div>
                <div class="question-choice"><button class="button-C">C</button><p>${third}</p></div>
                <div class="question-choice"><button class="button-D">D</button><p>${fourth}</p></div>
            </div>`,
            "Selection": `
            <div class="question-choices question-sa">
                <div class="question-choice"><button class="button-A"></button><p>${first}</p></div>
                <div class="question-choice"><button class="button-B"></button><p>${second}</p></div>
                <div class="question-choice"><button class="button-C"></button><p>${third}</p></div>
                <div class="question-choice"><button class="button-D"></button><p>${fourth}</p></div>
            </div>`,
            "Numerical Response": `
            <div class="question-response-area question-nr">
                <input type="number"></input>
            </div>`
        }

        $(".question-top").html(`
            <div class="question-left">
                <div class="question-details">
                    <p class="quiz-name"></p>
                    <p class="question-n">Question ${this.questionNumber}</p>
                    <p class="question">${katex.renderToString(questionName)}</p>
                </div>
                <div class="question-choices-area">
                    ${questionTypes[questionType]}
                </div>
            </div>
            <div class="question-right">
                <div class="question-difficulty">
                    <p class="question-difficulty-title">Difficulty</p>
                    <div class="question-difficulty-o">
                        <div class="question-difficulty-i">
                            <p class="question-difficulty-percentage">${difficulty}%</p>
                        </div>
                    </div>
                    <p class="question-difficulty-rating">${difficultyState}</p>
                </div>
                <div class="question-resources">
                    <p>Resources</p>
                    <button class="formula-sheet-button">Formula Sheet</button>
                    <div class="formula-sheet">
                        <div class="formula-sheet-top-border"></div>
                        <button class="formula-sheet-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <div class="close-hover"></div>
                        </button>
                        <div class="formula-sheet-top">
                            <p></p>
                            <p></p>
                        </div>
                        <div class="formula-sheet-bottom"></div>
                    </div>
                </div>
            </div>
        `);

    $(`.question-difficulty-rating`).css("color", difficultyColor)
    $(`.question-difficulty-i`).css("background-color", difficultyColor).css("width", `${difficulty}%`);
    }
}

$(function () {
    $('.nav-wrapper').addClass('active');
    function handle_mousedown(i) {
        window.drag = {};
        drag.pageX0 = i.pageX;
        drag.pageY0 = i.pageY;
        drag.elem = ".formula-sheet";
        drag.offset0 = $('.formula-sheet').offset();

        function handle_dragging(i) {
            var left = drag.offset0.left + (i.pageX - drag.pageX0);
            var top = drag.offset0.top + (i.pageY - drag.pageY0);
            if (left <= ($(window).width() - $(".formula-sheet").width()) && top <= ($(window).height() - $(".formula-sheet").height()) && left >= 0 && top >= 0) {
                $(drag.elem).offset({ top: top, left: left });
            }
        }

        function handle_mouseup(i) {
            $('body').off('mousemove', handle_dragging).off('mouseup', handle_mouseup);
        }

        $('body').on('mouseup', handle_mouseup).on('mousemove', handle_dragging);
    }

    function getFormulaSheet(course) {
        $(".formula-sheet-top p:first-child").html(formulaSheets[course]["Title"]);
        $(".formula-sheet-top p:last-child").html(formulaSheets[course]["Description"]);
        var convertedHTML = [];
        Object.keys(formulaSheets[course]).forEach(function (i) {
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

    var quiz = new Quiz("Mathematics 20-1", "Quadratics", "Review from Grade 10", 3);
    $(".course-name").html(quiz.courseName);
    $(".unit-name").html(quiz.unitName);
    $(".quiz-name").html(quiz.quizName);
    quiz.setUpQuiz();
    quiz.nextQuestion();

    $(".question-submit").on("click", function() {
        $(".question-choice button.active").each(function (i, obj) {
            console.log(obj.classList);
            $(`.question-choice .${obj.classList[-1]}`).removeClass("active");
        });

        quiz.nextQuestion();
        if (quiz.questionsList.length == 0) {
            $(".question-submit").replaceWith('<button class="question-submit">Done</button>')
        }
    });

    /** MULTIPLE CHOICE + SELECTION */
    $(".question-mc").on("click", function (button) {
        $(`.question-mc .${button.target.className}`).addClass("active");
    });

    $(".question-sa").on("click", function (button) {
        $(`.question-sa .${button.target.className}`).addClass("active");
    });


    /** FORMULA SHEET */
    // combine open and close
    $(".formula-sheet-bottom").html(getFormulaSheet("math_20"));
    $('.formula-sheet-top-border').on("mousedown", handle_mousedown);

    $(".formula-sheet-button").on("click", function () {
        $(".formula-sheet").css("visibility", "visible");
    });

    $(".formula-sheet-close").on("click", function () {
        $(".formula-sheet").css("visibility", "hidden");
    });
});
