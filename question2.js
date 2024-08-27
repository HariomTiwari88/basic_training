//Ques2
function takeInput2(){
    let str = prompt("Enter The String");
    let charCode = str.charCodeAt(0);
   if(charCode>=97 && charCode<=122){
    charCode-=32;
    let firstChar = String.fromCharCode(charCode);
    let newString =firstChar + str.slice(1);
    console.log(newString);
    str = newString;
    console.log(str);
   }
   else{
   console.log(str);
   }
}
let y = takeInput2();
