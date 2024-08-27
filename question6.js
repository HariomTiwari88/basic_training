
for(var i = 0; i < 9; i++) {
    setTimeout(function(){
            console.log(i);
    },50);
  }
   
  // this code output is 10 for 10 times because 
  //the variable i which is  available in global scope so it will only have one value at a time and till the timer completes its value is 10
  
  
  //this can be done using let keywords as it as limited scope to and each time it will create a new copy
  for(let i=0;i<10;i++){
      setTimeout(function(){
          console.log(i);
      },50);
  }