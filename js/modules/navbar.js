function display_navigation_bar() {
    $("#navigation_bar").html("\
        <nav class='navbar shadow-sm m-3 fixed-bottom navbar-light bg-light p-3'>\
            <div class='container-fluid'>\
                <div class='row col-12 text-center'>\
                    <div class='col-3'>\
                        <a href='./dashboard.html' id='dashboard_nav_icon' class='text-secondary fa-solid fa-chart-simple fa-lg'></a>\
                    </div>\
                    <div class='col-3'>\
                        <a href='./inputforms.html' id='forms_nav_icon' class='text-secondary fa-solid fa-pen-to-square fa-lg'></a>\
                    </div>\
                    <div class='col-3'>\
                        <a href='./tips.html' id='tips_nav_icon' class='text-secondary fa-solid fa-graduation-cap fa-lg'></a>\
                    </div>\
                    <div class='col-3'>\
                        <a href='./settings.html' id='settings_nav_icon' class='text-secondary fa-solid fa-gear fa-lg'></a>\
                    </div>\
                </div>\
            </div>\
        </nav>\
    ");
}

function set_active_navigation(active_icon){
    $(active_icon).addClass("main-color fa-2x");
    $(active_icon).removeClass("fa-lg");
    $(active_icon).removeClass("text-secondary");
}