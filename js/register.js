/**
 * Created by 123 on 2017/7/23.
 */
$(function(){
    var username ="";
    var password = "";
    var confirmPwd = "";
    var email = "";
    var leibie = "";
    //封装函数
    //验证姓名是否为空
    check(username,"用户名");
    $("#username").keyup(function(){
        username = $(this).val();
        check($(this),"用户名",username);
    });
    function check(lei,txt,val){
        if(val == ""){
            $(lei).next().html(txt+"不能为空");
        }else{
            $(lei).next().html("");
        }
    }
    $("#password").keyup(function(){
        password = $(this).val();
        check($(this),"密码",password);

    });
    $("#confirmPwd").keyup(function(){
        confirmPwd = $(this).val();
        check($(this),"确认密码",confirmPwd);

    });
    $("#email").keyup(function(){
        email = $(this).val();
        check($(this),"邮箱",email);
    });
   $("button").click(function(){
       check($("#username"),"用户名",username);
       check($("#password"),"密码",password);
       check($("#confirmPwd"),"确认密码",confirmPwd);
       check($("#email"),"邮箱",email);

       // if(username == ""){
       //     $("#username").next().html("用户名不能为空");
       // }else{
       //     $("#username").next().html("");
       // }
   }) 
});