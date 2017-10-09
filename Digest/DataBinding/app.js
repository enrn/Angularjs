(function(){
    'use strict';
  
    angular.module('DataBindApp',[])
    .controller('DataBindController',DataBindController);
    
    DataBindController.inject=['$scope'];
    function DataBindController($scope){
        $scope.firstName="eak";
          $scope.fullName="";
        $scope.showNumberOfWatchers=function(){
            console.log("# of watchers: ",$scope.$$watchersCount);
            
        };
        
        $scope.setFullName=function(){
        $scope.fullName=$scope.firstName+" "+"paudel";
        };
        
        $scope.logFirstName=function(){
        console.log("First name is:",$scope.firstName);
        };
        
        
        $scope.logFullName=function(){
        console.log("Full name is:",$scope.fullName);
        };
        
        $scope.$watch(function(){
            console.log("Digest watch fired");
        });
        
    }
    
 
})();