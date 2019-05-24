$('#accordion').accordion();

$('.side').on('load', function() {
  $(this)
    .animate({marginLeft: '-50%'}, 3000, function() {
      $(this).css({transform: 'scaleX(-1)'});
    })
    .animate({marginLeft: '100%'}, 2000, function() {
      $(this).hide();
      $('.front').addClass('animate');
  });
});

$('h3').hover(
  function() {
    $(this).text($(this).data('title'))
  },
  function() {
    $(this).text($(this).data('initial'))
  }
);


$('a').on('click', function(e) {
  e.preventDefault();
  let dataAttr = $(this).data('initial');
  $(`section[data-initial="${dataAttr}"]`).show();
});
