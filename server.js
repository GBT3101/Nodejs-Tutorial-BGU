var express = require('express'); // Loading the express module to the server.
var deckUtils = require('./deckUtils');
var bodyParser = require('body-parser')
var app = express(); // activating express
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json()); // Enabling access to "req.body" as a json file.

var currentDeckIndex = 0;
/*
Here we are generating the cards, if you want to see the code check out "deckutils.js", it's an external library with some
useful functions.

The deck is a generic array that consist cards, every card is an object looks like this:
{strength: number, color: number}
strength indicates the type of a card and color indicates it's... color of course.
for example:
{strength: 1, color: 0} = ace of clubs.
The colors are: 0 - club, 1 - leaf, 2 - diamond, 3 - heart.
*/
var deck = deckUtils.shuffleDeck(deckUtils.generateDeck()); 

app.listen(3100); // server is open and listening on port 3100, to access: localhost:3100 in any browser.
console.log('I am listening on localhost:3100');

app.get('/', function (req, res) {

  // TODO - Send back 'hello world'
  // 
});

app.get('/drawCard', function (req, res) {
  console.log(`card sent: ${JSON.stringify(deck[currentDeckIndex])}`);
  
  // TODO - send the next card in deck to the client and advance the current deck index.
  // recommended: console log the card that was sent, hint - to log a json use JSON.stringify(OBJECT);

  if(currentDeckIndex > 51) {
    console.log('deck emptied, initalizing deck');
    initializeDeck();
  }

});

app.post('/postWinner', function (req, res) { // Request body: {winner: string}
  
  // TODO - parse the request body
  // Add a row to the database with the winner string
  // recommended: console log who was the winner in this match.

});

app.put('/insertCard', function (req, res) {
  // TODO - you can use this request to cheat
  // receive a card, and insert it as the next card.
  // You can use postman to create a mock card 
});

var initializeDeck = function () {
  currentDeckIndex = 0;
  deck = deckUtils.shuffleDeck(deckUtils.generateDeck());
}
