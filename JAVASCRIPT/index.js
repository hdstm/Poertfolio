document.getElementById("year").innerHTML = new Date().getFullYear();
$(document).ready(function() {
    $('.banner').addClass('typewriter');
    // write animation 
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        //console.log(position);    
        if(position<117){
        $('.banner').addClass('typewriter');
        }else{
        $('.banner').removeClass('typewriter');
        }
    });

            // slide top animation 
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        console.log(position);
        if(position>=450 && position<=2300){
        $('.card').addClass('slide-top');
        $('.card2').addClass('scale-up-center');
        }else{
        $('.card').removeClass('slide-top');
        $('.card2').removeClass('scale-up-center');
        }
        });

            // zoom in animation 
            $(window).scroll(function(){
                let position = $(this).scrollTop();
                console.log(position);
                if(position>=1199 && position<=2338){
                $('.project-backround').addClass('kenburns-top');
                }else{
                $('.project-backround').removeClass('kenburns-top');
                }
                });
            // progress bar in animation 
            $(window).scroll(function(){
                let position = $(this).scrollTop();
                console.log(position);
                if(position>=1840 && position<=4301){
                $('div.progress-bar').addClass('scale-up-hor-left');
                }else{
                $('div.progress-bar').removeClass('scale-up-hor-left');
                }
                });
        
            // img owner animation 
            $(window).scroll(function(){
                let position = $(this).scrollTop();
                console.log(position);
                if(position>=2500 && position<=5431){
                $('.owner-img').addClass('puff-in-top');
                }else{
                $('.owner-img').removeClass('puff-in-top');
                }
                });

                // img owner animation 
                $(window).scroll(function(){
                let position = $(this).scrollTop();
                let width = screen.width;
                console.log(position);
                console.log("width : ",width);
                if(position>=2800 && position<=5431){
                $('.fa-2x').addClass('bounce-in-fwd');
                }else{
                $('.fa-2x').removeClass('bounce-in-fwd');
                }
                });

});