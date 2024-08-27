let x=5000;

start(x)
.then(function(interval){
 sleep(interval,function(){
    console.log("you called the callBack function after an interval");
})
})
.catch(function(err){
console.log(err.message);
})

function sleep(interval,callMethod){
  setTimeout(callMethod,interval);
}


function start(x){
let promise =  new Promise(function(resolve,reject){
if(x >= 0){
  resolve(x);
}
else{
   let err = new Error("Invalid Time");
   reject(err);
}
})
return promise;
}
