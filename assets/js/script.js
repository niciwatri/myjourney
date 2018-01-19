$(document).foundation()

$(window).scroll(function() {   

    var scroll = $(window).scrollTop();

    $(".Ebenen").each(
   		function(index, element){
           	var offsetTop = $(element).offset().top;


           if (scroll >= offsetTop) {
               //$(".fixed").html($(element).html());
               //$(element).html().insertAfter( "#fixed .inner" );
               //$(element).css('opacity',0);
               //$(element).addClass("fixed");
               if(element.id == "Leute"){
               		$("#Leute").addClass("fixed");
               }
               else if(element.id == "Tram"){
               		$("#Tram").addClass("fixed");
               }
               else if(element.id == "Video"){
               		$("#Video").addClass("fixed");
               }

           } else {
               $(".Ebenen").removeClass("fixed");
           }
		}
    );
  	


    // if (scroll >= $(window).height()) {
    //     $(".Ebenen").addClass("fixed");
    // } else {
    //     $(".Ebenen").removeClass("fixed");
    // }
});





//    $(".Ebenen").each(
//        function(index, element){
//            var offsetTop = $(element).offset().top;

//            if (scroll >= offsetTop) {
//                //$(".fixed").html($(element).html());
//                $(element).html().insertAfter( "#fixed .inner" );
//                $(element).css('opacity',0);
//                //$(element).addClass("fixed");
//            } else {
//                //$(".Ebenen").removeClass("fixed");
//            }

//        }
//    );