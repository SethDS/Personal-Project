/**
 * Created by Seth on 2/4/2017.
 */
angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: './views/home.html',
            controller: 'mainCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: './views/login.html',
            controller: 'loginCtrl'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: './views/profile.html',
            controller: 'profileCtrl'
            }
        )
        .state('adventures', {
            url: '/home/adventures',
            templateUrl: './views/adventure.html',
            controller: 'adventureCtrl'
        })
        .state('journal', {
            url: '/home/journal',
            templateUrl: './views/journal.html',
            controller: 'journalCtrl'
        })
        .state('kits', {
            url: '/home/kits',
            templateUrl: './views/kits.html',
            controller: 'kitCtrl'
        })
        .state('jobs',{
            url: '/home/jobs',
            templateUrl: './views/jobs.html',
            controller: 'jobsCtrl'
        })
        .state('store', {
          url: '/home/store',
            templateUrl: './views/store.html',
            controller: 'storeCtrl'
        })

});