//to find the length of array without using length function

// let arr=[1,3,2,4,5,8,7]
// let count=0;
// i=0;
// while(arr[i]!==undefined){
//     count+=1;
//     i++;
// }
// console.log(count)


// to find the missing number in the array

// let a=[1,3,2,4,5,8,7]
// let n=a.length+1;
// let sum=0;
// const totalsum=(n*(n+1))/2
//     for(i=0;i<a.length;i++){
//         sum+=a[i];
//     }
//     // console.log(sum)
//     // console.log(totalsum)
// console.log(totalsum - sum)

// by sorting and then finding the difference or two consuctive numbers
// by .include methed

let a=[1,3,2,4,5,8,7]
x=a.sort();
// console.log(a)
for(i=1;i<x.length-1;i++){
    if(x[i+1]-x[i]!==1){
        console.log(x[i]+1)
    }
}




//sort the above array without sort()

// // sort the array arr=[0,0,1,0,1,0,1]
// a=[0, 0, 1, 0, 1, 0, 1]
// let arr=[]
// cnt=0;
// for(i=0;i<a.length;i++){
//     if(a[i]!=1){
//         arr.push(a[i])
//     }
//    else if(a[i]==1)
//          cnt+=1
//  }
//  for(i=0;i<cnt;i++) {
//    arr.push(1)
// }
//  console.log(arr)

//  const arr1=[0,0,1,0,1,0,1];
//  let temp;
//  for(i=0;i<arr1.length;i++){
//      if(arr1[i]>arr1[i+1]){
//          temp=arr1[i+1];
//          arr1[i+1] = arr[i];
//          arr1[i]=temp;
//          console.log(arr1)
//      }
//  }
 
// a=[0,0,2,1,1,2,0,0] //output should be [0,0,0,0,1,1,2,2]
// // teen loop chalege usmey eak loop 0 ko push karega and dusra wala 1 ko and teesra wala 2 ko
// let b=[];
// let var1=0;
// let var2=0;
// // let var3=0;
// for (i=0;i<a.length;i++){
//     if(a[i]==0){
//         b.push(0)
//     }
//     else if (a[i]==1){
//         var1+=1;
//     }
//     else {
//         var2+=1;
//     }
// }
// for (i=0;i<var1;i++){
//     b.push(1) 
// }

// for (i=0;i<var2;i++){
//     b.push(2) 
// }
// console.log(b)
    