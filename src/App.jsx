import React, { useState, useEffect } from 'react'
import "./App.css"

import leaderBoardImg  from "./assets/leaderboard.svg"
import closeImg from "./assets/close.png"

function App() {
  const [level, setLevel] = useState(0)
  const [totalMove, setTotalMove] = useState(0)
  const [genRandVal, setGenRandVal] = useState(false)  // to avoid multiple click
  const [answer, setAnswer] = useState("")
  const [answerMode, setAnswerMode] = useState(false)
  const [score, setScore] = useState(0)
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState()
  const [userMessage, setUserMessage] = useState(null)
  const [gameOverMessage, setGameOverMessage] = useState(null)
  const [leaderboard, setLeaderboard] = useState(null)
  const [puzzles, setPuzzles] = useState(null)
  const [totPuzzles, setTotPuzzles] = useState(null)
  const [highScore, setHighScore] = useState(null)
  console.log("App rendering")

  useEffect(() => {
    const questions = [
      {
        question:
          "There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?",
        hint: "Put numeric value",
        answer: 3,
      },
      {
        question: "Alex is Charlie's father. Who of them was born later?",
        hint: "",
        answer: "Charlie",
      },
      {
        question:
          "The giraffe is taller than the kangaroo but shorter than the palm. Which animal is the tallest?",
        hint: "",
        answer: "giraffe",
      },
      {
        question:
          "There are 4 floors in the hotel. The higher the floor, the more people live there. Which floor does the elevator go to most often?",
        hint: "Put numeric value",
        answer: 1,
      },
      {
        question:
          "There are 10 fingers on two hands. How many fingers are there on ten hands?",
        hint: "Put numeric value",
        answer: 50,
      },
      {
        question:
          "A man has 53 socks in his drawer: 21 identical blue, 15 identical black and 17 identical red. The lights are fused and he is completely in the dark. How many socks must he take out to make 100 per cent certain he has a pair of black socks?",
        hint: "Put numeric value",
        answer: 40,
      },
      {
        question:
          "How many cases do you need if you have to pack 112 pairs of shoes into cases that each hold 28 shoes?",
        hint: "Put numeric value",
        answer: 8,
      },
      {
        question: "7, 14, 42, 168, ?",
        hint: "",
        answer: "840",
      },
      {
        question:
          "Mr Smith has 4 daughters. Each of his daughters has a brother. How many children does Mr Smith have?",
        hint: "Put numeric value",
        answer: "5",
      },
      {
        question: "How many squares are there on the chessboard? ",
        hint: "x",
        answer: "204",
      },
      {
        question: "3P = 12, P + 2Y = 10, Y - B = 2, P + Y * B = ? ",
        hint: "",
        answer: "5",
      },
      {
        question:
          "RACECAR, MURDRUM, SAGAS, ATTACK, and REPAPER. Find the odd one out.",
        hint: "",
        answer: "ATTACK",
      },
      {
        question: "Which letter of the alphabet has the most water?",
        hint: "",
        answer: "C",
      },
      {
        question: "What kind of dog keeps the best time?",
        hint: "",
        answer: "Watchdog",
      },
      {
        question:
          "What time of day, when written in a capital letters, is the same forwards, backwards and upside down?",
        hint: "",
        answer: "Noon",
      },
      {
        question: "Laughing Out",
        hint: "",
        answer: "Loud",
      },
      {
        question: "A tasty reward given to well behaved dogs and kids",
        hint: "",
        answer: "Treat",
      },
      {
        question: "A caribbean shape that makes ships disappear",
        hint: "",
        answer: "Triangle",
      },
      {
        question: "It takes two people to do this",
        hint: "",
        answer: "Tango",
      },
      {
        question: "What has a face and two hands but no arms or legs?",
        hint: "",
        answer: "Clock",
      },
      {
        question:
          "What five-letter word becomes shorter when you add two letters to it?",
        hint: "",
        answer: "Short",
      },
      {
        question:
          "What word begins and ends with an 'E' but only has one letter?",
        hint: "",
        answer: "Envelope",
      },
      {
        question: "What has a neck but no head?",
        hint: "",
        answer: "Bottle",
      },
      {
        question: "What type of cheese is made backwards?",
        hint: "",
        answer: "Edam",
      },
      {
        question: "What gets wetter as it dries?",
        hint: "",
        answer: "Towel",
      },
      {
        question: "Which letter of the alphabet has the most water?",
        hint: "",
        answer: "C",
      },
      {
        question:
          "What starts with a 'P', ends with an 'E' and has thousands of letters?",
        hint: "",
        answer: "Post Office",
      },
      {
        question: "What has to be broken before you can eat it?",
        hint: "",
        answer: "Egg",
      },
      {
        question: "What begins with T, ends with T and has T in it?",
        hint: "",
        answer: "Teapot",
      },
      {
        question: "Teddy bears are never hungry because they are always what?",
        hint: "",
        answer: "Stuffed",
      },
      {
        question: "What belongs to you but others use it more than you do?",
        hint: "",
        answer: "Name",
      },
      {
        question:
          "The more you take always, the larger it becomes? What is it?",
        hint: "",
        answer: "Hole",
      },
      {
        question: "What is full of holes, but can still hold a lot of water?",
        hint: "",
        answer: "Sponge",
      },
      {
        question: "Where do fish keep their money?",
        hint: "",
        answer: "Riverbank",
      },
      {
        question:
          "What do you get when you cross an automobile with a household animal?",
        hint: "",
        answer: "Carpet",
      },
      {
        question:
          "Mary's father has 4 children; three are named Nana, Nene, and Nini. So what is the 4th child's name?",
        hint: "",
        answer: "Mary",
      },
      {
        question: "What bone has a sense of humor?",
        hint: "",
        answer: "Humorous",
      },
      {
        question:
          "The more of them you take, the more you leave behind. What are they?",
        hint: "",
        answer: "Footsteps",
      },
      {
        question: "What is that you will break every time you name it?",
        hint: "",
        answer: "Silence",
      },
      {
        question: "What has four fingers and one thumb, but is not alive?",
        hint: "",
        answer: "Glove",
      },
      {
        question: "What flies without wings?",
        hint: "",
        answer: "Time",
      },
      {
        question: "What turns everything around, but does not move?",
        hint: "",
        answer: "Mirror",
      },
      {
        question: "What is half of two plus two?",
        hint: "",
        answer: "Three",
      },
      {
        question: "What word looks the same upside down and backwards?",
        hint: "",
        answer: "Swims",
      },
      {
        question: "What kind of fish chases a mouse?",
        hint: "",
        answer: "Catfish",
      },
      {
        question:
          "Your mother's brother's only brother-in-law is asleep on your coach. Who is asleep on your couch?",
        hint: "",
        answer: "Dad",
      },
      {
        question: "What's the difference between here and there?",
        hint: "",
        answer: "T",
      },
      {
        question: "What goes up and down without moving?",
        hint: "",
        answer: "Stairs",
      },
      {
        question: "Take off my skin and I won't cry, but you will, What am I?",
        hint: "",
        answer: "Onion",
      },
      {
        question:
          "What doesn't get any wetter, no matter how much rain falls on it?",
        hint: "",
        answer: "Water",
      },
      {
        question: "What sits in a corner while traveling all around the world?",
        hint: "",
        answer: "Stamp",
      },
      {
        question:
          "I have a face, two arms, and two hands, yet I can not move. I count to twelve, yet I can not speak. I can still tell you something everyday.",
        hint: "",
        answer: "Clock",
      },
      {
        question:
          "You enter a dark room. You have only one match. There is an oil lamp, a furnace, and a stove in the room. Which would you light first?",
        hint: "",
        answer: "Match",
      },
      {
        question: "What is round on both ends and hi in the middle?",
        hint: "",
        answer: "Ohio",
      },
      {
        question: "What do you call a dog that sweats so much?",
        hint: "",
        answer: "Hotdog",
      },
      {
        question: "What do you call a rabbit with fleas?",
        hint: "",
        answer: "Bugs Bunny",
      },
      {
        question: "What rains at the north pole?",
        hint: "",
        answer: "Reindeer",
      },
      {
        question: "What kind of apple has a short temper?",
        hint: "",
        answer: "Crabapple",
      },
      {
        question: "What do you do with a dead chemist?",
        hint: "",
        answer: "Barium",
      },
      {
        question:
          "What calls for help, when written in capital letters, is the same forwards, backwards and upside down?",
        hint: "",
        answer: "SOS",
      },
      {
        question:
          "What body part is pronounced as one letter but written with three, only two different letters are used?",
        hint: "",
        answer: "Eye",
      },
      {
        question:
          "What is 2+2? What is 4+4? What is 8+8? What is 16+16? Pick a number between 12 and 5",
        hint: "",
        answer: "Seven",
      },
      {
        question:
          "Feed me and I live, give me something to drink and i'll die, What am I?",
        hint: "",
        answer: "Fire",
      },
      {
        question:
          "What keeps things green and keeps kids occupied in the summertime?",
        hint: "",
        answer: "Sprinkler",
      },
      {
        question: "Old Mcdonald had this",
        hint: "",
        answer: "Farm",
      },
      {
        question:
          "Poorly behaved children often find themselves sitting in these",
        hint: "",
        answer: "Corner",
      },
      {
        question: "Brings you may flowers",
        hint: "",
        answer: "Showers",
      },
      {
        question: "A shower that lights up the sky",
        hint: "",
        answer: "Meteor",
      },
      {
        question: "Longer than a decade and shorter than a millennium",
        hint: "",
        answer: "Century",
      },
      {
        question: "Rolling on floor",
        hint: "",
        answer: "Laughing",
      },
      {
        question:
          "There are four of these, but everyone's favorite seems to be spades",
        hint: "",
        answer: "Ace",
      },
      {
        question: "Rabbits do this to carrots and Jason Mraz does this to ears",
        hint: "",
        answer: "Nibble",
      },
      {
        question: "These minerals are vital to your health",
        hint: "",
        answer: "Vitamin",
      },
      {
        question: "Commits friendly home invasions one night a year",
        hint: "",
        answer: "Santa claus",
      },
      {
        question: "Treats said to be based on a shephero's staff",
        hint: "",
        answer: "Candy cane",
      },
      {
        question:
          "Everyone claims to know a way to stop these involuntary contractions but none of them work",
        hint: "",
        answer: "Hiccup",
      },
      {
        question: "Has 4 lucky leaves",
        hint: "",
        answer: "Shamrock",
      },
      {
        question:
          "One of the best things you can hope for after whacking a ball with a stick",
        hint: "",
        answer: "Home run",
      },
      {
        question: "They put the heat in pop tarts",
        hint: "",
        answer: "Toaster",
      },
      {
        question: "What has a ring, but no finger?",
        hint: "",
        answer: "Telephone",
      },
      {
        question: "What has four legs, but can't walk?",
        hint: "",
        answer: "Table",
      },
      {
        question: "What is higher without the head, than with it?",
        hint: "",
        answer: "Pillow",
      },
      {
        question: "What is harder to catch the faster you run?",
        hint: "",
        answer: "Breath",
      },
      {
        question: "What invention lets you look right through a wall?",
        hint: "",
        answer: "Window",
      },
      {
        question: "What is that you will break every time you name it?",
        hint: "",
        answer: "Silence",
      },
      {
        question: "What is made of wood, but can't be sawed?",
        hint: "",
        answer: "Sawdust",
      },
      {
        question: "What is a witch's favorite school subject?",
        hint: "",
        answer: "Spelling",
      },
      {
        question: "What is an aliens favorite sport?",
        hint: "",
        answer: "Spaceball",
      },
      {
        question: "What is the saddest fruit?",
        hint: "",
        answer: "Blueberry",
      },
      {
        question: "What is black and white and read all over?",
        hint: "",
        answer: "Newspaper",
      },
      {
        question: "What is easy to get into, and hard to get out of?",
        hint: "",
        answer: "Trouble",
      },
      {
        question: "What is there more of the less you see?",
        hint: "",
        answer: "Darkness",
      },
      {
        question:
          "If two hours ago, it was as long after one o'clock in the afternoon as it was before one o'clock in the morning, what time would it be now?",
        hint: "",
        answer: "Nine",
      },
      {
        question: "What is as big as you are and yet does not weigh anything?",
        hint: "",
        answer: "Shadow",
      },
      {
        question: "What types of words are these: Madam, Civic, Eye, Level?",
        hint: "",
        answer: "Palindrome",
      },
      {
        question:
          "When you have me, you feel like sharing me. But, if you do share me, you don't have me. What am I?",
        hint: "",
        answer: "Secret",
      },
      {
        question:
          "The person who makes it has no need for it. The person who purchases it does not use it. The person who does use it does not know he or she is. What is it?",
        hint: "",
        answer: "Coffin",
      },
      {
        question:
          "It is an insect, and the first part of its name is the name of another insect. What is it?",
        hint: "",
        answer: "Beetle",
      },
      {
        question:
          "What english word retains the same pronunciation, even after you take away four of its five letters?",
        hint: "",
        answer: "Queue",
      },
      {
        question: "What becomes white when it is dirty?",
        hint: "",
        answer: "Blackboard",
      },
      {
        question:
          "What word of five letters has only one left when two letters are removed?",
        hint: "",
        answer: "Stone",
      },
      {
        question: "How many 9's are there between 1 and 100?",
        hint: "",
        answer: "Twenty",
      },
      {
        question: "Which vehicle is spelled the same forwards and backwards?",
        hint: "",
        answer: "Racecar",
      },
      {
        question:
          "I am lighter than air but a million men cannot lift me up, What am I?",
        hint: "",
        answer: "Bubble",
      },
      {
        question:
          "Five men were eating apples, a finished before B, but behind C. D finished before E, but behind B. What was the finishing order?",
        hint: "",
        answer: "CABDE",
      },
      {
        question: "David's father has three sons: Snap, Crackle, and ?",
        hint: "",
        answer: "David",
      },
      {
        question:
          "It is everything to someone, and nothing to everyone else. What is it?",
        hint: "",
        answer: "Mind",
      },
      {
        question: "What has a mouth but can't chew?",
        hint: "",
        answer: "River",
      },
      {
        question:
          "If it is two hours later, then it will take half as much time till it's midnight as it would be if it were an hour later. What time is it?",
        hint: "",
        answer: "Nine",
      },
      {
        question: "Forward I am heavy, backwards I am not. What am I?",
        hint: "",
        answer: "Ton",
      },
      {
        question:
          "What object has keys that open no locks, space but no room, and you can enter but not go in?",
        hint: "",
        answer: "Keyboard",
      },
    ];
    setTotPuzzles(questions.length)
    setPuzzles(questions)
  }, [])

  useEffect(() => {
    if(userData != null && (score != 0 || totalMove != 0)){
      let data = userData
      if(data.highScore < score){
        data.highScore = score
        setHighScore(score);
      }
      
      data["scores"][data["scores"].length - 1] = {"score": score, "move": totalMove}
      setUserData(() => data);

      // update the last item (11th) in leaderboard (to decide later whether to consider it for top 10)
      let leaderboardData = JSON.parse(localStorage.getItem("store"))["leaderboard"]
      leaderboardData[10] = {"name": user, "score": score, "move": totalMove}
      
      // update the store
      const store = JSON.parse(localStorage.getItem('store'))
      localStorage.setItem("store", JSON.stringify({...store, "users": {...store["users"], [user]: userData}, "leaderboard": leaderboardData}));
    }

  }, [score, totalMove])

  useEffect(() => {
    
    if(user != null && score == 0 && totalMove == 0){

      // check whether last item (11th) deserved to be in top 10
      let store = JSON.parse(localStorage.getItem("store"))
      let leaderboardData = store["leaderboard"];
      if(leaderboardData[10] != null){
        let idx = 10;
        while(idx > 0 && (leaderboardData[idx-1] == null || (leaderboardData[idx]["score"] > leaderboardData[idx-1]["score"] || (leaderboardData[idx]["score"] == leaderboardData[idx-1]["score"] && leaderboardData[idx]["move"] < leaderboardData[idx-1]["move"])))){
          let temp = leaderboardData[idx-1]
          leaderboardData[idx-1] = leaderboardData[idx]
          leaderboardData[idx] = temp
          idx -= 1
        }
  
        leaderboardData[10] = null
        localStorage.setItem("store", JSON.stringify({...store, "leaderboard": leaderboardData}))
      }
      
      setLeaderboard(leaderboardData.slice(0, 10))
    }
  }, [user, score, totalMove])

  function handleAnsSubmit(e){
    e.preventDefault()
    if(answer == null || answer == ""){
      setUserMessage("Answer cannot be empty")
      return;
    }

    if(answer.toLowerCase() == puzzles[level-1].answer.toString().toLowerCase()){
      setScore(score+1)

      if(level == totPuzzles){
        setGameOverMessage("Yay! You won the game");
        document.getElementById("gameOverMessage").classList.add("green")
        document.getElementById("genMoveBox").classList.add("hidden")
        document.getElementById("gameOverBox").classList.remove("hidden")
        document.getElementById("game-container").classList.add("game-container-blur")
      }
    }else{
      
      setGameOverMessage("Game Over")
      document.getElementById("gameOverMessage").classList.add("red");
      document.getElementById("gameOverBox").classList.remove("hidden")
      document.getElementById("game-container").classList.add("game-container-blur")
    }

    setAnswer("")
    setAnswerMode(false)
    document.getElementById("genMoveBox").classList.remove("remove")
  }
  
  function handleRestart(e) {
    e.preventDefault()
    setLevel(0)
    setScore(0)
    setTotalMove(0)
    const store = JSON.parse(localStorage.getItem("store"))
    let data = store["users"][user]
    data["scores"].push({ score: 0, move: 0 })
    setUserData(data)
    document.getElementById("gameOverBox").classList.add("hidden")
    document.getElementById("game-container").classList.remove("game-container-blur")
    document.getElementById("genMoveBox").classList.remove("hidden")

  }

  function handleGenMove(){
    if(genRandVal) return   // avoids multiple click

    setGenRandVal(prev => true)
    setTotalMove(move => move+1)
    const element = document.getElementById("genMoveBox")
    element.innerHTML = ""
    element.classList.add("spin")
    const randVal = Math.floor(Math.random()*2)

    setTimeout(() => {
      element.classList.remove("spin")
      element.innerHTML = randVal

      setTimeout(() => {
        if (randVal == 0)
          element.innerHTML = "Gen Move"
        else{
          element.classList.add("remove")
          element.innerHTML = "Gen Move"
          document.getElementById("left-leg").classList.add("left-leg-move")
          document.getElementById("right-leg").classList.add("right-leg-move")
          document.getElementById("hand").classList.add("hand-move")
          document.getElementById("head").classList.add("head-move")
          setTimeout(() => {
            setLevel((prevLevel) => prevLevel + 1);
            document.getElementById("left-leg").classList.remove("left-leg-move")
            document.getElementById("right-leg").classList.remove("right-leg-move")
            document.getElementById("hand").classList.remove("hand-move")
            document.getElementById("head").classList.remove("head-move")
            setTimeout(() => {
              setAnswerMode(true);
            }, 1000)
          }, 1000)
        }

        setGenRandVal(prev => false)

      }, 1000)
    }, 1000)
  }

  function handleNameSubmit(e){
    e.preventDefault()
    const name = e.target.fName.value
    if(name == "")
      setUserMessage("Name cannot be empty")
    else if(name.length > 10)
      setUserMessage("Name cannot exceed 10 characters")
    else{
      setUser(name)
      let newUserData = {"highScore": 0, "scores": [{"score": 0, "move": 0}]}
      if(JSON.parse(localStorage.getItem("store")) == null) {
        const leaderboard = [null, null, null, null, null, null, null, null, null, null, null]
        localStorage.setItem("store", JSON.stringify({"users": {[name]: {"highScore": 0, "scores": []}}, "leaderboard": leaderboard}))
      }else{
        let store = JSON.parse(localStorage.getItem("store"))
        if(store["users"][name] != null){
          newUserData = store["users"][name]
          newUserData["scores"].push({"score": 0, "move": 0});
        }
      }

      setUserData(newUserData)
      setHighScore(newUserData["highScore"])
      document.getElementById("game-container").classList.remove("game-container-blur")
      document.getElementById("nameForm").classList.add("hidden")
    }
  }

  function displayLeaderboard(){
    document.getElementById("leaderboard").classList.remove("hidden")
    document.getElementById("game-container").classList.add("game-container-blur");
  }

  function closeLeaderboard(){
    document.getElementById("leaderboard").classList.add("hidden")
    document.getElementById("game-container").classList.remove("game-container-blur");
  }

  return (
    <>
      <div id="game-container" className="game-container-blur">
        <svg
          width="183"
          height="551"
          viewBox="0 0 183 551"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="walking-man">
            <g id="left-leg">
              <path
                id="Vector"
                d="M150.99 530.01C148.1 529.88 132.32 536.55 132.32 536.55C132.32 536.55 127.32 539.34 114.55 541.13C106.21 542.31 105.1 538.29 105.33 535.36C105.408 534.399 105.62 533.453 105.96 532.55V514.82C105.96 514.82 131.96 498.95 133.96 497.95C134.212 497.839 134.484 497.781 134.76 497.78C137.97 497.65 147.17 500.92 152.14 504.43C157.63 508.32 164.62 505.94 164.62 505.94C164.62 505.94 178.18 495.01 181.75 503.01C181.961 503.469 182.125 503.948 182.24 504.44C184.85 515.01 153.89 530.1 150.99 530.01Z"
                fill="#0081B4"
              />
              <path
                id="Vector_2"
                opacity="0.1"
                d="M105.96 519.08V514.82C105.96 514.82 131.96 498.95 133.96 497.95C134.212 497.839 134.484 497.781 134.76 497.78C135.95 499.01 137.02 500.11 137.66 500.78C139.55 502.68 122.3 524.32 105.96 519.08Z"
                fill="#D54C4C"
              />
              <path
                id="Vector_3"
                d="M101.97 516.01L99.58 505.26C99.58 505.26 99.58 495.97 96.28 494.17C92.98 492.37 83.99 430.01 83.99 430.01C83.99 430.01 84.29 416.23 81.89 414.43C79.49 412.63 81.89 410.65 81.89 410.65C81.8808 408.666 81.522 406.699 80.83 404.84C80.0432 402.818 79.4961 400.71 79.2 398.56C79.2 398.56 80.4 394.06 79.2 392.87C78.36 392.03 79.43 390.46 77.47 387.32C76.2056 385.455 74.6685 383.789 72.91 382.38C66.12 376.64 72.82 311.62 74.66 294.91C74.94 292.42 75.11 291.01 75.11 291.01H91.11L93.11 298.2L96.3 311.49C96.3 311.49 98.4 312.88 98.4 314.68C98.4 316.48 110.98 354.52 110.98 354.52C111.903 356.052 112.705 357.654 113.38 359.31C113.68 360.51 116.38 362.61 116.38 362.61C115.866 363.739 115.6 364.965 115.6 366.205C115.6 367.445 115.866 368.671 116.38 369.8C118.17 373.39 123.27 388.37 121.47 395.56C119.67 402.75 117.57 403.35 117.57 403.35C117.57 403.35 115.78 408.67 118.77 410.65C121.76 412.63 119.67 416.23 119.67 416.23L123.57 449.79C123.57 449.79 123.27 464.79 127.76 470.16C132.25 475.53 132.85 488.43 132.85 488.43L129.47 489.87L128.86 490.14L128.66 490.23C128.66 490.23 135.55 497.42 137.66 499.52C139.77 501.62 119.34 526.81 101.97 516.01Z"
                fill="#FC7300"
              />
              <path
                id="Vector_4"
                opacity="0.1"
                d="M137.62 499.55C135.81 504.97 117.62 524.55 101.97 514.82L99.58 504.07C103.86 500.6 117.21 490.47 128.83 488.97L128.63 489.06L129.44 489.9L128.83 490.17L128.63 490.26C128.63 490.26 135.52 497.45 137.62 499.55Z"
                fill="#D54C4C"
              />
              <path
                id="Vector_5"
                d="M101.97 516.01L99.58 505.26C103.86 501.79 117.21 491.66 128.83 490.16L128.63 490.25C128.63 490.25 135.52 497.44 137.63 499.54C139.74 501.64 119.34 526.81 101.97 516.01Z"
                fill="#FC7300"
              />
              <path
                id="Vector_6"
                d="M147.1 507.43C147.514 507.43 147.85 507.094 147.85 506.68C147.85 506.266 147.514 505.93 147.1 505.93C146.686 505.93 146.35 506.266 146.35 506.68C146.35 507.094 146.686 507.43 147.1 507.43Z"
                fill="white"
              />
              <path
                id="Vector_7"
                d="M142.21 506.69C142.624 506.69 142.96 506.354 142.96 505.94C142.96 505.526 142.624 505.19 142.21 505.19C141.796 505.19 141.46 505.526 141.46 505.94C141.46 506.354 141.796 506.69 142.21 506.69Z"
                fill="white"
              />
              <path
                id="Vector_8"
                d="M151.3 508.18C151.714 508.18 152.05 507.844 152.05 507.43C152.05 507.016 151.714 506.68 151.3 506.68C150.886 506.68 150.55 507.016 150.55 507.43C150.55 507.844 150.886 508.18 151.3 508.18Z"
                fill="white"
              />
              <path
                id="Vector_9"
                d="M137.02 505.94C137.434 505.94 137.77 505.604 137.77 505.19C137.77 504.776 137.434 504.44 137.02 504.44C136.606 504.44 136.27 504.776 136.27 505.19C136.27 505.604 136.606 505.94 137.02 505.94Z"
                fill="white"
              />
              <path
                id="Vector_10"
                opacity="0.1"
                d="M150.99 530.01C148.1 529.88 132.32 536.55 132.32 536.55C132.32 536.55 127.32 539.34 114.55 541.13C106.21 542.31 105.1 538.29 105.33 535.36C107.442 536.314 109.824 536.484 112.05 535.84C117.74 534.35 137.42 531.2 137.42 531.2C137.42 531.2 150.42 526.46 150.8 523.76L181.75 503.01C181.961 503.469 182.125 503.948 182.24 504.44C184.85 515.01 153.89 530.1 150.99 530.01Z"
                fill="#D54C4C"
              />
              <path
                id="Vector_11"
                d="M139.08 517.61H126.95V534.54H139.08V517.61Z"
                fill="#0081B4"
              />
              <path
                id="Vector_12"
                d="M150.99 530.01C148.1 529.88 132.32 536.55 132.32 536.55C132.32 536.55 127.32 539.34 114.55 541.13C106.21 542.31 105.1 538.29 105.33 535.36C105.408 534.399 105.62 533.453 105.96 532.55V514.82C105.96 514.82 131.96 498.95 133.96 497.95C134.212 497.839 134.484 497.781 134.76 497.78C137.97 497.65 147.17 500.92 152.14 504.43C157.63 508.32 164.62 505.94 164.62 505.94C164.62 505.94 178.18 495.01 181.75 503.01C181.961 503.469 182.125 503.948 182.24 504.44C184.85 515.01 153.89 530.1 150.99 530.01Z"
                fill="#0081B4"
              />
              <path
                id="Vector_13"
                opacity="0.1"
                d="M105.96 519.08V514.82C105.96 514.82 131.96 498.95 133.96 497.95C134.212 497.839 134.484 497.781 134.76 497.78C135.95 499.01 137.02 500.11 137.66 500.78C139.55 502.68 122.3 524.32 105.96 519.08Z"
                fill="#D54C4C"
              />
              <path
                id="Vector_14"
                d="M101.97 516.01L99.58 505.26C99.58 505.26 99.58 495.97 96.28 494.17C92.98 492.37 83.99 430.01 83.99 430.01C83.99 430.01 84.29 416.23 81.89 414.43C79.49 412.63 81.89 410.65 81.89 410.65C81.8808 408.666 81.522 406.699 80.83 404.84C80.0432 402.818 79.4961 400.71 79.2 398.56C79.2 398.56 80.4 394.06 79.2 392.87C78.36 392.03 79.43 390.46 77.47 387.32C76.2056 385.455 74.6685 383.789 72.91 382.38C66.12 376.64 72.82 311.62 74.66 294.91C74.94 292.42 75.11 291.01 75.11 291.01H91.11L93.11 298.2L96.3 311.49C96.3 311.49 98.4 312.88 98.4 314.68C98.4 316.48 110.98 354.52 110.98 354.52C111.903 356.052 112.705 357.654 113.38 359.31C113.68 360.51 116.38 362.61 116.38 362.61C115.866 363.739 115.6 364.965 115.6 366.205C115.6 367.445 115.866 368.671 116.38 369.8C118.17 373.39 123.27 388.37 121.47 395.56C119.67 402.75 117.57 403.35 117.57 403.35C117.57 403.35 115.78 408.67 118.77 410.65C121.76 412.63 119.67 416.23 119.67 416.23L123.57 449.79C123.57 449.79 123.27 464.79 127.76 470.16C132.25 475.53 132.85 488.43 132.85 488.43L129.47 489.87L128.86 490.14L128.66 490.23C128.66 490.23 135.55 497.42 137.66 499.52C139.77 501.62 119.34 526.81 101.97 516.01Z"
                fill="#FC7300"
              />
              <path
                id="Vector_15"
                opacity="0.1"
                d="M137.62 499.55C135.81 504.97 117.62 524.55 101.97 514.82L99.58 504.07C103.86 500.6 117.21 490.47 128.83 488.97L128.63 489.06L129.44 489.9L128.83 490.17L128.63 490.26C128.63 490.26 135.52 497.45 137.62 499.55Z"
                fill="#D54C4C"
              />
              <path
                id="Vector_16"
                d="M101.97 516.01L99.58 505.26C103.86 501.79 117.21 491.66 128.83 490.16L128.63 490.25C128.63 490.25 135.52 497.44 137.63 499.54C139.74 501.64 119.34 526.81 101.97 516.01Z"
                fill="#FC7300"
              />
              <path
                id="Vector_17"
                d="M147.1 507.43C147.514 507.43 147.85 507.094 147.85 506.68C147.85 506.266 147.514 505.93 147.1 505.93C146.686 505.93 146.35 506.266 146.35 506.68C146.35 507.094 146.686 507.43 147.1 507.43Z"
                fill="white"
              />
              <path
                id="Vector_18"
                d="M142.21 506.69C142.624 506.69 142.96 506.354 142.96 505.94C142.96 505.526 142.624 505.19 142.21 505.19C141.796 505.19 141.46 505.526 141.46 505.94C141.46 506.354 141.796 506.69 142.21 506.69Z"
                fill="white"
              />
              <path
                id="Vector_19"
                d="M151.3 508.18C151.714 508.18 152.05 507.844 152.05 507.43C152.05 507.016 151.714 506.68 151.3 506.68C150.886 506.68 150.55 507.016 150.55 507.43C150.55 507.844 150.886 508.18 151.3 508.18Z"
                fill="white"
              />
              <path
                id="Vector_20"
                d="M137.02 505.94C137.434 505.94 137.77 505.604 137.77 505.19C137.77 504.776 137.434 504.44 137.02 504.44C136.606 504.44 136.27 504.776 136.27 505.19C136.27 505.604 136.606 505.94 137.02 505.94Z"
                fill="white"
              />
              <path
                id="Vector_21"
                opacity="0.1"
                d="M150.99 530.01C148.1 529.88 132.32 536.55 132.32 536.55C132.32 536.55 127.32 539.34 114.55 541.13C106.21 542.31 105.1 538.29 105.33 535.36C107.442 536.314 109.824 536.484 112.05 535.84C117.74 534.35 137.42 531.2 137.42 531.2C137.42 531.2 150.42 526.46 150.8 523.76L181.75 503.01C181.961 503.469 182.125 503.948 182.24 504.44C184.85 515.01 153.89 530.1 150.99 530.01Z"
                fill="#D54C4C"
              />
              <path
                id="Vector_22"
                opacity="0.1"
                d="M70.31 291.89C70.31 291.89 80.05 289.49 80.45 291.89C80.85 294.29 70.31 291.89 70.31 291.89Z"
                fill="#D54C4C"
              />
              <path
                id="Vector_23"
                opacity="0.1"
                d="M79.65 303.69C79.65 303.69 71.06 303.87 72.26 306.69C73.46 309.51 79.65 303.69 79.65 303.69Z"
                fill="#D54C4C"
              />
              <path
                id="Vector_24"
                opacity="0.1"
                d="M70.31 291.89C70.31 291.89 80.05 289.49 80.45 291.89C80.85 294.29 70.31 291.89 70.31 291.89Z"
                fill="#D54C4C"
              />
              <path
                id="Vector_25"
                opacity="0.1"
                d="M79.65 303.69C79.65 303.69 71.06 303.87 72.26 306.69C73.46 309.51 79.65 303.69 79.65 303.69Z"
                fill="#D54C4C"
              />
            </g>
            <g id="right-leg">
              <path
                id="Vector_26"
                d="M87.95 540.01C87.4149 542.95 85.8735 545.612 83.59 547.54C80.29 550.33 48.84 551.33 42.45 548.94C36.06 546.55 15.69 545.64 10.59 545.44C5.48996 545.24 3.50995 540.55 2.39995 538.25C2.08995 537.59 2.31996 536.14 2.83996 534.4C4.10996 530.13 7.06997 524.11 7.69997 523.47C8.17997 522.99 8.63997 521.03 8.94997 519.31C9.21997 517.82 9.39995 516.51 9.39995 516.51C23.07 525.83 41.0499 509.99 41.0499 509.99C41.7236 509.63 42.4929 509.491 43.25 509.59C46.69 510.01 50.44 514.52 50.44 516.51C50.44 518.94 59.9199 523.51 59.9199 523.51C62.6199 526.61 74.5999 532.4 74.5999 532.4C74.5999 532.4 82.79 532.6 86.39 535.69C86.9933 536.22 87.4527 536.894 87.7255 537.649C87.9982 538.405 88.0755 539.217 87.95 540.01Z"
                fill="#0081B4"
              />
              <path
                id="Vector_27"
                opacity="0.1"
                d="M87.95 540.01C87.4149 542.95 85.8735 545.612 83.59 547.54C80.29 550.33 48.84 551.33 42.45 548.94C36.06 546.55 15.69 545.64 10.59 545.44C5.48996 545.24 3.50995 540.55 2.39995 538.25C2.08995 537.59 2.31996 536.14 2.83996 534.4C7.32872 535.502 11.7523 536.854 16.09 538.45C22.48 540.95 35.76 544.54 38.09 543.45C38.05 543.48 69.56 552.27 87.95 540.01Z"
                fill="black"
              />
              <path
                id="Vector_28"
                opacity="0.1"
                d="M77.47 387.35C76.2056 385.485 74.6685 383.819 72.91 382.41C66.12 376.67 72.82 311.65 74.66 294.94C82.51 294.5 88.01 294.65 88.48 295.83C90.1 299.88 79.61 372.73 77.47 387.35Z"
                fill="black"
              />
              <path
                id="Vector_29"
                opacity="0.1"
                d="M43.25 509.63V513.01C21.25 535.58 12.45 527.86 8.95001 519.33C9.22001 517.84 9.39999 516.53 9.39999 516.53C23.07 525.85 41.05 510.01 41.05 510.01C41.7258 509.657 42.495 509.524 43.25 509.63Z"
                fill="black"
              />
              <path
                id="Vector_30"
                d="M86.75 301.11C85.45 321.19 75.33 389.9 75.33 389.9C75.33 389.9 69.64 415.06 68.44 415.96C67.24 416.86 59.76 421.96 59.76 421.96C59.76 421.96 59.46 433.65 57.06 436.96C54.66 440.27 53.76 448.65 53.76 448.65C53.76 448.65 49.87 465.42 48.67 473.81C47.47 482.2 43.28 493.58 43.28 493.58V511.86C15.62 540.23 8.80996 520.74 7.20996 511.94C6.97775 510.724 6.8175 509.495 6.72998 508.26L22.31 413.6C22.31 413.6 25.6 409.1 25 406.71C24.4 404.32 26.2 401.31 26.2 401.31L26.15 395.92C26.15 395.92 29.8 391.13 26.15 388.43C22.5 385.73 26.15 365.36 26.15 365.36C26.15 365.36 22.01 353.68 24.15 350.36C26.29 347.04 24.15 341.67 25.64 338.67C27.13 335.67 25.64 338.67 20.25 330.58C17.43 326.36 15.03 318.71 13.37 312.37C11.85 306.54 10.96 301.82 10.96 301.82C10.96 301.82 84.96 291.34 86.76 295.82C86.9883 297.576 86.9849 299.355 86.75 301.11Z"
                fill="#0081B4"
              />
              <path
                id="Vector_31"
                opacity="0.1"
                d="M43.25 505.84V511.23C15.59 539.6 8.77999 520.11 7.17999 511.31C12.21 515.63 23.75 521.01 43.25 505.84Z"
                fill="black"
              />
              <path
                id="Vector_32"
                d="M43.25 506.44V511.83C15.59 540.2 8.77999 520.71 7.17999 511.91C12.21 516.23 23.75 521.61 43.25 506.44Z"
                fill="#0081B4"
              />
              <path
                id="Vector_33"
                d="M39.96 521.77C40.3742 521.77 40.71 521.434 40.71 521.02C40.71 520.606 40.3742 520.27 39.96 520.27C39.5457 520.27 39.21 520.606 39.21 521.02C39.21 521.434 39.5457 521.77 39.96 521.77Z"
                fill="white"
              />
              <path
                id="Vector_34"
                d="M52.23 529.3C52.6442 529.3 52.98 528.964 52.98 528.55C52.98 528.136 52.6442 527.8 52.23 527.8C51.8158 527.8 51.48 528.136 51.48 528.55C51.48 528.964 51.8158 529.3 52.23 529.3Z"
                fill="white"
              />
              <path
                id="Vector_35"
                d="M47.53 526.21C47.9442 526.21 48.28 525.874 48.28 525.46C48.28 525.046 47.9442 524.71 47.53 524.71C47.1158 524.71 46.78 525.046 46.78 525.46C46.78 525.874 47.1158 526.21 47.53 526.21Z"
                fill="white"
              />
              <path
                id="Vector_36"
                d="M56.03 531.91C56.4442 531.91 56.78 531.574 56.78 531.16C56.78 530.746 56.4442 530.41 56.03 530.41C55.6158 530.41 55.28 530.746 55.28 531.16C55.28 531.574 55.6158 531.91 56.03 531.91Z"
                fill="white"
              />
              <path
                id="Vector_37"
                d="M44 523.97C44.4142 523.97 44.75 523.634 44.75 523.22C44.75 522.806 44.4142 522.47 44 522.47C43.5858 522.47 43.25 522.806 43.25 523.22C43.25 523.634 43.5858 523.97 44 523.97Z"
                fill="white"
              />
              <path
                id="Vector_38"
                opacity="0.1"
                d="M50.14 357.35C50.14 357.35 38.75 376.72 35.36 376.92C31.97 377.12 50.14 357.35 50.14 357.35Z"
                fill="black"
              />
              <path
                id="Vector_39"
                opacity="0.1"
                d="M56.03 422.45C56.03 422.45 41.91 429.84 45.13 430.45C48.35 431.06 56.03 422.45 56.03 422.45Z"
                fill="black"
              />
              <path
                id="Vector_40"
                opacity="0.1"
                d="M27.97 422.45C27.97 422.45 42.16 416.66 44.65 416.66C47.14 416.66 27.97 422.45 27.97 422.45Z"
                fill="black"
              />
              <path
                id="Vector_41"
                d="M87.95 540.01C87.4149 542.95 85.8735 545.612 83.59 547.54C80.29 550.33 48.84 551.33 42.45 548.94C36.06 546.55 15.69 545.64 10.59 545.44C5.48996 545.24 3.50995 540.55 2.39995 538.25C2.08995 537.59 2.31996 536.14 2.83996 534.4C4.10996 530.13 7.06997 524.11 7.69997 523.47C8.17997 522.99 8.63997 521.03 8.94997 519.31C9.21997 517.82 9.39995 516.51 9.39995 516.51C23.07 525.83 41.0499 509.99 41.0499 509.99C41.7236 509.63 42.4929 509.491 43.25 509.59C46.69 510.01 50.44 514.52 50.44 516.51C50.44 518.94 59.9199 523.51 59.9199 523.51C62.6199 526.61 74.5999 532.4 74.5999 532.4C74.5999 532.4 82.79 532.6 86.39 535.69C86.9933 536.22 87.4527 536.894 87.7255 537.649C87.9982 538.405 88.0755 539.217 87.95 540.01Z"
                fill="#0081B4"
              />
              <path
                id="Vector_42"
                opacity="0.1"
                d="M87.95 540.01C87.4149 542.95 85.8735 545.612 83.59 547.54C80.29 550.33 48.84 551.33 42.45 548.94C36.06 546.55 15.69 545.64 10.59 545.44C5.48996 545.24 3.50995 540.55 2.39995 538.25C2.08995 537.59 2.31996 536.14 2.83996 534.4C7.32872 535.502 11.7523 536.854 16.09 538.45C22.48 540.95 35.76 544.54 38.09 543.45C38.05 543.48 69.56 552.27 87.95 540.01Z"
                fill="black"
              />
              <path
                id="Vector_43"
                opacity="0.1"
                d="M77.47 387.35C76.2056 385.485 74.6685 383.819 72.91 382.41C66.12 376.67 72.82 311.65 74.66 294.94C82.51 294.5 88.01 294.65 88.48 295.83C90.1 299.88 79.61 372.73 77.47 387.35Z"
                fill="black"
              />
              <path
                id="Vector_44"
                opacity="0.1"
                d="M43.25 509.63V513.01C21.25 535.58 12.45 527.86 8.95001 519.33C9.22001 517.84 9.39999 516.53 9.39999 516.53C23.07 525.85 41.05 510.01 41.05 510.01C41.7258 509.657 42.495 509.524 43.25 509.63Z"
                fill="black"
              />
              <path
                id="Vector_45"
                d="M86.75 301.11C85.45 321.19 75.33 389.9 75.33 389.9C75.33 389.9 69.64 415.06 68.44 415.96C67.24 416.86 59.76 421.96 59.76 421.96C59.76 421.96 59.46 433.65 57.06 436.96C54.66 440.27 53.76 448.65 53.76 448.65C53.76 448.65 49.87 465.42 48.67 473.81C47.47 482.2 43.28 493.58 43.28 493.58V511.86C15.62 540.23 8.80996 520.74 7.20996 511.94C6.97775 510.724 6.8175 509.495 6.72998 508.26L22.31 413.6C22.31 413.6 25.6 409.1 25 406.71C24.4 404.32 26.2 401.31 26.2 401.31L26.15 395.92C26.15 395.92 29.8 391.13 26.15 388.43C22.5 385.73 26.15 365.36 26.15 365.36C26.15 365.36 22.01 353.68 24.15 350.36C26.29 347.04 24.15 341.67 25.64 338.67C27.13 335.67 25.64 338.67 20.25 330.58C17.43 326.36 15.03 318.71 13.37 312.37C11.85 306.54 10.96 301.82 10.96 301.82C10.96 301.82 84.96 291.34 86.76 295.82C86.9883 297.576 86.9849 299.355 86.75 301.11Z"
                fill="#FC7300"
              />
              <path
                id="Vector_46"
                opacity="0.1"
                d="M43.25 505.84V511.23C15.59 539.6 8.77999 520.11 7.17999 511.31C12.21 515.63 23.75 521.01 43.25 505.84Z"
                fill="black"
              />
              <path
                id="Vector_47"
                d="M43.25 506.44V511.83C15.59 540.2 8.77999 520.71 7.17999 511.91C12.21 516.23 23.75 521.61 43.25 506.44Z"
                fill="#FC7300"
              />
              <path
                id="Vector_48"
                d="M39.96 521.77C40.3742 521.77 40.71 521.434 40.71 521.02C40.71 520.606 40.3742 520.27 39.96 520.27C39.5457 520.27 39.21 520.606 39.21 521.02C39.21 521.434 39.5457 521.77 39.96 521.77Z"
                fill="white"
              />
              <path
                id="Vector_49"
                d="M52.23 529.3C52.6442 529.3 52.98 528.964 52.98 528.55C52.98 528.136 52.6442 527.8 52.23 527.8C51.8158 527.8 51.48 528.136 51.48 528.55C51.48 528.964 51.8158 529.3 52.23 529.3Z"
                fill="white"
              />
              <path
                id="Vector_50"
                d="M47.53 526.21C47.9442 526.21 48.28 525.874 48.28 525.46C48.28 525.046 47.9442 524.71 47.53 524.71C47.1158 524.71 46.78 525.046 46.78 525.46C46.78 525.874 47.1158 526.21 47.53 526.21Z"
                fill="white"
              />
              <path
                id="Vector_51"
                d="M56.03 531.91C56.4442 531.91 56.78 531.574 56.78 531.16C56.78 530.746 56.4442 530.41 56.03 530.41C55.6158 530.41 55.28 530.746 55.28 531.16C55.28 531.574 55.6158 531.91 56.03 531.91Z"
                fill="white"
              />
              <path
                id="Vector_52"
                d="M44 523.97C44.4142 523.97 44.75 523.634 44.75 523.22C44.75 522.806 44.4142 522.47 44 522.47C43.5858 522.47 43.25 522.806 43.25 523.22C43.25 523.634 43.5858 523.97 44 523.97Z"
                fill="white"
              />
              <path
                id="Vector_53"
                opacity="0.1"
                d="M50.14 357.35C50.14 357.35 38.75 376.72 35.36 376.92C31.97 377.12 50.14 357.35 50.14 357.35Z"
                fill="black"
              />
              <path
                id="Vector_54"
                opacity="0.1"
                d="M56.03 422.45C56.03 422.45 41.91 429.84 45.13 430.45C48.35 431.06 56.03 422.45 56.03 422.45Z"
                fill="black"
              />
              <path
                id="Vector_55"
                opacity="0.1"
                d="M27.97 422.45C27.97 422.45 42.16 416.66 44.65 416.66C47.14 416.66 27.97 422.45 27.97 422.45Z"
                fill="black"
              />
              <path
                id="Vector_56"
                opacity="0.1"
                d="M19.94 294.78C19.94 294.78 12.72 312.88 4.16002 313.56C-4.39998 314.24 19.94 294.78 19.94 294.78Z"
                fill="black"
              />
              <path
                id="Vector_57"
                opacity="0.1"
                d="M19.94 294.78C19.94 294.78 12.72 312.88 4.16002 313.56C-4.39998 314.24 19.94 294.78 19.94 294.78Z"
                fill="black"
              />
            </g>
            <g id="head">
              <path
                id="Vector_58"
                d="M72.5608 98.81C70.0522 102.059 68.031 105.657 66.5608 109.49C61.8008 122.05 65.3708 132.17 65.3708 132.17C65.3708 132.17 22.0308 122.58 26.2308 117.79C28.7708 114.88 30.8708 103.69 32.1308 95.33C32.9508 89.88 33.4208 85.63 33.4208 85.63C33.4208 85.63 85.5408 81.84 72.5608 98.81Z"
                fill="#FF9B71"
              />
              <path
                id="Vector_59"
                d="M86.7409 81.2899C86.7503 88.0413 84.4039 94.5845 80.1062 99.7913C75.8084 104.998 69.8286 108.542 63.1978 109.813C56.567 111.083 49.7007 110 43.7828 106.751C37.8649 103.501 33.2662 98.2884 30.7795 92.0116C28.2929 85.7348 28.0742 78.7871 30.1612 72.3664C32.2481 65.9456 36.5099 60.4542 42.2118 56.8389C47.9136 53.2236 54.6982 51.711 61.3958 52.5619C68.0934 53.4127 74.2842 56.5738 78.9009 61.4999C83.9326 66.8616 86.7356 73.937 86.7409 81.2899Z"
                fill="#FF9B71"
              />
              <path
                id="Vector_60"
                opacity="0.1"
                d="M78.9009 61.5C75.5109 62.62 71.9009 63.27 68.9009 61.58C66.8309 60.43 65.2709 58.27 62.9009 57.82C60.7709 57.41 58.5908 58.64 57.2208 60.32C55.9473 62.0883 54.9368 64.0318 54.2208 66.09C52.7081 69.6857 50.86 73.131 48.7009 76.38C47.3609 78.38 45.5809 80.5 43.1809 80.6C39.8909 80.75 37.6709 77.12 34.4909 76.24C26.7209 74.07 31.2109 82.63 32.3509 85.86C33.4773 89.048 33.8737 92.4483 33.5109 95.81C33.2542 95.8694 32.9935 95.9096 32.7309 95.93C29.1891 89.7784 28.0265 82.5415 29.4633 75.5902C30.9 68.6388 34.8364 62.4559 40.5267 58.2125C46.217 53.9691 53.266 51.9601 60.3383 52.566C67.4107 53.1719 74.0153 56.3506 78.9009 61.5Z"
                fill="black"
              />
              <path
                id="Vector_61"
                d="M33.9509 75.62C37.1209 76.5 39.3409 80.13 42.6309 79.99C45.0409 79.88 46.8209 77.77 48.1509 75.76C50.3103 72.5217 52.1585 69.0864 53.6708 65.5C54.3868 63.4418 55.3973 61.4982 56.6708 59.73C58.0508 58.05 60.2208 56.82 62.3508 57.23C64.6708 57.68 66.2308 59.84 68.3508 60.99C72.1308 63.1 76.8308 61.57 80.8708 59.99C82.8708 59.23 85.0609 58.13 85.4009 56.07C85.6409 54.62 84.8108 53.16 85.0008 51.7C85.1908 50.24 86.2708 49.22 87.0008 48.02C87.7309 46.82 88.1508 45.09 87.1208 44.12C86.3708 43.42 85.2008 43.47 84.2408 43.12C81.8508 42.19 81.2408 38.98 79.1108 37.54C76.8108 35.99 73.7409 37.03 70.9609 37.16C66.9609 37.34 63.2309 35.5 59.5209 34.03C55.8109 32.56 51.5808 31.43 47.9108 32.97C45.7208 33.9 44.0208 35.65 42.1608 37.13C38.5232 39.9941 34.181 41.825 29.5908 42.43C27.3308 42.73 24.8608 42.78 23.0808 44.19C20.8408 45.97 20.5008 49.25 20.9308 52.08C21.3608 54.91 22.3609 57.69 22.1309 60.53C21.7709 65.04 18.4008 68.75 17.2808 73.13C17.0321 73.8287 16.947 74.5751 17.0319 75.3119C17.1169 76.0487 17.3696 76.7562 17.7708 77.38C18.4362 78.043 19.2024 78.5965 20.0409 79.02C21.1146 79.7193 22.0214 80.6461 22.697 81.7348C23.3727 82.8235 23.8008 84.0474 23.9509 85.32C24.1009 86.61 23.9508 87.92 24.1508 89.2C24.5502 91.1577 25.6998 92.8815 27.3536 94.0028C29.0074 95.124 31.0343 95.5537 33.0009 95.2C33.3589 91.8383 32.9626 88.4391 31.8408 85.25C30.6608 82.01 26.1809 73.5 33.9509 75.62Z"
                fill="black"
              />
              <path
                id="Vector_62"
                d="M89.1408 68.5C89.1408 68.5 80.9908 62.7799 76.1408 68.9499H73.2208C70.3008 60.5599 55.8508 64.4499 55.8508 64.4499L36.1508 67.6799L36.5208 68.9499L55.8508 67.38C55.8508 67.38 56.3008 75.2399 58.9208 77.7899C61.5408 80.3399 67.2308 78.91 67.2308 78.91C70.6708 78.47 72.3208 73.07 72.9308 70.41L75.7508 70.57C75.2408 73.28 74.9008 78.57 79.5108 80.41C85.8008 82.88 87.7508 77.2599 87.7508 77.2599C87.7508 77.2599 89.8908 70.02 89.1408 68.5Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_63"
                opacity="0.1"
                d="M89.1408 69.1199C89.1408 69.1199 80.9908 63.3999 76.1408 69.5699H73.2208C70.3008 61.1799 55.8508 65.0699 55.8508 65.0699L36.1508 68.2899L36.5208 69.5699L55.8508 67.9899C55.8508 67.9899 56.3008 75.8599 58.9208 78.4099C61.5408 80.9599 67.2308 79.5299 67.2308 79.5299C70.6708 79.0899 72.3208 73.6899 72.9308 71.0299L75.7508 71.1899C75.2408 73.8999 74.9008 79.1899 79.5108 81.0299C85.8108 83.4999 87.8108 77.8799 87.8108 77.8799C87.8108 77.8799 89.8908 70.6199 89.1408 69.1199Z"
                fill="black"
              />
              <path
                id="Vector_64"
                d="M72.5608 91.81C70.0522 95.0594 68.031 98.6572 66.5608 102.49C61.8008 115.05 65.3708 125.17 65.3708 125.17C65.3708 125.17 22.0308 115.58 26.2308 110.79C28.7708 107.88 30.8708 96.69 32.1308 88.33C32.9508 82.88 33.4208 78.63 33.4208 78.63C33.4208 78.63 85.5408 74.84 72.5608 91.81Z"
                fill="#FF9B71"
              />
              <path
                id="Vector_65"
                d="M86.7409 74.2899C86.7503 81.0413 84.4039 87.5845 80.1062 92.7913C75.8084 97.9981 69.8286 101.542 63.1978 102.813C56.567 104.083 49.7007 103 43.7828 99.7505C37.8649 96.501 33.2662 91.2884 30.7795 85.0116C28.2929 78.7348 28.0742 71.7871 30.1612 65.3664C32.2481 58.9456 36.5099 53.4542 42.2118 49.8389C47.9136 46.2236 54.6982 44.711 61.3958 45.5619C68.0934 46.4127 74.2842 49.5738 78.9009 54.4999C83.9326 59.8616 86.7356 66.937 86.7409 74.2899Z"
                fill="#FF9B71"
              />
              <path
                id="Vector_66"
                d="M33.9509 68.62C37.1209 69.5 39.3409 73.13 42.6309 72.99C45.0409 72.88 46.8209 70.77 48.1509 68.76C50.3103 65.5217 52.1585 62.0864 53.6708 58.5C54.3868 56.4418 55.3973 54.4982 56.6708 52.73C58.0508 51.05 60.2208 49.82 62.3508 50.23C64.6708 50.68 66.2308 52.84 68.3508 53.99C72.1308 56.1 76.8308 54.57 80.8708 52.99C82.8708 52.23 85.0609 51.13 85.4009 49.07C85.6409 47.62 84.8108 46.16 85.0008 44.7C85.1908 43.24 86.2708 42.22 87.0008 41.02C87.7309 39.82 88.1508 38.09 87.1208 37.12C86.3708 36.42 85.2008 36.47 84.2408 36.12C81.8508 35.19 81.2408 31.98 79.1108 30.54C76.8108 28.99 73.7409 30.03 70.9609 30.16C66.9609 30.34 63.2309 28.5 59.5209 27.03C55.8109 25.56 51.5808 24.43 47.9108 25.97C45.7208 26.9 44.0208 28.65 42.1608 30.13C38.5232 32.9941 34.181 34.825 29.5908 35.43C27.3308 35.73 24.8608 35.78 23.0808 37.19C20.8408 38.97 20.5008 42.25 20.9308 45.08C21.3608 47.91 22.3609 50.69 22.1309 53.53C21.7709 58.04 18.4008 61.75 17.2808 66.13C17.0321 66.8287 16.947 67.5751 17.0319 68.3119C17.1169 69.0487 17.3696 69.7562 17.7708 70.38C18.4362 71.043 19.2024 71.5965 20.0409 72.02C21.1146 72.7193 22.0214 73.6461 22.697 74.7348C23.3727 75.8235 23.8008 77.0474 23.9509 78.32C24.1009 79.61 23.9508 80.92 24.1508 82.2C24.5502 84.1577 25.6998 85.8815 27.3536 87.0028C29.0074 88.124 31.0343 88.5537 33.0009 88.2C33.3589 84.8383 32.9626 81.4391 31.8408 78.25C30.6608 75.01 26.1809 66.5 33.9509 68.62Z"
                fill="black"
              />
              <path
                id="Vector_67"
                d="M89.1408 68.5C89.1408 68.5 80.9908 62.7799 76.1408 68.9499H73.2208C70.3008 60.5599 55.8508 64.4499 55.8508 64.4499L36.1508 67.6799L36.5208 68.9499L55.8508 67.38C55.8508 67.38 56.3008 75.2399 58.9208 77.7899C61.5408 80.3399 67.2308 78.91 67.2308 78.91C70.6708 78.47 72.3208 73.07 72.9308 70.41L75.7508 70.57C75.2408 73.28 74.9008 78.57 79.5108 80.41C85.8008 82.88 87.7508 77.2599 87.7508 77.2599C87.7508 77.2599 89.8908 70.02 89.1408 68.5Z"
                fill="#E84855"
              />
              <path
                id="Vector_68"
                d="M80.5909 25C80.6184 25.0505 80.652 25.0976 80.6909 25.14L80.5909 25Z"
                fill="black"
              />
              <path
                id="Vector_69"
                opacity="0.1"
                d="M89.0509 68.9505C89.0509 68.9505 80.9009 63.2305 76.0509 69.4005H73.1308C70.2108 61.0105 55.7608 64.9005 55.7608 64.9005L36.0609 68.1205L36.4308 69.4005L55.7608 67.8205C55.7608 67.8205 56.2108 75.6905 58.8308 78.2405C61.4508 80.7905 67.1408 79.3605 67.1408 79.3605C70.5808 78.9205 72.2309 73.5205 72.8409 70.8605L75.6609 71.0205C75.1509 73.7305 74.8109 79.0205 79.4209 80.8605C85.7209 83.3305 87.7209 77.7105 87.7209 77.7105C87.7209 77.7105 89.8009 70.4505 89.0509 68.9505Z"
                fill="#E84855"
              />
              <path
                id="Vector_70"
                d="M61.5909 0C61.6184 0.0505477 61.652 0.0975588 61.6909 0.139999L61.5909 0Z"
                fill="black"
              />
            </g>
            <g id="rest">
              <path
                id="Vector_71"
                opacity="0.1"
                d="M85.4802 304.11C75.7002 305.83 57.9302 309.2 56.4802 311.22C54.4802 314.01 39.4802 314.81 30.4802 316.01C25.3102 316.7 17.7302 316.13 12.0202 315.37C10.5002 309.54 9.61017 304.82 9.61017 304.82C9.61017 304.82 83.6102 294.34 85.4102 298.82C85.6651 300.573 85.6886 302.351 85.4802 304.11Z"
                fill="black"
              />
              <path
                id="Vector_72"
                d="M91.8102 301.23C91.8102 301.23 58.4801 306.62 56.4801 309.42C54.4801 312.22 39.4801 313.01 30.4802 314.21C21.4802 315.41 5.32016 312.81 4.12016 312.01C-2.87984 307.34 0.520158 252.5 3.52016 245.7C6.52016 238.9 5.52014 200.97 2.72014 185.79C-0.0798604 170.61 4.12016 151.64 4.12016 151.64C4.12016 151.64 8.31016 138.26 7.52016 135.46C6.73016 132.66 11.5202 126.68 11.5202 126.68C11.5202 126.68 18.9102 114.49 22.7002 112.68C23.3947 112.346 24.0094 111.868 24.5029 111.276C24.9963 110.684 25.3568 109.993 25.5601 109.25C26.2701 107.04 26.1802 104.25 26.3002 101.9C26.5002 97.9 30.4902 97.9 30.4902 97.9C41.8802 99.69 68.6401 116.47 68.6401 116.47C67.6401 120.26 74.0301 131.05 74.0301 131.05C74.1401 131.22 74.2301 131.4 74.3301 131.59C81.3301 144.78 86.4202 185.17 86.4202 185.17C86.4202 185.17 86.7701 204.46 86.7101 218.66C86.7101 225.75 86.5401 231.57 86.2101 233.1C85.6301 235.82 86.7801 248.45 87.9501 260.47C88.7501 268.78 89.5702 276.79 89.8202 281.03C90.4802 291.44 91.8102 301.23 91.8102 301.23Z"
                fill="#BFDB38"
              />
              <path
                id="Vector_73"
                opacity="0.1"
                d="M62.6502 246.11C62.6502 246.11 53.6502 267.68 56.0602 270.87C58.4702 274.06 62.6502 246.11 62.6502 246.11Z"
                fill="black"
              />
              <path
                id="Vector_74"
                opacity="0.1"
                d="M73.8301 256.49C73.8301 256.49 63.6502 272.49 67.4402 275.66C71.2302 278.83 73.8301 256.49 73.8301 256.49Z"
                fill="black"
              />
              <path
                id="Vector_75"
                opacity="0.1"
                d="M74.3301 132.81C66.9501 129.92 54.0801 124.35 48.2701 118.68C42.4601 113.01 31.8001 111.14 25.5601 110.46C26.2701 108.25 26.1801 105.46 26.3001 103.11C26.5001 99.11 30.4901 99.11 30.4901 99.11C41.8801 100.9 68.6401 117.68 68.6401 117.68C67.6401 121.47 74.0301 132.26 74.0301 132.26C74.1401 132.44 74.2301 132.62 74.3301 132.81Z"
                fill="black"
              />
              <path
                id="Vector_76"
                d="M74.3301 131.61C66.9501 128.72 54.0801 123.15 48.2701 117.49C42.4601 111.83 31.8001 109.94 25.5601 109.26C26.2701 107.05 26.1801 104.26 26.3001 101.91C26.5001 97.91 30.4901 97.91 30.4901 97.91C41.8801 99.7 68.6401 116.48 68.6401 116.48C67.6401 120.27 74.0301 131.06 74.0301 131.06C74.1401 131.24 74.2301 131.42 74.3301 131.61Z"
                fill="#BFDB38"
              />
              <path
                id="Vector_77"
                opacity="0.1"
                d="M85.4802 304.11C75.7002 305.83 57.9302 309.2 56.4802 311.22C54.4802 314.01 39.4802 314.81 30.4802 316.01C25.3102 316.7 17.7302 316.13 12.0202 315.37C10.5002 309.54 9.61017 304.82 9.61017 304.82C9.61017 304.82 83.6102 294.34 85.4102 298.82C85.6651 300.573 85.6886 302.351 85.4802 304.11Z"
                fill="black"
              />
              <path
                id="Vector_78"
                d="M91.8102 301.23C91.8102 301.23 58.4801 306.62 56.4801 309.42C54.4801 312.22 39.4801 313.01 30.4802 314.21C21.4802 315.41 5.32016 312.81 4.12016 312.01C-2.87984 307.34 0.520158 252.5 3.52016 245.7C6.52016 238.9 5.52014 200.97 2.72014 185.79C-0.0798604 170.61 4.12016 151.64 4.12016 151.64C4.12016 151.64 8.31016 138.26 7.52016 135.46C6.73016 132.66 11.5202 126.68 11.5202 126.68C11.5202 126.68 18.9102 114.49 22.7002 112.68C23.3947 112.346 24.0094 111.868 24.5029 111.276C24.9963 110.684 25.3568 109.993 25.5601 109.25C26.2701 107.04 26.1802 104.25 26.3002 101.9C26.5002 97.9 30.4902 97.9 30.4902 97.9C41.8802 99.69 68.6401 116.47 68.6401 116.47C67.6401 120.26 74.0301 131.05 74.0301 131.05C74.1401 131.22 74.2301 131.4 74.3301 131.59C81.3301 144.78 86.4202 185.17 86.4202 185.17C86.4202 185.17 86.7701 204.46 86.7101 218.66C86.7101 225.75 86.5401 231.57 86.2101 233.1C85.6301 235.82 86.7801 248.45 87.9501 260.47C88.7501 268.78 89.5702 276.79 89.8202 281.03C90.4802 291.44 91.8102 301.23 91.8102 301.23Z"
                fill="#BFDB38"
              />
              <path
                id="Vector_79"
                opacity="0.1"
                d="M62.6502 246.11C62.6502 246.11 53.6502 267.68 56.0602 270.87C58.4702 274.06 62.6502 246.11 62.6502 246.11Z"
                fill="black"
              />
              <path
                id="Vector_80"
                opacity="0.1"
                d="M73.8301 256.49C73.8301 256.49 63.6502 272.49 67.4402 275.66C71.2302 278.83 73.8301 256.49 73.8301 256.49Z"
                fill="black"
              />
              <path
                id="Vector_81"
                opacity="0.1"
                d="M74.3301 132.81C66.9501 129.92 54.0801 124.35 48.2701 118.68C42.4601 113.01 31.8001 111.14 25.5601 110.46C26.2701 108.25 26.1801 105.46 26.3001 103.11C26.5001 99.11 30.4901 99.11 30.4901 99.11C41.8801 100.9 68.6401 117.68 68.6401 117.68C67.6401 121.47 74.0301 132.26 74.0301 132.26C74.1401 132.44 74.2301 132.62 74.3301 132.81Z"
                fill="black"
              />
              <path
                id="Vector_82"
                d="M74.3301 131.61C66.9501 128.72 54.0801 123.15 48.2701 117.49C42.4601 111.83 31.8001 109.94 25.5601 109.26C26.2701 107.05 26.1801 104.26 26.3001 101.91C26.5001 97.91 30.4901 97.91 30.4901 97.91C41.8801 99.7 68.6401 116.48 68.6401 116.48C67.6401 120.27 74.0301 131.06 74.0301 131.06C74.1401 131.24 74.2301 131.42 74.3301 131.61Z"
                fill="#BFDB38"
              />
            </g>
            <g id="hand">
              <path
                id="Vector_83"
                d="M36.96 190.78L40.55 203.22L54.55 225.13C54.55 225.13 61.34 232.52 61.34 233.52C61.34 234.52 86.34 253.89 96.89 259.28C107.44 264.67 120.89 269.1 121.89 272.98C122.89 276.86 128.89 305.82 145.89 296.43C162.89 287.04 141.1 265.87 141.1 265.87L127.1 253.49C127.1 253.49 97.23 230.12 94.69 222.34C92.15 214.56 82.1599 207.76 82.1599 207.76L75.1599 194.97L49 178.2L36.96 190.78Z"
                fill="#FF9B71"
              />
              <path
                id="Vector_84"
                d="M33.16 123.67C33.16 123.67 8.80001 134.86 16.39 152.67C23.98 170.48 40.55 203.26 40.55 203.26C40.55 203.26 38.55 191.82 42.95 190.82C47.35 189.82 75.1 195.01 75.1 195.01C75.1 195.01 68.71 181.43 70.1 173.84C71.49 166.25 59.53 117.08 33.16 123.67Z"
                fill="#BFDB38"
              />
              <path
                id="Vector_85"
                d="M37 190.58L40.59 203.02L54.59 224.93C54.59 224.93 61.38 232.32 61.38 233.32C61.38 234.32 86.38 253.69 96.93 259.08C107.48 264.47 120.93 268.9 121.93 272.78C122.93 276.66 128.93 305.62 145.93 296.23C162.93 286.84 141.14 265.67 141.14 265.67L127.14 253.29C127.14 253.29 97.27 229.92 94.73 222.14C92.19 214.36 82.2 207.56 82.2 207.56L75.2 194.77L49.04 178L37 190.58Z"
                fill="#FF9B71"
              />
              <path
                id="Vector_86"
                opacity="0.1"
                d="M33.36 124.08C33.36 124.08 9.00003 135.26 16.58 153.01C24.16 170.76 40.75 203.62 40.75 203.62C40.75 203.62 38.7501 192.18 43.1501 191.18C47.5501 190.18 75.3 195.37 75.3 195.37C75.3 195.37 68.91 181.79 70.3 174.2C71.69 166.61 59.75 117.48 33.36 124.08Z"
                fill="#C20A0A"
              />
              <path
                id="Vector_87"
                opacity="0.1"
                d="M32.96 123.87C32.96 123.87 8.6 135.06 16.19 152.87C23.78 170.68 40.35 203.46 40.35 203.46C40.35 203.46 38.36 192.01 42.75 191.01C47.14 190.01 76.6 194.92 76.6 194.92C76.6 194.92 68.51 181.62 69.91 174.03C71.31 166.44 59.33 117.28 32.96 123.87Z"
                fill="#C20A0A"
              />
              <path
                id="Vector_88"
                d="M33.2356 123.606C33.2356 123.606 8.87563 134.796 16.4656 152.606C24.0556 170.416 40.6256 203.196 40.6256 203.196C40.6256 203.196 38.6256 191.756 43.0256 190.756C47.4256 189.756 75.1756 194.946 75.1756 194.946C75.1756 194.946 68.7856 181.366 70.1756 173.776C71.5656 166.186 59.6056 117.016 33.2356 123.606Z"
                fill="#BFDB38"
              />
              <path
                id="Vector_89"
                opacity="0.1"
                d="M32.2356 123.606C32.2356 123.606 7.87563 134.796 15.4656 152.606C23.0556 170.416 39.6256 203.196 39.6256 203.196C39.6256 203.196 37.6356 191.746 42.0256 190.746C46.4156 189.746 75.8756 194.656 75.8756 194.656C75.8756 194.656 67.7856 181.356 69.1856 173.766C70.5856 166.176 58.6056 117.016 32.2356 123.606Z"
                fill="#C20A0A"
              />
            </g>
          </g>
        </svg>

        <div id="leaderboardButton" className={answerMode ? 'hidden' : undefined} onClick={displayLeaderboard}>
          <img src={leaderBoardImg} alt="Leaderboard Image" />
        </div>

        <button id="genMoveBox" onClick={handleGenMove}>
          Gen Move
        </button>

        <div id="score">
          <p>{score}</p>
          <p>SCORE</p>
          <hr />
          <p>High Score: {highScore}</p>
          <p>Total Move: {totalMove}</p>
          <hr />
          <p>{user}</p>
        </div>

        {answerMode && (
          <form onSubmit={(e) => handleAnsSubmit(e)} id="questionBox">
            <p>{puzzles[level - 1].question}</p>
            {puzzles[level - 1].hint != "" && (
              <p className="hint">{puzzles[level - 1].hint}</p>
            )}
            <p className='warn'>{userMessage}</p>
            <input type="text" autoFocus onChange={(e) => {
              setAnswer(e.target.value)
              setUserMessage("")
             }} 
            />
            <input type="submit" value="Submit" />
          </form>
        )}
        <div id="levelBox">{level}</div>
        <hr className="road" />
      </div>
      <form id="nameForm" onSubmit={(e) => handleNameSubmit(e)}>
        <p className='warn'>{userMessage}</p>
        <input
          type="text"
          id="fName"
          placeholder="Enter your first name"
          name="fName"
          onChange={() => setUserMessage("")}
          autoFocus
        />
        <input type="submit" value="Submit" />
      </form>
      <div id="gameOverBox" className="hidden">
        <p>{user}</p>
        <p id="gameOverMessage">{gameOverMessage}</p>
        <div>
          <p>Your Score: {score}</p>
          <p>Total Move: {totalMove}</p>
        </div>
        <input type="button" value="Restart" onClick={handleRestart} />
      </div>
      <div id="leaderboard" className='hidden'>
        <div key={0}>
          <p>Rank</p>
          <p>Name</p>
          <p>Score</p>
          <p>Move</p>
          <img src={closeImg} alt="" onClick={closeLeaderboard}/>
        </div>
        {
          leaderboard != null ? ( 
            leaderboard.map((item, index) => (
              item != null ? 
              (<div key={index+1}>
                <p className="number-custom-font">{index + 1}</p>
                <p className='name-custom-font'>{item["name"]}</p>
                <p className="number-custom-font">{item["score"]}</p>
                <p className="number-custom-font">{item["move"]}</p>
              </div>) : 
              null
            ))
          ) : null
        }
      </div>
    </>
  );
}

export default App
