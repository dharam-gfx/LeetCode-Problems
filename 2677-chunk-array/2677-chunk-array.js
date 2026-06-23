/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let newArr= [];
    let n= 1; 
    let temparr = [];
    for(let i =0 ; i<arr.length;i++){       
          temparr.push(arr[i]);
          if(size == n || arr.length-1==i){
            newArr.push(temparr);
            temparr=[];
            n=0;
          }
           ++n;

    }
    return newArr
};
