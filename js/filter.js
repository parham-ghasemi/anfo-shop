// For clothes-type
$(".clothes-type li a").click(function (e) {
  e.preventDefault();

  var $group = $(this).closest("ul").parent();
  var target = $(this).attr("data-target");

  if ($(this).hasClass("checked")) {
    $(this).removeClass("checked");
    $(".main-clothes").find(".cableItem").removeClass("cableItem-hide");
  } else {
    $group.find("ul li a").removeClass("checked");
    $(this).addClass("checked");

    $(".main-clothes").find(".cableItem").removeClass("cableItem-hide");
    $(".main-clothes")
      .find('.cableItem:not([data-target*="' + target + '"])')
      .addClass("cableItem-hide");
  }
});

// For star-sidenav
$(".star-sidenav ul li a").click(function (e) {
  e.preventDefault();

  var $group = $(this).closest("ul").parent();
  var target = $(this).attr("data-target");

  if ($(this).hasClass("checked")) {
    $(this).removeClass("checked");
    $(".main-clothes").find(".cableItem").removeClass("cableItem-hide");
  } else {
    $group.find("ul li a").removeClass("checked");
    $(this).addClass("checked");

    $(".main-clothes").find(".cableItem").removeClass("cableItem-hide");
    $(".main-clothes")
      .find('.cableItem:not([data-target*="' + target + '"])')
      .addClass("cableItem-hide");
  }
});
