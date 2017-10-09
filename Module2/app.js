(function(){
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var buy=this;
        
        buy.items=ShoppingListCheckOffService.getList();
        
        buy.removeItem=function(itemIndex){
            try{
            ShoppingListCheckOffService.removeBought(itemIndex);
            }catch(error){
                buy.errorMessage=error.message;
            }
        }
        
    }
    
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        
        var already=this;
        already.items=ShoppingListCheckOffService.getItem();
        
        
    }
    
    function ShoppingListCheckOffService(){
        
        var service=this;
        var Tobuyitems=[{name:"apple", quantity:10},{name:"banana",quantity:12},{name:"mango",quantity:5}];
        var BoughtItems=[];
        
        var max=3;
        
        service.addItems=function(itemIndex){
            
            var item={
                name:Tobuyitems[itemIndex].name,
                quantity:Tobuyitems[itemIndex].quantity
            };
            
            BoughtItems.push(item);
            console.log("adding="+Tobuyitems.length+"bought :"+BoughtItems.length);
           
        };
        service.getItem=function(){
            return BoughtItems;
        };
        service.getList=function(){
            return Tobuyitems;
        };
       
        service.removeBought=function(itemIndex){
          
            service.addItems(itemIndex);
            Tobuyitems.splice(itemIndex,1);
          console.log(Tobuyitems.length+"bought :"+BoughtItems.length);
        };
        
    }
    
})();