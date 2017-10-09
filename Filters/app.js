(function(){
     'use strict';
    angular.module('myApp',[])
    .controller("FilterController",FilterController);
    FilterController.inject=['$scope','$filter'];
    
    function FilterController($scope,$filter){
        
        var name1="eaknarayan";
        $scope.name=$filter('uppercase')(name1);
        $scope.cost=.45;
    };
    
    
    
})();