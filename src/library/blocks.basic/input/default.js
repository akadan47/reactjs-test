$(document).ready(function() {
  
  $('.input').each(function(index, el) {
    $(this).blur(function(event) {
      if($(this).val().length){
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });

});