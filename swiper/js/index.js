window.addEventListener('load',function (){
    var swiper = new Swiper(".swiper", {
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // 点击分页器切换
            //type: "fraction",
        },
        autoplay: {
            delay: 3000, // 每张图片的播放间隔（单位：毫秒）
            disableOnInteraction: false, // 用户交互后是否继续播放
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});