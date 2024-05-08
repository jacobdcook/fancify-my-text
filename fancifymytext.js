function makeBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
  }
  
  function fancyText() {
    var textArea = document.getElementById("textArea");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  }
  
  function boringText() {
    var textArea = document.getElementById("textArea");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
  
  function makeUppercase() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].trim().split(" ");
      var lastWord = words[words.length - 1];
      words[words.length - 1] = lastWord.toUpperCase() + "-Moo";
      sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(".");
  }