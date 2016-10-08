/**
 * Created by xiongjiyuan on 16/9/20.
 */
//想写原生js代替目前的jquery，结果能力不足，只能改回来


switch (window.location.host) {
    case "tieba.baidu.com" :
        $(".iframe_wrapper").hide();
        $(".label_text").parent().hide();
        $(".video_frs_head").hide()//贴吧直播推广
        $(".game-head-game-info-wrapper").hide()
        $("[title=广告]").parent().parent().hide();
        break;

    case "www.baidu.com" :
        $("div[style$=important]").hide()//广告和推广
        $(".result-op").hide()// 带有结果的广告
        break;

    case "www.zhihu.com" :
        $(".shameimaru-link").hide();
        break;
}

// var baiduSearch=document.getElementsByClassName("result-op");
//
// function clean(e) {
//     for (i = 0; i < e.length; i++) {
//         e[i].style.display = "none";
//     }
//     console.log("clean"+e);
// }
//
// clean(baiduSearch);
//本来想用原生js代替jquery，写了一个之后发现第二个太难，决定改回jquery
//$("ul>li:not(.tl_shadow)").hide()//tieba.phone