function display_forms() {
    let category = read_data();
    
    for (let i = 0; i < category.length; i++) {
        $('#forms_div').append("\
            <div class='shadow-sm p-3 mb-2 bg-body-tertiary rounded' data-bs-toggle='collapse' href='#collapse" + category[i].name + "' role='button' aria-expanded='false' aria-controls='collapse" + category[i].name + "'>\
                <div class='row main-color'>\
                    <div class='col-1'>\
                        " + category[i].icon + "\
                    </div>\
                    <div class='col'>\
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

$(':input[type="number"]').change(function(){
    this.value = parseFloat(this.value).toFixed(2);
});



function generate_input_fields(category){
    for (let i = 0; i < category.subcategory.length; i++) {
        $("#category_" + category.name).append("\
            <div>\
                <p>" + category.subcategory[i].description + "</p>\
                <div class='input-group'>\
                    <input type='number' id='amount_" + category.subcategory[i].id + "' step ='0.01' class='form-control' value='" + category.subcategory[i].recurrence_amount +"'>\
                    <div class='input-group-append'>\
                        <select id='recurrence_" + category.subcategory[i].id + "' class='form-control form-select' style='border-top-left-radius: 0; border-bottom-left-radius: 0;'>\
                            <option id='" + category.subcategory[i].recurrence + "' selected disabled>" + category.subcategory[i].recurrence + "</option>\
                            <hr \>\
                        </select>\
                    </div>\
                </div>\
            </div>\
        ");

        generate_selector("#recurrence_" + category.subcategory[i].id);
        green_text(category.name);
        generate_divider(i, category.subcategory.length, "#category_" + category.name);
    }
}

function green_text(category_name) {
    if (category_name == "Income"){
        $("#summary-breakdown-items-div-" + category_name.id).addClass("text-success");
        $("#summary-breakdown-subtotal-" + category_name.id).addClass("text-success");
        $("#summary-breakdown-subtotal-" + category_name.id).text(category_name.total);
    } else {
        $("#summary-breakdown-items-div-" + category_name.id).addClass("text-danger");
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
            <option id='" + recurrences[x].id + "' value='" + recurrences[x].id + "'>" + recurrences[x].name + "</option>\
        ");
    }
}

$("#forms_div").change(function() {
    let category = read_data();
    
    for (let i = 0; i < category.length; i++) {
        for (i2 = 0; i2 < category[i].subcategory.length; i2++) {
            let recurrence_amount = $("#amount_" + category[i].subcategory[i2].id +"").val();
            let recurrence = $("#recurrence_" + category[i].subcategory[i2].id +"").find(":selected").text();

            category[i].subcategory[i2].daily_amount = calculate_daily_amount(recurrence, recurrence_amount);
            category[i].subcategory[i2].recurrence_amount = recurrence_amount;
            category[i].subcategory[i2].recurrence = recurrence;
        }
    }
    update_data(category);
});