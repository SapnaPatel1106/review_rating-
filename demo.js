var arr =[1,2,3,4,5,6,9,7,4,3];
let count=0;
console.log("Duplicate element are")
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i] === arr[j]){
            //console.log("Duplicate element"+arr[i]);
            console.log(arr[i]);
            count++;
        }
    }
}
console.log("Total duplicate element in array are "+count);