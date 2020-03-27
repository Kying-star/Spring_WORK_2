var arr = [1,2,[3,4,[5,6,[7,8]]]];
/////////////////////////////////////////循环嵌套取出每个数字，用另一个数组装
var arr2 = [];
var Flatten_array1 = (arr)=>{
    for(var i=0;i<arr.length;i++){
        if(typeof arr[i] === "object"){
            Flatten_array1(arr[i]);
        }else{
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
Flatten_array1(arr);
console.log(arr2);
/////////////////////////////////////////利用concat展开数组
function flattenMd(arr) {
    var result = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] instanceof Array) {
            result = result.concat(flattenMd(arr[i]));
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
}
var arr3=[1, [2, 3, [4, 5], 6], 7, 8];
console.log(flattenMd(arr3));
/////////////////////////////////////////利用展开符展开数组
// eslint-disable-next-line no-unused-vars
function deepFlatten(arr) {
   var flatten = (arr)=> [].concat(...arr);
    return flatten(arr.map(x=>Array.isArray(x)? deepFlatten(x): x));
}
var arr4 = [1, [2, 3, [4, 5], 6], 7, 8];
console.log(deepFlatten(arr4));


