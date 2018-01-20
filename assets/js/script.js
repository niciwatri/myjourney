$(document).foundation()




$(window).scroll(function() {   

    var scroll = $(window).scrollTop();

    $(".Ebenen").each(
   		function(index, element){
           	var offsetTop = $(element).offset().top;


           	// console.log('scroll:', scroll, " offsetTop: ", offsetTop)

           if (scroll >= offsetTop) {
               

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
               else if(id == "Legende"){
               		$("#Legende").addClass("fixed");
               }

           } else {
               $($(element).children()[0]).removeClass("fixed");
           }
		}
    );
  	
});


