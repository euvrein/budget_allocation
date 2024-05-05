$(document).ready(function(){
    let data_exist = check_data();

    if(!data_exist){
        set_default_data();
    }

    setTimeout(function() {
        window.location.href = "./pages/dashboard.html"
    }, 2000);
});