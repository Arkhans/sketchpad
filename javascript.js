$(document).ready(function() {
  createGrid(16);

  $("#draw").on("click", function() {
    removeGrid();
    createGrid();
  });

  $("#txt").keypress(function(e) {
    if (e.which == 13) {
    removeGrid();
    createGrid();
    return false;
    }
  });
});

function createGrid() {
  var dim = $("input[name='grid']").val();
  if (dim > 100) {
    $(".error").show();
    return false;
  }
  for (i = 0; i < dim; i++) {
      var column = $("<div class='column'></div>");
      for (j = 0; j < dim; j++) {
        var unit = $("<div class='unit'></div>");
        unit.css("width", (960 / dim));
        unit.css("height", (960 / dim));
        column.append(unit);
      }
      $("#container").append(column);
  }
} 

function removeGrid() {
  $("#container").empty();
}

