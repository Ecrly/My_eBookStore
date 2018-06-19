/**
 * Created by Guess on 2017/6/27.
 */
$(document).ready(function(e) {
    $(function(){
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            // 获取已激活的标签页的名称
            //var activeTab = $(e.target).text();
            var name = e.target.id;
            if(name == "computer" || name == "english"|| name == "others" )
            {
                    url = "/show/";
                    var target = ".contents_of_" + name;
                    $.post(url,{"type": name},function (ret) {
                    var elems= ret['elems'];
                    create_table("books", elems, target);
                })
            }
            if(name == 'search')
            {
                    var search_name = $("#search_name").val();
                    //alert(search_name);
                    $.post("/search/",{'name':search_name}, function (ret) {

                        var elems= ret['elems'];
                        var str = "";
                            target = ".contents_search_result";
                            create_table("books", elems, target);
                    })
            }
            if(name == "news")
            {
                $.post("/get_news/", function (ret) {
                        var elems= ret['elems'];
                        var target = ".contents_news";
                        create_table("news" ,elems, target);
                    })
            }
            if(name = "information")
            {
                $.post("/get_information/", function (ret) {
                   // var elem = ret['elem'];
                    var target = ".contents_of_information";
                   $(target).html(ret);
                   // create_table("information", elem, target);
                    //alert(elem['tel']);
                    //alert(session);
                })
            }
        });

        $(".listen").delegate(".book_detail","click",function(){

            var book_name = $(this).html();
			  //alert(book_name);
            var url = "/show_detail/?name="+ book_name;
            window.open(url);
			});
    });
});