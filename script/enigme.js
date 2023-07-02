const answer = [
    "Si je suis fidèle c'est à ce trône peu importe qui monte dessus",
    "Il faut chercher en Arctique la cité perdue d'Atlantis. Ce sera un défi de taille pour ceux qui sont prêts à partir à la recherche de cette ancienne civilisation",
    "Le Roi Lion"
  ]
  
  // Get the necessary elements
  const inputElement = document.querySelector('.enigme input')
  const checkButton = document.querySelector('.enigme button')
  const feedbackElement = document.createElement('div')
  feedbackElement.style.marginTop = '10px'
  feedbackElement.style.fontFamily = 'texte'
  feedbackElement.style.fontWeight = 'bold'
  
  // Append the feedback element below the input field
  inputElement.parentNode.insertBefore(feedbackElement, inputElement.nextSibling)
  
  // Array to hold the enigmas and hints
  const enigmas = [
    { div: document.getElementById('first'), hint: document.getElementById('one') },
    { div: document.getElementById('second'), hint: document.getElementById('two') },
    { div: document.getElementById('third'), hint: document.getElementById('three') }
  ]
  
  let currentEnigmaIndex = 0
  
  // Function to show the feedback message
  function showFeedback(message, color) {
    feedbackElement.style.color = color
    feedbackElement.textContent = message
  
    // Clear the feedback message after 3 seconds
    setTimeout(function () {
      feedbackElement.textContent = ''
    }, 3000)
  }
  
  // Function to show the next enigma
  function showNextEnigma() {
    // Check if there are more enigmas to show
    if (currentEnigmaIndex < enigmas.length) {
      const currentEnigma = enigmas[currentEnigmaIndex]
  
      // Hide all enigmas and hints
      enigmas.forEach(enigma => {
        enigma.div.style.display = 'none'
        enigma.hint.style.display = 'none'
      })
  
      // Show the current enigma and hint
      currentEnigma.div.style.display = 'block'
      currentEnigma.hint.style.display = 'block'
  
      // Increment the current enigma index
      currentEnigmaIndex++
    }
  }
  
  // Function to show the congrats popup
  function showCongratsPopup() {
    const congratsPopup = document.getElementById('congratsPopup')
    congratsPopup.style.display = 'block'
  }
  
  // Function to show the second popup
  function showSecondPopup() {
    const secondPopup = document.getElementById('secondPopup')
    secondPopup.style.display = 'block'
  }
  
  // Countdown timer for the second popup
  function startTimer(duration) {
    const timerElement = document.getElementById('timer')
  
    let timer = duration
    let hours, minutes, seconds
  
    const intervalId = setInterval(function () {
      hours = Math.floor(timer / 3600)
      minutes = Math.floor((timer % 3600) / 60)
      seconds = Math.floor(timer % 60)
  
      hours = hours.toString().padStart(2, '0')
      minutes = minutes.toString().padStart(2, '0')
      seconds = seconds.toString().padStart(2, '0')
  
      timerElement.textContent = hours + ':' + minutes + ':' + seconds
  
      if (--timer < 0) {
        clearInterval(intervalId)
      }
    }, 1000)
  }
  
  // Event listener for the check button click
  checkButton.addEventListener('click', function () {
    // Get the input value and convert it to lowercase
    const inputValue = inputElement.value.toLowerCase().trim()
  
    // Get the current enigma's answer and convert it to lowercase
    const currentAnswer = answer[currentEnigmaIndex - 1].toLowerCase()
  
    // Check if the input value matches the answer
    if (inputValue === currentAnswer) {
      showFeedback("Correct answer! You guessed it right!", 'green')
  
      // Check if all enigmas have been guessed correctly
      if (currentEnigmaIndex === enigmas.length) {
        // Show the congrats popup
        showCongratsPopup()
  
        // After 5 seconds, show the second popup
        setTimeout(showSecondPopup, 5000)
  
        // Start the timer in the second popup
        startTimer(40)
      }
  
      showNextEnigma()
    } else {
      showFeedback("Incorrect answer. Try again.", 'red')
    }
  
    // Clear the input value
    inputElement.value = ''
  })
  
  // Function to restart the game from 0
  function restartGame() {
    currentEnigmaIndex = 0
    showNextEnigma()
    hidePopup('secondPopup')
    hidePopup('congratsPopup')
  }
  
  // Function to redirect to the homepage and reset the game
  function redirectHomepage() {
    currentEnigmaIndex = 0
    showNextEnigma()
    hidePopup('congratsPopup')
    hidePopup('secondPopup')
    window.location.href = 'index.html' // Replace 'index.html' with the desired homepage URL
  }
  
  // Function to hide a popup
  function hidePopup(popupId) {
    const popup = document.getElementById(popupId)
    popup.style.display = 'none'
  }
  
  // Event listener for the restart button click
  const restartButton = document.getElementById('restartButton')
  restartButton.addEventListener('click', restartGame)
  
  // Event listener for the redirect button click
  const redirectButton = document.getElementById('redirectButton')
  redirectButton.addEventListener('click', redirectHomepage)
  
  // Countdown timer for the second popup
  function startTimer(duration) {
    const timerElement = document.getElementById('timer')
  
    let timer = duration
    let hours, minutes, seconds
  
    const intervalId = setInterval(function () {
      hours = Math.floor(timer / 3600)
      minutes = Math.floor((timer % 3600) / 60)
      seconds = Math.floor(timer % 60)
  
      hours = hours.toString().padStart(2, '0')
      minutes = minutes.toString().padStart(2, '0')
      seconds = seconds.toString().padStart(2, '0')
  
      timerElement.textContent = hours + ':' + minutes + ':' + seconds
  
      if (--timer < 0) {
        clearInterval(intervalId)
        redirectHomepage()
      }
    }, 1000)
  }
  
  // Call the showNextEnigma function to display the first enigma
  showNextEnigma()  