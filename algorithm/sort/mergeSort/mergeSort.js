



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
   if (l < left.length) {

   }
   if (r < right.length){

   }
   return result;
};



function merge(left,right){

  return left.concat(right);
};


function main() {
  return arr;
};