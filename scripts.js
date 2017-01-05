$(document).ready(function() {

  $('.scene').parallax();

    $(window).on('mousemove', function(event) {

    var offsetX = 1 / $(window).width() * event.pageX * 30;
    var offsetY = 1 / $(window).height() * event.pageY * 30;

    $('.tile-image')
    .attr('y', offsetY)
    .attr('x', offsetX);



 });

});
