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

const textNodes = [
  {
    id: 1,
    text: 'Fall semester has started during the COVID19 pandemic and you are beginning your first week back to UGA. You wake up in the morning on the first day of the week. You get ready and...',
    options: [
      {
        text: 'Do DawgCheck',
        setState: { DawgCheck: true },
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
        //requiredState: (currentState) => currentState.DawgCheck,
        //setState: { DawgCheck: true},
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
    text: 'Congratulations, you finished your first week at UGA. Be sure to maintain a distance of six feet and wear a mask in order to protect yourself and others. We gotta battle COVID-19 together. ',
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
        text: 'Find a seat',
        nextText: 6
      }
    ]
  },
  {
    // SKIPPING CLASS
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
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
    text: 'Class finishes and you get out of your seat and leave the classroom. Where do you go next?',
    options: [
      {
        text: 'Tate Student Center',
        nextText: 8
      },
      {
        text: 'MLC Study Room',
        nextText: 9
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
    text: 'You walk into the Tate Student Center and see that the layout is now different. There are fewer couches and chairs and they are set up in order to maintain some distance around each other. Starbucks has a new setup where there are stickers on the ground to promote six feet apart when being in the line. The information desk has a plexiglass covering to add extra protection and there are dvided lines for the Tate Market market section.',
    options: [
      {
        text: 'Go get Starbucks',
        nextText: 9
      },
      {
        text: 'Find a play to study',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You stand in line at Starbucks on one of the stickers that are placed on the floor and order yourself a Caramel Macchiato.',
    options: [
      {
        text: 'Go to my next class',
        nextText: 10
      },
      {
        text: 'Go home',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'Your next class is a good distance away in the Science Learning Center. How do you plan to get there?',
    options: [
      {
        text: 'Ride the bus',
        nextText: -1
      },
      {
        text: 'Walk',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  },
  {
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
  {
    id: 13,
    text: 'You decided to skip doing dawgcheck and you start on the next task of your day',
    options: [
      {
        text: 'Head to campus',
        nextText: 2
      }
    ]
  },
  {
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
  {
    id: 15,
    text: 'Do you currently have any of the following symptoms?',
    options: [
      {
        text: 'Fever',
        setState: { CovidPositive: true },
        nextText: 16
      },
      {
        text: 'Chills',
        setState: { CovidPositive: true },
        nextText: 16
      },
      {
        text: 'Cough',
        setState: { CovidPositive: true },
        nextText: 16
      },
      {
        text: 'Decrease in smell or taste',
        setState: { CovidPositive: true },
        nextText: 16
      },
      {
        text: 'None of the above',
        setState: { CovidPositive: false },
        nextText: 16
      }
    ]
  },
  {
    id: 16,
    text: 'Thank you. You may come to campus. Please continue to monitor your personal situation, take the Check for Symptoms tool daily, and report any new symptoms. Be sure to wear a face covering when in public, practice social distancing, and practice good hygiene.',
    options: [
      {
        text: 'Head to campus',
        setState: { CovidPositive: false },
        nextText: 2
      }
    ]
  }


]

startGame()
