$(document).ready(function () {

    $('#mobileImageBox').addClass('animate__animated animate__slideInLeft')
    $('#services_row').fadeOut();
    $('#productRow').fadeOut()
    setTimeout(function(){
        $("#mobileImageBox").addClass(' animate__bounce ');
      } , 200)
    $(window).scroll(()=>{
        var scrollPosition = $(document).scrollTop();
        console.log(scrollPosition)



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