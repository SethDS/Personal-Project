/**
 * Created by Seth on 2/4/2017.
 */
angular.module('myApp').controller('loginCtrl', function ($scope, loginService, $state) {

    $scope.currentUserId = 0;

    $scope.login = function(user){
        loginService.login(user).then(function(response){
            console.log(response);

            if(response.status === 200){
                $state.go('profile');
                $scope.currentUserId = response.data.id;
                console.log($scope.currentUserId);
            } else {
                alert('Username or password error.')
            }
        });
    };

    $scope.createNewUser = function(newUser){
        loginService.createNewUser(newUser).then(function(response){
            console.log(response)
        })
    }
});