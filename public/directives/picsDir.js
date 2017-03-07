/**
 * Created by Seth on 2/24/2017.
 */
angular.module('myApp').directive('picDir', function(picAddService){

    return {
        restrict: 'AE',
        controller: function($scope){

                    //this is a regular expresssion to check and make sure that the value we get from the
                    //FileReader below is a image
            $scope.$watch('fileread', function(val, old) {
                if (/^data:image/.test(val)) {
                    // console.log(val);
                }
            })
        },
        link: function(scope, element, attrs){
            element.bind("change", function (changeEvent) {

                    //this function turns the picture file into base 64 and assigns it to the filereader variable
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.fileread = loadEvent.target.result;
                    console.log(scope.fileread.slice(0, 10));

                        //this is taking the base 64 string and putting it on a variable in the picAddService
                    picAddService.addPicVal(scope.fileread);
                };

                reader.readAsDataURL(changeEvent.target.files[0]);
            })
        }
    }
});