$(document).ready(function(){
  // $("#secretBox").css("back ground-color", "white");
  // $("#secretBox").html('<h1>Secret Box!</h1>');
  // $("#secretBox").css("color","black");
  // $("#row1").children().attr("class","box");
  // $("#row1").children().addClass("boxType3");
  // $(".boxType1").css("background-color","white");
  // $("#row2>:lt(2)").css("visibility","hidden");
  // $("div:not([id])").css("width","2px");
  // $("#container").on("click",function(event){
  //     console.log($(event.pageX), $(event.pageY) );
  // });
  // $(".boxType1").wrap("<a href='https://students.galvanize.com/'></a>").on("click", function(event){
    // if(confirm("You can Never leave this page"))
      // event.preventDefault();
  // });
  function dogToggle(){
    $(".box").on("click",function(){
      $(this).html("<img class='dog' src='tiny.jpg'>");
      console.log("test");
    });
    $(".box").on("click",".dog",function(event){
      console.log("hello");
      event.stopPropagation();
      $(this).toggle();
    });
  }
  dogToggle();
  function blackOnWhite(){
    $("#container").on("click",function(event){
      $(this).css("background-color","#67ed15");
      console.log(event.target);
      if($(event.target).hasClass("box")){
        $(event.target).css("background-color","white");
        $(this).css("background-color","black");
      }
    });
  }
  blackOnWhite();
});
