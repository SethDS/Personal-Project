/**
 * Created by Seth on 2/23/2017.
 */
angular.module('myApp').service('journalService', function($http){

    this.getJournal = function(){
        return $http({
            method: 'GET',
            url: '/home/journal'
        }).then(function(response){
            return response
        })
    }
});