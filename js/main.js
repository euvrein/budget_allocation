$(':input[type="number"]').change(function(){
    this.value = parseFloat(this.value).toFixed(2);
});