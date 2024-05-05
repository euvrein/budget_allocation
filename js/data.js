function add_categories_total(){
    let category = read_data();

    let recurrence_description = "";
    let recurrence_value = "";

    for (i = 0; i < category.length; i++) {
        category[i].total = 0;
        for (i2 = 0; i2 < category[i].subcategory.length; i2++) {
            recurrence_description = category[i].subcategory[i2].recurrence;
            find_recurrence_value = recurrences.filter( x => x.name === recurrence_description);
            recurrence_value = find_recurrence_value[0]?.number_of_days;

            if (category[i].subcategory[i2].amount != 0){
                category[i].total = category[i].total + (category[i].subcategory[i2].amount / recurrence_value);
            }
        }
    }

    update_data(category);
}

function check_data(){
    if (localStorage.getItem("saved_data") === null){
        return false;
    } else {
        return true;
    }
}

function set_default_data(){
    let category = default_data;

    let temporary_data = JSON.stringify(category);
    localStorage.setItem("saved_data", temporary_data);
} 

function compute_grand_total(){
    let category = read_data();
    let income = 0;
    let expenses = 0;

    for (i = 0; i < category.length; i++) {
        if (category[i1].name == "Income"){
            income += category[i];
        }
    }
}

function create_data(){

}

function read_data(){    
    let saved_data = localStorage.getItem("saved_data");
    saved_data = JSON.parse(saved_data);
    return saved_data;
}

function update_data(data_parameter){
    let temporary_data = JSON.stringify(data_parameter);
    localStorage.setItem("saved_data", temporary_data);
}

function delete_data(){
    
}

function delete_all_data(){
    localStorage.clear();
}