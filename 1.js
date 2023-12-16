$(document).ready(function () {
    function showToast() {
        $('#liveToast').toast('show');
    }

    function getBoredActivity() {
        $.get("https://www.boredapi.com/api/activity/", function (data) {
            console.log("Bored API Response:", data);
        });
    }

    $('#likeButton').click(function () {
        showToast();
    });

    $('#boredBtn').click(function () {
        getBoredActivity();
    });
});
