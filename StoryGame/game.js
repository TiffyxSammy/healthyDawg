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
      // ENDING THE GAME 
      id: 3,
      text: 'Congratulations, you managed to get a glimpse of what it is like going to the University of Georgia during the COVID-19 pandemic. You learned about the seriousness of COVID-19 and the impact it has made on our campus as well as the rest of the world. Be sure to maintain a distance of six feet and wear a mask in order to protect yourself and others. We gotta battle COVID-19 together.',
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
          text: 'Find a place to study',
          nextText: 39
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
          nextText: 103
        },
        {
          text: 'Strawberry Acai',
          nextText: 103
        },
        {
          text: 'Iced Coffee',
          nextText: 103
        },
        {
          text: 'Latte',
          nextText: 103
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
          nextText: 78
        }
      ]
    },
    { // Tate
      id: 11,
      text: 'You look around Tate for a place to study and managed to find an empty table. You put down your stuff and get ready to grind.',
      options: [
        {
          text: 'Ride the bus',
          nextText: 17
        },
        {
          text: 'Walk',
          nextText: 78
        }
      ]
    },
    { // DAWG CHECK QUESTION
      id: 12,
      text: 'Do you currently have any of the emergency warning symptoms:',
      options: [
        {
          text: 'Extreme difficulty breathing or shortness of breath',
          nextText: 14
        },
        {
          text: 'Signs of low oxygen',
          nextText: 14
        },
        {
          text: 'Severe chest pain or discomfort',
          nextText: 14
        },
        {
          text: 'Signs of low blood pressure',
          nextText: 14
        },
        {
          text: 'None of the above',
          nextText: 14
        }
      ]
    },
    { // SKIPPING DAWG CHECK (DAY 1)
      id: 13,
      text: 'You decided to skip doing dawgcheck and you start on the next task of your day',
      options: [
        {
          text: 'Head to campus',
          nextText: 2
        },
        {
          text: 'Go back to sleep',
          nextText: 82
        }
      ]
    },
    { // DAWG CHECK QUESTION
      id: 14,
      text: 'Have you been in close contact with somebody who has COVID-19 symptoms?',
      options: [
        {
          text: 'I have been in close contact',
          nextText: 15
        },
        {
          text: 'I have not been in close contact',
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
          setState: { CovidNegative: true },
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
          nextText: 80
        }
      ]
    },
    { // POSTIVE COVID TEST
      id: 18,
      text: 'Based on your answers, it is advised that you schedule a visit to the University Health Center and then self quarantine at home for two weeks. Continue',
      options: [
        {
          text: 'Head to the University Health Center',
          setState: { CovidPositive: true },
          nextText: 50
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
          nextText: 18
        },
        {
          text: 'Check results',
          requiredState: (currentState) => currentState.CovidNegative,
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
          nextText: 11
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
          text: 'Check COVID-19 statistics',
          nextText: 55
        }
      ]
    },
    { // DAWG CHECK DAY 2
      id: 24,
      text: 'You go through DawgCheck and the result says that you are cleared to go to campus. However, you decide that you want to take a day to yourself.',
      options: [
        {
          text: 'Go to Iron Horse',
          nextText: 25
        },
        {
          text: 'Have a zoom movie day',
          nextText: 95
        },
      ]
    },
    { // Check social media (herty field)
      id: 25,
      text: 'You send a text to your friends and ask them if they want to go hang out 6 feet apart at Iron Horse.',
      options: [
        {
          text: 'Prepare to head out',
          nextText: 102
        },
        {
          text: 'Have a zoom movie day instead',
          nextText: 95
        }
      ]
    },
    { // DT
      id: 26,
      text: 'Your friend went downtown yesterday and now they are showing symptoms of having COVID, what do you do?',
      options: [
        {
          text: 'Tell them to do the DawgCheck',
          nextText: 92
        },
        {
          text: 'Tell them they are overthinking it',
          nextText: 93
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
          nextText: 42
        }
      ]
    },
    { // Going DT
      id: 28,
      text: 'Your friends want to go downtown to celebrate and asks if you wanna come with them, you decide to',
      options: [
        {
          text: 'Go, it\'ll be fun',
          nextText: 29
        },
        {
          text: 'Don\'t go, you do not want to risk catching COVID',
          nextText: 30
        }
      ]
    },
    { // Going DT (YES)
      id: 29,
      text: 'You chose to go downtown with your friends',
      options: [
        {
          text: 'Visit the bars',
          nextText: 88
        },
        {
          text: 'Visit the restaurants',
          nextText: 88
        }
      ]
    },
    { // Going DT (NO)
      id: 30,
      text: 'You chose to not go downtown with your friends',
      options: [
        {
          text: 'Study',
          nextText: 89
        },
        {
          text: 'Watch Netflix',
          nextText: 89
        }
      ]
    },
    { // Going DT (YES)
      id: 31,
      text: 'You are feeling unwell and think you might have symptoms of Corona. You think of this because you went downtown with your friends a couple of days ago',
      options: [
        {
          text: 'Go get tested',
          setState: { CovidPositive: true },
          nextText: 50
        },
        {
          text: 'Ignore it',
          nextText: 90
        }
      ]
    },
    { // DAY 2
      id: 32,
      text: 'You wake up in the morning on the second day of the week.',
      options: [
        {
          text: 'Do DawgCheck',
          nextText: 24
        },
        {
          text: 'Skip DawgCheck',
          nextText: 49
        }
      ]
    },
    { // DAY 3
      id: 33,
      text: 'You wake up in the morning on the third day of the week.',
      options: [
        {
          text: 'Do DawgCheck',
          nextText: 94
        },
        {
          text: 'Skip DawgCheck',
          nextText: 34
        }
      ]
    },
    { // SKIPPING DAWG CHECK DAY 3
      id: 34,
      text: 'You decided to skip doing DawgCheck and you start on the next task of your day but noticed something urgent on your phone',
      options: [
        {
          text: 'Check your texts',
          nextText: 26
        },
      ]
    },
    { // Ending the first day
      id: 35,
      text: 'You had a long first day of school. You start preparing for bed and getting ready for tomorrow',
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
    { // Ending the second day
      id: 36,
      text: 'You had a long second day of school. You start preparing for bed and getting ready for tomorrow',
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
    { // Ending the third day
      id: 37,
      text: 'You had a long third day of school. You start preparing for bed and getting ready for tomorrow',
      options: [
        {
          text: 'Go to sleep',
          nextText: 3
        },
        {
          text: 'Stay up and watch Netflix',
          nextText: 3
        }
      ]
    },
    { // MLC STUDY ROOM (LEAVE)
      id: 38,
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
          nextText: 35
        }
      ]
    },
    { // TATE STUDENT CENTER (STUDY)
      id: 39,
      text: 'You look for a place to study around Tate and see that there are people scattered around the floor along the sides of the wall studying. You manage to find an empty table and lay down your stuff and get ready to grind.',
      options: [
        {
          text: 'Go to class',
          nextText: 10
        },
        {
          text: 'Go home',
          nextText: 35
        }
      ]
    },
    { // Surveillance Testing at Legion Field
      id: 40,
      text: 'You arrive at Legion Field for your asymptomatic COVID-19 testing. You check in and walk to one of the desks and wait until it is your turn for testing.',
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
          nextText: 43
        },
        {
          text: 'Order To-Go',
          nextText: 44
        }
      ]
    },
    { // Lunch with Friends (NO)
      id: 42,
      text: 'You decline their offer because you have a lot of work to catch up on, you ask them for a raincheck.',
      options: [
        {
          text: 'Go home',
          nextText: 35
        },
        {
          text: 'Go to MLC',
          nextText: 81
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
          text: 'Nachos',
          nextText: 86
        },
        {
          text: 'Tacos',
          nextText: 86
        },
        {
          text: 'Quesidilla',
          nextText: 86
        },
        {
          text: 'Sandwich',
          nextText: 86
        }
      ]
    },
    { // Lunch with Friends (YES, ORDER FOOD)
      id: 48,
      text: 'You give the waiter your food order and patiently wait for your food',
      options: [
        {
          text: 'Enjoy your meal',
          nextText: 86
        }
      ]
    },
    { // Day 2 Skip Dawg Check (NO DT)
      id: 49,
      text: 'You decided to skip doing dawgcheck. However, you decide that you want to take a day to yourself.',
      options: [
        {
          text: 'Go to Iron Horse',
          nextText: 25
        },
        {
          text: 'Have a zoom movie day',
          nextText: 95
        },
        {
          text: 'Attend class but on zoom',
          nextText: 65
        }
      ]
    },
    { // UGA Health Center
      id: 50,
      text: 'You chose to go get tested at the University of Georgia Health Center. The results should be ready soon.',
      options: [
        {
          text: 'Head home',
          nextText: 84
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
      text: 'Test Results:',
      text: 'COVID-19: Positive',
      text: 'Based on your test results, it is advised that you self quarantine at home for two weeks. Please continue to monitor your personal situation, take the "Check for Symptoms" tool daily, and report any new symptoms.',
      options: [
        {
          text: 'Head home',
          nextText: 3
        }
      ]
    },
    { // NAP AT HERTY FIELD
      id: 54,
      text: 'You wake up from your nap and realized that an hour has passed by and you have your class starting soon.',
      options: [
        {
          text: 'Get ready for the next class',
          nextText: 10
        }
      ]
    },
    { // CHECKING COVID STATISTICS
      id: 55,
      text: 'You check the current statistics on the Coronavirus. The USA is still ranked number 1 in the world for COVID-19 cases with Georgia being number 6 in the country.',
      options: [
        {
          text: 'Take a nap',
          nextText: 22
        },
        {
          text: 'Get ready for the next class',
          nextText: 10
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
          text: 'Grab a study room',
          nextText: 59
        },
        {
          text: 'Look at the posters',
          nextText: 60
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
          nextText: 103
        },
        {
          text: 'Watch Netflix',
          nextText: 52
        }
      ]
    },
    { // Look at posters MLC
      id: 60,
      text: 'You take a closer look at the posters.',
      options: [
        {
          text: 'Handwashing',
          nextText: 61
        },
        {
          text: 'Masks',
          nextText: 62
        },
        {
          text: 'Social Distancing',
          nextText: 63
        },
        {
          text: 'Self Monitoring',
          nextText: 64
        }
      ]
    },
    { // Handwashing
      id: 61,
      text: 'Wash Your Hands:',
      text: 'Washing your hands is one of the most effective ways to prevent the spread of germs. Clean hands can stop germs from spreading from one person to another and throughout an entire community.',
      options: [
        {
          text: 'Grab a study room',
          nextText: 59
        },
        {
          text: 'Look at more posters',
          nextText: 60
        }
      ]
    },
    { // Masks
      id: 62,
      text: 'Wear a Mask: ',
      text: 'Masks can protect you from getting exposed to the virus. They can also prevent you from spreading the virus to others — this is particularly important if you\'re asymptomatic. Masks are a simple, but critical tactic, in slowing the spread of the virus.',
      options: [
        {
          text: 'Grab a study room',
          nextText: 59
        },
        {
          text: 'Look at more posters',
          nextText: 60
        }
      ]
    },
    { // Social Distancing
      id: 63,
      text: 'Social Distance:',
      text: 'COVID-19 spreads mainly among people who are in close contact (within about 6 feet) for a prolonged period. Since people can spread the virus before they know they are sick, it is important to stay at least 6 feet away from others when possible, even if you—or they—do not have any symptoms.',
      options: [
        {
          text: 'Grab a study room',
          nextText: 59
        },
        {
          text: 'Look at more posters',
          nextText: 60
        }
      ]
    },
    { // Self-Monitoring
      id: 64,
      text: 'Self-Monitoring:',
      text: 'UGA students, faculty and staff are required to self-assess (check for symptoms) for COVID-19 every day before coming to campus as outlined in the return to campus modules. DawgCheck is a tool to help you check your symptoms and provide guidance to support your health and safety as well as the health and safety of the UGA community.',
      options: [
        {
          text: 'Grab a study room',
          nextText: 59
        },
        {
          text: 'Look at more posters',
          nextText: 60
        }
      ]
    },
    { // Zoom class
      id: 65,
      text: 'You decide to attend today\'s classes on Zoom. Welcome to the experience of Zoom University.',
      options: [
        {
          text: 'Turn on camera',
          nextText: 66
        },
        {
          text: 'Keep camera off',
          nextText: 67
        }
      ]
    },
    { // Zoom class (turn on camera)
      id: 66,
      text: 'You chose to turn on your camera. You look and see that a majority of people have their cameras on and a few who have theirs turned off.',
      options: [
        {
          text: 'Pay attention',
          nextText: 68
        },
        {
          text: 'Turn camera off and sleep',
          nextText: 69
        }
      ]
    },
    { // Zoom class (turn off camera)
      id: 67,
      text: 'You decide to turn off your camera. You look and see that a majority of people have their cameras off while a few hve theirs on.',
      options: [
        {
          text: 'Pay attention',
          nextText: 68
        },
        {
          text: 'Go to sleep',
          nextText: 69
        }
      ]
    },
    { // Pay attention
      id: 68,
      text: 'Your professor enters the Zoom call and apologizes for the unusual circumstances of how the class is laid out but says that it will be a great semester nontheless.',
      options: [
        {
          text: 'Take notes',
          nextText: 69
        },
        {
          text: 'Go to sleep',
          nextText: 69
        }
      ]
    },
    { // Pay attention
      id: 69,
      text: 'Before you know it, class ends and the professor thanks everybody for attending the zoom lecture for today.',
      options: [
        {
          text: 'Check the calendar',
          nextText: 59
        },
        {
          text: 'Check Healthy Dawgs',
          nextText: 60
        }
      ]
    },
    { // Check the calendar
      id: 70,
      text: 'You check the calendar and see that you scheduled a COVID testing at Legion Pool.',
      options: [
        {
          text: 'Go get tested',
          nextText: 40
        },
        {
          text: 'Check Healthy Dawgs',
          nextText: 71
        }
      ]
    },
    { // Check healthy dawgs
      id: 71,
      text: 'You go onto Healthy Dawgs and see the plethora of options. You click on...',
      options: [
        {
          text: 'COVID-19',
          nextText: 72
        },
        {
          text: 'UGA COVID-19',
          nextText: 73
        },
        {
          text: 'Social Distancing Activities',
          nextText: 74
        },
        {
          text: 'How to Stay Healthy',
          nextText: 75
        }
      ]
    },
    { // COVID-19
      id: 72,
      text: 'COVID-19:',
      text: 'COVID-19 is the disease caused by a new coronavirus called SARS-CoV-2. The most common symptoms of COVID-19 are fever, dry cough, and fatigue. Symptoms of severe COVID-19 include shortness of breath, loss of appetite, confusion, persistent pain and/or pressure in the chest.',
      options: [
        {
          text: 'Check the calenadr',
          nextText: 70
        },
        {
          text: 'UGA COVID-19',
          nextText: 73
        },
        {
          text: 'Social Distancing Activities',
          nextText: 74
        },
        {
          text: 'How to Stay Healthy',
          nextText: 75
        }
      ]
    },
    { // UGA COVID-19
      id: 73,
      text: 'UGA COVID-19:',
      text: 'The University of Georgia continues to work closely with the University Health Center, the University System of Georgia, and local and state public health officials to monitor COVID-19. The top priority in these uncertain times remains the health, safety and wellbeing of all members of our campus community.',
      options: [
        {
          text: 'COVID-19',
          nextText: 72
        },
        {
          text: 'Check the calendar',
          nextText: 70
        },
        {
          text: 'Social Distancing Activities',
          nextText: 74
        },
        {
          text: 'How to Stay Healthy',
          nextText: 75
        }
      ]
    },
    { // Social Distancing Activities
      id: 74,
      text: 'Social Distancing Activities; ',
      text: 'Low-risk Activities: home workout, going for a run, meditate, drive-in movies, starting a garden',
      text: 'Zoom Activities: trivia night, movie night, bingo, cooking competition',
      options: [
        {
          text: 'COVID-19',
          nextText: 72
        },
        {
          text: 'UGA COVID-19',
          nextText: 73
        },
        {
          text: 'Check the calendar',
          nextText: 70
        },
        {
          text: 'How to Stay Healthy',
          nextText: 75
        }
      ]
    },
    { // How to Stay Healthy
      id: 75,
      text: 'How to Stay Healthy:',
      text: 'Wearing a mask can protect you and others around you from getting exposed to the virus',
      text: 'Washing your hands is one of the most effective ways to prevent the spread of germs',
      text: 'Social distancing is essential as COVID-19 spreads mainly among people who are in close contact for a prolonged period',
      options: [
        {
          text: 'COVID-19',
          nextText: 72
        },
        {
          text: 'UGA COVID-19',
          nextText: 73
        },
        {
          text: 'Social Distancing Activities',
          nextText: 74
        },
        {
          text: 'Check the calendar',
          nextText: 70
        }
      ]
    },
    { // How to Stay Healthy
      id: 76,
      text: 'You decide to skip your class and head to Tate',
      options: [
        {
          text: 'Take a bus',
          nextText: 77
        },
        {
          text: 'Walk',
          nextText: 79
        }
      ]
    },
    { // TAKING THE BUS
      id: 77,
      text: 'A UGA bus pulls up and you head inside. There are labels on chairs to promote social distancing and you find an avaliable seat to sit down at. You look around and the bus is close to empty.',
      options: [
        {
          text: 'Get off at the Tate Student Center stop',
          nextText: 8
        }
      ]
    },
    { // Walking SLC
      id: 78,
      text: 'You chose to walk to the Science Learning Center. On the way there, you look around at the scenery and admire the view and before you know it, you have reached your destination.',
      options: [
        {
          text: 'Enter the Science Learning Center',
          nextText: 80
        }
      ]
    },
    { // Walking Tate
      id: 79,
      text: 'You chose to walk to the Science Learning Center. On the way there, you look around at the scenery and admire the view and before you know it, you have reached your destination.',
      options: [
        {
          text: 'Enter the Tate Student Center',
          nextText: 8
        }
      ]
    },
    { // Enter the SLC
      id: 80,
      text: 'You walk into the Science Learning Center and get ready for another hour of class.',
      options: [
        {
          text: 'Finish class',
          nextText: 27
        }
      ]
    },
    { // Enter the MLC
      id: 81,
      text: 'You decide to go to the MLC',
      options: [
        {
          text: 'Enter the MLC',
          nextText: 56
        }
      ]
    },
    { // Go back to sleep
      id: 82,
      text: 'You decide to go back to sleep',
      options: [
        {
          text: 'snore',
          nextText: 83
        },
        {
          text: 'snooze',
          nextText: 83
        }
      ]
    },
    { // Wake up from nap 
      id: 83,
      text: 'You wake up from your nap and realize that you slept half the day away.',
      options: [
        {
          text: 'Do your homework',
          nextText: 84
        },
        {
          text: 'Check your texts',
          nextText: 28
        }
      ]
    },
    { // Do hw
      id: 84,
      text: 'You decide to get a start on your homework. Some time passes and before you know it, it is dark outside. You get a text from your friend',
      options: [
        {
          text: 'Check your text',
          nextText: 28
        },
        {
          text: 'Ignore and continue doing homework',
          nextText: 85
        }
      ]
    },
    { // Do hw
      id: 85,
      text: 'You decide to spend all day and night doing your homework. You caught up on enough work and feel proud of yourself.',
      options: [
        {
          text: 'Check your text',
          nextText: 28
        },
        {
          text: 'Call it a night',
          nextText: 35
        }
      ]
    },
    { // Head home after lunch
      id: 86,
      text: 'You finish getting lunch with your friends and decide it\'s a good time to go home.',
      options: [
        {
          text: 'Head home',
          nextText: 84
        }
      ]
    },
    { // Day 3 yes to dt
      id: 87,
      text: 'You wake up in the afternoon on the third day of the week',
      options: [
        {
          text: 'Get up',
          nextText: 31
        }
      ]
    },
    { // DT YES
      id: 88,
      text: 'Time flies by and you and your friends all decide to call it a night and head home.',
      options: [
        {
          text: 'Go to sleep',
          nextText: 105
        }
      ]
    },
    { // NO DT
      id: 89,
      text: 'Time flies by and you start to feel tired.',
      options: [
        {
          text: 'Go to sleep',
          nextText: 32
        }
      ]
    },
    { // No testing
      id: 90,
      text: 'You decide to ignore it but later in the day you start to feel a little worse.',
      options: [
        {
          text: 'Go get tested',
          setState: { CovidPositive: true },
          nextText: 50
        }
      ]
    },
    { // Positive
      id: 91,
      text: 'A few days pass and your symptoms do not appear to be fading. You check your email and see that the University of Georgia Health center has sent you something.',
      options: [
        {
          text: 'Check email',
          setState: { CovidPositive: true },
          nextText: 51
        }
      ]
    },
    { // advse friend
      id: 92,
      text: 'You advise your friend that they should take DAWG CHECK. This is a good choice as it is always better for you and those around you to take extra precuation.',
      options: [
        {
          text: 'Check email',
          nextText: 51
        }
      ]
    },
    { // advse friend
      id: 93,
      text: 'You tell your friend that they are probably overthinking it and should not bother checking DAWG CHECK. This is not a good choice as it is always better to be extra safe than to risk it because it is not only their health at risk but also the health of those around them.',
      options: [
        {
          text: 'Tell them to check DAWG CHECK',
          nextText: 92
        }
      ]
    },
    { // DAWG CHECK DAY 3
      id: 94,
      text: 'You were about to do DawgCheck but then you noticed something urgent on your phone',
      options: [
        {
          text: 'Tell them to check DAWG CHECK',
          nextText: 92
        }
      ]
    },
    { // Zoom movie day 2
      id: 95,
      text: 'You send a text to your friends and ask them if they want to have a zoom movie day',
      options: [
        {
          text: 'Frozen',
          nextText: 96
        },
        {
          text: 'Moana',
          nextText: 97
        },
        {
          text: 'Shrek',
          nextText: 98
        },
        {
          text: 'Toy Story',
          nextText: 99
        }
      ]
    },
    { // Frozen
      id: 96,
      text: 'You and your friends choose to watch Frozen',
      options: [
        {
          text: 'Watch the movie',
          nextText: 101
        },
        {
          text: 'Choose another movie',
          nextText: 100
        }
      ]
    },
    { // Moana
      id: 97,
      text: 'You and your friends choose to watch Moana',
      options: [
        {
          text: 'Watch the movie',
          nextText: 101
        },
        {
          text: 'Choose another movie',
          nextText: 100
        }
      ]
    },
    { // Shrek
      id: 98,
      text: 'You and your friends choose to watch Shrek',
      options: [
        {
          text: 'Watch the movie',
          nextText: 101
        },
        {
          text: 'Choose another movie',
          nextText: 100
        }
      ]
    },
    { // Toy Story
      id: 99,
      text: 'You and your friends choose to watch Toy Story',
      options: [
        {
          text: 'Watch the movie',
          nextText: 101
        },
        {
          text: 'Choose another movie',
          nextText: 100
        }
      ]
    },
    { // Choose another movie
      id: 100,
      text: 'You decide to choose another movie',
      options: [
        {
          text: 'Frozen',
          nextText: 96
        },
        {
          text: 'Moana',
          nextText: 97
        },
        {
          text: 'Shrek',
          nextText: 98
        },
        {
          text: 'Toy Story',
          nextText: 99
        }
      ]
    },
    { // Iron Horse arrival
      id: 102,
      text: 'You and your friends arrive at iron horse and it is empty. You find a place to settle down.',
      options: [
        {
          text: 'Watch the movie',
          nextText: 101
        },
        {
          text: 'Choose another movie',
          nextText: 100
        }
      ]
    },
    { // Starbucks drink
      id: 103,
      text: 'You enjoy your Starbucks drink and then start getting ready for your next class',
      options: [
        {
          text: 'Go to class',
          nextText: 10
        }
      ]
    },
    { // Study at MLC
      id: 104,
      text: 'You spend the majority of the day at MLC and decide that it is time to head home.',
      options: [
        {
          text: 'Head home',
          nextText: 35
        }
      ]
    },
    { // DAY 2 DT YES
      id: 105,
      text: 'You wake up in the morning on the second day of the week.',
      options: [
        {
          text: 'Do DawgCheck',
          nextText: 25
        },
        {
          text: 'Skip DawgCheck',
          nextText: 95
        },
      ]
    },
    { // DAY 2 DAWGCHECK DT YES
      id: 106,
      text: 'You go through DawgCheck and the result says that you are cleared to go to campus. However, you are feeling super groggy and do not feel like heading to campus today.',
      options: [
        {
          text: 'Attend class but on zoom',
          nextText: 65
        }
      ]
    },
    { // DAY 2 SKIP DAWGCHECK DT YES
      id: 107,
      text: 'You decided to skip doing DawgCheck. However, you are feeling super groggy and do not feel like heading to campus today.',
      options: [
        {
          text: 'Attend class but on zoom',
          nextText: 65
        }
      ]
    }


  ]

startGame()