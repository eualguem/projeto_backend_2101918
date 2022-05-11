function started (){
    console.log ("Started Download");
}

function update (percentage){
    console.log (percentage + "% of Download");
}

function completed (){
    console.log ("Download completed!")
}

function performDownload(started_fn,update_fn,completed_fn){
    started_fn();
    for (let percentage = 0; percentage <= 100; percentage++) {
        update_fn(percentage);
    }
    completed_fn();
}

//performDownload(started,update,completed)
 var ArrayUtils = require("./ArrayUtils");
 var array=[2,5,7,1,5,3];
 var array2=[2,4,7,4,5,3];
 var value =7
 var startIndex = 0
 var endIndex = 3
 console.log(array);
 console.log(array2);
 console.log("o array esta vazio? "+ ArrayUtils.isEmpty(array));
 console.log("minimo "+ ArrayUtils.min(array));
 console.log("maior " + ArrayUtils.max(array));
 console.log("media "+ ArrayUtils.average(array));
 console.log("posiçao do " + value + " no array é "+ ArrayUtils.indexof(array,value));
 console.log("sub-array da posiçao entre "+ startIndex +" e "+ endIndex + " é  "+(ArrayUtils.subarray(array, startIndex, endIndex)));
 console.log("o tamano de arrays e 1 e 2 é igual? "+ ArrayUtils.isSameLength(array,array2));
 console.log("reversed "+ ArrayUtils.reversearray(array));
 console.log("o junta 2 arrays "+ ArrayUtils.twoarray(array,array2));