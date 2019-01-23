function clearLoadingCover() {
    $('.LoadingCover').addClass("hidden");
    setTimeout(function() {
        $('.LoadingCover').css("display", "none");
        animateTitleLogo();
    }, 1000);
}

function animateTitleLogo() {
    $('.mainLogo img').addClass("show");
}