new WOW().init();
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
        let ani_in = 'fadeInUp';
        let ani_out = 'fadeOutDown';
        
        if(h > 800){
            $('#gotop').show().removeClass(ani_out).addClass(['animated',ani_in]);
        }else{
            $('#gotop').removeClass(ani_in).addClass(['animated',ani_out]);
        }

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
    $('.toggle').click(function(){
        $('.menu').toggle(300);
        // $('.menu').slideToggle(300);
    })
})