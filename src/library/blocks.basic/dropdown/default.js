$(document).ready(function() {
  $(".dropdown").click(function(){
    $(this).find(".dropdown__content").slideToggle();
    $(this).find(".dropdown__title").toggleClass("dropdown__title_highlight");
    $(this).find(".icon").toggleClass("icon_chevron-down icon_chevron-up");
  });
});