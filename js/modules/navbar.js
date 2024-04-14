function display_navigation_bar() {
    $("#navigation_bar").html("\
        <nav class='navbar shadow-sm m-3 fixed-bottom navbar-light bg-light p-3'>\
            <div class='container-fluid'>\
                <div class='row col-12 text-center main-color'>\
                    <div class='col-3'>\
                        <a href='./dashboard.html' class='fa-solid fa-chart-simple fa-lg'></a>\
                    </div>\
                    <div class='col-3'>\
                        <a href='./inputforms.html' class='fa-solid fa-pen-to-square fa-lg'></a>\
                    </div>\
                    <div class='col-3'>\
                        <a href='./inputforms.html' class='fa-solid fa-graduation-cap fa-lg'></a>\
                    </div>\
                    <div class='col-3'>\
                        <a href='./inputforms.html' class='fa-solid fa-circle-info fa-lg'></a>\
                    </div>\
                </div>\
            </div>\
        </nav>\
    ");
}