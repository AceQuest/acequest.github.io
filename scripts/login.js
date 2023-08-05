var googleUser = {};
var startAuth = function () {
    gapi.load('auth2', function () {
        auth2 = gapi.auth2.init({
            client_id: '261595912-7acv3j309qt58fin9drhtqfmf8ee11eg.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin'
        });
        attachSignin(document.getElementById('google-button'));
    });
};

function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function (googleUser) {
            $('#name').html("Signed in: " + googleUser.getBasicProfile());
        }, function (error) {
            console.log(JSON.stringify(error, undefined, 2));
        });
}

$(function () {
    $(".hidden-toggle").on("click", function () {
        $(".hidden-toggle").css("visibility", "hidden");
        $(".visible-toggle").css("visibility", "visible");
        $(".password input").attr("type", "password").css("font-family", "pass");
    });

    $(".visible-toggle").on("click", function () {
        $(".hidden-toggle").css("visibility", "visible");
        $(".visible-toggle").css("visibility", "hidden");
        $(".password input").attr("type", "text").css("font-family", "Montserrat");
    });
})