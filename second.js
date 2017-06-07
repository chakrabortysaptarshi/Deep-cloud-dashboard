Highcharts.chart('accuracycontainer', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Accuracy'
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
            text: 'Nuclear weapon states'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
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
        name: 'USA',
        data: [ null, null, 6, 11, 32, 110, 235, 369, 640
           ]
    }, {
        name: 'USSR/Russia',
        data: [null, null,5, 25, 50, 120, 150, 200, 426
   ]
    }]
});

Highcharts.chart('losscontainer', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Loss'
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
            text: 'Nuclear weapon states'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
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
        name: 'USA',
        data: [ null, null, 6, 11, 32, 110, 235, 369, 640
           ]
    }, {
        name: 'USSR/Russia',
        data: [null, null,5, 25, 50, 120, 150, 200, 426
   ]
    }]
});

function accuracychart() {
	$('#accuracycontainer').show();
	$('#losscontainer').hide();
}

function losschart() {
	$('#accuracycontainer').hide();
	$('#losscontainer').show();
}