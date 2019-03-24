
$(window).on("load",(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });



$('.btn-2 a').click(function(){
        $('.btn-2 .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
}));

/* prova tips */
/*
$('#myList a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})
*/

$(document).ready(function(){
    var hashVal = window.location.hash.split("#")[1];
    if(hashVal){
        $('#' + hashVal +'-list').click();
        window.history.pushState("object or string", "Tips", window.location.href.split("#")[0]);
        
    }
});