function secondLargest(arr) {
    let mx1=0,mx2=0;
    // console.log("hello ");
    for(let i=0;i<arr.length;i++){
      if(arr[i]>mx1) mx1=arr[i];
      if(arr[i]!=mx1 && arr[i]>mx2) mx2=arr[i];
    }
    return mx2;
    
  }