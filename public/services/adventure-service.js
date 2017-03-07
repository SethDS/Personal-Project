/**
 * Created by Seth on 2/22/2017.
 */
angular.module('myApp').service('adventureService', function($http){


    this.getAdventures = function(){
        return $http ({
            method: 'GET',
            url: '/home/getAdventures'
        }).then(function(response){
            return response
        })
    };

    this.getAdventurePics = function(){
        return $http({
            method: 'GET',
            url: '/adventures/getAdventurePics'
        }).then(function(response){
            return response
        })
    };

    this.getLocations = function(){
        return $http({
            method: 'GET',
            url: '/adventures/getLocations'
        }).then(function(response){
            return response
        })
    }
});