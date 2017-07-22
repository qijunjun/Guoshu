/**
 * Created by 123 on 2017/7/22.
 */
$(function(){
    //声明变量
    var $li = $(".list");
    var points = $(".points");
    var liLen = $li.length;
    //即将要点击的点（即将要过来的li）
    var nowLi =0;
    //即将要离开的(即将要离开的li),可以通过类active前面的所有li的长度来确定要离开的li的索引值
    var prevLi = 0;
    var str = "";
    var timer = "";
    //动态添加按点列表
    for(var i=0;i<liLen;i++){
        str += "<li></li>";
    }
    points.append(str);
    points.children().eq(0).addClass("active");
    //自动切换幻灯片
     timer = setInterval(autoplay,4000);
    //当鼠标滑到图片上时，停止播放，离开后自动播放，可以使用hover也可以使用mouseenter和mouseleave
    $(".slide").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(autoplay,4000);
    });
    function autoplay(){
        prevLi = $(".active").prevAll().length;
        nowLi = prevLi+1;
        points.children().eq(nowLi).addClass("active").siblings().removeClass("active");
        //点击到最后一张幻灯片了
        if(nowLi > liLen-1){
            $li.eq(0).css({left:750}).animate({left:0});
            $li.eq(prevLi).animate({left:-750});
            points.children().eq(0).addClass("active").siblings().removeClass("active");
        }else{
            move(prevLi,nowLi);
        }
    }
    //幻灯片切换
    function move(prevLi,nowLi){
        //判断prevLi和nowLi的大小，来确定幻灯片往哪边移动
        if(prevLi == nowLi){
            return false;
        }else if(prevLi<nowLi){
            //比如所在位置为第1个，此时点击第4个按钮
            $li.eq(prevLi).animate({left:-750});
            $li.eq(nowLi).css({left:750}).animate({left:0});
        }else{
            //比如当前所在的位置为3，此时点击第2个按钮，需要往右滑
            $li.eq(prevLi).animate({left:750});
            $li.eq(nowLi).css({left:-750}).animate({left:0});
        }
    }
    //点击点点切换幻灯片
    points.delegate("li","click",function(){
        prevLi = $(".active").prevAll().length;
        nowLi = $(this).index();
        move(prevLi,nowLi);
        points.children().eq(nowLi).addClass("active").siblings().removeClass("active");

    });
    //点击下一个切换幻灯片
    $(".next").click(function(){
        prevLi = $(".active").prevAll().length;
        nowLi = prevLi+1;
        points.children().eq(nowLi).addClass("active").siblings().removeClass("active");
        //点击到最后一张幻灯片了
        if(nowLi > liLen-1){
            $li.eq(0).css({left:750}).animate({left:0});
            $li.eq(prevLi).animate({left:-750});
            points.children().eq(0).addClass("active").siblings().removeClass("active");
        }else{
            move(prevLi,nowLi);
        }
    });
    //点击上一个切换幻灯片
    $(".prev").click(function(){
        prevLi = $(".active").prevAll().length;
        nowLi = prevLi-1;
        points.children().eq(nowLi).addClass("active").siblings().removeClass("active");
        move(prevLi,nowLi);

    })
});