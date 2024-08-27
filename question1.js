//Ques 1

function takeInput1(){
    let num=Number(prompt("Enter The Number"));

    function calFactorial(){
        let fact=1;
        for(let i=2;i<=num;i++){
            fact*=i;
        }
        return fact;
    }
    return calFactorial();
}
let x=takeInput1();
console.log(x);

