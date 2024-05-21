$(document).ready(function(){ 
    var data_exist = check_data();

    if(data_exist){
        display_title_header();
        
        display_summary_recurrence();
        
        update_categories_daily_total();
        display_summary_description();
        
        display_summary_breakdown();
        
        display_navigation_bar();
        set_active_navigation("#dashboard_nav_icon");

    } else {
        setTimeout(function() {
            window.location.href = "../index.html"
        }, 2000);
    }

    $('#recurrence_selector').change(function() {
        clear_display_summary_description(); 
        display_summary_description();

        clear_display_summary_breakdown();        
        display_summary_breakdown();
    });
});