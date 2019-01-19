function toggleNavbar() {
    if($('.nav-icon').hasClass("toggle")) {
        $('.nav-icon').removeClass("toggle");
        $('.nav').removeClass("toggle");
        $('.container').removeClass("toggle");
    } else {
        $('.nav-icon').addClass("toggle");
        $('.nav').addClass("toggle");
        $('.container').addClass("toggle");
    }
}