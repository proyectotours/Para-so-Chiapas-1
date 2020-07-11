let menuBtn = $('.toggle');
let menu = $('.navigation ul');

menuBtn.click(function() {
   if (menu.hasClass('active')) {
      menu.removeClass('active');
   } else {
      menu.addClass('active');
   }
});