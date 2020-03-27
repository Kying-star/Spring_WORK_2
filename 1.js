var arr = [1,2,[3,4,[5,6,[7,8]]],9,[10]];
/////////////////////////////////////////循环嵌套取出每个数字，用另一个数组装
// var arr2 = [];
// var Flatten_array1 = (arr)=>{
//     for(var i=0;i<arr.length;i++){
//         if(typeof arr[i] === "object"){
//             Flatten_array1(arr[i]);
//         }else{
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
// }
// Flatten_array1(arr);
// console.log(arr2);
/////////////////////////////////////////
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

console.log(flattenMd(arr));
