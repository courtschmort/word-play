$(document).ready(function() {
  $("#sent").submit(function(event) {
    event.preventDefault();
    var sentence = $("#input").val();
    var words = sentence.split(" ");
    var bigWords = words.filter(word => word.length > 3).reverse().join(" ").toString();
    console.log(bigWords);
    $(".result").html("<p>" + bigWords + "</p>")
  });
});
