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
        }
    });
    $('.sendMessage').on('click', function() {});
});