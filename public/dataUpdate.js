var socket = io.connect('http://localhost:3333');
  socket.on('news', function (data) {
    if(data.CPU != undefined) {
      var point = $('#cpucontainer').highcharts().series[0].points[0];
      point.update(parseInt(data.CPU));
  }
  if(data.RAM != undefined) {
      var point = $('#ramcontainer').highcharts().series[0].points[0];
      point.update(parseInt(data.RAM));
      accuracyChart.series[0].setData(data.acTr,true);
      accuracyChart.series[1].setData(data.acVal,true);
      lossChart.series[0].setData(data.lsTr,true);
      lossChart.series[1].setData(data.lsVal,true);
      accuracyChart.xAxis[0].setExtremes(1, data.acTr.length);
      lossChart.xAxis[0].setExtremes(1, data.acTr.length);

      //$('#div1_1_2_1').attr("data-percent", 5);
      var str1= "TRAINING<br><br>"+ data.acTr.length+"/100 <br> EPOCH <br> "+data.sam_s+" <br> SAMPLES/S";
      $('#div1_1_2_2').html(str1);
      var str3 = "BATCH<br>"+data.batch+"/1875 <br><br> SECONDS/EPOCH <br> "+ data.sec_ep;
      $('#div1_1_2_3').html(str3);
      $('#div1_1_2_4').show();
      var str2 = "KPI: "+data.kpi+"<br>ACCURACY";
      $('#div1_1_3').html(str2);


      updateEpoch(data.acTr.length);

  }
  console.log(data);

  //lossChart.series[0].setData([3,4,9,17],true);
    socket.emit('my other event', { my: 'data' });
  });


function updateEpoch(ep) {
  $('#div1_1_2_1').empty();
  console.log(ep);
    var el = document.getElementById('div1_1_2_1'); // get canvas

    var options = {
        percent:  ep,
        size: el.getAttribute('data-size') || 320,
        lineWidth: el.getAttribute('data-line') || 15,
        rotate: el.getAttribute('data-rotate') || 0,
    }

    var canvas = document.createElement('canvas');
        
    if (typeof(G_vmlCanvasManager) !== 'undefined') {
        G_vmlCanvasManager.initElement(canvas);
    }

    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = options.size;
    canvas.id="progressChart";

    el.appendChild(canvas);

    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

    //imd = ctx.getImageData(0, 0, 240, 240);
    var radius = (options.size - options.lineWidth) / 2;

    var drawCircle = function(color, lineWidth, percent) {
        percent = Math.min(Math.max(0, percent || 1), 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, Math.PI, Math.PI + Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
            ctx.lineCap = 'round'; // butt, round or square
        ctx.lineWidth = lineWidth
        ctx.stroke();
    };

    drawCircle('#efefef', options.lineWidth, 100 / 100);
    drawCircle('#555555', options.lineWidth, options.percent / 100);


  }