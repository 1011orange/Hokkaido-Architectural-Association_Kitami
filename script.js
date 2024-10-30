/* global $ */

$(function () {
	$('#hamburger').on('click', function () {
		$('#hamburger').toggleClass("open");
		$('#header-menu').slideToggle();
	});
});

$('.slider').slick({
	autoplay: true,  // 自動的に動き出すか
	autoplaySpeed: 3000,  // 次のスライドに切り替わる待ち時間
	speed: 1000,  // スライドの動きのスピード
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
$('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
	$('.slider').slick('slickPlay');
});


//トップへのスクロールボタンの記述
//要素を取得
const button = document.querySelector('.js-backToTop');

//クリックイベント
button.addEventListener('click', () => {
	//ページ上部へスムーススクロール
	window.scroll({
		top: 0,
		behavior: "smooth"
	});
});

//スクロールイベント
window.addEventListener('scroll', () => {
	//スクロール量を判定して要素にクラスを付与
	if (window.scrollY > 100) {
		button.classList.add('is-active');
	} else {
		button.classList.remove('is-active');
	}
});
