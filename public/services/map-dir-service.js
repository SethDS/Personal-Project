/**
 * Created by Seth on 2/28/2017.
 */
angular.module('myApp').service('mapDirService', function($http, $rootScope, $window){

    this.advId = [];
    var ready = false;
    var self = this;

    this.advIdToLoc = function (id) {
        self.advId.push(id);
        console.log(self.advId[0]);
    };

    this.readyAddLoc = function(){
        ready = true;
    };

    this.addLocation = function(lat, long, advId){
        return $http({
            method: 'POST',
            url: '/addAdventureLocation',
            data: {
                latitude: lat,
                longitude: long,
                advId: advId
            }
        })
    }

});