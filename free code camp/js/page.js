 //heart function
   
    
var colors = ["pink","tomato","red"];
i=0;


 //$(document).ready(function() {
      $(".fas.fa-heart").click(function() {
        $("#heart").css("color",colors[i++]);
        if (i >= colors.length)
        i = 0;
      //  $("#heart").css("color","blue");
          //$(this).toggleClass("fa-heart fa-heart-o");
      });
    