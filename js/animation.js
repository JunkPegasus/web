function onBodyScroll(e) {
    $('.mainLogo img').css("transform","translateY("+e.scrollY/5+"px) scale(1)");

}

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

