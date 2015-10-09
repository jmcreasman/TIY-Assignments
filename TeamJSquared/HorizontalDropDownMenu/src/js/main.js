$('#avengers').click(function() {
  $('#avengers').toggleClass('cbp-hropen')
  $('#shield').removeClass('cbp-hropen')
  $('#fantastic').removeClass('cbp-hropen')
  $('#galaxy').removeClass('cbp-hropen')
  $('#xmen').removeClass('cbp-hropen')
});
$('#shield').click(function() {
  $('#shield').toggleClass('cbp-hropen')
  $('#avengers').removeClass('cbp-hropen')
  $('#fantastic').removeClass('cbp-hropen')
  $('#galaxy').removeClass('cbp-hropen')
  $('#xmen').removeClass('cbp-hropen')
});
$('#fantastic').click(function() {
  $('#fantastic').toggleClass('cbp-hropen')
  $('#shield').removeClass('cbp-hropen')
  $('#avengers').removeClass('cbp-hropen')
  $('#galaxy').removeClass('cbp-hropen')
  $('#xmen').removeClass('cbp-hropen')
});
$('#galaxy').click(function() {
  $('#galaxy').toggleClass('cbp-hropen')
  $('#shield').removeClass('cbp-hropen')
  $('#fantastic').removeClass('cbp-hropen')
  $('#avengers').removeClass('cbp-hropen')
  $('#xmen').removeClass('cbp-hropen')
});
$('#xmen').click(function() {
  $('#xmen').toggleClass('cbp-hropen')
  $('#shield').removeClass('cbp-hropen')
  $('#fantastic').removeClass('cbp-hropen')
  $('#galaxy').removeClass('cbp-hropen')
  $('#avengers').removeClass('cbp-hropen')
});
