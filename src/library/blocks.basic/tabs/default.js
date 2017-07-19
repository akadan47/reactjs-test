var switchTabs = function(el){
  el = '#'+ el;
  $(el).parent().find('.tab__item_active').removeClass('tab__item_active');
  $(el).addClass('tab__item_active');

}