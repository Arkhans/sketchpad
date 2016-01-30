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
    resetGrid();
    paintRainbow();
  });

  $("#rnbshd").on("click", function() {
    resetGrid();
    paintRainbowShades();
  });

  $("#stop").on("click", function() {
    stop();
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
      unit.css("background-color", "#f2f2f2");
      column.append(unit);
    }
    $("#container").append(column);
  }
} 

function removeGrid() {
  $("#container").empty();
  $("#container").unbind();
}

function stop() {
  $("#container").unbind();
}

function resetGrid() {
  $("#container").find(".unit").css({"background-color": "#f2f2f2",  "opacity": "1"});
  $("#container").unbind();
}

function paintBlack() {
  $("#container").on("mouseenter", ".unit", function() {
    $(this).css("background-color", "black");
  });
}

function paintShadows() {
  $("#container").find(".unit").css({"background-color": "#000", "opacity": 0.1});
  $("#container").on("mouseenter", ".unit", function() {
    var i = +$(this).css("opacity")
    if (i < 1) {
      i += 0.1;
      $(this).css("opacity", i);
    };
  });
}

var randomRgb = function () {
  var red= Math.floor((Math.random()*256));
  var green= Math.floor((Math.random()*256));
  var blue= Math.floor((Math.random()*256));
  return "rgb(" + red + "," + green + "," + blue + ")";
}


function paintRainbow() {
  $("#container").on("mouseenter", ".unit", function() {
    $(this).css("background-color", randomRgb);
  });
}

var randomRgba = function () {
  var red= Math.floor((Math.random()*256));
  var green= Math.floor((Math.random()*256));
  var blue= Math.floor((Math.random()*256));
  var a= Math.random();
  return "rgba(" + red + "," + green + "," + blue + "," + a + ")";
}

function paintRainbowShades() {
  $("#container").on("mouseenter", ".unit", function() {
    $(this).css("background-color", randomRgba);
  });
}




