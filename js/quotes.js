const quotes = [
  {
    quote: "It's choice - not chance - that determines your destiny.",
    author: "Jean Nidetch",
  },
  {
    quote: "Work and acquire, and thou hast chained the wheel of Chance.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Small opportunities are often the beginning of great enterprises.",
    author: "Demosthenes",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "The future depends on what we do in the present.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "A single day is enough to make us a little larger.",
    author: "Paul Klee",
  },
  {
    quote: "We cannot really love anybody with whom we never laugh.",
    author: "Agnes Repplier",
  },
  { quote: "Judgement, not passion should prevail.", author: "Epicharmus" },
  {
    quote: "Blaze with the fire that is never extinguished.",
    author: "Luisa Sigea",
  },
  {
    quote:
      "A likely impossibility is always preferable to an unconvincing possibility.",
    author: "Aristotle",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
