/**
 * Created by 123 on 2017/7/23.
 */
$(function(){
    $("#search").keyup(function(){
        var keyword = $(this).val();
        if($.trim(keyword).length == 0){
            return false;
        }
        $.ajax({
            url:"https://sug.so.360.cn/suggest?",
            type:"get",
            dataType:"jsonp",
            data:{word:keyword}
        }).done(function(data){
            if(data.p == true){
                var str = "";
                if(data.s.length>0){
                    for(var i=0;i<data.s.length;i++){
                        str +="<li>"+data.s[i]+"</li>";
                    }
                    $(".search_content").html(str);
                    $(".search_content").show();
                }else{
                    $(".search_content").html("");
                    $(".search_content").hide();
                }
            }
            console.log(data)
        }).fail(function(error){
            console.log("error");
        })
    });
    $(".search_content").delegate("li","click",function(){
       $("#search").val($(this).html());
        $(this).parent().hide();
    })
});