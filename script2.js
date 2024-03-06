$(document).ready(function () {
  $("#run").on("click", function () {
    var html_content = $("#data-input").val();
    var css_content = $("#data-input-css").val();
    var js_content = $("#data-input-js").val();

    $("#data-output").html(html_content);

    var styleElement = $("<style></style>");
    styleElement.html(css_content);

    var scriptElement = $("<script></script>");
    scriptElement.html(js_content);

    $("head").append(styleElement);
    $("head").append(scriptElement);
  });

  $("#clear").on("click", function () {
    $("#data-output").html("");
  });

  $("#clear-html").on("click", function () {
    $("#data-input").val("");
  });

  $("#clear-css").on("click", function () {
    $("#data-input-css").val("");
  });

  $("#clear-js").on("click", function () {
    $("#data-input-js").val("");
  });
});
