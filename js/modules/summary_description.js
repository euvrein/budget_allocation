function display_summary_description() {
    let selected_recurrence = $('#recurrence_selector').val();

    let grand_total = calculate_grand_total();
    grand_total = calculate_recurrence(selected_recurrence, grand_total);

    let summary_name = match_summary_name(grand_total);
    let summary_description = match_summary_description(grand_total);


    $("#summary_description").html("\
        <div id='grand_total'>\
            <h1 class='card-title text-center'>\
                <span id='smiley'></span>\
                " + summary_name.toLocaleUpperCase() + "\
            </h1>\
            <hr\>\
            <div class='text-center'>\
                <h1><i class='fa-solid fa-coins'></i> <strong class='grand_total'> " + parseFloat(grand_total).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "</strong></h1>\
            </div>\
        </div>\
        <p class='card-text'><small> " + summary_description + "</small></p>\
    ");

    display_grand_total(grand_total);
    display_smiley(grand_total);
}


function clear_display_summary_description(){
    $('#summary_description').html("");
}


function display_smiley(grand_total){
    if (grand_total > 0){
        $("#smiley").html(summary_description[0].smiley);
    } else if (grand_total < 0){
        $("#smiley").html(summary_description[2].smiley);  
    } else {
        $("#smiley").html(summary_description[1].smiley);

    }
}


function display_grand_total(grand_total){
    if (grand_total > 0){
        $("#grand_total").addClass("secondary-color");
    } else if (grand_total < 0){
        $("#grand_total").addClass("tertiary-color");
    } else {
        $("#grand_total").addClass("main-color");
    }
}


function match_summary_name(grand_total){
    
    let summary_name = "";

    if (grand_total > 0){
        summary_name = summary_description[0].name;
    } else if (grand_total === 0){
        summary_name = summary_description[1].name;
    } else if (grand_total < 0){
        summary_name = summary_description[2].name;
    } else {
        summary_name = "Error?!";
    }

    return summary_name;
}


function match_summary_description(grand_total){
    
    let description = "";

    if (grand_total > 0){
        description = summary_description[0].description;
    } else if (grand_total === 0){
        description = summary_description[1].description;
    } else if (grand_total < 0){
        description = summary_description[2].description;
    } else {
        description = "Error?!";
    }

    return description;
}
