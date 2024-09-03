const WAITING = 0;
const SENT_KNOCK_KNOCK = 1;
const SENT_CLUE = 2;
const ANOTHER = 3;
const NUM_JOKES = 5;

let state = WAITING;
let currentJoke = 0;

const clues = ["Turnip", "Little Old Lady", "Atch", "Who", "Who"];
const answers = [
  "Turnip the heat, it's cold in here!",
  "I didn't know you could yodel!",
  "Bless you!",
  "Is there an owl in here?",
  "Is there an echo in here?",
];

export function processInput(theInput: string): string {
  let theOutput: string = "";
  if (state === WAITING) {
    theOutput = "Knock! Knock!";
    state = SENT_KNOCK_KNOCK;
  } else if (state === SENT_KNOCK_KNOCK) {
    if (theInput.toLowerCase() === "who's there?") {
      theOutput = clues[currentJoke];
      state = SENT_CLUE;
    } else {
      theOutput =
        "You're supposed to say \"Who's there?\"! " +
        `Received ${theInput} instead.` +
        "Try again. Knock! Knock!";
    }
  } else if (state === SENT_CLUE) {
    if (theInput.toLowerCase() === clues[currentJoke] + "who?") {
      theOutput = answers[currentJoke] + " Want another? (y/n)";
      state = ANOTHER;
    } else {
      theOutput =
        "You're supposed to say \"" +
        clues[currentJoke] +
        ' who?"' +
        "! Try again. Knock! Knock!";
      state = SENT_KNOCK_KNOCK;
    }
  } else if (state === ANOTHER) {
    if (theInput.toLowerCase() === "y") {
      theOutput = "Knock! Knock!";
      if (currentJoke === NUM_JOKES - 1) {
        currentJoke = 0;
      } else currentJoke++;
      state = SENT_KNOCK_KNOCK;
    } else {
      theOutput = "Bye.";
      state = WAITING;
    }
  }
  return theOutput;
}
