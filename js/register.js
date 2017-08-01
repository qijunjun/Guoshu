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
    // var regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    var regEmail = /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;
    //upload.php返回的callback函数
    function callback(filename){
        $("#filename").val(filename);
        $("#up").val("已上传")
    }
    //封装函数,验证输入框是否为空，是否符合相应的正则表达式
    /*参数说明：
        1、lei表示选择的哪个input框
        2、txt表示输入框对应的文字
        3、val  输入的相关内容
        4、regLei 相应的正则表达式
        5、regInfo 相应的文字说明
    */
    function check(lei,txt,val,regLei,regInfo){
        //首先验证输入框是否为空
        if(val == ""){
            $(lei).next().html(txt+"不能为空");
            return false;
        }else{
            $(lei).next().html("");
            //其次验证是否符合相应的正则表达式
            if(!regLei.test(val)){
                $(lei).next().html(regInfo);
                return false;
            }else{
                $(lei).next().html("");
            }
        }
    }
    $("#username").keyup(function(){
        username = $(this).val();
        check($(this),"用户名",username,reg,"用户名必须以字母、下划线、数字开头，请检查！");
    });
    $("#password").keyup(function(){
        password = $(this).val();
        check($(this),"密码",password,regPassword,"密码长度为6-16位，请检查！");
        //验证密码是否一致
        if(password != confirmPwd){
            confirmInfo.html("确认密码和密码不一致，请检查！");
            return false;
        }
    });
    $("#confirmPwd").keyup(function(){
        confirmPwd = $(this).val();
        check($(this),"确认密码",confirmPwd,regPassword,"确认密码长度为6-16位，请检查！");
        //验证密码是否一致
        if(password != confirmPwd){
            confirmInfo.html("确认密码和密码不一致，请检查！");
            return false;
        }
    });
    $("#email").keyup(function(){
        email = $(this).val();
        check($(this),"邮箱",email,regEmail,"邮箱格式不正确，请检查！");
    });
    $("#checkbox").click(function(){
        if($(this).prop("checked") == false){
            $(".tip").html("请勾选同意！");
        }else{
            $(".tip").html("");
        }
    });
   $("#submit").click(function(){
       // event.preventDefault();
       // event.stopPropagation();
       //点击按钮提交前验证内容是否为空
       check($("#username"),"用户名",username,reg,"用户名必须以字母、下划线、数字开头，请检查！");
       check($("#password"),"密码",password,regPassword,"确认密码长度为6-16位，请检查！");
       check($("#confirmPwd"),"确认密码",confirmPwd,regPassword,"确认密码长度为6-16位，请检查！");
       check($("#email"),"邮箱",email,regEmail,"邮箱格式不正确，请检查！");
       //验证密码是否一致
       if(password != confirmPwd){
           confirmInfo.html("确认密码和密码不一致！请检查");
           return false;
       }
       if($("#checkbox").prop("checked") == false){
           $(".tip").html("请勾选同意！");
           return false
       }else{
           $(".tip").html("");
       }
      if($(".error").html() == ""){
            $.ajax({
                url:"接口",
                type:"post",
                dataType:"json",
                data:{name:username,password:password,email:email,photo:$("#filename").val()}
            }).done(function(data){

            }).fail(function(err){
                console.log(err);
            })
      }

   }) 
});