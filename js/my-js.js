
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



$(document).ready(function(){
    var hashVal = window.location.hash.split("#")[1];
    if(hashVal){
        $('#' + hashVal +'-list').click();
        window.history.pushState("object or string", "Tips", window.location.href.split("#")[0]);
        
    }
    
    
});

$('#btn-email').click(function(){
    console.log("sono qui");
    
    Email.send({
        
        Host : "smtp.elasticemail.com",
        Username : "digital.driven.ideation.methods@gmail.com",
        Password : "a90cbf78-1bc9-4bea-bd3f-775e806cb430",
        To : $('#exampleInputEmail1').val(),
        From : "digital.driven.ideation.methods@gmail.com",
        Subject : "This is the real subject",
        Body : "<h2>This is a reminder!</h4><br><h3>Check out <a href=\"www.ddim.it\">www.ddim.it<a> from your desktop device</h4>"
        
    }).then(function(message){
        if(message === "OK")
            $('#modal-email').modal('toggle')
        else
            console.log(message)
    });
   
    
});



