// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    let freqOfCh = new Array(26);
    for(let i=0;i<26;i++){
      freqOfCh[i]=0;
    }
    for(let ind in string){
      if(string.charAt(ind)>='a' && string.charAt(ind)<='z'){
        let ch=string[ind];
      let i=ch.charCodeAt(0)-"a".charCodeAt(0);
        // console.log(i);
        freqOfCh[i]++;
      }
    }
    let obj={};
    for(let index=0;index<26;index++){
        let ch=String.fromCharCode("a".charCodeAt(0)+index);
        console.log(ch);
        if(freqOfCh[index]>0)
        obj[ch]=freqOfCh[index];
      }
      return obj;
    }
  