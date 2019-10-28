$(document).ready(function() {
  $("#sent").submit(function(event) {
    event.preventDefault();
    var sentence = $("#input").val();
    var words = sentence.split(" ");
    var bigWords = words.map(function(word){
      if (word.length > 2) {
        return word;
      }
    });
    bigWords = bigWords.reverse().join(" ").toString();
    console.log(bigWords);
    $(".result").html("<p>" + bigWords + "</p>")
  });
});
