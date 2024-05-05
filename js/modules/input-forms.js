function display_forms() {
    var category = read_data();
    
    for (i = 0; i < category.length; i++) {
        $('#forms_div').append("\
            <div class='shadow-sm p-3 mb-2 bg-body-tertiary rounded' data-bs-toggle='collapse' href='#collapse" + category[i].name + "' role='button' aria-expanded='false' aria-controls='collapse" + category[i].name + "'>\
                <div class='row'>\
                    <div class='col-1'>\
                        " + category[i].icon + "\
                    </div>\
                    <div class='col-11'>\
                        " + category[i].description + "\
                    </div>\
                </div>\
            </div>\
            <div class='collapse mb-3' id='collapse" + category[i].name + "'>\
                <div class='card card-body'>\
                    <div class='row' id='category_" + category[i].name + "'></div>\
                </div>\
            </div>\
        ");

        generate_input_fields(category[i]);
    }
}

function generate_input_fields(category){
    for (c = 0; c < category.subcategory.length; c++) {
        $("#category_" + category.name).append("\
            <div>\
                <p>" + category.subcategory[c].description + "</p>\
                <div class='input-group'>\
                    <input type='number' step='0.01' class='form-control' placeholder='00.00'>\
                    <div class='input-group-append'>\
                        <select id='recurrence_selector_" + category.subcategory[c].id + "' class='form-control form-select' style='border-top-left-radius: 0; border-bottom-left-radius: 0;'>\
                        </select>\
                    </div>\
                </div>\
            </div>\
        ");

        generate_selector("#recurrence_selector_" + category.subcategory[c].id);
        green_text(category.name);
        generate_divider(c, category.subcategory.length, "#category_" + category.name);
    }
}

function green_text(category_name) {
    if (category_name == "Income"){
        $("#summary-breakdown-items-div-" + category_name.id).find(".text-end").addClass("text-success");
        $("#summary-breakdown-subtotal-" + category_name.id).addClass("text-success");
        $("#summary-breakdown-subtotal-" + category_name.id).text(category_name.total);
    } else {
        $("#summary-breakdown-items-div-" + category_name.id).find(".text-end").addClass("text-danger");
        $("#summary-breakdown-subtotal-" + category_name.id).addClass("text-danger");
        $("#summary-breakdown-subtotal-" + category_name.id).text(category_name.total);
    }
}

function generate_divider(counter, items, div_id){
    if (counter < items - 1) {
        $(div_id).append("\
            <hr class='mb-4 mt-4' style='border-top: dashed 2px;'/>\
        ");
    }
}

function generate_selector(selector_id){
    for (x = 0; x < recurrences.length; x++) {
        $(selector_id).append("\
            <option value='" + recurrences[x].id + "'>" + recurrences[x].name + "</option>\
        ");
    }
}