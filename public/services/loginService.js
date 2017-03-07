/**
 * Created by Seth on 2/4/2017.
 */
angular.module('myApp').service('loginService', function($http){

    this.login = function(user){
        return $http({
            method: 'POST',
            url: '/api/login',
            data: {
                email: user.email,
                password: user.password
            }
        }).then(function(response){
            return response
        });
    };

    this.createNewUser = function(newUser){
        return $http ({
            method: 'POST',
            url: '/api/register',
            data: {
                name: newUser.name,
                email: newUser.email,
                password: newUser.password
            }
        }).then(function(response){
            return response
        })
    }
});