(function(){
    'use strict';
    
    angular.module('myShopping',[])
    .controller('ShoppingList1',ShoppingList1)
    .controller('ShoppingList2',ShoppingList2)
    .factory('ShoppingListFactory',ShoppingListFactory);
    
    ShoppingList1.$inject=['ShoppingListFactory'];
    function ShoppingList1(ShoppingListFactory){
        
        var list1=this;
        
        var shoppingList1=ShoppingListFactory();
        list1.items=shoppingList1.getItems();
        list1.Iname="";
        list1.Iqty="";
        
        list1.addItem=function(){
            shoppingList1.addItem(list1.Iname,list1.Iqty);
            
        };
        
        list1.removeItem=function(itemIndex){
            shoppingList1.removeItem(itemIndex);
        };
        
    }
    
     ShoppingList2.$inject=['ShoppingListFactory'];
    function ShoppingList2(ShoppingListFactory){
         var list2=this;
        list2.limit='';
        var shoppingList=ShoppingListFactory(3);
        list2.items=shoppingList.getItems();
        list2.Iname="";
        list2.Iqty="";
        
        
        list2.addItem=function(){
          try{  shoppingList.addItem(list2.Iname,list2.Iqty);
        }catch(error){
            list2.errorMessage=error.message;
        }
        };
        
        list2.removeItem=function(itemIndex){
            shoppingList.removeItem(itemIndex);
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
        
    
    function ShoppingListFactory(){
        
        var factory=function(maxItems){
            return new ShoppingListService(maxItems);
        };
        return factory;
    }
    
})();