$(".menu__burger").on("click", function () {
    $(".window__menu").addClass("active");      // Открывается меню навигации
    }),

    $(".close__menu-btn").on("click", function () {
    $(".window__menu").removeClass("active");   // Закрытие меню навигации
    })