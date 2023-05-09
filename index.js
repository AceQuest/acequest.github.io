let questions = [
    {
        id: 1,
        question: "Who is Daniel Morgan's crush?",
        answer: "Kexin",
        options: [
            "Kexin",
            "A penguin",
            "Physics",
            "Among Us"
        ]
    }
];

let question_count = 0;

window.onload = function () {
    show(question_count);
};

function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = `
    <h2>Question ${count + 1}.<br>${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;

    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }

            option[i].classList.add("active");
        }
    }
}

function next() {
    console.log(question_count);

    question_count++;
    show(question_count);
}

function minimize() {
    var id = document.getElementById("navid");
    if (id.className === "nav") {
        id.className += " active";
    } else {
        id.className = "nav"
    }
}