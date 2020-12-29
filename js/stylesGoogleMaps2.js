// styles array for the map
// https://mapstyle.withgoogle.com/
// https://developers.google.com/maps/documentation/javascript/styling
// https://developer.here.com/documentation/map-tile/topics/resource-meta-pois.html
// https://www.justinobeirne.com/additional-examples-of-styled-maps-using-google-maps-api-3/
// https://stackoverflow.com/questions/7095574/google-maps-api-3-custom-marker-color-for-default-dot-marker
var mapStyles = [
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "administrative.land_parcel",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    // BORDERS
    {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
            { color: '#c35700' },
            { visibility: "on" }
        ]
    },





    {
        elementType: 'geometry', 
        stylers: [
            // { color: '#58643c' }, // overall
            // { saturation: 100 }
            { color: '#756f63' }
        ]
    },


    
    

    // -------------------------------
    
// -------------------------------

{
    featureType: 'road', 
    elementType: 'geometry',
    // stylers: [{color: '#46502f'}] // roads
    stylers: [{color: '#5f5a4f'}] // roads
  },


    {
        featureType: 'poi.park',  // park color
        elementType: 'geometry',
        stylers: [
            { color: '#514c42' },
            // { color: '#242f3e' },
            { visibility: "on" }
        ]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.icon',
        stylers: [
            { visibility: "off" },
            { color: '#c35700' }
        ]
    },


    
    
    // -------------------------------
    // LABELS
    {
        elementType: 'labels.text.fill', // state names
        stylers: [
            {color: '#d4ccbd'}
        ]
    },
    {   elementType: 'labels.text.stroke', // state names stroke
        stylers: [
            { visibility: "off" },
            {color: '#ffffff'}
        ]
    },

    {
        featureType: 'administrative.locality', // place names
        elementType: 'labels.text.fill',
        stylers: [{color: '#d4ccbd'}]
    },
    {
        featureType: 'administrative.locality', // place names stroke
        elementType: 'labels.text.stroke',
        stylers: [
            {visibility: "off"},
            {color: '#8cb9c0'}
        ]
    },

    {
        featureType: 'poi.park', // park names
        elementType: 'labels.text',
        stylers: [
            { visibility: "on" },
            { color: '#d4ccbd' }
        ]
    },
    {
        featureType: 'poi.park', // park names stroke
        elementType: 'labels.text.stroke',
        stylers: [
            { visibility: "off" },
            {color: '#7a815c'}
        ]
    },
    // -------------------------------





    // WATER
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            // { color: '#1c2e43' }
            // { color: '#8cb9c0' }
            { color: '#413d35' }
        ]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
            { color: '#ffffff' }
        ]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
            { color: '#17263c' }
        ]
    }
];