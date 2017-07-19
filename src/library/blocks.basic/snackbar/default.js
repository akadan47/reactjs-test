$(document).ready(function() {

  $("*[data-link*='js-snackbar']").on("click", function () {
     showSnackbar($(this).data('link'));
  });

  function showSnackbar(snakbar_id) {
    var snackbar = $('#' + snakbar_id);
    var timeout = snackbar.data('timeout') || 3000;

    snackbar.addClass('snackbar_open');
    setTimeout(function(){
      snackbar.removeClass('snackbar_open');
    }, timeout);
    event.preventDefault();
  }

});