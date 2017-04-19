# Nodejs-Tutorial-BGU
Nodejs tutorial made for Ben-Gurion University students - making of a blackjack game Nodejs server.

# Overview
This repository is a server template made for the BlackJack Frontend project (Can be found here: https://github.com/GBT3101/FrontEndTool-BGU)

Please read these instructions till the end before you start coding! :)

# Installation

*Make sure you have `git`, `npm` and `Nodejs 7.2.0` installed on your pc.*

Install git (windows) - https://www.atlassian.com/git/tutorials/install-git#windows

Install node (& npm) - https://nodejs.org/en/download/

1. First, open your command line and clone / download this project to your pc:

```sh
git clone https://github.com/GBT3101/Nodejs-Tutorial-BGU.git
cd Nodejs-Tutorial-BGU
```
2. We want you to focus on NodeJS, so everything else is already set up (node modules, etc), just run this line to run the server.

```sh
node server.js
```
If you see "I am listening" on your cmd, you are doing fine, the server is up.

3. Let's make sure our server is ready, enter `localhost:3100` with any browser, do you see the message `This is the blackjack server, what do you want?`? Awesome, everything works just fine and you are ready to program the API.

# Deck Utils

If you have sharp eyes, you might have noticed `deckUtils.js` file, **No need to touch this code**, this is an exported JavaScript file that being imported into `server.js`, check out the code and see how it's being used, it's very straightforward.

The deck is an array of cards:

`card` is an object that looks like that: `{strength: number, color: number}`. **Example**: `{strength: 5, color: 3}` is actually 5 hearts. if you want to know more - read the comments in the code, everything is explained there. Also, you are free to experiment as you please with `console.log`.

`deck` is an array of `cards`, for example:

`[ {strength: 1, color: 0 }, {strength: 5, color: 2 }, {strength: 13, color: 3 } ]` 

# Implementing the API

1. `get /drawCard`

This query will send back the client a card.

**hint**: `res.send(___)` will send back to the client, for example: `res.send({strength: 1, color: 1})` will send the client an ace of spades.

**hint**: `deck[currentDeckIndex]` is the next card in the deck.

2. `post /postWinner`

This query receives a json object: `{winner: string}` which is `req.body`, for example: if you've received `{winner: "dealer"}`it means that the match has ended and the dealer won.

You should post this object to a DataBase.

**hint**: `req.body.winner` will get you the string, if `{winner: "player"}` => `req.body.winner == "player"`

3. `put /insertCard`

This is the best query, because it's your way to ensure you always win against the dealer, **this time you can't use the FrontEnd app to use it** since it's not implemented there, **you should do it yourself**.

**hint**: remember that `deck[currentDeckIndex]` is the next card in the deck, you can change that. for example:
`deck[currentDeckIndex] = {strength: 10, color: 0}` will insert Jack of clubs as the next card in deck.

**hint**: Use `PostMan` to send the card. read more about `PostMan` here: https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en

**hint**: use `Hit Me` in the Web Application to see if you actually inserted the right card.

# Good Luck!
