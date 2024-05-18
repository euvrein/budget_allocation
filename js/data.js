function update_categories_daily_total(){
    let category = read_data();

    for (let i = 0; i < category.length; i++) {
        category[i].daily_total = add_subcategories_total(category[i]);
    }

    update_data(category);
}


function add_subcategories_total(category){
    let subcategory_total = 0;

    for (let i = 0; i < category.subcategory.length; i++) {
        subcategory_total += category.subcategory[i].daily_amount;
    }

    return subcategory_total;
}


function calculate_daily_amount(recurrence, recurrence_amount){
    var daily_amount = 0;
    for (let i = 0; i < recurrences.length; i++) {
        if (recurrences[i].name === recurrence){
            daily_amount = recurrence_amount / recurrences[i].number_of_days;
        }
    }
    
    return daily_amount;
}


function calculate_recurrence(recurrence, daily_total){
    var recurrence_total_amount = 0;
    
    for (let i = 0; i < recurrences.length; i++) {
        if (recurrences[i].name === recurrence){
            recurrence_total_amount = daily_total * recurrences[i].number_of_days;
        }
    }
    
    return recurrence_total_amount;
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


function calculate_grand_total(){
    let category = read_data();
    let grand_total = 0;
    let income = 0;
    let expenses = 0;

    for (let i = 0; i < category.length; i++) {
        if (category[i].name == "Income"){
            income += category[i].daily_total;
        } else {
            expenses += category[i].daily_total;
        }
    }

    grand_total = income - expenses;
    
    return grand_total;
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


function delete_all_data(){
    localStorage.clear();
}