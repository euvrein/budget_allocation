function display_summary_breakdown() {
    var category = read_data();
    add_categories_total();

    for (i = 0; i < category.length; i++) {
        if (category[i].total != 0){
            display_category(category[i]);
        }
        display_subcategory(category[i]);
        display_category_total(category[i]);
    }
}

function display_summary_recurrence() {
    $("#summary_recurrences").html("\
            <select id='recurrence_selector' class='form-floating form-select mt-3 mb-4'></select>\
    ");

    for (i = 0; i < recurrences.length; i++) {
        $("#recurrence_selector").append("\
            <option value='" + recurrences[i].id + "'>" + recurrences[i].name + "</option>\
        ");
    }
}

function display_category (category){
    $('#summary_breakdown').append("\
        <div class='shadow-sm p-3 mb-2 bg-body-tertiary rounded' data-bs-toggle='collapse' href='#collapse_" + category.name + "' role='button' aria-expanded='false' aria-controls='collapse_" + category.name + "'>\
            <div class='row'>\
                <div class='col-1'>\
                    " + category.icon + "\
                </div>\
                <div class='col-8 text-start'>\
                    " + "&nbsp" + category.description + "\
                </div>\
                <div id='category_total_" + category.name + "' class='col text-end fw-bold'></div>\
            </div>\
        </div>\
        <div class='collapse mb-3' id='collapse_" + category.name + "'>\
            <div class='border'>\
            <div class='table-responsive'>\
                <table class='table table-borderless table-striped table-hover'>\
                    <tbody id='subcategory_" + category.name + "'>\
                    </tbody>\
                </table>\
            </div>\
            </div>\
        </div>\
    ");
}

function display_subcategory(category){
    for (counter = 0; counter < category.subcategory.length; counter++) {
        if (category.subcategory[counter].amount != 0){
            $("#subcategory_" + category.name).append("\
                <tr>\
                    <td scope='row'>" + category.subcategory[counter].description + "</td>\
                    <td id='" + category.subcategory[counter].id + "_amount' class='text-end'></td>\
                </tr>\
            ");
            display_subcategory_amount (category,category.subcategory[counter]);
        }
    }
}

function display_category_total(category){
    if (category.name == "Income"){
        $("#category_total_" + category.name).addClass("text-success");
    } else {
        $("#category_total_" + category.name).addClass("text-danger");
    }
    $("#category_total_" + category.name).text(parseFloat(category.total).toFixed(2));
}

function display_subcategory_amount (category,subcategory){
    let div_id = "#" + subcategory.id + "_amount";
    if (category.name == "Income"){
        $(div_id).addClass("text-success");
    } else {
        $(div_id).addClass("text-danger");
    }
    $(div_id).text(parseFloat(subcategory.amount).toFixed(2));
}