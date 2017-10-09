(function(){
    'use strict';
    
    angular.module('MyShopping',[])
    .controller('ShoppingController',ShoppingController)
    .controller('ShoppingListShowController',ShoppingListShowController)
    .service('ShoppingListService',ShoppingListService);
    
    ShoppingController.$inject=['ShoppingListService'];
    function ShoppingController(ShoppingListService){
        var itemAdder=this;
        itemAdder.itemName="";
        itemAdder.itemQuantity="";
        
        itemAdder.addItem=function(){
            ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
        }
    }
    //Second Controller
    ShoppingListShowController.$inject=['ShoppingListService'];
    function ShoppingListShowController(ShoppingListService){
        
        var showList=this;
        showList.items=ShoppingListService.getItems();
        
        showList.removeItem=function(ItemIndex){
            ShoppingListService.removeItem(ItemIndex);
        }
    }
    
    //Service
    function ShoppingListService(){
        var service =this;
        //List of shopping items
        var items=[];
        
        service.addItem=function(itemName,itemQuantity){
            var item={
                name:itemName,
                quantity:itemQuantity
            };
            items.push(item);
            
        };
        
        service.getItems=function(){
            return items;
        };
        
        service.removeItem=function(itemIndex){
            
            items.splice(itemIndex,1);
            
        }
    }
    
    
    
})();