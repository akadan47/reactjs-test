$(document).ready(function() {
  
  // Клик по radio кнопкам в формате button
  $('button.radio').bind('click', function(event) {
    var radioButton = $(this),
        group = radioButton.attr('name'),
        link = radioButton.attr('data-link');
    if(radioButton.hasClass('active')){
      radioButton.removeClass('active');
      $('#'+link).removeClass('tab__item_active');
    } else {
      radioButton.parent().find('.active').removeClass('active');
      radioButton.addClass('active');
      switchTabs(link);
    }
    event.preventDefault();
  });

  // Клик по radio кнопкам в формате input[type="radio"]
  $('.radio__input').change(function(event) {
    var radioInput = $(this),
        group = radioInput.attr('name'),
        link = radioInput.attr('data-link');
    if(!radioInput.prop(':checked')){
      switchTabs(link);
    }
  });

});