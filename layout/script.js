$(function(){
    $('.menu').find('a').click(function(e){    
        let target = $(this).data('target');
        if(target == '#search'){return;}
        let distance = $(target).offset().top;
        let nav_h = $('nav').outerHeight();
        $('html,body').animate({
            scrollTop: distance - nav_h
        })
        e.preventDefault();
    })
    $('#gotop').click(function(e){
        $('html,body').animate({
            scrollTop: 0
        });
        e.preventDefault();
    })
    $(window).scroll(function(){
        let h = $(this).scrollTop();
        console.log(h);
        
        $('.menu').find('a').each(function(){
            let target = $(this).data('target');
            if(target == '#search'){return;}
            let distance = $(target).offset().top;
            if(h > distance - 100){
                $('.menu').find('a').removeClass('active');
                $(this).addClass('active');
            }
        })
    })
})