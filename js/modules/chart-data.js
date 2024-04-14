var xValues = ["Income", "Bills", "Finance",  "Personal", "Groceries", "Transportation", "Entertainment", "Children"];
var yValues = [2000,800,120,550,180,195,204,310];
var barColors = [
    "#00aba9"
];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {
    	display: false
    },
  	tooltips: {
        display: false,
    	callbacks: {
      	label: function(tooltipItem) {
        console.log(tooltipItem)
        	return tooltipItem.yLabel;
        }
      }
    },
    title: {
      display: false,
      text: "World Wide Wine Production 2018"
    }
  }
});