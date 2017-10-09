(function(){
    'use strict';
    /*
    Digest Cycle: running digest loops until all watchers report that nothing has changed
    ->Dirty Checking
    Several ways to set up watchers:
    ->$scope.$watch-don't do this in controller
    ->{{someProp}}
    -><input ..ng-model="someProp">
    
    These only applies to thigs inside of the angular Context
    */
    angular.module('CounterApp',[])
    .controller('CounterController',CounterController);
    
    CounterController.inject=['$scope'];
    function CounterController($scope){
        $scope.onceCounter=0;
          $scope.counter=0;
        $scope.showNumberOfWatchers=function(){
            console.log("# of watchers: ",$scope.$$watchersCount);
            
        };
        
        $scope.countOnce=function(){
        $scope.onceCounter=1;
        };
        
        $scope.upCounter=function(){
        $scope.counter++;
        };
        
        $scope.$watch(function(){
            console.log("Digest watch fired");
        });
        
       /* $scope.$watch('onceCounter',function(newValue,oldValue){
            console.log("once old Value: ",oldValue);
            console.log("once new Value: ",newValue);
        });
        
         $scope.$watch('counter',function(newValue,oldValue){
            console.log("counter old Value: ",oldValue);
            console.log("counter new Value: ",newValue);
        });*/
        
        
        
        /*
        Digest cycle do not get riggred automatically if events are unaware of angular
        -->Solution
            ->call $digest after custome code
            ->warp your custom code inside $apply
            ->Find Angular Specific servive that handles the same functionality eg :$timeout (best way to do )
        -> use of $digest do not handle exception. if there is any error in increment it always executes.
        ->so good approach is use of $apply
        Digest and Apply
        $scope.upCounter=function(){
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.counter++;
                console.log("counter increment");
            });
        },2000);
        
        }
        
        */
    }
    
    
    
    
    
    
    
})();