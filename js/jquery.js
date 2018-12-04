$(document).ready(function() {
    // 上方通用區域：導覽列：選單：行動選單動畫效果
    $('#layout-uppersection-mobilemenu-showmenu').hover(function() {
        $('#layout-uppersection-mobilemenu-showmenu').toggleClass('pulse animated');
    }, function() {
        $('#layout-uppersection-mobilemenu-showmenu').toggleClass('pulse animated');
    });
    $('#layout-uppersection-mobilemenu-showmenu-back').hover(function() {
        $('#layout-uppersection-mobilemenu-showmenu-back').toggleClass('pulse animated');
    }, function() {
        $('#layout-uppersection-mobilemenu-showmenu-back').toggleClass('pulse animated');
    });
    // 上方通用區域：導覽列：選單：一般與行動選單切換
    $('#layout-uppersection-mobilemenu-showmenu').click(function(event) {
        event.preventDefault();
        $('.layout-uppersection-mobilemenu').toggleClass('layout-uppersection-mobilemenu-active');
        $('#layout-uppersection-mobilemenu-showmenu').toggle();
        $('#layout-uppersection-mobilemenu-showmenu-back').toggle();
    });
    $('#layout-uppersection-mobilemenu-showmenu-back').click(function(event) {
        event.preventDefault();
        $('.layout-uppersection-mobilemenu').toggleClass('layout-uppersection-mobilemenu-active');
        $('#layout-uppersection-mobilemenu-showmenu').toggle();
        $('#layout-uppersection-mobilemenu-showmenu-back').toggle();
    });
    // 三欄流體區域：三項特色：圖片動畫效果
    $('.features-features ul li img').hover(function() {
        $(this).toggleClass('pulse animated');
    }, function() {
        $(this).toggleClass('pulse animated');
    });
    // 兩欄流體區域：訂位表單：右側表單：按鈕動畫效果
    $('.features-bookingform form ul li button').hover(function() {
        $(this).toggleClass('pulse animated');
    }, function() {
        $(this).toggleClass('pulse animated');
    });
    // 三欄流體區域：餐點：心選擇器效果
    $('.cart-card-heart-selector').click(function(event) {
    	$(this).toggleClass('fas','far');
    });
    // 兩欄流體區域：註冊表單：圖片動畫效果
    $('.register-form form button').hover(function() {
        $(this).toggleClass('pulse animated');
    }, function() {
        $(this).toggleClass('pulse animated');
    });
    // 匯入樣式：LightBox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': "",
        'positionFromTop': 250,
    })
});