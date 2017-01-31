// function to post burgers to the page after an on-submit event
$(function() {
    $("#post-burger").on("submit", function(e) {
        e.preventDefault();
        console.log($(this).serialize());
        $.post("/", $(this).serialize(), function(res) {
            window.location.replace('/');
        });
    });
});
