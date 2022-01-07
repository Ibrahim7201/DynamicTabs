//Dynamic Tabs code

$(document).ready(function () {
  $("li").on("click", function () {
    var tab = $(this).closest(".container");

    tab.find("li.active").removeClass("active");
    $(this).addClass("active");

    //Getting ID for tab I want to show from "rel" attribute
    var tabToShow = $(this).attr("rel");

    //Hiding What?
    tab.find(".tab.active").slideUp(300, showNexttab);

    //Showing Function
    function showNexttab() {
      $(this).removeClass("active");

      $("#" + tabToShow).slideDown(300, function () {
        $(this).addClass("active");
      });
    }
  });
});

//Adding New Tabs

$(".innum").val("5");
function Adding() {
  if (
    $(".in").val() !== "" &&
    $(".innum").val() !== "" &&
    $("#text").val() !== ""
  ) {
    var x = $(".in").val();
    var y = Number($(".innum").val());
    var z = $("#text").val();

    //adding Tab
    $(".tabs").append(`<li rel="tab${y}" id="tab${y}${y}">${x}</li>`);
    $(".container").append(`<div id="tab${y}" class="tab">${z}</div>`);
    $(".innum").attr("min", `${y + 1}`);
    $(".innum").val(`${y + 1}`);

    $(`#tab${y}${y}`).on("click", function () {
      var tab = $(this).closest(".container");
      tab.find("li.active").removeClass("active");
      $(this).addClass("active");

      //Getting ID for tab I want to show from "rel" attribute
      var tabToShow = $(this).attr("rel");

      //Hiding What?
      tab.find(".tab.active").slideUp(300, showNexttab);

      //Showing Function
      function showNexttab() {
        $(this).removeClass("active");

        $("#" + tabToShow).slideDown(300, function () {
          $(this).addClass("active");
        });
      }
    });
    $(".in").val("");
    $("#text").val("");
  } else {
    alert("Please enter all fields!");
  }
}
