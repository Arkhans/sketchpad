$(document).ready(function() {
  for (i = 0; i < 4; i++) {
    var column = $("<div class='column'></div>");
    for (j = 0; j < 4; j++) {
      var unit = $("<div class='unit'></div>");
      $('.unit').css("width", (960 / 4));
      $('.unit').css("height", (960 / 4));
      column.append(unit);
    }
    $("#container").append(column);
  }
});