$(function() {
  $("section h1, section h2, section h3").each(function() {
    var id = $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'');
    $(this).attr("id", id);
    $("#sidebar ul").append(
      "<li class='tag-" + this.nodeName.toLowerCase() + "'>" +
      "<a href='#" + id + "'>" + $(this).text() + "</a></li>"
    );
  });

  $("#sidebar ul li a").on("click", function(e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    if(target.length) {
      $('html, body').animate({scrollTop: target.offset().top - 50}, 400);
    }
    $("#sidebar ul li").removeClass("active");
    $(this).parent().addClass("active");
  });
});
