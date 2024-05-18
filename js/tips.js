$(document).ready(function(){
    display_title_header(); 
    display_navigation_bar();
    set_active_navigation("#tips_nav_icon");
    display_tips('#tip_001','#btn_tip_001');
});

function display_tips(show_div, btn_tip){
    $('.tips_div').hide();
    
    // REMOVE ALL BTN STYLE
    $('.btn_tips').removeClass("btn-primary");
    $('.btn_tips').removeClass("btn-outline-primary");

    // ADD BTN OUTLINE
    $('.btn_tips').addClass("btn-outline-primary");

    $(btn_tip).removeClass("btn-outline-primary");
    $(btn_tip).addClass("btn-primary");

    $(show_div).show();
    $("html, body").animate({scrollTop: 0}, 50);
}