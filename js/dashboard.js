$(document).ready(function(){ 
    var data_exist = check_data();

    if(data_exist){
        display_title_header();
        display_summary_description();
        display_summary_breakdown();
        display_summary_recurrence();
        display_navigation_bar("Dashboard");
    } else {
        setTimeout(function() {
            window.location.href = "../index.html"
        }, 2000);
    }
});