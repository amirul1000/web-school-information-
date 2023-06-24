


var linkRef = '<a  target="_blank" href="';

function getNewsUpdates(pathval) {
   var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    getNotices(16);
    getNotices(7);
    function getNotices(typeVar) {
        $.ajax({
            //url: "http://localhost:12857/api/contentdetailfront?type=" + typeVar,
            //url: "http://203.112.220.200/buet_api/api/contentdetailfront?type=" + typeVar,
            url: pathval + "contentdetailfront/NoticesFrontIndex?type=" + typeVar,
            type: "Get",
            success: function (data) {
                var table = $("<table/>").addClass("table table-hover table-borderless");
                $.each(data.Data,
                    function (i, val) {
                        var row = $("<tr/>");
                        row.append($("<td/>")
                            .html(linkRef +
                                baseUrl +
                                '/NewsEvent#/contentdetail/' +
                                val.ContentDetailId +
                                '">' +
                                val.DisplayTitle +
                                '</a>'));
                        table.append(row);
                    });
                if (typeVar === 16) {
                    $("#diplayPanel").html(table);
                } else {
                    $("#diplayPanel2").html(table);
                }

            },
            error: function (msg) { console.log(msg); }
        });
    }

}

function getApiPath() {
    var result = "";
    $.ajax({
        url: "../OtherStat/GetApiPath",
        async: false,
        success: function (data) {
            result = data;
        }
    });
    return result;
  
}
function getSystemUptime() {
    var url = "..//Home/GetSystemUptime";
    $.get(url, null, function (data) {
        console.log(data);
        //$("#totalAdmittedStudent").html(data);
    });
}
function getSliderReady() {
    setInterval(function () {
        $('#slider .next').trigger('click');
    },
                   4000);
}
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-93038816-1', 'auto');
ga('send', 'pageview');



$(document)
    .ready(function () {
        getSystemUptime();
        getSliderReady();
       //var pathval= getApiPath();
       //getNewsUpdates(pathval);
    });