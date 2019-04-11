
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
        Subject : "Reminder - Digital Driven Ideation Methods",
        Body : "<h2>Hey! :)<br></h2><h4>This is a reminder, to Check out <br><a href=\"www.ddim.it\">www.ddim.it<a><br>from your desktop device</h4>"
        
    }).then(function(message){
        if(message === "OK")
            $('#modal-email').modal('toggle')
        else
            console.log(message)
    });
   
    
});


$('#download-img').click(function(){
    console.log("sono qui");
    
    $.get( "./prova.csv", function(data) {
        data = data.split("\n");
        var item = data[Math.floor(Math.random()*data.length)];
        
        var link = document.createElement('a');
        link.href = item;
        var win = window.open(item, '_blank');
        win.focus();
        
        });
});

$('#download-hash').click(function(){
    console.log("sono qui");
    
    $.get( "./prova-text.csv", function(data) {
        data = data.split("\n");
        var item = data[Math.floor(Math.random()*data.length)];
        
        $('#modal-hashtag').modal('toggle');
        $('#hashtag-random').text(item);
        
        });
});


