function expand_nav() {
    var exp_nav_id = document.getElementById("exp_nav_id");
    if (exp_nav_id.className === "exp-nav") {
        exp_nav_id.className += ' active';
    } else {
        exp_nav_id.className = "exp-nav";
    }
  }

$(function () {
    $(document).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll > 450) {
            $("nav").addClass('scrolled');
        } else {
            $("nav").removeClass('scrolled');
        }
    })
})

/* ok  bruh ok so i need help here follow me index.html hao yan went to japan shot a man raped a pan ok*/
  
/**I commented this out because I was working on something else, we can add it baack, but we need to get to the quiz page for this to work tho */
/**
let questions = [
    {
        id: 1,
        question: "Wds",
        answer: "Kexin",
        options: [
            "Kexin",
            "A penguin",
            "Physics",
            "Among Us"
        ]
    }
];

let course_details = {
    "math_10c": {
        title: "Math 10C",
        description: "A cool subject ngl"
    },
    "math_10c_pre_ib": {
        title: "Math 10C Pre-IB",
        description: "ib more interesting"
    }
}

let question_count = 0;
let previous_host_id;

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


let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = `
    <h2>Question ${count + 1}.<br>${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;

/*
function toggle_visibility(_id, host_id) {
    var id = document.getElementById(_id);
    var cid = document.getElementById('courses');

    if (previous_host_id == host_id) {
        id.style.display = 'none';
        previous_host_id = 'none';
        cid.style.left = '23.5%';
    } else {
        id.style.display = 'block';
        cid.style.left = '10%';
        previous_host_id = host_id;
        id.innerHTML = `
        <h2>${course_details[host_id].title}</h2>
        <p>${course_details[host_id].description} ${previous_host_id}</p>`;

    }
}
*/
