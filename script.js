/* global $ */

$('.slider').slick({
	autoplay: true,  // 自動的に動き出すか
	autoplaySpeed: 3000,  // 次のスライドに切り替わる待ち時間
	speed:1000,  // スライドの動きのスピード
	infinite: true,  // スライドをループさせるかどうか
	slidesToShow: 1,  // 画面に表示するスライドの数
	slidesToScroll: 1,  // 1回のスクロールで何枚のスライドを移動するか
	arrows: true,  // 左右の矢印
	prevArrow: '<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
	dots: false,
	pauseOnFocus: false,  // フォーカスで一時停止
	pauseOnHover: false,  // マウスホバーで一時停止
	pauseOnDotsHover: false,
});

// スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.slider').slick('slickPlay');
});