/**
 * Created by Guess on 2017/5/11.
 */

$(document).ready(
    function (e) {

        //循环菜单栏

        $(".uul li").each(function (index, element) {
            $(this).mouseover(function () {
                $(this).addClass("add_to_li").siblings().removeClass("add_to_li");
                $(".content ul li:eq(" + index + ")").show().siblings().hide();
                $(".img").hide();
                $.post('/show/',{'index': index}, function (dict) {
                    var a = dict['cao'];
                    var i;
                    var table = "<table>";

                    var str = "";
                    for(i = 0; i < a.length; i++)
                    {
                        str = str + "<tr>" +
                          "<td>" +  a[i]['name'] + "</td>" + "<td>" +  a[i]['author'] + "</td>" + "<td>" +  a[i]['price'] + "</td>" +
                                "<td>" +  a[i]['stock'] + "</td>"
                                + "</tr>";
                    }
                    $(".content ul li:eq(" + index + ")").html("<table class='en'>" + str + "</table>");
                })
            })
            $(this).mouseout(function () {
                $(this).removeClass("add_to_li");
                $(".content ul li:eq(" + index + ")").hide();
                $(".img").show();
            })
        })
        $(".content ul li").each(function (index, element) {
            $(this).mouseover(function () {
                $(this).show();
                 $(".uul li:eq("+ index +")").addClass("add_to_li");
                 $(".img").hide();
            })
            $(this).mouseout(function () {
                $(".uul li:eq("+ index +")").removeClass("add_to_li");
                $(this).hide();
                $(".img").show();
            })
        })

        //搜索框触发事件
        $(".submit").click(function () {
            var key = $(".text").val();
            $.post(/search/,{'key': key}, function (dict) {
                    var name = dict['name'];
                    if(name == 'null')
                    {
                        $(".main2").show();
                        $(".main").hide();
                        $(".result").html("哎呀，没有这本书哦").show();
                    }
                    else
                    {
                        $(".main2").show();
                        $(".main").hide();
                        $(".result").html(name).show();
                    }

            })
        })
        //框内返回
        $(".return").click(function () {
            $(".main2").hide();
            $(".main").show();
        })

    }
)
