$(document).ready(function() {
    $(".more-link").click(function(e) {
      e.preventDefault();
      $(this).closest("article").find(".hidden-section").slideToggle();
    });
  
    $(".hide-link").click(function(e) {
      e.preventDefault();
      $(this).closest(".hidden-section").slideToggle();
    });
  
    // Hide all hidden sections by default
    $(".hidden-section").hide();
  });
  