/**
 * Created by Guess on 2017/6/30.
 */
 $(document).ready(function(e) {
        $.post('/test/', function (ret) {
            //alert(ret);
            if (ret == 'False') {
                $(".after_login").css("display", "none");
                $(".before_login").css("display", "block");
            }
            else {
                $(".after_login").css("display", "block");
                $(".before_login").css("display", "none");
                $(".user_name_after_login").html(ret);
            }
        })
        $("#submit_buy").click(
             function () {
                 {
                     $.post('/test/', function (ret) {
                         if(ret == "False")
                         {
                             $("#buy .modal-footer").css("display" , "none");
                             $("#buy .modal-title").html("啊哦")
                             $("#buy .modal-body").html("请先登录");
                         }
                         else
                         {
                             $("#buy .modal-footer").css("display" , "block");
                             $("#buy .modal-title").html("亲~请核对您的订单")
                            var book_name = $("#buy_book").html();
                            var price = $("#buy_price").html();
                            var user_name = ret;
                             $.post('/confirm/',{"user_name": user_name}, function (result) {
                                        var elem = result['elem'];
                                        //alert(elem['name']);
                                        var str = "";
                                        str += "用户名  ：" + elem['name'] + "<br>"+  "电话  ：" + elem['tel'] +"<br>" +  "收货地址  ：" + elem['address'] + "<br><br>";
                                        str += "书名：" + book_name + "<br>" + "价格：" + price + "<br>";
                                        $("#buy .modal-body").html(str);

                                        $("#submit_confirm").click(
                                            function () {
                                                    $.post('/order/',{"user_name": user_name, "book_name": book_name} ,function (result) {
                                                    alert("购买成功");
                                                    $("#close_confirm").click();
                                                })
                                            }
                                        )
                             })
                         }
                     })
                 }
              }
        )
    });