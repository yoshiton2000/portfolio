

$(function() {
    $('#han').slick({
        vertical: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 0,　//隣あう画像のスライドするまでの間隔時間
        speed: 10000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        adaptiveHeight: true,
        cssEase: 'linear'//開始から終了まで一定に変化する
    });
    });
