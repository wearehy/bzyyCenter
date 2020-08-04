$('body').on('touchmove', function (e) {
    e.preventDefault();
});

//header

$('.menu-toggle').click(function (event) {
    var logo = $('.header .logo'),
        logocolor = logo.data('color'),
        $body = $('body').attr('class');
    $(this).toggleClass('open');
    $('html').toggleClass('menu no-scroll');

    if ($('html').hasClass('menu')) {

        logo.attr('src', 'static/img/logo-black.png');

    } else {

        if ($body == "black") {
            logo.attr('src', 'static/img/logo-white.png');
        } else {
            if (logocolor == "white") {
                logo.attr('src', 'static/img/logo-black.png');
            } else {
                logo.attr('src', 'static/img/logo-white.png');
            }

        }

    }


});

//footer
$("#footer .nav li .dt").click(function (event) {
    console.log($(this).siblings('dd').height());
    var num = $(this).siblings('dd').size();
    var _thisDD = $(this).siblings('dd').outerHeight();
    if ($(this).parent('li').hasClass('open')) {
        $(this).parent('li').height(_thisDD).removeClass('open');
        $(this).find('i').removeClass('fa-sort-up').addClass('fa-sort-desc');
    } else {
        $(this).parent('li').siblings().removeClass('open').height(_thisDD);
        $(this).parent('li').height(_thisDD * num + 40).addClass('open');
        $(this).find('i').removeClass('fa-sort-desc').addClass('fa-sort-up').parents('li').siblings().find('i').removeClass('fa-sort-up').addClass('fa-sort-desc');
    }
});

$(".wechat").hover(function () {
    $(".wx").toggle();
});

//news

$(".main-box .top-wrap li").click(function (event) {
    $(this).addClass('on').siblings('li').removeClass('on');
    var imgUrl = $(this).find('img').attr('src'),
        lastImg = $(this).siblings('li').find('img').attr('src');
    if ($(this).index() == 0) {
        $('.new-wrap').fadeIn().siblings('.list-wrap').fadeOut();
        $(this).find('img').attr('src', 'static/img/matrix-l.png')
        $(this).siblings('li').find('img').attr('src', 'static/img/list.png');
    }
    if ($(this).index() == 1) {
        $('.list-wrap').fadeIn().siblings('.new-wrap').fadeOut();
        $(this).find('img').attr('src', 'static/img/list-l.png')
        $(this).siblings('li').find('img').attr('src', 'static/img/matrix.png');
    }

});


//about
$(".about-navBar ul li").click(function (event) {
    $(this).addClass('on').siblings('li').removeClass('on');
});

//sub-title

$(window).scroll(function (e) {
    var _scroolTop = document.body.scrollTop || document.documentElement.scrollTop;

    if (_scroolTop > 80) {
        $(".sub-title").css({
            'position': 'fixed',
            'top': 0
        });
    }
    if (_scroolTop < 80) {
        $(".sub-title").css({
            'position': 'absolute',
            'top': -60
        });
    }

});

$(function () {
    var scrollDistance = $(document).scrollTop(),
        WindowHeight = $(window).height();
    var animate = function (scrollDistance) {
        $(".section").each(function () {

            var ThisDivTop = $(this).offset().top,
                ThisHeight = $(this).height();

            if ((scrollDistance + WindowHeight) >= (ThisDivTop + ThisHeight / 2) && scrollDistance <= (ThisDivTop + ThisHeight)) {
                //{当前距离 + 窗口高度  >= div与顶部距离 + div高除以2 } 并且 {当前距离 <=   div与顶部距离 +  div高}
                $(this).addClass("active");
                //判断页面上下滚动
            }




            // section10
            if (scrollDistance > ThisDivTop && scrollDistance < (ThisDivTop + ThisHeight)) {
                // 滚轮事件
                $(document).on("mousewheel DOMMouseScroll", function (e) {
                    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));

                    var _top = parseInt($('.move-box').css('top'));
                    if (delta > 0) {
                        // 鼠标向上滚动
                        $('.move-box').css('top', (_top + 10) + 'px');

                    } else if (delta < 0) {
                        // 鼠标向下滚动
                        $('.move-box').css('top', (_top - 10) + 'px');

                    };
                });
            } else {
                $('.move-box').css('top', '0');
            }

        })
    };
    animate(scrollDistance);
    window.onscroll = function () {
        scrollDistance = $(document).scrollTop();
        animate(scrollDistance);
    }
})