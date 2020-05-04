//The code below makes it seem like the hover method changes the color
//to orange.
//Instead the code is simply hiding the image to display the orange background
$(document).ready(function(){
  $("#firstCard").hover(function(){
    $(".project-listing-img").css("opacity", "0");
  }, function(){
 $(".project-listing-img").css("opacity", "100");
  });
});

//Hides the project text until hover
$(document).ready(function(){
  $("#firstCard").hover(function(){
    $(".project-listing").css("opacity", "0");
  }, function(){
 $(".project-listing-img").css("opacity", "100");
  });
});
