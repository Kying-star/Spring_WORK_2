
//轮播图
window.onload=function(){
    var carousel=document.querySelector('.banner');
    var next=document.getElementById('next');
    var prev=document.getElementById('prev');
    var list=document.getElementById('list');
    var span=document.getElementById('slider_nav').getElementsByTagName('span');//获取span
    var spanIndex=1;//定义导航图标的下标
    var time;//定时器

    
    //    下一步
    next.onmousedown=function(){
        // 到达最后一张时跳回第一张
        if(parseInt(list.style.left)<= -4000){
                list.style.left = 0+'px'
                list.style.transition=''
        }
        next.onmouseup=function() {
            list.style.left = parseInt(list.style.left)+ -800 +'px'
            list.style.transition='1000ms'
            // 轮播图导航按钮跟随部分
            if(spanIndex < 5){
                spanIndex++
            }else{
                spanIndex=1
            }
            for(var i = 0; i < span.length; i++){
                span[i].className=''
                span[spanIndex-1].className='active'
                
            }
        
        }
            
        }
    // 上一步
    prev.onmousedown=function(){
        // 到达第一张时跳最后一张
        if(parseInt(list.style.left)> -800){
            list.style.left = -4000+'px'
            list.style.transition=''
        }
        prev.onmouseup=function(){
            list.style.left = parseInt(list.style.left)+ 800 +'px'
            list.style.transition='1000ms'

            // 轮播图导航按钮跟随部分
            if(spanIndex > 1){
                spanIndex--
            }else{
                spanIndex=5
            }
            for(var i = 0; i < span.length; i++){
                span[i].className=''
                span[spanIndex-1].className='active'
                
            }
        }
    }
    // 轮播图导航按钮点击
    for(var i = 0; i < span.length; i++){
        span[i].index=i+1
        span[i].onclick=function(){
            for(var i = 0; i < span.length; i++){
            span[i].className=''
            this.className='active'
            }
            list.style.left = -800*this.index+'px' //点击导航按钮时跳到指定图片
            spanIndex=this.index//重新指定span的下标为当前所点击元素的下标
        }

    }
 // 实现轮播图自动播放
    function play(){
        time=setInterval(function(){
            if( parseInt(list.style.left)>= -4000){
                list.style.left = parseInt(list.style.left)+ -800 +'px'
                list.style.transition='1000ms'

            // 轮播图导航按钮跟随部分
                if(spanIndex < 5){
                    spanIndex++
                }else{
                    spanIndex=1
                };
                for(var i = 0; i < span.length; i++){
                    span[i].className=''
                    span[spanIndex-1].className='active'
                };
            }else if(parseInt(list.style.left)< -4000){
                list.style.left =  -800 +'px'
                list.style.transition=''
            }
        },3000)
    }
    // 鼠标移入停止，移出播放
    play();//初始为自动播放
            
    // 鼠标移入清除定时器
    carousel.onmousemove=()=>{
        clearInterval(time);
    }
    // 鼠标移出开启定时器
    carousel.onmouseout=()=>{
        play();
    }
}




//懒加载 

var viewHeight =  window.innerHeight;
var seenheight = document.documentElement.clientHeight;
console.log(viewHeight);
console.log(seenheight);


function inSight(el){
    
    return el.getBoundingClientRect().top < viewHeight;
}

function loadImg(el){
    if(el.src){
        el.src = el.dataset.original;
    }
}

function checkImgs(){
    const imgs = document.querySelectorAll('.image-item')
    Array.from(imgs).forEach(el=>{
        if(inSight(el)){
            loadImg(el);
        }
    })
}

window.addEventListener('scroll',checkImgs,false);

//置顶
window.addEventListener('scroll',debounce(toTop,300,false),false);

function toTop(){
    console.log(parseInt(document.documentElement.scrollTop));
    let heightTotop = parseInt(document.documentElement.scrollTop)
    let toTop = document.querySelector('.toTop');
    if(heightTotop>100){
        
        console.log(toTop)
        toTop.style.display = 'block';
    }else{
        toTop.style.display = 'none';
    }
}




//防抖
function debounce(func, wait,immediate) {
    
    let timeout;
    return function () {
        let args = arguments
        let context = this;
        clearTimeout(timeout);
        if (immediate) {
            callnow = !timeout;
            timeout = setTimeout(()=>{
                timeout = null;
            },wait)
            if(callnow) func.apply(context,args)
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args);
            }, wait);
        }

    }
}


