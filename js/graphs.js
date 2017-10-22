
	Chart.defaults.global.defaultFontColor = '#000';
	
    var ctx = document.getElementById("bar").getContext('2d');
    var pie = document.getElementById("pie").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Total", "With Adhaar", "With Adhaar Seeding", "Without Adhaar"],
            datasets: [{
                label: 'Hide',
				labelColor: 'window.chartColors.red',
                data: [5500000, 3000000, 2700000, 2500000],
				
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 10
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }],
				xAxes: [{
ticks: {
autoSkip: false
}
}]
				

            }
			
        }
    });
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };
    var pie_config = {
        type: 'pie',
        data: {
            datasets: [{
			
                data: [
                    30000000,  2000000, 10000000,13000000, 6000000, 8000000
                ],
                backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',

                ],
                
            }],
            labels: [
                "IGNOAPS",
                "IGNWPS",
                "IGNDPS",
                "LSSPS",
				"BDPS",
				"SSSPS"
            ]
        },
		
        options: {
            responsive: true
        },
		title: {
            display: true,
        },

    };
    // var pu = document.getElementById("pie").getContext("2d");
    myPie = new Chart(pie, pie_config);
    