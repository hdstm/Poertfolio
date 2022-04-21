$(document).ready(function() {
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        console.log(position);    
        if(position>100){
        $('.navbar').addClass('nav-bg-dark');
        $('.navbar').removeClass('nav-back');
        $('.fas').removeClass('big-icon');
        $('.fas').addClass('small-icon');
        }else{
        $('.navbar').removeClass('nav-bg-dark');
        $('.navbar').addClass('nav-back');
        $('.fas').removeClass('small-icon');
        $('.fas').addClass('big-icon');
        }
    });
});