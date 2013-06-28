
function initialiser() {
    var latlng = new google.maps.LatLng(50.634057, 5.580784);
     
    var options = {
        center: latlng,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
     
    var carte = new google.maps.Map(document.getElementById("carte"), options);
     
   /****************Nouveau code****************/
 
//politicians
  
    var marqueur1 = new google.maps.Marker({
        position: new google.maps.LatLng(48.861045, 2.352312),
        map: carte,
        title: "Centre Pompidou",
        icon: 'public/img/Marker.png'
    });

                      var infowindow1 = new google.maps.InfoWindow({
                        maxWidth: 200,
                        maxHeight: 50,
                        position: new google.maps.LatLng(48.861045, 2.352312),
                        content: "Exposition Dali du 21 novembre 2012 au 25 mars 2013"
                    });
                  
                    google.maps.event.addListener(marqueur1, 'click', function() {
                        infowindow1.open(carte, marqueur1);
                    });

////////////////////////////////////////

    var marqueur2 = new google.maps.Marker({
        position: new google.maps.LatLng(40.411666, -3.694351),
        map: carte,
        title: "Musee national Centro de Arte Reina Sofia",
        icon: 'public/img/Marker.png'
    });

                    var infowindow2 = new google.maps.InfoWindow({
                        maxWidth: 200,
                        maxHeight: 50,
                        position: new google.maps.LatLng(40.411666, -3.694351),
                        content: "<br>L'exposition se concentre principalement sur la periode la plus surrealiste de Dali.</br> Du 27 Avril 2013 au 2 Septembre 2013."

                    });
                  
                    google.maps.event.addListener(marqueur2, 'click', function() {
                        infowindow2.open(carte, marqueur2);
                    });

////////////////////////////////////////

    var marqueur3 = new google.maps.Marker({
        position: new google.maps.LatLng(50.634057, 5.580784),
        map: carte,
        title: "Mediacite",
        icon: 'public/img/Marker.png'
    });

                    var infowindow3 = new google.maps.InfoWindow({
                        maxWidth: 200,
                        maxheight: 50,
                        position: new google.maps.LatLng(50.634057, 5.580784),
                        content: "<br>Exposition Salvador Dali 'Visages Caches'.</br> Du 2 Novembre 2012 au 19 Janvier 2013."

                    });
                  
                    google.maps.event.addListener(marqueur3, 'click', function() {
                        infowindow3.open(carte, marqueur3);
                    });

}