function menuClick(event) {
     $('.left-main').addClass('animation');
     $('.title').addClass('animation-title-left');
     $('.half-circle').addClass('animation-circle');
}

function afterMenuClick() {
     $('.title').on('animationend', function(e) { 
          $('.title').css('align-self', 'start');
     });
     $('.left-main').on('animationend', function(e) { 
          $('.left-main').css('width', '17%');
          $('.right-main').css('width', '83%');
     });
     $('.half-circle').on('animationend', function(e) { 
          $('.half-circle').css({'margin-top': '2.2em', 'align-self': 'start'});
     });
}

function onReady() {
     // $('.title-header').hide();
     // $('.menu-list-item').click(menuClick);
     // afterMenuClick();
}


$('document').ready(onReady);
