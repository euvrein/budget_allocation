$(document).ready(function(){
    display_title_header(); 
    display_settings();
    display_navigation_bar();
    set_active_navigation("#settings_nav_icon");
});

function display_settings(){
    $('#settings_div').html("\
        <div class='row'>\
            <p>Thank you for using <strong>" + device_information.app_name + "</strong>. Your personal finance application designed to simplify budgeting and help you reflect your finances.</p>\
            <p>Remember to set personalized budgets for different categories and stay on track with your budget limits.</p>\
        </div>\
    ");
}

function clear_data(){
    delete_all_data();
    setTimeout(function() {
        window.location.href = "../index.html"
    }, 2000);
}

$('#clear_data_textbox').change(function() {
    if($('#clear_data_textbox').val() === "cleardata"){
        $('#clear_data_button').attr("disabled", false);
    } else {
        $('#clear_data_button').attr("disabled", true);
    }
});