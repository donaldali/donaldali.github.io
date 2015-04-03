
$(function() {
  $(".fancybox").fancybox({
    openEffect  : 'elastic',
    closeEffect : 'elastic',
    padding     : 3,
    margin      : 15,

    helpers: {
      overlay: {
        locked: false
      }
    }
  });
});
