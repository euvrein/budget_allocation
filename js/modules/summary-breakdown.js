function display_summary_breakdown() {
    $("#summary-breakdown-div").html("\
        <div id='summary-breakdown-items-div'></div>\
    ");

    for (i1 = 0; i1 < items.length; i1++) {
        $('#summary-breakdown-items-div').append("\
            <div class='shadow-sm p-3 mb-2 bg-body-tertiary rounded' data-bs-toggle='collapse' href='#collapse" + items[i1].name + "' role='button' aria-expanded='false' aria-controls='collapse" + items[i1].name + "'>\
                <div class='row'>\
                    <div class='col-2'>\
                        " + items[i1].icon + "\
                    </div>\
                    <div class='col-4'>\
                        " + items[i1].description + "\
                    </div>\
                    <div id='summary-breakdown-subtotal-" + items[i1].name + "' class='col-6 text-end fw-bold'></div>\
                </div>\
            </div>\
            <div class='collapse mb-3' id='collapse" + items[i1].name + "'>\
                <div class='card card-body'>\
                    <div class='row' id='summary-breakdown-items-div-" + items[i1].name + "'></div>\
                </div>\
            </div>\
        ");

        for (i2 = 0; i2 < items[i1].items.length; i2++) {
            $("#summary-breakdown-items-div-" + items[i1].name).append("\
                <div class='col-8'>\
                    <small>" + items[i1].items[i2].description + "</small>\
                </div>\
                <div class='col-4 text-end align-text-bottom'>\
                    " + items[i1].items[i2].amount + "\
                </div>\
            ");

            if (items[i1].name == "Income"){
                $("#summary-breakdown-items-div-" + items[i1].name).find(".text-end").addClass("text-success");
                $("#summary-breakdown-subtotal-" + items[i1].name).addClass("text-success");
                $("#summary-breakdown-subtotal-" + items[i1].name).text(items[i1].total);
            } else {
                $("#summary-breakdown-items-div-" + items[i1].name).find(".text-end").addClass("text-danger");
                $("#summary-breakdown-subtotal-" + items[i1].name).addClass("text-danger");
                $("#summary-breakdown-subtotal-" + items[i1].name).text(items[i1].total);
            }

            if (i2 < items[i1].items.length - 1) {
                $("#summary-breakdown-items-div-" + items[i1].name).append("\
                    <hr class='mb-2 mt-2' style='border-top: dashed 2px;'/>\
                ");
            }
        };
    }
}


