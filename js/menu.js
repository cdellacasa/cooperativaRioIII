

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.height = "70%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
}

function cerrarNotiicacion(){
  document.getElementById("panel-notificacion").style.marginTop = "-20px";
}
  
$(document).ready(function(){

  window.sr = ScrollReveal({ reset: true });
  sr.reveal('.servicio', { duration: 1000 },50);
  sr.reveal('.noticia', { duration: 1000 },50);
  sr.reveal('#institucional', { duration: 1000 },50);

  var owlBanner = $("#owl-banner");
  var owlGaleria = $("#owl-galeria");

  owlGaleria.owlCarousel({
      center: true,
      items:1,
      loop:true,
      autoplay:true,
      margin:0,       
  });

  owlBanner.owlCarousel({
      center: true,
      items:1,
      loop:true,
      autoplay:true,
      margin:0,       
  });

  var $root = $('html, body');
  $('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 90
    }, 500);
    return false;
});

  $('.nav .cierre').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
  });


});







