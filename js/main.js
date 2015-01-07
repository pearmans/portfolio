
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



//-----------------------

ccboards = {};
ccboards.img = [];
ccboards.img[0] = "/img/ccboard3.png";
ccboards.img[1] = "/img/ccboard1.png";
ccboards.img[2] = "/img/ccboard2.png";
ccboards.img[3] = "/img/ccad.png";
ccboards.num = 0;

stubrew = {};
stubrew.img = [];
stubrew.img[0] = "/img/stubrewbottlefront.jpg";
stubrew.img[1] = "/img/stubrewnight.png";
stubrew.img[2] = "/img/stubrewfall.png";
stubrew.img[3] = "/img/stubrewice.png";
stubrew.img[4] = "/img/stubrewcaps.png";
stubrew.img[5] = "/img/stubrewbottleside.jpg";
stubrew.num = 0;


function carouselplus (cClass, cArray) {
    if (cArray.num < cArray.img.length - 1 ) {cArray.num += 1;} else {cArray.num = 0;}
    $("#" + cClass + " img").attr('src', cArray.img[cArray.num]);
}

function carouselminus (cClass, cArray) {
    if (cArray.num > 0) {cArray.num -= 1;} else {cArray.num = cArray.img.length - 1;}
    $("#" + cClass + " img").attr('src', cArray.img[cArray.num]);
}