(function(){
    'use strict';
    
    var shoppingList1=["Milk","Bread","nutella","Cow Milk","Silk Milk","Milk powder"];
    
    var shoppingList2=[
        {
            name:"Milk",
            quantity:"2"
        },
         {
            name:"Bread",
            quantity:"20"
        },
         {
            name:"nutella",
            quantity:"5"
        }  
    ];
    angular.module('ShoppingListApp',[])
    .controller('ShoppingListController',ShoppingListController);
    ShoppingListController.$inject=['$scope'];
    function ShoppingListController($scope){
        
        $scope.shoppingList1=shoppingList1;
        $scope.shoppingList2=shoppingList2;
        
        $scope.addItems=function(){
        var newItem={
        name:$scope.newItemName,
        quantity: $scope.newItemQuantity
        };
        $scope.shoppingList2.push(newItem);
    };
        
        
        
    
    };
    
    
    
    
    
    
})();