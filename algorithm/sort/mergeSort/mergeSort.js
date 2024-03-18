



function mergeSort(arr){
   if (arr.length<=1){
      return arr;
   };
   let mid = math.floor(arr.length/2)
   left = arr.slice(0,mid)
   right = arr.slice(mid+1,arr.length);
   let left = mergeSort(arr.slice(0,mid));
   let right = mergeSort(arr.slice(mid+1,arr.length));
   let l =0;
   let r = 0;
   let result = new Array();
   while(l < left.length && right < right.length){
      if (left[l] < right[r]){
        resutl.push(left[l]);
      } else {
        result.push(right[r]);
      };
   }
   if (l < left.length-1) {
     result.push(left.slice(l,left.length));
   }
   if (r < right.length-1){
      result.push(right.slice(r,right.length));
   }
   return result;
};



function main(){
   arr = [9, 2, 1, 10, 22, 14, 7, 89, 15, 0];
   //console.log(mergeSort(arr));
   console.log(arr.slice(0,arr.length))
};


main();
