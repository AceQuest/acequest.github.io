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

function animatePercentage(start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        $('.course-percentage').text(Math.floor(progress * (end - start) + start) + '%');
        $('.course-details-right svg path.purple').css('stroke-dashoffset', Math.floor(251.5 - (progress * 251.5 * (end / 100  - start) + start)));
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

$(function () {
    animatePercentage(0, (238/251.5) * 100, 1500);
  
    $('.nav-collapse').on('click', function() {
        $('.nav-wrapper').toggleClass('active');
    })
})
