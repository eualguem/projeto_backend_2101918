var array = [];
array.push(function (){
    console.log("hello world 1")
},function (){
    console.log("2")
},function (){
    console.log("3")
});


for (let i = 0; i < array.length; i++) {
   array[i]();
    
}


array.forEach((element,index)=>{
    element();
    console.log(index);
})

