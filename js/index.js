$(document).ready(function(){
    let data_exist = check_data();
    let next_link = "./index.js";

    if(!data_exist){
        set_default_data();
        next_link = "./pages/inputforms.html";
    } else {
        next_link = "./pages/dashboard.html";
    }

    setTimeout(function() {
        window.location.href = next_link
    }, 2000);

});