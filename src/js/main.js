$(".hamburger").on("click", function(){
    $(this).toggleClass("is-active");
    $(".navBar").toggleClass("is-active");
})

$("a[href='#contact']").on("click", function(){
    $(".hamburger").removeClass("is-active");
    $(".navBar").removeClass("is-active");
})

$(".employee__read-more-target").on("click", function(event){
    event.preventDefault();
    var $button = $(this);
    var employee = $button.data("employee");
    var name = $button.data("employee-name");
    var title = $button.data("employee-title");
    var index = $button.data("employee-index");
    var information = $button.data("employee-information");
    var html = "<div class='employee__read-more__header'><h3 class='monoText'>" + name + "</h3>" + "<div class='p'>" + title + "</div>" + "</div>" + "<div class='employee__read-more__text'><p>" + information + "</p></div>";
        var $textBoxes = $(".employee__read-more");
      $(".employee__read-more-target").not($button).removeClass("is-active");
      if ($button.hasClass("is-active")) {
          $button.removeClass("is-active");
          $textBoxes.removeClass("is-active");
      } else {
          $textBoxes.children(".employee__read-more__inner").html(html);
          $button.addClass("is-active");
          $textBoxes.removeClass("is-active");
          $textBoxes.removeClass("index--1").removeClass("index--2").removeClass("index--3").removeClass("index--4");
          $textBoxes.each(function(){
              if ($(this).data("employees").includes(employee)) {
                  $(this).addClass("is-active").addClass("index--" + index);
              }
          })
      }
})

$(".employee__read-more__close").on("click", function(){
    $(".employee__read-more-target").removeClass("is-active");
    $(".employee__read-more").removeClass("is-active");
})