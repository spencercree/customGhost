$(document).ready(function() {
  $(".post").on('mouseenter', function(event) {
    var idVal = this.id;
    $("#dimmer_"+idVal).addClass("hover");
  });
  $(".post").on('mouseleave', function() {
    var idVal = this.id;
    $("#dimmer_"+idVal).removeClass("hover");
  });
});
