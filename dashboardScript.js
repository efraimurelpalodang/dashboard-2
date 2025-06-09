$(document).ready(function () {
  $("aside .li-menu").click(function (e) {
    e.preventDefault();

    // Toggle submenu
    $(this).find("#sub-menu").slideToggle();

    // Toggle ikon panah
    const panah = $(this).find("i.bi-chevron-right, i.bi-chevron-down");
    panah.toggleClass("bi-chevron-down bi-chevron-right ");
  });
});
