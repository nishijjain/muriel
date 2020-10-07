$(document).ready(function(){
    $(this).scrollTop(0);
    AOS.init();   

    $(".content").hide();
    $(".show_hide").on("click", function () {
        var txt = $(".content").is(':visible') ? 'Read More >>' : 'Read Less <<';
        $(".show_hide").text(txt);
        $(this).next('.content').slideToggle(200);
    });
});

