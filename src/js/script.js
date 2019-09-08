$(document).ready(function(){
  
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    autoplay: 20000,
    gap: 0
  }).mount()

  var text1 = click('#text1', '.message1');
  var text2 = click('#text2', '.message2');
  var text3 = click('#text3', '.message3');

  function click(id, message){
    return $(id).click(function(){

      $('.box-tab__text__item').removeClass('active');

      $('.box-tab__menu__item').removeClass('selected');

      $('.box-tab__menu__item p i').removeClass('fa-chevron-down');

      $('.box-tab__menu__item p i').addClass('fa-chevron-up')

      $(message).addClass('active');

      $(this).addClass('selected');

      $('.selected p i').removeClass('fa-chevron-up');

      $('.selected p i').addClass('fa-chevron-down');
    })
  }
});
