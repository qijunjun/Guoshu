/**
 * Created by 123 on 2017/7/23.
 */
$(function(){
    var username ="";
    var password = "";
    var userInfo = $(".userInfo");
    var passwordInfo = $(".passwordInfo");
    //用户名必须是以字母数字下划线开头，5到15位
    var reg = /^\w{5,15}$/i;
    var regPassword = /^[a-zA-Z0-9@\$\*\.\!\?]{6,16}$/;
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
    });
   $(".button").click(function(){
       //点击按钮提交前验证内容是否为空
       check($("#username"),"用户名",username,reg,"用户名必须以字母、下划线、数字开头，请检查！");
       check($("#password"),"密码",password,regPassword,"确认密码长度为6-16位，请检查！");
      if($(".error").html() == ""){
            $.ajax({
                url:"接口",
                type:"post",
                dataType:"json",
                data:{name:username,password:password}
            }).done(function(data){

            }).fail(function(err){
                console.log(err);
            })
      }

   }) 
});