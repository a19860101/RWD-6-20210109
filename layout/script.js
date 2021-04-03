$(function(){
    $('.menu').find('a').click(function(){
        let target = $(this).data('target');
        let distance = $(target).offset().top;
        let nav_h = $('nav').outerHeight();
        $('html,body').animate({
            scrollTop: distance - nav_h
        })
    })
})