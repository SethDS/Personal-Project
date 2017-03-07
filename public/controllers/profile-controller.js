/**
 * Created by Seth on 2/10/2017.
 */
angular.module('myApp').controller('profileCtrl', function($scope, profileService, picAddService, mapDirService){

$scope.mainHide = true;

  $scope.classAll = false;
  $scope.classA = false;
  $scope.classJ = false;
  $scope.classJob = false;
  $scope.classK = false;
  $scope.mapHider = false;

    $scope.submitAdv = function(newAdventure){ //this function adds the new adventure to the database and then triggers the function
        //that adds the adventure pictures to the database

        profileService.submitAdv(newAdventure).then(function(response){
            if(response.data[0].adventure_id){
                mapDirService.advIdToLoc(response.data[0].adventure_id);
                mapDirService.readyAddLoc();
                picAddService.addPics(response.data[0].adventure_id, 'adventure');
            }
            alert('adventure successfully added.');
            $scope.mapHider = true;
            console.log(response); //console logging the response to the submitAdv function
        })
    }; //end of sumitAdv function

    $scope.submitArt = function(newArticle){

        profileService.submitArt(newArticle).then(function(response){
            if(response.data[0].article_id){
                picAddService.addJournalPics(response.data[0].article_id, 'journal').then(function(response){
                    console.log(response)
                })
            }
            console.log(response)
        })
    };
    $scope.submitJob = function(newJob, currentUserId){
        profileService.submitJob(newJob, currentUserId).then(function(response){
            console.log(response)
        })
    };
    $scope.submitKit = function(newKit, currentUserId){
        profileService.submitKit(newKit, currentUserId).then(function(response){
            console.log(response)
        })
    };


    $scope.profileNavHighlight = function(){
        TweenMax.to($('.profile-nav'), 1, {
            'background-color': 'white'
        })
    };

    $scope.profileNavToggle = function(){

        TweenMax.to($('.profile-nav'), 1, {
            width: '95vw',
            right: 0
        });
        TweenMax.to($('.profile-nav-toggle'), 1, {
            display: 'flex',
            ease: 'Power2.easeOut'
        })
    };

    $scope.newAdventureShow = function(){
        TweenMax.to($('.profile-nav-toggle'), 1, {
            display: 'none'
        });
        TweenMax.to($('.profile-nav'), 1, {
            width: '5vw', opacity: 0
        });
      TweenMax.to($('.new-adventure-show'), 1, {
          display: 'flex',
          'z-index': 95
      } )
    };

    $scope.profileShow = function(){
        TweenMax.to($('.new-adventure-show'),2, {
            display: 'none'
        } );
        TweenMax.to($('.profile-nav-toggle'), 1, {display: 'none'});
        TweenMax.to($('.profile-nav'), 1, {width: '5vw', 'background-color': 'transparent'})

    }
});