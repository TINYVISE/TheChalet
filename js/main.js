// --------------------------------------------------
// MEMBERS
var CAMPHOP = CAMPHOP || {};

CAMPHOP.dataCampgrounds = null;

// CAMPHOP.changeLocation = function( item, source ) {
//     console.log( 'GLOBAL: change location' );   
//     CAMPHOP.UI.clearFade();
//     CAMPHOP.googleMaps.changeLocation( item, source );
//     CAMPHOP.UI.changeLocation( item );
// };



// --------------------------------------------------
// FETCH DATA
var CAMPHOP = CAMPHOP || {};
CAMPHOP.fetchCampgroundData = ( function() {
    function _init( api ) {

        var api = 'http://tinyvise.com/camping/cms/api.php';

        return new Promise( function( resolve, reject ) {
            fetch( api, { mode: 'cors' } )
                .then( function( res ) {
                    return res.json();
                })
                .then( function( data ) {
                    resolve( data );
                    CAMPHOP.dataCampgrounds = data;
                    CAMPHOP.googleMaps.init( data );
                    CAMPHOP.UI.init();
                });
        });
    }
    return {
        init: _init
    };
})();

// --------------------------------------------------
        // GOOGLE MAPS
        var CAMPHOP = CAMPHOP || {};
        CAMPHOP.googleMaps = ( function() {

            var map,
                mapElement = document.getElementById( 'renderMap' ),
                defaultLocationLat = 42.656669611428306,
                defaultLocationLng = -74.30696275612311,
                mapOptions = {
                    zoom: 7,
                    center: {
                        lat: defaultLocationLat,
                        lng: defaultLocationLng
                    },
                    disableDefaultUI: true,
                    zoomControl: false,
                    mapTypeId: null
                };

            function _changeLocation( item, source ) {
                
                // Set the map type
                mapOptions.mapTypeId = google.maps.MapTypeId.TERRAIN;
                

                if( source !== 'fromMarker' ) {
                    // click form MENU
                    mapOptions.center.lat = parseFloat( item.lat );
                    mapOptions.center.lng = parseFloat( item.lng );
                    
                    map = new google.maps.Map( mapElement, mapOptions );
                } else {
                    // click from MARKER, redraw window to trigger fade effect on info panel
                    window.dispatchEvent( new Event( 'resize' ) );
                }

                

                // Create instance of StyleMapType passing the styles array
                styledMap = new google.maps.StyledMapType( mapStyles, {} );
                // Apply setting to map
                map.setOptions(
                    { styles: mapStyles }
                );
                _pinCampgrounds( CAMPHOP.dataCampgrounds, 'images/marker_dark.svg' ); 
                _selectedMarker( item, 'images/marker.svg' );
            }

            function _selectedMarker( item, image ) {
                _makeMarker( item, image );
            }

            function _pinCampgrounds( data, image ) {
                var image = image || 'images/marker.svg';
                // data.forEach( function( item ) {
                    // _makeMarker( item, image );
                // });
            }

            function _makeMarker( item, image ) {
                item.lat = parseFloat( item.lat );
                item.lng = parseFloat( item.lng );
                // create an instance of a marker image 
                var pinShadow = new google.maps.MarkerImage(
                    image,
                    // new google.maps.Size(100, 100),
                    // new google.maps.Point(14, -41),     // greater to left, vertical
                    // new google.maps.Point(10, 80),
                    // new google.maps.Size(90, 50)
                    new google.maps.Size(50, 50),
                    new google.maps.Point(0, 0),     // greater to left, vertical
                    new google.maps.Point(25, 25),
                    new google.maps.Size(50, 50)
                );
                // options for the marker
                var markerOptions = {
                    position: item,
                    map: map,
                    clickable: true,
                    icon: pinShadow, // image created 
                    label: {
                        color: '#000', 
                        fontSize: '10px', 
                        fontWeight: '400',
                        text: item.numtrips
                    }
                };
                // create a marker with options above
                var marker = new google.maps.Marker( markerOptions );
                // listen for click event to open bubble popup 
                google.maps.event.addListener( marker, 'click', function() {
                    console.log( 'MARKER: ------------------- ' );

                    CAMPHOP.fetchWeatherData.init( item.lat, item.lng )
                        .then( function() {
                            CAMPHOP.changeLocation( item, 'fromMarker' );
                        });
                    
                    // console.log( 'marker: ', item );
                });
            }
            
            function _renderMap() {

                var mapEl = document.getElementById( 'renderMap' );
                mapEl.style.animation = 'fadein 3s';

                // Set the map type
                mapOptions.mapTypeId = google.maps.MapTypeId.TERRAIN;
                // Create new map instance and pass it to a DOM element, and options above
                map = new google.maps.Map( mapEl, mapOptions );
                // Create instance of StyleMapType passing the styles array
                styledMap = new google.maps.StyledMapType( mapStyles, {} );
                // Apply setting to map
                map.setOptions(
                    { styles: mapStyles }
                );
            }
            function _init( data ) {

                _renderMap();
                _pinCampgrounds( data );
            }
            return {
                init: _init,
                changeLocation: _changeLocation
            };
        })();




    function alpha() {
        CAMPHOP.fetchCampgroundData.init();
    }
