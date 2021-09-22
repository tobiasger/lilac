$(".hamburger").on("click", function(){
    $(this).toggleClass("is-active");
    $(".navBar").toggleClass("is-active");
})

$("a[href='#contact']").on("click", function(){
    $(".hamburger").removeClass("is-active");
    $(".navBar").removeClass("is-active");
})