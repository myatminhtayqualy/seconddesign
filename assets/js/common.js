// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {});




// Your jQuery code goes here
$(function () {
 
  $('.menuicon').click(function() {
    $('.menuitems').toggleClass('show');

    if ($('.menuitems').hasClass('show')) {
        $(".menuicon").html('<i class="fa-solid fa-xmark"></i>');
        $(".menuicon").css("background-color", "#000");
    } else {
        $('.menuicon').html('<img src="./img/menu.png" alt="">');
        $(".menuicon").css("background-color", "#003C6A");
    }
  });
});
