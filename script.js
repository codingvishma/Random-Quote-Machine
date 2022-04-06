window.onload = run;
function run() {
  $("#new-quote").click(function() { //get new quote
    randomQuote();
  });
  $("#tweet-quote").click(function() { //allow this particular quote to be tweeted
  });
  
  randomQuote(); //generate a random quote
}

function randomQuote() {
  var quotes = [
    {
      id: 1, 
      text: "With the new day comes new strength and new thoughts.",
      author: "Eleanor Roosevelt", 
    },
    {
      id: 2, 
      text: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
      author: "Samuel Beckett", 
    },
    {
      id: 3, 
      text: "When something is important enough, you do it even if the odds are not in your favor.",
      author: "Elon Musk", 
    },
    {
      id: 4, 
      text: "Anyone who has ever made anything of importance was disciplined.",
      author: "Andrew Hendrixson", 
    },
    {
      id: 5, 
      text: "Optimism is the one quality more associated with success and happiness than any other.",
      author: "Brian Tracy", 
    },
    {
      id: 6, 
      text: "Always keep your eyes open. Keep watching. Because whatever you see can inspire you.",
      author: "Grace Coddington", 
    },
    {
      id: 7, 
      text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      author: "Henry David Thoreau", 
    },
    {
      id: 8, 
      text: "I destroy my enemies when I make them my friends.",
      author: "Abraham Lincoln", 
    },
    {
      id: 9, 
      text: "Don’t live the same year 75 times and call it a life.",
      author: "Robin Sharma", 
    },
    {
      id: 10, 
      text: "Success is not final, failure is not fatal, it is the courage to continue that counts.",
      author: "Winston Churchill", 
    },
  ];
  var randomQuotes = quotes[Math.floor(Math.random() * (quotes.length))];
  $("#text").html('"' + randomQuotes.text + '"');
  $("#author").html("-" + randomQuotes.author);
  $("#tweet-quote").attr("href", tweetLink('"' + randomQuotes.text + '" -' + randomQuotes.author));
}

function tweetLink(str) {
  var stringLink = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");
  var link = "https://twitter.com/intent/tweet?text=" + stringLink; //use the twitter href link needed to share to twitter
  return link;
}
