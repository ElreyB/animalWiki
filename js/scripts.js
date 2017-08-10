$(document).ready(function(){

  $("button").click(function(){
    var animalInput = this.id;

    if(animalInput === "turtle"){
      $(".turtle").show();
      $(".bear").hide();
      $(".snake").hide();
    } else if(animalInput === "bear"){
      $(".bear").show();
      $(".turtle").hide();
      $(".snake").hide();
    }else if (animalInput === "snake"){
      $(".snake").show();
      $(".bear").hide();
      $(".turtle").hide();
    }

  });
});
