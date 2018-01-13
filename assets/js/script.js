$(document).foundation()

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= $(window).height()) {
        $(".Ebenen").addClass("fixed");
    } else {
        $(".Ebenen").removeClass("fixed");
    }
});