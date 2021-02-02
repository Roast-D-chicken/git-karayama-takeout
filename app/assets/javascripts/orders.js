/*global $*/



//かりカウンター
$(window).on("load", function() {
  var count = 0;
  //引き算
  $("#btn1").on("click",  function(){
   if(count <= 0) {
    $("#num1").text(0)    
   } else {
    $("#num1").text(--count)
   }
  });  
  //足し算
  $("#btn2").on("click",  function(){
   $("#num1").text(++count)
  });
});    
    
    
//丸カウンター
$(window).on("load", function() {
  var count = 0;
  //引き算
  $("#btn3").on("click",  function(){
   if(count <= 0) {
    $("#num2").text(0)    
   } else {
    $("#num2").text(--count)
   }
  });  
  //足し算
  $("#btn4").on("click",  function(){
   $("#num2").text(++count)
  });
});    
        
//手羽カウンター
$(window).on("load", function() {
  var count = 0;
  //引き算
  $("#btn5").on("click",  function(){
   if(count <= 0) {
    $("#num3").text(0)    
   } else {
    $("#num3").text(--count)
   }
  });  
  //足し算
  $("#btn6").on("click",  function(){
   $("#num3").text(++count)
  });
}); 

//極みカウンター
$(window).on("load", function() {
  var count = 0;
  //引き算
  $("#btn7").on("click",  function(){
   if(count <= 0) {
    $("#num4").text(0)    
   } else {
    $("#num4").text(--count)
   }
  });  
  //足し算
  $("#btn8").on("click",  function(){
   $("#num4").text(++count)
  });
});

//季節カウンター
$(window).on("load", function() {
  var count = 0;
  //引き算
  $("#btn9").on("click",  function(){
   if(count <= 0) {
    $("#num5").text(0)    
   } else {
    $("#num5").text(--count)
   }
  });  
  //足し算
  $("#btn10").on("click",  function(){
   $("#num5").text(++count)
  });
});

//なんこつカウンター

$(window).on("load", function() {
  var count = 0;
  //引き算
  $("#btn11").on("click",  function(){
   if(count <= 0) {
    $("#num6").text(0)    
   } else {
    $("#num6").text(--count)
   }
  });  
  //足し算
  $("#btn12").on("click",  function(){
   $("#num6").text(++count)
  });
});

//ポテトカウンター
$(window).on("load", function() {
 var count = 0;
  //引き算
  $("#btn13").on("click",  function(){
   if(count <= 0) {
    $("#num7").text(0)    
   } else {
    $("#num7").text(--count)
   }
  });  
  //足し算
  $("#btn14").on("click",  function(){
   $("#num7").text(++count)
  });
});

//空きカウンター
$(window).on("load", function() {
 var count = 0;
  //引き算
  $("#btn15").on("click",  function(){
   if(count <= 0) {
    $("#num8").text(0)    
   } else {
    $("#num8").text(--count)
   }
  });  
  //足し算
  $("#btn16").on("click",  function(){
   $("#num8").text(++count)
  });
});


$(window).on("load", function() {
　$("#btnsound").on("click",  function(){
        $("#sound").get(0).play();
      });
});
