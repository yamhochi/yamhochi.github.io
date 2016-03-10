<script>

      
      function main() {

         // $('#myModal').modal('show')
         $('[data-toggle="popover"]').popover(); 

         // window.confirm("This page is best viewed on Chrome, Firefox, Safari, Internet Explorer 10 and above. If you continue to experience difficulties, please contact sgsnsw@sgsep.com.au");

          var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          });


          var map = new L.map('map', {
              scrollWheelZoom: false,
              center: [-33.817716, 151.002566],
            zoom: 14,
            minZoom:11,
            maxZoom:15,
          });

          map.addLayer(layer);

          var layerSource = {
              type: 'torque',
              options: {
                  query: "select * from parra_grid2",
                  user_name: 'ay',
                  table_name: 'parra_grid2',
                  cartocss: $("#cartocss").html()
              }
          }


          function selectvalue(layer) {

            window.value1=0 
            window.value2=0
            window.value3=0 
            window.value4=0
            window.value5=0 
            function multiplier(val){
              if (val==0){
                return 0
              }else{
                return 1
              }
            }
            console.log("value1="+ value1 +","+"value2="+value2+ "value3="+ value3 +","+"value4="+ value4+"value5="+value5)
            window.total_weights=value1+value2+value3+value4+value5
            

            // var multiplier = function(value1){
            //   if (value1=0){
            //     return 0
            //   }else{
            //     return 1
            //   }
            // }

             
            console.log(value2)

            // var adjustedcss ='Map {-torque-frame-count:1; -torque-animation-duration:1; -torque-time-attribute:"time"; -torque-aggregation-function:"(1*(1+(('+value1+'-avg(r3_railstation))/(15-0))))+(1*(1+(('+value2+'-avg(r3_shoppingcentr))/(20-0))))+(1*(1+(('+value3+'-avg(r3_re1))/(5-0))))+(1*(1+(('+value4+'-avg(r3_primaryschools))/(13-0))))+(1*(1+(('+value5+'-avg(r3_hospital))/(9-0))))"; -torque-resolution:8; -torque-data-aggregation:linear; } #parra_grid2{image-filters: colorize-alpha(cyan, lightgreen, yellow , orange, red); marker-file: url("http://s3.amazonaws.com/com.cartodb.assets.static/alphamarker.png"); comp-op: lighter; marker-fill-opacity: 0.2; marker-line-color: #FFF; marker-line-width: 0; marker-line-opacity: 0.7; marker-type: ellipse; marker-width:[value]; marker-fill: #FF9900; }'
            // var logstring = "value1="+ value1 +","+"value2="+value2+ "value3="+ value3 +","+"value4="+ value4+"value5="+value5

              $('#rail').slider()
              .on('slideStop', function(ev){
                window.value1=ev.value
                window.turned_on=multiplier(value1)+multiplier(value2)+multiplier(value3)+multiplier(value4)+multiplier(value5)
                window.total_weights=value1+value2+value3+value4+value5
                layer.setCartoCSS('Map {-torque-frame-count:1; -torque-animation-duration:1; -torque-time-attribute:"time"; -torque-aggregation-function:"(('+value1+'*(avg(r3_railstation)/(15-0)))+('+value2+'*(avg(r3_shoppingcentr)/(20-0)))+('+value3+'*(avg(r3_re1)/(5-0)))+('+value4+'*(avg(r3_hospital)/(13-0)))+('+value5+'*(avg(r3_primaryschools)/(9-0))))*10/'+total_weights+'"; -torque-resolution:8;-torque-data-aggregation:linear; } #parra_grid2{comp-op: lighter; marker-fill-opacity: 0.7; marker-line-color: #FFF; marker-line-width: 0; marker-line-opacity: 0.7; marker-type: ellipse; marker-width:6; marker-fill: #FF9900;  #parra_grid2[value>=1] {marker-fill: #800026; } #parra_grid2[value>=2] {marker-fill: #bd0026; } #parra_grid2[value>=3] {marker-fill: #e31a1c; } #parra_grid2[value>=4] {marker-fill: #fc4e2a; } #parra_grid2[value>=5] {marker-fill: #fd8d3c; } #parra_grid2[value>=6] {marker-fill: #feb24c; } #parra_grid2[value>=7] {marker-fill: #fed976; } #parra_grid2[value>=8] {marker-fill: #ffeda0; } #parra_grid2[value>=9] {marker-fill: #ffffcc; } #parra_grid2[value>=10] {marker-fill: #f7fcf0; }}') 
                console.log(turned_on+'turned on')
                // document.getElementById('v1').innerHTML=value1
                })
               .on('load', function(){
                   layer.play();
              });


              $('#shopping').slider()
              .on('slideStop', function(ev2){
                window.value2=ev2.value
                window.turned_on=multiplier(value1)+multiplier(value2)+multiplier(value3)+multiplier(value4)+multiplier(value5)
                window.total_weights=value1+value2+value3+value4+value5
                layer.setCartoCSS('Map {-torque-frame-count:1; -torque-animation-duration:1; -torque-time-attribute:"time"; -torque-aggregation-function:"(('+value1+'*(avg(r3_railstation)/(15-0)))+('+value2+'*(avg(r3_shoppingcentr)/(20-0)))+('+value3+'*(avg(r3_re1)/(5-0)))+('+value4+'*(avg(r3_hospital)/(13-0)))+('+value5+'*(avg(r3_primaryschools)/(9-0))))*10/'+total_weights+'"; -torque-resolution:8;-torque-data-aggregation:linear; } #parra_grid2{comp-op: lighter; marker-fill-opacity: 0.7; marker-line-color: #FFF; marker-line-width: 0; marker-line-opacity: 0.7; marker-type: ellipse; marker-width:6; marker-fill: #FF9900;  #parra_grid2[value>=1] {marker-fill: #800026; } #parra_grid2[value>=2] {marker-fill: #bd0026; } #parra_grid2[value>=3] {marker-fill: #e31a1c; } #parra_grid2[value>=4] {marker-fill: #fc4e2a; } #parra_grid2[value>=5] {marker-fill: #fd8d3c; } #parra_grid2[value>=6] {marker-fill: #feb24c; } #parra_grid2[value>=7] {marker-fill: #fed976; } #parra_grid2[value>=8] {marker-fill: #ffeda0; } #parra_grid2[value>=9] {marker-fill: #ffffcc; } #parra_grid2[value>=10] {marker-fill: #f7fcf0; }}')    
                  // console.log("value1="+ value1 +","+"value2="+value2+ "value3="+ value3 +","+"value4="+ value4+"value5="+value5)
                  console.log(multiplier(value1)+','+multiplier(value2)+','+multiplier(value3)+','+multiplier(value4)+','+multiplier(value5))
                  console.log(turned_on+'turned on')
                  // document.getElementById('v2').innerHTML=value2
                })
               .on('load', function(){
                   layer.play();
              });
              

               $('#park').slider()
              .on('slideStop', function(ev3){
                window.value3=ev3.value
                window.turned_on=multiplier(value1)+multiplier(value2)+multiplier(value3)+multiplier(value4)+multiplier(value5)
                window.total_weights=value1+value2+value3+value4+value5
                layer.setCartoCSS('Map {-torque-frame-count:1; -torque-animation-duration:1; -torque-time-attribute:"time"; -torque-aggregation-function:"(('+value1+'*(avg(r3_railstation)/(15-0)))+('+value2+'*(avg(r3_shoppingcentr)/(20-0)))+('+value3+'*(avg(r3_re1)/(5-0)))+('+value4+'*(avg(r3_hospital)/(13-0)))+('+value5+'*(avg(r3_primaryschools)/(9-0))))*10/'+total_weights+'"; -torque-resolution:8;-torque-data-aggregation:linear; } #parra_grid2{comp-op: lighter; marker-fill-opacity: 0.7; marker-line-color: #FFF; marker-line-width: 0; marker-line-opacity: 0.7; marker-type: ellipse; marker-width:6; marker-fill: #FF9900;  #parra_grid2[value>=1] {marker-fill: #800026; } #parra_grid2[value>=2] {marker-fill: #bd0026; } #parra_grid2[value>=3] {marker-fill: #e31a1c; } #parra_grid2[value>=4] {marker-fill: #fc4e2a; } #parra_grid2[value>=5] {marker-fill: #fd8d3c; } #parra_grid2[value>=6] {marker-fill: #feb24c; } #parra_grid2[value>=7] {marker-fill: #fed976; } #parra_grid2[value>=8] {marker-fill: #ffeda0; } #parra_grid2[value>=9] {marker-fill: #ffffcc; } #parra_grid2[value>=10] {marker-fill: #f7fcf0; }}')     
                  // console.log("value1="+ value1 +","+"value2="+value2+ "value3="+ value3 +","+"value4="+ value4+"value5="+value5)
                  console.log(turned_on+'turned on')
                  // document.getElementById('v3').innerHTML=value3
                })
               .on('load', function(){
                   layer.play();
              });
               $('#health').slider()
              .on('slideStop', function(ev4){
                window.value4=ev4.value
                window.turned_on=multiplier(value1)+multiplier(value2)+multiplier(value3)+multiplier(value4)+multiplier(value5)
                window.total_weights=value1+value2+value3+value4+value5
                layer.setCartoCSS('Map {-torque-frame-count:1; -torque-animation-duration:1; -torque-time-attribute:"time"; -torque-aggregation-function:"(('+value1+'*(avg(r3_railstation)/(15-0)))+('+value2+'*(avg(r3_shoppingcentr)/(20-0)))+('+value3+'*(avg(r3_re1)/(5-0)))+('+value4+'*(avg(r3_hospital)/(13-0)))+('+value5+'*(avg(r3_primaryschools)/(9-0))))*10/'+total_weights+'"; -torque-resolution:8;-torque-data-aggregation:linear; } #parra_grid2{comp-op: lighter; marker-fill-opacity: 0.7; marker-line-color: #FFF; marker-line-width: 0; marker-line-opacity: 0.7; marker-type: ellipse; marker-width:6; marker-fill: #FF9900;  #parra_grid2[value>=1] {marker-fill: #800026; } #parra_grid2[value>=2] {marker-fill: #bd0026; } #parra_grid2[value>=3] {marker-fill: #e31a1c; } #parra_grid2[value>=4] {marker-fill: #fc4e2a; } #parra_grid2[value>=5] {marker-fill: #fd8d3c; } #parra_grid2[value>=6] {marker-fill: #feb24c; } #parra_grid2[value>=7] {marker-fill: #fed976; } #parra_grid2[value>=8] {marker-fill: #ffeda0; } #parra_grid2[value>=9] {marker-fill: #ffffcc; } #parra_grid2[value>=10] {marker-fill: #f7fcf0; }}')    
                  console.log("value1="+ value1 +","+"value2="+value2+ "value3="+ value3 +","+"value4="+ value4+"value5="+value5)
                  console.log(turned_on+'turned on')
                  // document.getElementById('v4').innerHTML=value4
                })
               .on('load', function(){
                   layer.play();
              });

               $('#edu').slider()
              .on('slideStop', function(ev5){
                window.value5=ev5.value
                window.turned_on=multiplier(value1)+multiplier(value2)+multiplier(value3)+multiplier(value4)+multiplier(value5)
                window.total_weights=value1+value2+value3+value4+value5
                layer.setCartoCSS('Map {-torque-frame-count:1; -torque-animation-duration:1; -torque-time-attribute:"time"; -torque-aggregation-function:"(('+value1+'*(avg(r3_railstation)/(15-0)))+('+value2+'*(avg(r3_shoppingcentr)/(20-0)))+('+value3+'*(avg(r3_re1)/(5-0)))+('+value4+'*(avg(r3_hospital)/(13-0)))+('+value5+'*(avg(r3_primaryschools)/(9-0))))*10/'+total_weights+'"; -torque-resolution:8;-torque-data-aggregation:linear; } #parra_grid2{comp-op: lighter; marker-fill-opacity: 0.7; marker-line-color: #FFF; marker-line-width: 0; marker-line-opacity: 0.7; marker-type: ellipse; marker-width:6; marker-fill: #FF9900;  #parra_grid2[value>=1] {marker-fill: #800026; } #parra_grid2[value>=2] {marker-fill: #bd0026; } #parra_grid2[value>=3] {marker-fill: #e31a1c; } #parra_grid2[value>=4] {marker-fill: #fc4e2a; } #parra_grid2[value>=5] {marker-fill: #fd8d3c; } #parra_grid2[value>=6] {marker-fill: #feb24c; } #parra_grid2[value>=7] {marker-fill: #fed976; } #parra_grid2[value>=8] {marker-fill: #ffeda0; } #parra_grid2[value>=9] {marker-fill: #ffffcc; } #parra_grid2[value>=10] {marker-fill: #f7fcf0; }}')  
                  console.log(turned_on+'turned on')
                  // document.getElementById('v5').innerHTML=value5
                })
               .on('load', function(){
                   layer.play();
              });
          }

          cartodb.createLayer(map, layerSource)
            .addTo(map)
            .on('done', function(layer) {
            //do stuff
            var torqueLayer = layer;

                // once animation is loaded, automatically play     
              torqueLayer.on('load', function() {
                  torqueLayer.play();
              });

                // pause animation at last frame
                torqueLayer.on('change:time', function(changes) {
                    if (changes.step === torqueLayer.provider.getSteps() - 1) {
                        torqueLayer.pause();
                  }
                });

                selectvalue(torqueLayer);

        })
        .on('error', function(err) {
          alert("some error occurred: " + err);
        });     
      }
      

      window.onload = main;

  </script>