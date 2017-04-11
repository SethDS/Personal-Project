/**
 * Created by Seth on 2/22/2017.
 */
angular.module('myApp').controller('adventureCtrl', function($scope, adventureService, $window){

    var myIndex = 0;
    $scope.picCarousel = function(){

        var x = document.getElementsByClassName("adv-pics");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        x[myIndex-1].style.height = "100%";
        x[myIndex-1].style.width = "100%";
        setTimeout($scope.picCarousel, 2000); // Change image every 2 seconds
    };

    move = function(e){
        e = e || $window.event;
        var wrapper =   document.getElementById('adv-nav-bar');

        var width = window.innerWidth;
        //width of the window
        var maxOffset = wrapper.scrollWidth - width;
        // Width of all the boxes minus the width of the window
        // This is the maximum amount we want to scroll the boxes
        var x = e.clientX
        // The x position of the mouse
        wrapper.style= "transform:translateX(" + (-x)*maxOffset/width + "px);"
        //Here we translate the wrapper's x position based on the mouse position, width of the screen, and max offset
    };

    move2 = function(e){
        e = e || $window.event;
        var wrapper =   document.getElementById('adv-pic-bar');

        var width = window.innerWidth;
        //width of the window
        var maxOffset = wrapper.scrollWidth - width;
        // Width of all the boxes minus the width of the window
        // This is the maximum amount we want to scroll the boxes
        var x = e.clientX;
        // The x position of the mouse
        wrapper.style= "transform:translateX(" + (-x)*maxOffset/width + "px);"
        //Here we translate the wrapper's x position based on the mouse position, width of the screen, and max offset
    };




$scope.adventures = [];
$scope.adventurePics = [];
$scope.advLocations = [];
$scope.mergedAdv = {};
$scope.finalMarkers = [];

$scope.compileAdv = function(id){

    var advMerged = {};
    loopAdv(id);
    loopAdvPics(id);
    loopAdvLoc(id);
    $scope.mergedAdv = advMerged;
    console.log($scope.mergedAdv);

    function loopAdv(id){
        for(var i = 0; i < $scope.adventures.length; i++){
            if($scope.adventures[i].adventure_id === id){
                advMerged.id = $scope.adventures[i].adventure_id;
                advMerged.title = $scope.adventures[i].title;
                advMerged.description = $scope.adventures[i].description;
                advMerged.directions = $scope.adventures[i].directions;
                advMerged.packlist = $scope.adventures[i].packlist;
            }
        }

    }
    function loopAdvPics(id){

        var pics = [];

        for(var i = 0; i < $scope.adventurePics.length; i++){
         if(id === $scope.adventurePics[i].association_id){
             pics.push($scope.adventurePics[i].image_file)
         }
        }
        advMerged.pics = pics;
    }
    function loopAdvLoc(id){

        for(var i = 0; i < $scope.advLocations.length; i++){
            if(id === $scope.advLocations[i].adv_id){
                advMerged.lat = $scope.advLocations[i].adv_lat;
                advMerged.long = $scope.advLocations[i].adv_long;
            }
        }

    }

};

$scope.getAdventures = function(){
  adventureService.getAdventures().then(function(response){
      console.log(response);
      for(var i =0 ; i < response.data.length; i++){
          $scope.adventures.push(response.data[i])
      }
      $scope.getLocations()

  });
    console.log($scope.adventures);
};

$scope.getAdventures();

$scope.getAdventurePics = function(){
    adventureService.getAdventurePics().then(function(response){
        console.log(response);
        for(var i =0 ; i < response.data.length; i++) {
            $scope.adventurePics.push(response.data[i])
        }
    });
    console.log($scope.adventurePics)
};

$scope.getLocations = function(){
    adventureService.getLocations().then(function(response){
        console.log(response);
        for(var i = 0; i < response.data.length; i++){
            $scope.advLocations.push(response.data[i])
        }
        console.log($scope.advLocations);
        $scope.initMap();
    });

};

    $scope.initMap = function(){

        var markers = [];
        var locations = $scope.advLocations;
        var finalMarkers = [];

        // Create a map object and specify the DOM element for display.
        var mapCanvas = document.getElementById('a-map');
        var map = new google.maps.Map(mapCanvas, {
            center: {lat: 40.2331033, lng: -111.5517118},
            scrollwheel: true,
            zoom: 8,
            height: '70vh',
            width: '90vw'
        });

        for(var i = 0; i < locations.length; i++){

            var lat = Number(locations[i].adv_lat);
            var lng = parseFloat(locations[i].adv_long);
            var id = locations[i].adv_id;
            //both Number and parseFloat work here to convert a string to a number
            var theMarker = new google.maps.LatLng(lat, lng);
            var theMarkerAndId = {
              googleMapMarker: theMarker,
                adv_id: id
            };

            markers.push(theMarkerAndId);

            }

        console.log(markers);
        console.log(locations);

        function makeNewMarker(LatLng, advId){
            finalMarkers.push(new google.maps.Marker({
                position: LatLng,
                map: map,
                visible: true,
                adv_id: advId
            })
            );
        }

       for(var j = 0; j < markers.length; j++){
          makeNewMarker(markers[j].googleMapMarker, markers[j].adv_id)
       }
        console.log(finalMarkers);

        $scope.finalMarkers = finalMarkers;

        $scope.getAdventurePics();

    }; //end of initMap function


    $scope.highlightMapMarker = function(id){
            for(var i = 0; i < $scope.finalMarkers.length; i++){
                if(id === $scope.finalMarkers[i].adv_id){
                  $scope.finalMarkers[i].setAnimation(google.maps.Animation.BOUNCE);
                }
            }
    };

    $scope.removeMarkerHighlight = function(id){
        for(var i = 0; i < $scope.finalMarkers.length; i++){
            if(id === $scope.finalMarkers[i].adv_id){
                $scope.finalMarkers[i].setAnimation(null);
            }
        }
    };

    $scope.animateStuff = function(){
        TweenMax.to($('.adv-maps-outer'), 1, {height: '50vh', width: '100%', left : '0'});
        TweenMax.to($('.adv-pic-container'), 1,{display: 'inline', delay:1})
    }

});