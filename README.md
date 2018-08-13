本文是在前辈的基础上进行的使用方法的介绍：
翻书效果用的turn.js实现的；
前辈的GitHub网址[https://github.com/blasten/turn.js.git](https://github.com/blasten/turn.js.git)
前辈在脚本之家的例子；
[https://www.jb51.net/article/86900.htm](https://www.jb51.net/article/86900.htm)
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport"
    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>手机端书本翻页效果</title>


<link rel="stylesheet" href="css/basic.css" />
<script type="text/javascript" src="js/jquery.min.1.7.js"></script>
<script type="text/javascript" src="js/modernizr.2.5.3.min.js"></script>


</head>
<body>

<div class="flipbook-viewport">
  <div class="container">
    <div class="flipbook">
      <div style="background-image:url(pages/1.jpg) ;background-size:100%">
        <div id="re">renrnenrennre第一页n</div>
      </div>
      <div style="background-image:url(pages/2.jpg); background-size:100%"></div>
      <div style="background-image:url(pages/3.jpg) ;background-size:100%"></div>
      <div style="background-image:url(pages/4.jpg) ;background-size:100%"></div>
      <div style="background-image:url(pages/5.jpg) ;background-size:100%"></div>
      <div style="background-image:url(pages/6.jpg) ;background-size:100%"></div>
      <div style="background-image:url(pages/7.jpg); background-size:100%"></div>
      <div style="background-image:url(pages/8.jpg) ;background-size:100%"></div>
      <div style="background-image:url(pages/9.jpg) ;background-size:100%"></div>
      <div style="background-image:url(pages/10.jpg) ;background-size:100%"></div>
      <div style="background-image:url(pages/11.jpg) ;background-size:100%"></div>
      <div style="background-image:url(pages/12.jpg) ;background-size:100%">最后一页</div>
    </div>
  </div>
</div>

<script src="js/turn.js"> </script>
<script type="text/javascript">

function loadApp() {
  //自定义仿iphone弹出层
  (function ($) {
      //ios confirm box
      jQuery.fn.confirm = function (title, option, okCall, cancelCall) {
          var defaults = {
              title: null, //what text
              cancelText: '取消', //the cancel btn text
              okText: '确定' //the ok btn text
          };

          if (undefined === option) {
              option = {};
          }
          if ('function' != typeof okCall) {
              okCall = $.noop;
          }
          if ('function' != typeof cancelCall) {
              cancelCall = $.noop;
          }

          var o = $.extend(defaults, option, {title: title, okCall: okCall, cancelCall: cancelCall});

          var $dom = $(this);

          var dom = $('<div class="g-plugin-confirm">');
          var dom1 = $('<div>').appendTo(dom);
          var dom_content = $('<div>').html(o.title).appendTo(dom1);
          var dom_btn = $('<div>').appendTo(dom1);
          var btn_cancel = $('<a href="#"></a>').html(o.cancelText).appendTo(dom_btn);
          var btn_ok = $('<a href="#"></a>').html(o.okText).appendTo(dom_btn);
          btn_cancel.on('click', function (e) {
              o.cancelCall();
              dom.remove();
              e.preventDefault();
          });
          btn_ok.on('click', function (e) {
              o.okCall();
              dom.remove();
              e.preventDefault();
          });

          dom.appendTo($('body'));
          return $dom;
      };
  })(jQuery);

  $("#re").bind("touchend", function () {
      var pageCount = $(".flipbook").turn("pages");//总页数
      var currentPage = $(".flipbook").turn("page");//当前页
      $(document).confirm('您确定要返回首页吗?', {}, function () {
          $(".flipbook").turn('page', 1); //跳转页数
      }, function () {
      });
      if (currentPage >= 2) {
          $(".flipbook").turn('page', currentPage - 1);
      } else {
      }
  });
  console.log($(".flipbook").turn("page"));
  // Create the flipbook
  w = $(window).width();//窗口的宽度
  h = $(window).height()；//窗口的高度
  $('.flipbook').turn({
      // Width

      width:w,
      
      // Height

      height:h,

      // Elevation

      elevation: 50,
      display:"single",//可选择单页和双页
      
      // Enable gradients

      gradients: true, //是否渐变

      
      // Auto center this flipbook

      autoCenter: false //是否自动居中

  });
}
loadApp()
// Load the HTML4 version if there's not CSS transform

// yepnope({
//  test : Modernizr.csstransforms,
//  yep: ['js/turn.js'],
//  nope: ['js/turn.html4.min.js'],
//  both: ['css/basic.css'],
//  complete: loadApp
// });

</script>

</body>
</html>
```