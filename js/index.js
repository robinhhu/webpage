//Move the picture with mouse
$(document).mousemove (function (e) {
  e = e || window.event;
  var x = 0.5 - e.clientX / document.body.offsetWidth;
  var y = 0.1 - e.clientY / document.body.offsetHeight;
  $(".bbb").css("transform","translate(" + x * 50 + "px,"+ y * 50 + "px)");
});

//Transform the scale of photo
$(function () {
  $(".Type").mouseenter (function() {
    $(this).css("transform", "scale(1.06)");
  });

  $(".Type").mouseleave (function() {
    $(this).css("transform", "scale(1)");
  });
});

//Fade in for the home page
//Meanwhile the cursor is defined by myself
$(document).ready (function () {
  $(".None").hide();
  $(".None").fadeIn(3000);
  $("html").hover( function() {
    var a = document.getElementsByClassName("Home")[0];
    if (a != null){
      $("html").css("cursor","url(image/w1sclose.cur),default");
    }
    else {
      $("html").css("cursor","url(../image/w1sclose.cur),default");
    }
  });

  //When mouse move in, the paragraph emerge
  $(".center").hover( function() {
    $(this).css("opacity","1");
    $(this).css("background-color","rgba(255,255,255,0.3)");
  });
  $(".center").mouseleave( function() {
    $(this).css("opacity","0");
  });
});

//A highlight background for <b> tags
$(function () {
  $("b").hover (function () {
    $(this).css("background-image","linear-gradient(120deg, #fc0 0%, #fc0 100%)");
  });
  $("b").mouseleave (function () {
    $(this).css("background","none");
  });
});

//Local storage attemps
//And I store the number of times the page had been visited.
if (localStorage.pagecount)
{
	localStorage.pagecount = Number(localStorage.pagecount) + 1;
}
else
{
	localStorage.pagecount=1;
}
