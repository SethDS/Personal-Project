/**
 * Created by Seth on 3/1/2017.
 */
angular.module('myApp').directive('profileAnimateDir', function($animate){

    return {
        restrict: 'AE',
        link: function (scope, element, attributes) {

            // setTimeout(function(){
            //     TweenMax.to($('.login-trans'), 1, {opacity: 0)
            // }, 2000);
            //
            // setTimeout(function(){
            //     TweenMax.to($('.profile-background-wrapper'), 1, {opacity: 1, position: 'fixed'})
            // }, 2000);
            //
            // setTimeout(function(){
            //     TweenMax.to($('.profile-background-wrapper'), 4, {opacity: 0})
            // }, 6000);
            //
            // setTimeout(function(){
            //     TweenMax.to($('.profile-main-wrapper'), 4, {position: 'fixed', opacity: 1})
            // }, 6000);

        }
    }
});