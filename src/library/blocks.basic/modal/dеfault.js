$(document).ready(function () {
  var modalWrapper = $('.modal-wrapper');
  var modal = $('.modal');
  var overlay = $('.overlay');
  var page = $('.page');

  $("*[data-link*='js-modal']").on("click", function () {
    openModal($(this).data('link'));
  });

  modal.click(function(event){
    event.preventDefault();
  })

  function closeModal(modal_id) {
    console.log('close ', modal_id);

    var modal = $('#' + modal_id);

    overlay.fadeOut(200, function () {
      modal.addClass('modal-wrapper_hidden').animate({opacity: 0}, 100);
    });

    overlay.addClass('overlay_hidden');
    page.removeClass('page_hidden');
  }

  function openModal(modal_id) {
    console.log('open ', modal_id);

    var modal = $('#' + modal_id);
    var modal_close = $('.modal__close', modal);

    overlay.fadeIn(200, function () {
      modal.removeClass('modal-wrapper_hidden').animate({opacity: 1}, 100);
    });

    overlay.removeClass('overlay_hidden');
    page.addClass('page_hidden');

    modalWrapper.unbind("click").bind("click", function (event) {
      if (!event.isDefaultPrevented())closeModal(modal_id)
    });

    modal_close.unbind("click").bind("click", function (event) {
      closeModal(modal_id)
    });

    if (!$("div").is(".overlay")) {
      console.error('Block "overlay" not found on a page.');
    }
  }

});