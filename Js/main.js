
var quotes = [
    "“Be yourself; everyone else is already taken.”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“You only live once, but if you do it right, once is enough.”"
  ];

  var button = document.getElementById("quoteButton");


  button.addEventListener("click", function() {

    var randomIndex = Math.floor(Math.random() * quotes.length);

    var quoteElement = document.getElementById("quote");

    quoteElement.textContent = quotes[randomIndex];
  });
