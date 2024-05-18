function clear_display_summary_breakdown(){
    $('#summary_breakdown').html("");
}

function display_summary_breakdown() {
    var category = read_data();

    for (let i = 0; i < category.length; i++) {
        if (category[i].daily_total > 0){
            display_category(category[i]);
            display_category_total(category[i]);        
            display_subcategory(category[i]);
        }
    }
}

function display_summary_recurrence() {
    $("#summary_recurrences").html("\
            <select id='recurrence_selector' class='form-floating form-select mt-3 mb-4'></select>\
    ");

    for (let i = 0; i < recurrences.length; i++) {
        $("#recurrence_selector").append("\
            <option id='option_" + recurrences[i].name + "' value='" + recurrences[i].name + "'>" + recurrences[i].name + "</option>\
        ");
        if (recurrences[i].name == "Annually"){
            $("#option_" + recurrences[i].name).attr("selected", true);
        }
    }
}

function display_category (category){
    $('#summary_breakdown').append("\
        <div id='category_" + category.id + "' class='shadow-sm p-3 mb-2 bg-body-tertiary rounded' data-bs-toggle='collapse' href='#collapse_" + category.name + "' role='button' aria-expanded='false' aria-controls='collapse_" + category.name + "'>\
            <div class='row'>\
                <div class='col-1'>\
                    " + category.icon + "\
                </div>\
                <div class='col text-start'>\
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

    colorize_text(category.name,'#category_' + category.id);
}

function colorize_text(category, div_id){
    if (category == "Income"){
        $(div_id).addClass("text-success");
    } else {
        $(div_id).addClass("tertiary-color");
    }
}

function display_subcategory(category){
    for (let i = 0; i < category.subcategory.length; i++) {
        if (category.subcategory[i].recurrence_amount != 0){
            $("#subcategory_" + category.name).append("\
                <tr>\
                    <td scope='row'>" + category.subcategory[i].description + "</td>\
                    <td id='subcategory_" + category.subcategory[i].id + "_amount' class='text-end'></td>\
                </tr>\
            ");
            display_subcategory_amount (category,category.subcategory[i]);
        }
    }
}

function display_category_total(category){
    let selected_recurrence = $('#recurrence_selector').val();

    let recurrence_total = calculate_recurrence(selected_recurrence,category.daily_total);

    $("#category_total_" + category.name).text(parseFloat(recurrence_total).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}));

    colorize_text(category.name, "#category_total_" + category.name);
}

function display_subcategory_amount (category,subcategory){
    let subcategory_amount = "#subcategory_" + subcategory.id + "_amount";
    let selected_recurrence = $('#recurrence_selector').val();

    if (category.name == "Income"){
        $(subcategory_amount).addClass("text-success");
    } else {
        $(subcategory_amount).addClass("text-danger");
    }
    let recurrence_total = calculate_recurrence(selected_recurrence,subcategory.daily_amount);

    $(subcategory_amount).text(parseFloat(recurrence_total).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
}

