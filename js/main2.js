function test() {

    var map,
        mapEl = document.getElementById( 'renderMap' ),
        defaultLocationLat = 42.656669611428306,
        defaultLocationLng = -74.30696275612311,
        mapOptions = {};

    // ----------------------------------

    mapOptions = {
        zoom: 7,
        center: {
            lat: defaultLocationLat,
            lng: defaultLocationLng
        },
        disableDefaultUI: true,
        zoomControl: false,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    // ----------------------------------

    // Create new map instance and pass it to a DOM element, and options above
    map = new google.maps.Map( mapEl, mapOptions );

    // Apply array of style values to map
    map.setOptions(
        { styles: mapStyles }
    );

    // ----------------------------------

    // create an instance of a marker image
    markerIcon = {
        url: 'images/marker.svg',
        size: new google.maps.Size(50, 35),
        origin: new google.maps.Point(0, 10), 
        anchor: new google.maps.Point(25, 25),
        scaledSize: new google.maps.Size(50, 50),
        labelOrigin: new google.maps.Point(11, 54)
    };

    var markerOptions = {
        position: { lat: defaultLocationLat, lng: defaultLocationLng },
        map: map,
        clickable: true,
        icon: markerIcon, // image created 
        label: {
            color: '#fff', 
            fontSize: '9px', 
            fontWeight: '500',
            text: 'The Chalet'
            
        }
    };

    // create a marker with options above
    var marker = new google.maps.Marker( markerOptions );

    // listen for click event to open bubble popup 
    // google.maps.event.addListener( marker, 'click', function() {

    //     console.log( 'MARKER: ------------------- ' );

    //     infoWindow.open( map, marker );
        
    // });

    marker.addListener( 'click', function() {
        infoWindow.open( map, marker );
    });

    // ----------------------------------

    var infoWindow = new google.maps.InfoWindow({
        content: '<div id="info-window">206 Ward Lane<br>Schoharie, New York</div>',
        style: {
            color: '#fff', 
            fontSize: '9px', 
            fontWeight: '500',
            text: 'The Chalet'
            
        }
    });


  
  
}

function alpha() {
    test();
}