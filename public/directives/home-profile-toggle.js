/**
 * Created by Seth on 2/22/2017.
 */
angular.module('myApp')
    .directive('homeProfileToggle', function(){
        return {
            templateUrl: '../directive-templates/home-profile-toggle.html',
            restrict: 'E',
            scope: {

            }
        }
    });