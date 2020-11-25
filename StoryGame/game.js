const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}


const textNodes =
  [

    {
      id: 1,
      text: 'Fall semester has started during the COVID-19 pandemic, and you are beginning your first week back at UGA. You wake up in the morning on the first day of the week.',
      options: [
        {
          text: 'Do DawgCheck',
          nextText: 12
        },
        {
          text: 'Skip DawgCheck',
          nextText: 13
        }
      ]
    },
    {
      id: 2,
      text: 'You arrive on campus for your first class and made sure you were maintaining six feet apart from others. You are about to enter the MLC building but before that you...',
      options: [
        {
          text: 'Go to class',
          nextText: 4
        },
        {
          text: 'Skip class',
          nextText: 5
        }
      ]
    },
    {
      // ENDING THE GAME WITHOUT COVID
      id: 3,
      text: 'Congratulations, you finished your first week at UGA. You were able to refrain from catching corona and came out more educated on the topic and how it imapcts our campus and the world as a whole. Be sure to maintain a distance of six feet and wear a mask in order to protect yourself and others. We gotta battle COVID-19 together.',
      options: [
        {
          text: 'LETS GO DAWGS',
          nextText: -1
        }
      ]
    },
    {
      // GOING TO CLASS
      id: 4,
      text: 'You walk into your first class, look around and see that everybody is wearing a mask and there are placements on the chairs to let you know where you are allowed to sit.',
      options: [
        {
          text: 'Find a seat in the front',
          nextText: 6
        },
        {
          text: 'Find a seat in the middle',
          nextText: 6
        },
        {
          text: 'Find a seat in the back',
          nextText: 6
        }
      ]
    },
    {
      // SKIPPING CLASS
      id: 5,
      text: 'You chose not to go to your first class. You wander around campus and find yourself at Herty field. You chose to',
      options: [
        {
          text: 'Take a nap',
          nextText: 22
        },
        {
          text: 'Check social media',
          nextText: 23
        },
        {
          text: 'Look around',
          nextText: 21
        }
      ]
    },
    { // FINDING A SEAT IN CLASS
      id: 6,
      text: 'You find an avaliable seat and sit down, maintaining a good distance between you and your peers. Your professor comes in and gives a brief introduction to how class will be formatted in the future due to the Corona virus pandemic.',
      options: [
        {
          text: 'Take notes',
          nextText: 7
        },
        {
          text: 'Sleep',
          nextText: 7
        }
      ]
    },
    {
      id: 7,
      text: 'Class finishes and you get out of your seat and leave the classroom. Where do you want to go next?',
      options: [
        {
          text: 'Tate Student Center',
          nextText: 8
        },
        {
          text: 'MLC Study Room',
          nextText: 56
        },
        {
          text: 'Bolton Dining Hall',
          nextText: 10
        },
        {
          text: 'Home',
          nextText: 11
        }
      ]
    },
    {
      id: 8,
      text: 'You walk into the Tate Student Center and see that the layout is now different.',
      options: [
        {
          text: 'Go get Starbucks',
          nextText: 9
        },
        {
          text: 'Find a play to study',
          nextText: -1
        },
        {
          text: 'Look around',
          nextText: 20
        }
      ]
    },
    {
      id: 9,
      text: 'You stand in line at Starbucks on one of the stickers that are placed on the floor and order yourself a drink.',
      options: [
        {
          text: 'Caramel Macchiato',
          nextText: 10
        },
        {
          text: 'Strawberry Acai',
          nextText: 10
        },
        {
          text: 'Iced Coffee',
          nextText: 10
        },
        {
          text: 'Latte',
          nextText: 10
        }
      ]
    },
    { // BUS OR WALKING
      id: 10,
      text: 'Your next class is a good distance away in the Science Learning Center. How do you plan to get there?',
      options: [
        {
          text: 'Ride the bus',
          nextText: 17
        },
        {
          text: 'Walk',
          nextText: -1
        }
      ]
    },
    { // ENDING THE GAME AND CATCHING COVID
      id: 11,
      text: 'Congratulations, you finished your first week at UGA. Despite catching the corona virus, you were able to make a strong and healthy recovery. You learned about the serious of COVID-19 and the impact it has made on our campus as well as the rest of the world. Be sure to maintain a distance of six feet and wear a mask in order to protect yourself and others. We gotta battle COVID-19 together.',
      options: [
        {
          text: 'Congratulations. Play Again.',
          //requiredState: (currentState = currentState.CovidPositive),
          nextText: -1
        }
      ]
    },
    { // DAWG CHECK QUESTION
      id: 12,
      text: 'Do you currently have any of the emergency warning symptoms:',
      options: [
        {
          text: 'Extreme difficulty breathing or shortness of breath',
          setState: { CovidPositive: true },
          nextText: 14
        },
        {
          text: 'Signs of low oxygen',
          setState: { CovidPositive: true },
          nextText: 14
        },
        {
          text: 'Severe chest pain or discomfort',
          setState: { CovidPositive: true },
          nextText: 14
        },
        {
          text: 'Signs of low blood pressure',
          setState: { CovidPositive: true },
          nextText: 14
        },
        {
          text: 'None of the above',
          setState: { CovidPositive: false },
          nextText: 14
        }
      ]
    },
    { // SKIPPING DAWG CHECK
      id: 13,
      text: 'You decided to skip doing dawgcheck and you start on the next task of your day',
      options: [
        {
          text: 'Head to campus',
          nextText: 2
        },
        {
          text: 'Go back to sleep',
          nextText: 3
        }
      ]
    },
    { // DAWG CHECK QUESTION
      id: 14,
      text: 'Have you been in close contact with somebody who has COVID-19 symptoms?',
      options: [
        {
          text: 'I have been in close contact',
          setState: { CovidPositive: true },
          nextText: 15
        },
        {
          text: 'I have not been in close contact',
          setState: { CovidPositive: false },
          nextText: 15
        }
      ]
    },
    { // DAWG CHECK QUESTION
      id: 15,
      text: 'Do you currently have any of the following symptoms?',
      options: [
        {
          text: 'Fever',
          setState: { CovidPositive: true },
          nextText: 19
        },
        {
          text: 'Chills',
          setState: { CovidPositive: true },
          nextText: 19
        },
        {
          text: 'Cough',
          setState: { CovidPositive: true },
          nextText: 19
        },
        {
          text: 'Decrease in smell or taste',
          setState: { CovidPositive: true },
          nextText: 19
        },
        {
          text: 'None of the above',
          setState: { CovidPositive: false },
          nextText: 19
        }
      ]
    },
    { // FINISHING THE DAWG CHECK
      id: 16,
      text: 'Thank you. You may come to campus. Please continue to monitor your personal situation, take the "Check for Symptoms" tool daily, and report any new symptoms. Be sure to wear a face-covering when in public, practice social distancing, and practice good hygiene.',
      options: [
        {
          text: 'Head to campus',
          nextText: 2
        }
      ]
    },
    { // TAKING THE BUS
      id: 17,
      text: 'A UGA bus pulls up and you head inside. There are labels on chairs to promote social distancing and you find an avaliable seat to sit down at. You look around and the bus is close to empty.',
      options: [
        {
          text: 'Get off at the Science Learning Center stop',
          nextText: 2
        }
      ]
    },
    { // POSTIVE COVID TEST
      id: 18,
      text: 'Based on your answers, it is advised that you schedule a visit to the University Health Center and then self quarantine at home for two weeks. Continue',
      options: [
        {
          text: 'It be like that lmao',
          nextText: 2
        }
      ]
    },
    { // POSTIVE COVID TEST
      id: 19,
      text: 'Thank you for taking Dawg Check',
      options: [
        {
          text: 'Check results',
          requiredState: (currentState) => currentState.CovidPositive,
          setState: { CovidPositive: false },
          nextText: 18
        },
        {
          text: 'Check results',
          nextText: 16
        }
      ]
    },
    { // Look Around (Tate)
      id: 20,
      text: 'There are fewer couches and chairs and they are set up in order to maintain some distance around each other. Starbucks has a new setup where there are stickers on the ground to promote six feet apart when being in the line. The information desk has a plexiglass covering to add extra protection and there are dvided lines for the Tate Market market section.',
      options: [
        {
          text: 'Go to Starbucks',
          nextText: 9
        },
        {
          text: 'Find a place to study',
          nextText: -1
        }
      ]
    },
    { // Look Around (Herty Field)
      id: 21,
      text: 'You look around and see that there are groups of people sitting on the grass, distanced apart from each other.',
      options: [
        {
          text: 'Take a nap',
          nextText: 22
        },
        {
          text: 'Check social media',
          nextText: 23
        },
        {
          text: 'Check COVID statistics',
          nextText: 55
        },
      ]
    },
    { // Take a nap (Herty Field)
      id: 22,
      text: 'You find an empty part of the field and started to lay down and nap',
      options: [
        {
          text: '*snore*',
          nextText: 54
        },
        {
          text: '*zzz*',
          nextText: 54
        }
      ]
    },
    { // Check social media (herty field)
      id: 23,
      text: 'You find an empty part of the field, unpacked your stuff and checked your social media',
      options: [
        {
          text: 'Take a nap',
          nextText: 22
        },
        {
          text: 'Check COVID statistics',
          nextText: 55
        }
      ]
    },
    { // Friend showing symptom
      id: 24,
      text: 'Your friend starts showing symptoms of COVID, what do you do?',
      options: [
        {
          text: 'Tell them to take the DAWG Check application to see if they are fine or should quarantine for two weeks',
          nextText: -1
        },
        {
          text: 'Tell them that they are fine and is probably overthinking it',
          nextText: -1
        }
      ]
    },
    { // You are showing symptom
      id: 25,
      text: 'You think you have symptoms of COVID, what do you do?',
      options: [
        {
          text: 'Schedule a testing',
          nextText: -1
        },
        {
          text: 'Ignore it',
          nextText: -1
        }
      ]
    },
    { // DT
      id: 26,
      text: 'Your friend went downtown yesterday and now they are showing symptoms of having COVID, what do you do?',
      options: [
        {
          text: 'Tell them to go get tested',
          nextText: -1
        },
        {
          text: 'Tell them to be careful but they should be fine',
          nextText: -1
        },
        {
          text: 'Say nothing',
          nextText: -1
        }
      ]
    },
    { // Lunch with friends
      id: 27,
      text: 'Your friends ask you to go have lunch with them',
      options: [
        {
          text: 'Agree to go',
          nextText: 41
        },
        {
          text: 'Say that you\'re busy',
          nextText: -1
        }
      ]
    },
    { // Going DT
      id: 28,
      text: 'Your friends want to go downtown to celebrate and asks if you wanna come with them, you decide to',
      options: [
        {
          text: 'Go, it\'ll be fun',
          nextText: -1
        },
        {
          text: 'Don\'t go, you do not want to risk catching COVID',
          nextText: -1
        }
      ]
    },
    { // Going DT (YES)
      id: 29,
      text: 'You chose to go downtown with your friends',
      options: [
        {
          text: 'Visit the bars',
          nextText: -1
        },
        {
          text: 'Visit the restaurants',
          nextText: -1
        }
      ]
    },
    { // Going DT (NO)
      id: 23,
      text: 'You chose to not go downtown with your friends',
      options: [
        {
          text: 'Study',
          nextText: -1
        },
        {
          text: 'Watch netflix',
          nextText: -1
        }
      ]
    },
    { // Going DT (NO)
      id: 30,
      text: 'You are feeling unwell and think you might have symptoms of Corona. You think of this because you went downtown with your friends a couple of days ago',
      options: [
        {
          text: 'Go get tested',
          nextText: -1
        },
        {
          text: 'Ignore it',
          nextText: -1
        }
      ]
    },
    { // DAY 2
      id: 31,
      text: 'You wake up in the morning on the second day of the week.',
      options: [
        {
          text: 'Do DawgCheck',
          nextText: 12
        },
        {
          text: 'Skip DawgCheck',
          nextText: 13
        }
      ]
    },
    { // DAY 3
      id: 32,
      text: 'You wake up in the morning on the third day of the week.',
      options: [
        {
          text: 'Do DawgCheck',
          nextText: 12
        },
        {
          text: 'Skip DawgCheck',
          nextText: 13
        }
      ]
    },
    { // DAY 4
      id: 33,
      text: 'You wake up in the morning on the fourth day of the week.',
      options: [
        {
          text: 'Do DawgCheck',
          nextText: 12
        },
        {
          text: 'Skip DawgCheck',
          nextText: 13
        }
      ]
    },
    { // DAY 5
      id: 34,
      text: 'You wake up in the morning on the fifth day of the week.',
      options: [
        {
          text: 'Do DawgCheck',
          nextText: 12
        },
        {
          text: 'Skip DawgCheck',
          nextText: 13
        }
      ]
    },
    { // Ending the first day
      id: 35,
      text: 'You had a long first day of school. You start preparing for bed and getting ready for tomorrow',
      options: [
        {
          text: 'Go to sleep',
          nextText: 31
        },
        {
          text: 'Stay up and watch Netflix',
          nextText: 31
        }
      ]
    },
    { // Ending the second day
      id: 36,
      text: 'You had a long second day of school. You start preparing for bed and getting ready for tomorrow',
      options: [
        {
          text: 'Go to sleep',
          nextText: 32
        },
        {
          text: 'Stay up and watch Netflix',
          nextText: 32
        }
      ]
    },
    { // Ending the third day
      id: 37,
      text: 'You had a long third day of school. You start preparing for bed and getting ready for tomorrow',
      options: [
        {
          text: 'Go to sleep',
          nextText: 33
        },
        {
          text: 'Stay up and watch Netflix',
          nextText: 33
        }
      ]
    },
    { // Ending the fourth day
      id: 38,
      text: 'You had a long fourth day of school. You start preparing for bed and getting ready for tomorrow',
      options: [
        {
          text: 'Go to sleep',
          nextText: 34
        },
        {
          text: 'Stay up and watch Netflix',
          nextText: 34
        }
      ]
    },
    { // Ending the fifth day
      id: 39,
      text: 'You had a long fifth day of school. You start preparing for bed and getting ready for tomorrow',
      options: [
        {
          text: 'Go to sleep',
          nextText: 35
        },
        {
          text: 'Stay up and watch Netflix',
          nextText: 35
        }
      ]
    },
    { // Surveillance Testing at Legion Field
      id: 40,
      text: 'You arrive at Legion Field for your asymptomatic COVID testing. You check in and walk to one of the desks and wait til it is your turn for testing.',
      options: [
        {
          text: 'Finish testing and leave',
          nextText: 35
        }
      ]
    },
    { // Lunch with Friends (YES)
      id: 41,
      text: 'Your friends and you decide to go eat out at Taqueria Tsunami downtown.',
      options: [
        {
          text: 'Dine in',
          nextText: 35
        },
        {
          text: 'Order To-Go',
          nextText: 35
        }
      ]
    },
    { // Lunch with Friends (NO)
      id: 42,
      text: 'Your friends and you decide to go eat out at Taqueria Tsunami downtown.',
      options: [
        {
          text: 'Dine in',
          nextText: 35
        },
        {
          text: 'Order To-Go',
          nextText: 35
        }
      ]
    },
    { // Lunch with Friends (YES, DINE IN)
      id: 43,
      text: 'You enter the restaurant and you are greeted by the hostess who is wearing her mask, she asks how many people are in your party and then leads you to a table.',
      options: [
        {
          text: 'Look around',
          nextText: 45
        },
        {
          text: 'Order food',
          nextText: 47
        }
      ]
    },
    { // Lunch with Friends (YES, TO-GO)
      id: 44,
      text: 'You enter the restaurant and you are greeted by the hostess who is wearing her mask, you say that you are getting food TO-GO and she hands you a menu.',
      options: [
        {
          text: 'Look around',
          nextText: 45
        },
        {
          text: 'Order food',
          nextText: 47
        }
      ]
    },
    { // Lunch with Friends (YES, LOOK AROUND)
      id: 45,
      text: 'You look around the restaurant and see that some tables are empty to promote social distancing.',
      options: [
        {
          text: 'Order food',
          nextText: 47
        },
        {
          text: 'Look around',
          nextText: 46
        }
      ]
    },
    { // Lunch with Friends (YES, LOOK AROUND)
      id: 46,
      text: 'You look around and see that some patrons are wearing masks while waiting for their food.',
      options: [
        {
          text: 'Order food',
          nextText: 47
        }
      ]
    },
    { // Lunch with Friends (YES, ORDER FOOD)
      id: 47,
      text: 'You look at the menu and choose something to order',
      options: [
        {
          text: 'KBBQ Nachos',
          nextText: 35
        },
        {
          text: 'Tacos',
          nextText: 35
        },
        {
          text: 'Quesidilla',
          nextText: 35
        },
        {
          text: 'Sandwich',
          nextText: 35
        }
      ]
    },
    { // Lunch with Friends (YES, LOOK AROUND)
      id: 48,
      text: 'You give the waiter your food order and patiently wait for your food',
      options: [
        {
          text: 'Enjoy your meal',
          nextText: 49
        }
      ]
    },
    { // Lunch with Friends (YES, LOOK AROUND)
      id: 49,
      text: 'You leave the restaurant, what do you do',
      options: [
        {
          text: 'Enjoy your meal',
          nextText: 47
        }
      ]
    },
    { // UGA Health Center
      id: 50,
      text: 'You chose to go get tested at the University of Georgia Health Center. The results should be ready in a few days.',
      options: [
        {
          text: 'Head home',
          nextText: 47
        }
      ]
    },
    { // UGA Health Center
      id: 51,
      text: 'You are notified that the results of your COVID-19 testing has been released.',
      options: [
        {
          text: 'Check results',
          nextText: 52
        },
        {
          text: 'Check results',
          requiredState: (currentState) => currentState.CovidPositive,
          setState: { CovidPositive: false },
          nextText: 53
        }
      ]
    },
    { // UGA Health Center
      id: 52,
      text: 'Test Results:',
      text: 'COVID: Negative',
      text: 'Based on your test results, you may come to campus. Please continue to monitor your personal situation, take the "Check for Symptoms" tool daily, and report any new symptoms.',
      options: [
        {
          text: 'Hooray you do not have Corona, head home',
          nextText: 47
        }
      ]
    },
    {
      id: 53,
      text: 'Test Results:',
      text: 'COVID: Positive',
      text: 'Based on your test results, it is advised that you self quarantine at home for two weeks. Please continue to monitor your personal situation, take the "Check for Symptoms" tool daily, and report any new symptoms.',
      options: [
        {
          text: 'Head home',
          nextText: 52
        }
      ]
    },
    { // NAP AT HERTY FIELD
      id: 54,
      text: 'You wake up from your nap and realized that an hour has passed by and you have your class starting soon.',
      options: [
        {
          text: 'Get ready to go to class',
          nextText: 52
        },
        {
          text: 'Skip class',
          nextText: 52
        }
      ]
    },
    { // CHECKING COVID STATISTICS
      id: 55,
      text: 'You check the current statistics on the Coronavirus. The USA is still ranked number 1 in the world for COVID cases with Georgia being number 6 in the country.',
      options: [
        {
          text: 'Get ready to go to class',
          nextText: 52
        },
        {
          text: 'Skip class',
          nextText: 52
        }
      ]
    },
    { // MLC STUDY ROOM
      id: 56,
      text: 'You take the elevator to the third floor of MLC in search of a study room.',
      options: [
        {
          text: 'Look around',
          nextText: 57
        },
        {
          text: 'Grab a study room',
          nextText: 59
        },
        {
          text: 'Go to the fourth floor',
          nextText: 58
        }
      ]
    },
    { // MLC STUDY ROOM (LOOK AROUND)
      id: 57,
      text: 'You look around MLC and see that there are people studying with their masks on, in distant proximity from one another.',
      options: [
        {
          text: 'Leave',
          nextText: 52
        },
        {
          text: 'Grab a study room',
          nextText: 59
        }
      ]
    },
    { // MLC STUDY ROOM (FOURTH FLOOR)
      id: 58,
      text: 'You took an elevator and arrive on the fourth floor of MLC, the quiet floor. What do you want to do?',
      options: [
        {
          text: 'Look around',
          nextText: 57
        },
        {
          text: 'Grab a study room',
          nextText: 59
        }
      ]
    },
    { // MLC STUDY ROOM (STUDY ROOM)
      id: 59,
      text: 'You look around and find an availiable study room to settle down at',
      options: [
        {
          text: 'Study',
          nextText: 57
        },
        {
          text: 'Watch Netflix',
          nextText: 52
        }
      ]
    },
    { // MLC STUDY ROOM (LEAVE)
      id: 59,
      text: 'You leave MLC, what do you want to do now?',
      options: [
        {
          text: 'Go to Tate Student Center',
          nextText: 8
        },
        {
          text: 'Go to class',
          nextText: 10
        },
        {
          text: 'Go home',
          nextText: 33
        }
      ]
    },
    { // TATE STUDENT CENTER (STUDY)
      id: 59,
      text: 'You look for a place to study around Tate and see that there are people scattered around the floor along the sides of the wall studying.',
      options: [
        {
          text: 'Go to Tate Student Center',
          nextText: 8
        },
        {
          text: 'Go to class',
          nextText: 10
        },
        {
          text: 'Go home',
          nextText: 33
        }
      ]
    }

  ]

startGame()