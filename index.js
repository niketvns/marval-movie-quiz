// welcome user

var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your name? ");
console.clear();
console.log("Welcome " + userName.toUpperCase() + "💐 ,\n");
console.log("This Quiz is related to Marvel Movies 🔥\n");
console.log("I will give you some questions and you have to give your answer");
console.log("If you give right Answer then you will awarded by +1 marks");
console.log("\n");


// quiz questions

question1 = {
  question: `which of the following is the first movie of marvel ? 
  a. Iron Man
  b. Captain America
  c. Thor
  d. Avengers`,
  answer: "a",
  full_answer: "Iron Man",
  explanation: "Iron Man is the very first Marvel movie, release in May 2, 2008"
}

question2 = {
  question: `Which of the following is not a marvel movie ? 
  a. Black Widow
  b. Thor: Love and Thunder
  c. Eternals
  d. Blood Red Sky`,
  answer: "d",
  full_answer: "Blood Red Sky",
  explanation: "Black Widow, Thor: Love and Thunder and Eternals are made by marvel, so Blood Red Sky is the correct option."
}

question3 = {
  question: `How many parts are there of Iran Man ? 
  a. 2
  b. 4
  c. 3
  d. 5`,
  answer: "c",
  full_answer: "3",
  explanation: "The last movie of Iron Man Series is Iron-Man 3, Released on May 3, 2013."
}
question4 = {
  question: `How Pepper Potts related to Iron Man? 
  a. Wife
  b. Sister
  c. Friend
  d. Girl Friend`,
  answer: "a",
  full_answer: "Wife",
  explanation: "Virginia 'Pepper' Potts is Stark Industries' CEO, and Tony Stark's wife, as of Avengers: Endgame."
}
question5 = {
  question: `Who is Captain America ? 
  a. Tony Stark
  b. Steve Rogers
  c. Clint Barton
  d. Happy Hogan`,
  answer: "b",
  full_answer: "Steve Rogers",
  explanation: "Steve Rogers, became the Captain America"
}
question6 = {
  question: `Thanos belong to which planet ? 
  a. Asgards
  b. Titan
  c. Vormir
  d. Earth`,
  answer: "b",
  full_answer: "Titan",
  explanation: "Thanos was born on the moon of Saturn named 'Titan'."
}

var questions = [question1, question2, question3, question4, question5, question6];

var score = 0;
var index = 1;

function quiz() {
  // processing

  for (var i = 0; i < questions.length; i++) {
    console.log("--------------------------------");
    var cQuestion = questions[i];
    console.log("\n" + (index++) + ". " + cQuestion.question)
    var userAnswer = readlineSync.question("\n\tYour Answer: ");
    console.log("\n");
    if (userAnswer.toUpperCase() === cQuestion.answer.toUpperCase() || userAnswer.toUpperCase() === cQuestion.full_answer.toUpperCase()) {
      console.log("Wow! You are right 😀");
      score++;
    } else {
      console.log("No! Wrong Answer 😓");
      console.log("Correct Answer is : " + cQuestion.answer.toUpperCase());
    }
    console.log("\n\t" + cQuestion.explanation + "\n");
    console.log("--------------------------------");
  }


  // Final Score

  console.log("\n\n\tYou have Scored: " + score + "/" + questions.length);
  console.log("\n Congrats 🎉🎉! well played \n");
  if (score == 0)
    console.log("\tI think you don't like Marval Movies 🤨");
  else if (score == 1)
    console.log("\tNo! you didn't know about Marval 🙄");
  else if (score == 2)
    console.log("\tNah! you didn't Watch Marvel Movie 😫");
  else if (score == 3)
    console.log("\tok! I think you didn't watch all the series 🙂");
  else if (score == 4)
    console.log("\tYeah! you are near to Give All Answers 😊");
  else if (score == 5)
    console.log("\tWow! you Watch approximatly all the movies of Marvel Series well 🤗");
  else
    console.log("\tAmazing! You Watched Every Movies of Marvel 😍");
}

var permission = readlineSync.question("press enter key to continue or Press e to exit: ");
console.log("\n");

if (permission === "e") {
  console.log("Bye! Have a nice day 👋");
} else
  quiz();