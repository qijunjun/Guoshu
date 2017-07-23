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
    var reg = /^\w/;
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
            $(this).next().html("用户名必须以字母、下划线、数字开头。请检查");
            return false;
        }
    });
    $("#password").keyup(function(){
        password = $(this).val();
        check($(this),"密码",password);
        //验证密码是否一致
        if(password != confirmPwd){
            confirmInfo.html("确认密码和密码不一致！请检查");
            return false;
        }

    });
    $("#confirmPwd").keyup(function(){
        confirmPwd = $(this).val();
        check($(this),"确认密码",confirmPwd);
        //验证密码是否一致
        if(password != confirmPwd){
            confirmInfo.html("确认密码和密码不一致！请检查");
            return false;
        }

    });
    $("#email").keyup(function(){
        email = $(this).val();
        check($(this),"邮箱",email);
    });
   $("button").click(function(){
       //点击按钮提交前验证内容是否为空
       check($("#username"),"用户名",username);
       check($("#password"),"密码",password);
       check($("#confirmPwd"),"确认密码",confirmPwd);
       check($("#email"),"邮箱",email);
       if(!reg.test(username)){
           userInfo.append(" 用户名必须以字母、下划线、数字开头。请检查");
           return false;
       }
       //验证密码是否一致
       if(password != confirmPwd){
           confirmInfo.html("确认密码和密码不一致！请检查");
           return false;
       }
   }) 
});