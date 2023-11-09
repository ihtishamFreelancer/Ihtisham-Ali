$(document).ready(function () {
  
    $(".one").click(function (){
      $(this).addClass("active").siblings().removeClass("active");
    });
  });
  