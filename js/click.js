function toggleNavbar() {
    if ($('.nav-icon').hasClass("active")) {
        $('.nav-icon').removeClass("active");
        $('.nav').removeClass("active");
        $('.container').removeClass("active");
    } else {
        $('.nav-icon').addClass("active");
        $('.nav').addClass("active");
        $('.container').addClass("active");
    }
}


$(document).ready(function() {
    $('.nav-list-item').on('click', function() {
        if (!$(this).hasClass("active")) {
            $('.nav-list-item').removeClass("active");
            $(this).addClass("active");
            var index = $(this).attr("data-index");
            var color = $(this).attr("data-color");
            $('.nav-list-indicator').css("marginLeft", (25 * index) + "%");
            $('.nav-list-indicator').css("background", color);
        }
        setTimeout(function() {
            $('.nav').removeClass("active");
            toggleNavbar();
        }, 400);
    });
});