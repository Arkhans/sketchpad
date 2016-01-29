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

  $("#blck").on("click", function() {
    resetGrid();
    paintBlack();
  });
  
  $("#shd").on("click", function() {
    resetGrid();
    paintShadows();
  });
  
  $("#rnb").on("click", function() {
    paintBlack();
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
  $("#container").unbind();
}

function resetGrid() {
  $("#container").find(".unit").css({"background-color": "#f2f2f2",  "opacity": "1"});
  $("#container").unbind();
}

function paintBlack() {
  resetGrid();
  $("#container").on("mouseenter", ".unit", function() {
    $(this).css("background-color", "black");
  });
}

function paintShadows() {
  $("#container").find(".unit").css({"background-color": "#000", 
                                     "opacity": 0.1});
  $("#container").on("mouseenter", ".unit", function() {
    var i = +$(this).css("opacity")
    if (i < 1) {
      i += 0.1;
      $(this).css("opacity", i);
    };
  });
}




