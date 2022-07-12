$(document).ready(function() {
    $('.headerBurger').click(function(event){
        $('.headerBurger,.burgerMenu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});