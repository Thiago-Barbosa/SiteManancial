var elements = ".s1, .s2, .s3"

$(document).ready(function(){
    //DA FOCO AO PRIMEIRO SLIDE
    $(".s1").click(function(){
      $(elements).removeClass("active");
      $(".s1").addClass( "active" );
      
        $(".image1").animate({left: '0vw', opacity: 1});
        $(".image2, .image3").animate({left: '-110vw', opacity: 0});
    });
    // DA FOCO AO SEGUNDO SLIDE
    $(".s2").click(function(){
      $(elements).removeClass("active");
      $(".s2").addClass("active");
      
        $(".image2").animate({left: '0vw', opacity: 1});
        $(".image1, .image3").animate({left: '-110vw', opacity: 0});
    });
    //DA FOCO AO TERCEIRO SLIDE
    $(".s3").click(function(){
      $(elements).removeClass("active");
      $(".s3").addClass("active");
      
        $(".image3").animate({left: '0vw', opacity: 1});
        $(".image1, .image2").animate({left: '-110vw', opacity: 0});
    });
});