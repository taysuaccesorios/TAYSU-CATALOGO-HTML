$( document ).ready(function() {

    if (window.matchMedia("(max-width: 500px)").matches) {
        
        $('.responsive-media').attr('src', 'libro1/celular.html');
        } else {
        // Viewport is greater than 700 pixels wide
        }
})

