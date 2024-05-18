$(document).ready(function(){
    var data_exist = check_data();

    if(data_exist){
        display_title_header();
        display_forms();
        display_navigation_bar();
        set_active_navigation("#forms_nav_icon");

    } else {
        setTimeout(function() {
            window.location.href = "../index.html"
        }, 2000);
    }
});

$(':input[type="number"]').change(function(){
    this.value = parseFloat(this.value).toFixed(2);
});