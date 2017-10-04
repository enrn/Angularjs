(function(){
    'use strict';
    
    angular.module("LunchCheck",[])
    .controller("LunchCheckController",LunchCheckController);
    //for minification
    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
        
        $scope.itemName='';
        var count=0;
        //make function to display the message in html
        $scope.display=function(){
            
            count=CheckMuch($scope.itemName);
            $scope.message=CheckItems(count);
        };
        //spliting the string with ,
         var CheckMuch=function(string){
            if(string.length==0){
                return 0;
            }else{
            var array=string.trim().split(',');
            
            return array.length;
            }
        };
        // checking the number of items
        var CheckItems=function(n){
               
            if(n<1){
                   return "Cannot leave empty"; 
                }
                else if(n > 0 & n < 4){
                     return "Enjoy";
                }else{
                    return "Too much!";
                }
            
        };
        
    }
    
})();
