(function(){
    'use strict';
    angular.module('myFirstApp',[])
    .controller('myFirstController',function($scope){
        
        $scope.totalCount=0;
        
        
        $scope.name="eaknarayan";
        $scope.sayHello=function(){
            return "hello eaknarayan";
        };
        
        $scope.displayValue=function(){
              var totalStringValue=countNumericValue($scope.name);
            $scope.totalCount=totalStringValue;
        };
        
        var countNumericValue=function(string){
            var initCount=0;
            for(var i=0;i<string.length;i++){
                initCount += string.charCodeAt(i);
                
            }
            return initCount;
            
        }
    });
    
})();