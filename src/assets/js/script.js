$(document).ready(function () {

    $('#mobileImageBox').addClass('animate__animated animate__slideInLeft')
    $('#companyNameBox').addClass('animate__animated animate__slideInRight')
    
    $('#services_row').fadeOut();
    $('#productRow').fadeOut()
    
    $(window).scroll(()=>{
        var scrollPosition = $(document).scrollTop();
        
        if(scrollPosition>100 && scrollPosition<500){
            
              $("#services_row").fadeIn("slow") ;
              $(".imgBox").addClass('animate__animated animate__slideInLeft  ');

              $(".details").addClass('animate__animated animate__slideInRight');

        }
        if(scrollPosition>1000 && scrollPosition<1400){
            $("#productRow").fadeIn("slow")
            $("#productRow").addClass('animate__animated animate__flipInX')
        }
    })
    
});