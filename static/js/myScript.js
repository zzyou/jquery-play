$(document).ready(function() {
  // console.log('myScript.js loaded!');
  $('#red-sentence').click(function() {
    // First remove the purple-text class in case it was added first.
    $(this).removeClass('purple-text');
    // Then add the red-text class to turn the sentence red.
    $(this).addClass('red-text');
    if ($(this).css("font-size")==="16px") {
      $(this).css("font-size", "30px");
    } else {
      $(this).css("font-size", "16px");
    };
    $(this).append("<span> This sentence will also become larger and longer.</span>");
  });

  $('#blue-button').click(function() {
    // We can also "chain" methods together like this:
    $('#blue-sentence')
    .removeClass('purple-text')
    .addClass('blue-text')
    .css("font-size", "30px");
  });

  $('#purple-button').click(function() {
    $('.colorful-sentence').addClass('purple-text');
  });

  $("#page-header").hover(
    function() {
      $(this).css("color", "orange");
    },
    function() {
      $(this).css("color", "green");
    }
  );

  $("#form-header").dblclick(function() {
    $(this).css("font-size", "50px");
  });

  $("input").keypress(function() {
    $("form").toggleClass(
      $("form").css("background-color", "pink"),
      $("form").css("background-color") !== "pink");
  });

  $("#img-button").click(function() {
    $("img").animate({
      width: [ "toggle", "swing" ],
      height: [ "toggle", "swing" ],
      opacity: "toggle"
    }, 5000, "linear", function() {
    $( this ).after( "<div>Animation complete.</div>" );
    });
  });

});
