$(document).ready(function() {
    function updateAboutMeContent() {
        $('.about-me-text').text("I love coding and helping others!");
        $('.student-name').text("FJ");
        $('.about-me-text').on('click', function() {
            $(this).css({
                'background-color': 'powderblue',
                'color': 'white'
            });
        });
    }

    updateAboutMeContent();
});
