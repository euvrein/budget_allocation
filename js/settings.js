$(document).ready(function(){
    display_title_header();
    display_navigation_bar();
    set_active_navigation("#settings_nav_icon");
});


function clear_data(){
    delete_all_data();
    setTimeout(function() {
        window.location.href = "../index.html"
    }, 2000);
}