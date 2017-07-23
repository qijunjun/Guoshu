/**
 * Created by 123 on 2017/7/22.
 */
$(function () {
   $.ajax({
       url:'data.json',
       type:'post',
       dataType:'json',
       success:function(data){
           if(data.code == 1){
               $("#username").html(data.result.username);
               $(".user_welcome").show();
               $(".user_login_link").hide();
           }

       },
       error:function(err){
           console.log(err);
       }
   }) 
});