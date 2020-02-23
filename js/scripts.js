$(document).ready(function() {
  $("#program form").submit(function() {
    var program = ["problem", "movie", "color", "animal", "hypothesis"];

    program.forEach(function(blank) {
      var userInput = $("input." + program).val();
      console.log(userInput);
      $("." + program).text(userInput).val();
  });
  
    $("#result").show();

    event.preventDefault;
  });
});