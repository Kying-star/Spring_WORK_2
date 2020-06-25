window.onload=function(){
    var carousel=document.getElementById('carousel');
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
            if( parseInt(list.style.left)> -4800){
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
    carousel.onmousemove=function(){
        console.log('自动轮播停止');
        
        clearInterval(time)
    }
    // 鼠标移出开启定时器
    carousel.onmouseout=function(){
        play();
    }
}