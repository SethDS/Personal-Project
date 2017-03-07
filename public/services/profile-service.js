/**
 * Created by Seth on 2/23/2017.
 */
angular.module('myApp').service('profileService', function($http){



    this.submitAdv = function(newAdventure){
            return $http ({
                method: 'POST',
                url: '/profile/addAdventure',
                data: {
                    title: newAdventure.title,
                    description: newAdventure.description,
                    directions: newAdventure.directions,
                    packlist: newAdventure.packlist
                }
            }).then(function(response){
                return response
            })
    };
    this.submitArt = function(newArticle){
        return $http ({
            method: 'POST',
            url: '/profile/addArticle',
            data: {
                title: newArticle.title,
                body: newArticle.body
            }
        }).then(function(response){
            return response
        })
    };
    this.submitJob = function(newJob, id){
        return $http ({
            method: 'POST',
            url: '/profile/addJob',
            data: {
                id: id,
                title: newJob.title,
                description: newJob.description,
                requirements: newJob.requirements
            }
        }).then(function(response){
            return response
        })
    };
    this.submitKit = function(newKit, id){
        return $http ({
            method: 'POST',
            url: '/profile/addKit',
            data: {
                id: id,
                title: newKit.title,
                description: newKit.description,
                products: newKit.products
            }
        }).then(function(response){
            return response
        })
    };
    this.addAdventurePic = function(val){

        return $http ({
            method: 'POST',
            url: '/profile/addAdventurePic',
            data: {
                imageFile: val
            }
        })
    };

    this.addAdvIdToLoc = function(id){
        return $http({
            method: 'POST',
            url: '/profile/addAdventureIdToLoc',
            data: {
                advId: id
            }
        })
    }

});