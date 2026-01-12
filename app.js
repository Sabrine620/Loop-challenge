"use strict"

let bills=[22,295,176,440,37,105,10,1100,86,52]
let tips=[]
let totals=[]
const calcTip=function(bills){
    return bills>=50 && bills<=300? bills*0.15: bills*0.20
}
for (let i=0; i<bills.length; i++){
    const tip=calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i]+tip);
    
}
console.log(tips)
console.log(totals)

let sum=0;
const calcAverage=function(arr){
    for (let i=0; i< arr.length; i++){
     sum+=arr[i];
    }
    return sum/arr.length
  
}
console.log(calcAverage(totals))