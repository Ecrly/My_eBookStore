/**
 * Created by Guess on 2017/6/28.
 */
function create_table(type, elems, target) {
    if(type == "books")
    {
        if(elems.length == 0) {
            //var str = "{% include 'Store/Base/Content/Not_found.html' %}";

            var str = "Not Found";
        }
        else
        {
            var str = "";
             var table =  "<table class='table table-hover'>";
             var endtable = "</table>";
             var table_top = "<thead> <tr> <th>书名</th> <th>价格</th> </tr> </thead>";
             var tbody = "<tbody>";
             var endtbody = "</tbody>";
             var tr = "<tr>";
             var endtr = "</tr>";
             var td_with_class = "<td class='book_detail'>";
             var td = "<td>";
             var endtd = "</td>";
             str += table + table_top + tbody;
            for(var i = 0; i < elems.length; i++)
            {
                str += tr + td_with_class + elems[i]['name'] + endtd + td + elems[i]['price'] + endtd;

            }
            str += endtbody + endtable;
            //$(target).html(str);
        }
        $(target).html(str);
    }
    if(type == "news")
    {
        var str = "";
             var table =  "<table class='table table-hover'>";
             var endtable = "</table>";
             var tbody = "<tbody>";
             var endtbody = "</tbody>";
             var tr = "<tr>";
             var endtr = "</tr>";
             var td = "<td>";
             var endtd = "</td>";
             str += table + tbody;
             str += "<thead> <tr> <th>最新动态</th>  </tr> </thead>"
            for(var i = 0; i < elems.length; i++)
            {
                str += tr + td + elems[i]['content']  + endtd + endtr;
            }
            str += endtbody + endtable;
            //alert(str);
            $(target).html(str);
    }
    if(type == "information")
    {

    }
}
