(function(){
    'use strict';
    
    angular.module('myShopping',[])
    .controller('ShoppingList2',ShoppingList2)
    .provider('ShoppingListService',ShoppingListServiceProvider)
    .config(Config);
    // .config() function get called before any service ,factory ,or controler is instantiated
    //we can't inject any regular components into .config
    //we can inject the provider of service with nameProvider
    Config.$inject=['ShoppingListServiceProvider'];
    function Config(ShoppingListServiceProvider){
        ShoppingListServiceProvider.defaults.maxItems=2;
    }
     ShoppingList2.$inject=['ShoppingListService'];
    function ShoppingList2(ShoppingListService){
         var list2=this;
        list2.items=ShoppingListService.getItems();
        
        list2.Iname="";
        list2.Iqty="";
        
        
        list2.addItem=function(){
          try{  ShoppingListService.addItem(list2.Iname,list2.Iqty);
        }catch(error){
            list2.errorMessage=error.message;
        }
        };
        
        list2.removeItem=function(itemIndex){
            ShoppingListService.removeItem(itemIndex);
        };
        
    }
    
    function ShoppingListService(maxItems){
        var service=this;
        var items=[];
        
        service.addItem=function(n,q)
        {
           if((maxItems === undefined)||(maxItems !== undefined) && (items.length < maxItems)){
            var item={
                name:n,
                qty:q
                
            };
            items.push(item);   
            } 
            else{
                throw new Error("!Max items"+ maxItems+ "reached");
            }
        };
         service.getItems=function(){
            return items;
        };
        
        service.removeItem=function(itemIndex){
            
            items.splice(itemIndex,1);
            
        };
        
    }
        
    
    function ShoppingListServiceProvider(){
        
        //configure factory notjust at time of use but at app boostrapping
        var provider= this;
        provider.defaults={
            maxItems:4
        };
        
        provider.$get=function(){
            var shoppingList =new ShoppingListService(provider.defaults.maxItems);
            return shoppingList;
        };
    }
    
})();