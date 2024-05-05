function display_navigation_bar(active_state) {
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
                        <a href='#' id='forms_nav_icon' class='text-secondary fa-solid fa-graduation-cap fa-sm fa-lg'></a>\
                    </div>\
                    <div class='col-3'>\
                        <a href='#' class='text-secondary fa-solid fa-circle-info fa-lg'></a>\
                    </div>\
                </div>\
            </div>\
        </nav>\
    ");

    if (active_state == "Dashboard"){
        $("#dashboard_nav_icon").addClass("main-color fa-2x");
        $("#dashboard_nav_icon").removeClass("fa-lg");
        $("#dashboard_nav_icon").removeClass("text-secondary");

    } else if (active_state == "Input_Forms"){
        $("#forms_nav_icon").addClass("main-color fa-2x");
        $("#forms_nav_icon").removeClass("fa-lg");
        $("#forms_nav_icon").removeClass("text-secondary");
    }
}

903354260