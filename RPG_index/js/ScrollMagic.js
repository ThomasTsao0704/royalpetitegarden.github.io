/*//////////////////////
    *
    * SCROLLMAGIC STARTS
    *
    *//////////////////////
// init controller
var controller = new ScrollMagic.Controller();

//flow
$(".flow").each(function () {
    $(this).addClass('out');
    new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0,
        duration: 600
    })
        .on("enter", function (ev) { $(ev.target.triggerElement()).removeClass('out'); })
        .on("leave", function (ev) { $(ev.target.triggerElement()).addClass('out'); })
        .addTo(controller);
});

//fade
$(".fade").each(function () {
    $(this).addClass('out');
    new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.65
    })
        .on("enter", function (ev) { $(ev.target.triggerElement()).removeClass('out'); })
        .on("leave", function (ev) { $(ev.target.triggerElement()).addClass('out'); })
        .addTo(controller);
});

$('.container').removeClass('out');

// 按鈕滑動置指定位置
$('.menu a').click(function () {

    var btn = $(this).attr('href');
    var pos = $(btn).offset();
    $('html,body').animate({ scrollTop: pos.top }, 1000);

});

// news
const cardContainer = document.querySelector('.cards')


cardContainer.addEventListener('click', e => {
    const cardInfoBtn = e.target.closest('.card__more-info ,.card__a')
    const cardLessBtn = e.target.closest('.card__less-info')

    if (cardInfoBtn) {
        cardInfoBtn.parentNode.parentNode.classList.add('card--open')
    }

    if (cardLessBtn) {
        cardLessBtn.parentNode.parentNode.classList.remove('card--open')
    }
})


    // 按鈕滑動置指定位置
    $('.link a').click(function(){

        var btn = $(this).attr('href');
        var pos = $(btn).offset();
        $('html,body').animate({scrollTop:pos.top},1000);
    
    });