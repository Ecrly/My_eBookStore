
	$(document).ready(function(e) {
		$("#submit_regist").click(
			function ()
			{
				var name = $("#namee_regist").val();
				var password = $("#passworde_regist").val();
				var repassword = $("#repassworde_regist").val();
				if(name == "" || password == "" || repassword == "")
                {
                    alert("请填完整呀~");
                    return false;
                }
                else
                {
                    if(password == repassword)
                    {
                        $.post("/regist/",{'name': name, "password": password}, function (ret) {
                        	if(ret =="is___exist")
							{
								alert("用户名已存在了，再想一个呗~");
							}
							else
							{
								alert("恭喜注册成功！");
								$(".after_login").css("display","block");
                               	$(".before_login").css("display","none");
								$(".user_name_after_login").html(ret);
                                $("#close_regist").click();
							}
                        })
                        return true;
                    }
                    else
                    {
                        alert("两遍密码不一致，请重新输入");
                        return false;
                    }
                }

			}
		)
		$("#logout").click(
			function () {
				$.post("/logout/", function () {
					$(".after_login").css("display","none");
					$(".before_login").css("display","block");
                })
            }
		)
		$("#submit_login").click(
			function ()
			{
				var name = $("#namet_login").val();
				var password = $("#passwordt_login").val();
				if(name == "" || password == "")
                {
                    alert("请填完整呀~");
                    return false;
                }
                else
                {
                        $.post("/login/",{'name': name, "password": password}, function (ret) {
                        	if(ret =="is___wrong")
							{
								alert("用户名或密码错误");
								return false;
							}
							else
							{
								$(".after_login").css("display","block");
                               	$(".before_login").css("display","none");
								$(".user_name_after_login").html(ret);
                                $("#close_login").click();
							}
                        })
                }
			}
		)
    });