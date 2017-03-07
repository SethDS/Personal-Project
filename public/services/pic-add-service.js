/**
 * Created by Seth on 2/24/2017.
 */
angular.module('myApp').service('picAddService', function($http){

    var picVals = []; //CREATE A FOR LOOP THAT LOOPS THROUGH ALL THE VALUES IN THE PICTURES AND THEN TRIGGERS A ADD PICTURE
    //FUNCTION FOR EACH ITEM IN THE ARRAY

    this.addPicVal = function(val){
        picVals.push(val);
        console.log(picVals);
    };

    this.addPics = function(id, adv){

        var addPicsLoop = function(id, adv, i){

            return $http({
                method: 'POST',
                url: '/profile/addAdventure/addPics',
                data: {
                    adventure: adv,
                    adventureId: id,
                    picVals: i
                }
            }).then(function(response){
                return response
            })
        };

        for(var i = 0; i < picVals.length; i++){
            addPicsLoop(id, adv, picVals[i]).then(function(response){
                console.log(response);
            });
        }
        return 'the function is running....'
    };

    this.addJournalPics = function(id, asc){

        return $http({
            method: 'POST',
            url: '/profile/addArticle/addPics',
            data: {
                article: asc,
                articleId: id,
                picVals: picVals
            }
        })


    }
});