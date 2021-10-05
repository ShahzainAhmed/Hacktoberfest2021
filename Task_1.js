$(document).ready(function(){

  $('.input').focus(function(){
    $(this).parent().find(".label-txt").addClass('label-active');
  });

  $(".input").focusout(function(){
    if ($(this).val() == '') {
      $(this).parent().find(".label-txt").removeClass('label-active');
      console.log("This is JavaScript, pulled by Shahzain Ahmed");
      console.log("Work in progress!");
      console.log("New pull requests being held at Web Engineering Labs");
    };
  });

});
