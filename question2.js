let arr = ["bhupesh","ram","Gitesh","Vijay"];

makeAllCaps(arr)
.then(function (arr){
    // console.log(arr);
    return arr;
})
.then(function(arr){
    sortWords(arr)
    console.log(arr);
})
.catch(function (err){
    console.log(err.message);
})

function makeAllCaps(arr){
    let isNotAcceptable = false;
    for(let ind in arr){
        if(typeof arr[ind]!= "string"){
            isNotAcceptable = true;
            break;
        }
        else arr[ind] =  arr[ind].toUpperCase(arr[ind]);
    }
        let promise = new Promise(function(resolve,reject) {
               if(isNotAcceptable){
                    let err = new Error("NOT ACEEPTABLE");
                    reject(err);
               }
               else{
                    resolve(arr);
               }      
        });

    return promise;
}

function sortWords(arr){
    arr.sort();
    return new Promise(function(resolve,reject){
        resolve(arr);
    });
}