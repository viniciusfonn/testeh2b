  $('.carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });



  $('.menu-burguer').click(function(){
    $(this).toggleClass('active');
    $('.menu-mobile').toggleClass('active');
  });


  $(".imagem").mouseover(function(event){
    $(".texto").addClass("ver-texto");
 });

 $(".imagem").mouseout(function(event){
  $(".texto").removeClass("ver-texto");
});

// 
$(".imagem").mouseover(function(event){
  $(".remove").removeClass("subtitulo");
});

$(".imagem").mouseout(function(event){
  $(".remove").addClass("subtitulo");
});