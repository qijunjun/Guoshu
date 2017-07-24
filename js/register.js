/**
 * Created by 123 on 2017/7/23.
 */
$(function(){
    var username ="";
    var password = "";
    var confirmPwd = "";
    var email = "";
    var userInfo = $(".userInfo");
    var passwordInfo = $(".passwordInfo");
    var confirmInfo = $(".confirmInfo");
    var emailInfo = $(".emailInfo");
    //用户名必须是以字母数字下划线开头，5到15位
    var reg = /^\w{5,15}$/i;
    var regPassword = /^[a-zA-Z0-9@\$\*\.\!\?]{6,16}$/;
    var regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    //封装函数,验证输入框是否为空
    function check(lei,txt,val){
        if(val == ""){
            $(lei).next().html(txt+"不能为空");
            return false;
        }else{
            $(lei).next().html("");
        }
    }
    $("#username").keyup(function(){
        username = $(this).val();
        //首先验证用户名是否为空
        check($(this),"用户名",username);
        if(!reg.test(username)){
            $(this).next().html("用户名必须以字母、下划线、数字开头，请检查！");
            return false;
        }
    });
    $("#password").keyup(function(){
        password = $(this).val();
        check($(this),"密码",password);
        if(!regPassword.test(password)){
            $(this).next().html("密码长度为6-16位，请检查！");
            return false;
        }
        //验证密码是否一致
        if(password != confirmPwd){
            confirmInfo.html("确认密码和密码不一致，请检查！");
            return false;
        }

    });
    $("#confirmPwd").keyup(function(){
        confirmPwd = $(this).val();
        check($(this),"确认密码",confirmPwd);
        //验证密码是否一致
        if(password != confirmPwd){
            confirmInfo.html("确认密码和密码不一致，请检查！");
            return false;
        }

    });
    $("#email").keyup(function(){
        email = $(this).val();
        check($(this),"邮箱",email);
        if(!regEmail.test(email)){
            $(this).next().html("邮箱格式不正确，请检查！");
            return false;
        }else{
            $(this).next().html("");
        }
    });
    $("#checkbox").click(function(){
        if($(this).prop("checked") == false){
            $(".tip").html("请勾选同意！");
        }else{
            $(".tip").html("");
        }
    });
   $("button").click(function(){
       //点击按钮提交前验证内容是否为空
       check($("#username"),"用户名",username);
       check($("#password"),"密码",password);
       check($("#confirmPwd"),"确认密码",confirmPwd);
       check($("#email"),"邮箱",email);
       if(!reg.test(username)){
           userInfo.append(" 用户名必须以字母、下划线、数字开头的5到15位字符。请检查");
           return false;
       }
       //验证密码是否一致
       if(password != confirmPwd){
           confirmInfo.html("确认密码和密码不一致！请检查");
           return false;
       }
       if(!regPassword.test(password)){
           passwordInfo.html("密码长度为6-16位，请检查！");
           return false;
       }
       //验证邮箱格式是否正确
       if(!regEmail.test(email)){
           emailInfo.html("邮箱格式不正确，请检查！");
           return false;
       }
       if($("#checkbox").prop("checked") == false){
           $(".tip").html("请勾选同意！");
           return false
       }else{
           $(".tip").html("");
       }
       console.log($(".error").html()=="");
      if($(".error").html() == ""){
            $.ajax({
                url:"接口",
                type:"post",
                dataType:"json",
                data:{name:username,password:password,email:email}
            }).done(function(data){

            }).fail(function(err){
                console.log(err);
            })
      }

   }) 
});