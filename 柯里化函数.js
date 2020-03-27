// eslint-disable-next-line no-unused-vars
var save = function(fun){
    var num = [];

    return function(){
        if(arguments.length === 0){
            return fun.apply(this, num);
        }else{
            [].push.apply(num,arguments);
            return arguments.callee;
        }
    }
}
var add = (function(){
    var sum = 0;
    return function(){
        for(var i=0;i<arguments.length;i++){
            sum+=arguments[i];
        }
        return sum;
    }
})();

 add = save(add);
 add(100);
 add(200);
 console.log(add());