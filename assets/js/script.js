$(document).foundation()




$(window).scroll(function() {   

    var scroll = $(window).scrollTop();

    $(".Ebenen").each(
   		function(index, element){
           	var offsetTop = $(element).offset().top;


           	// console.log('scroll:', scroll, " offsetTop: ", offsetTop)

           if (scroll >= offsetTop) {
               //$(".fixed").html($(element).html());
               //$(element).html().insertAfter( "#fixed .inner" );
               //$(element).css('opacity',0);
               //$(element).addClass("fixed");

               var id = $(element).children()[0].id;

               // console.log('id:', $(element));

               if(id == "Leute"){
               		$("#Leute").addClass("fixed");
               }
               else if(id == "Tram"){
               		$("#Tram").addClass("fixed");
               }
               else if(id == "Video"){
               		$("#Video").addClass("fixed");
               }
               else if(id == "Facts"){
               		$("#Facts").addClass("fixed");
               }

           } else {
               $($(element).children()[0]).removeClass("fixed");
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