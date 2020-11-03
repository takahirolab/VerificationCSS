



$(function(){
    accodionMenu();
    loadingAnime();
    tabmenu();
    swiper();


    $(window).on('scroll load', function (){
        /* eachメソッドでscroll-effectクラス全ての要素を見にいく */
        $('.scroll-effect').each(function(){
            // 要素の高さを取得
            let targetPos = $(this).offset().top;
            // スクロールの値を取得
            let scroll = $(window).scrollTop();
            // ウインドウの高さを取得
            let windowHeight = $(window).height();
            // ターゲットが可視範囲に入ったらscroll-inクラスを付与
            if (scroll > targetPos - windowHeight){
                $(this).addClass('scroll-in');
            }

        });

    });


    });





let loadingAnime = () => {
    $('#loading-anime').show();

    // アニメーションをつける
    $('#loading-anime').addClass('animate__bounceInDown');
	/* 3秒後にloading非表示に */
    setTimeout(() =>{

        $('.loader-wrap').fadeOut();
        $('#container').fadeIn();
    },3000);
}



let accodionMenu =() => {
    $('#accordion dt').on('click',function(){
        $(this).next('dd').slideToggle();
    });
}



let tabmenu = () => {
        /* tabメニューのjs */
        $('.tab').on('click', function(){

            // is-activeクラスがついてるのを全部外す
            $('.is-active').removeClass('is-active');

            // クリックしたタブにis-activeクラスを付与
            $(this).addClass('is-active');

            // クリックしたタブからインデックス番号(何番目か)を取得
            let index = $(this).index();

            // クリックしたタブと同じインデックス番号をもつコンテンツを表示
            $('.tab-content').eq(index).addClass('is-active');
        });
}



let swiper = () => {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disableOnInteraction: false, // クリックしてもループし続けるように
        },
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
           delay: 500, // 次スライドまでの待機時間
        },
         speed: 1000, // スライドするスピード
         loop:true,
         observer: true, // ローディング後のうまく行かない挙動対策
         observeParents: true,
      });
}






var scroll = new SmoothScroll('a[href*="#"]', {
	// Function. Custom easing pattern
	// If this is set to anything other than null, will override the easing option above
	customEasing: function (time) {

		// return <your formulate with time as a multiplier>

		// Example: easeInOut Quad
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	}
});



