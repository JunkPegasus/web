$().ready(function() {
    $(document).on("scroll", function() {
        var scroll = $('html')[0].scrollTop;
        var logoScroll = scroll / 2.7;
        $('.logoContainer img').css("transform", "translateY(" + logoScroll + "px)");

        var docHeight = $(document).height();
        var winHeight = window.innerHeight;
        var maxScroll = docHeight - winHeight;

        var ratio = scroll / maxScroll;
        var translate = ratio * 20 * -1;
        $('.bg').css("top", translate + "%");
    });
});

function showStart() {
    setTimeout(function() {
        $('.pageLoadingContainer').addClass("hide");
        setTimeout(function() {
            $('.pageLoadingContainer').css("display", "none");
        }, 1500)
    }, 1000);
}