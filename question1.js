let num=8;

let promise = testNum(num);

promise.then(function(status){
    console.log(status);
})
.catch(function(err){
    console.log(err);
});


function testNum(num){
    const pr = new Promise( function(resolve,reject){
        if(typeof num !="number") reject("Invalid Input");
        if(num>=10){
             resolve("Number is Greater or Equal to 10");
        }
        else{
           resolve("Number is less than 10");
        }
    })
    return pr;
}