/**
 * Created by Seth on 2/22/2017.
 */
angular.module('myApp').controller('journalCtrl', function($scope, journalService){

    $scope.journal = [];

    function getJournal(){
        journalService.getJournal().then(function(response){
            console.log(response);
            for(var i =0 ; i < response.data.length; i++){
                $scope.journal.push(response.data[i])
            }
        })
    }

    getJournal();

});