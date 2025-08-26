$("#fullpage").fullpage({
    //options here
    responsiveWidth: 1024,
    autoScrolling: true,
    scrollHorizontally: true,

    navigation: true, // 좌우에 영역지정 메뉴
    navigationPosition: 'right',
    navigationTooltips: ['O’neul', 'Value', 'Menu', 'Room'],
    showActiveTooltip: true, //기본값 false,글자가 보이게
});


$(".ham").click(function () {
    $(".mgnb_wrap").animate({
        left: "0"
    });
});
$(".close").click(function () {
    $(".mgnb_wrap").animate({
        left: "100%"
    });
});

const menu_list = new Swiper(".menu_list", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1500,
    breakpoints: {
        1200: { //min 이상부터 
            slidesPerView: 4,
            spaceBetween: 20,
            autoplay: false,
        },
        900: { //min 이상부터 
            slidesPerView: 3,
            spaceBetween: 20,
        },
        570: { //min 이상부터 
            slidesPerView: 2,
            spaceBetween: 20,
        },

    },
});


const room_list = new Swiper(".room_list", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },


    breakpoints: {
        1300: { //min 이상부터 
            slidesPerView: 3,
            spaceBetween: 20,
        },
        990: { //min 이상부터 
            slidesPerView: 2,
            spaceBetween: 20,
        },
        770: { //min 이상부터 
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
    },

});

