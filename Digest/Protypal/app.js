var parent={
    value:"parent Value",
    obj:{
        objValue:"parent Obj Value"
    },
    walk:function(){
        console.log("walking function");
    }
};

var child =Object.create(parent);
console.log("child-child.value",child.value);
console.log("child-child.obj.objvalue",child.obj.objValue);
console.log("parent -parent.value",parent.value);
console.log("parent- parent.obj.objvalue",parent.obj.objValue);
console.log("parent:",parent);
console.log("Child:",child);

//override the paretn value
child.value="child Value";
child.obj.objValue="childObjectValue";
console.log("*** child-child.value",child.value);
console.log("*** child-child.obj.objvalue",child.obj.objValue);
console.log("parent -parent.value",parent.value);
console.log("*** parent- parent.obj.objvalue",parent.obj.objValue);
console.log("parent:",parent);
console.log("Child:",child);

console.log("check ?",child.obj === parent.obj);

var grandChild=Object.create(child);
console.log("GrandChild:",grandChild);
grandChild.walk();

//Function Constructor..use capital letter
function Dog(name){
    this.name=name;
    console.log("this is :",name);
}
//create function constructor using new keyword
var myDog=new Dog("Jimy");
console.log("myDog:",myDog);

Dog("Max");