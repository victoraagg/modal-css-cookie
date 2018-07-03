$( document ).ready(function() {

    var cookieName = 'modal-window-promo';

    if (!(Cookies.get(cookieName))){
        $('.modal-window').show(100);
    }
    
    // Close on click and "esc" keyboard
    $('.modal-close').click(function(e){
        e.preventDefault();
        $('.modal-window').hide();
        Cookies.set(cookieName, 'true', {expires: 1});
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $('.modal-window').hide();
            Cookies.set(cookieName, 'true', {expires: 1});
        }
    });
    
});