var accuracyChart = Highcharts.chart('accuracycontainer', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Accuracy'
    },
    credits: {
      enabled: false
    },

    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'accuracy'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name}  <b>{point.y}</b><br/> in {point.x} epoch'
    },
    plotOptions: {
        area: {
            pointStart: 1,
            marker: {
                enabled: false,
                symbol: 'circle',
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Training',
        data: []
    }, {
        name: 'Validation',
        data: []
    }]
});



var lossChart = Highcharts.chart('losscontainer', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Loss'
    },
    credits: {
      enabled: false
    },

    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'loss'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} <b>{point.y}</b><br/> in {point.x} epoch'
    },
    plotOptions: {
        area: {
            pointStart: 1,
            marker: {
                enabled: false,
                symbol: 'circle',
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Training',
        data: [ ]
    }, {
        name: 'Validation',
        data: [ ]
    }]
});

function accuracychart() {
	$('#accuracycontainer').show();
	$('#losscontainer').hide();
}

function losschart() {
	$('#accuracycontainer').hide();
	$('#losscontainer').show();
    console.log(lossChart.series[0]);
}