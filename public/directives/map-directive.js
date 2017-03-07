/**
 * Created by Seth on 2/21/2017.
 */
angular.module('myApp')
    .directive('mapDirective', function(mapDirService) {
        return {
            templateUrl: '../directive-templates/map-template.html',
            restrict: 'E',
            link: function (scope, element, attributes) {

                var map;
                var marker;
                var locLat;
                var locLong;

                scope.initMap = function () {

                    map = new google.maps.Map(document.getElementById('map'), {
                        center: {lat: 40.2574448, lng: -111.7089466},
                        zoom: 8,
                        styles: [
                            {
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#ebe3cd"
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#523735"
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "color": "#f5f1e6"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#c9b2a6"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative.land_parcel",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#dcd2be"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative.land_parcel",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#ae9e90"
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape.natural",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#dfd2ae"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#dfd2ae"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#93817c"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#a5b076"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#447530"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f5f1e6"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#fdfcf8"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f8c967"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#e9bc62"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway.controlled_access",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#e98d58"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway.controlled_access",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#db8555"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#806b63"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit.line",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#dfd2ae"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit.line",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#8f7d77"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit.line",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "color": "#ebe3cd"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit.station",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#dfd2ae"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#b9d3c2"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#92998d"
                                    }
                                ]
                            }
                        ]
                    });


                    map.addListener('click', function (e) {
                       if(marker == null) {
                           placeMarkerAndPanTo(e, map);
                       } else {
                           alert('Sorry, please choose only one marker for your location.')
                       }
                    });

                    function placeMarkerAndPanTo(latlng, map) {
                        console.log(latlng.latLng);
                            marker = new google.maps.Marker({
                                position: latlng.latLng,
                                map: map,
                                draggable: true,
                                getLatLngOnDrag: function () {
                                    marker.addListener('dragend', function (position) {
                                        console.log(position.latLng.lat());
                                        locLat = position.latLng.lat();
                                        console.log(position.latLng.lng());
                                        locLong = position.latLng.lng();
                                    })
                                }
                            });

                        marker.getLatLngOnDrag();

                    }

                };
                scope.initMap();
                scope.addLoc = function(){
                    var adventureId = mapDirService.advId[0];
                    console.log(adventureId);
                    var locationLat = locLat;
                    var locationLong = locLong;
                        mapDirService.addLocation(locationLat, locationLong, adventureId).then(function(response){
                            if(response.status === 200){
                                alert('Location submitted.')
                            }
                            console.log(response)
                        })
                }
            }


        }
    });