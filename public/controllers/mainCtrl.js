/**
 * Created by Seth on 2/4/2017.
 */
angular.module('myApp').controller('mainCtrl', function($scope, $window){

    $scope.hoverIn = function(){
        $scope.hoverEdit = true;
    };

    $scope.hoverOut = function(){
        $scope.hoverEdit = false;
    };

    move = function(e){
        e = e || $window.event;
        var wrapper =   document.getElementById('home-nav-bar');

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

});