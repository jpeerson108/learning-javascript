// Example 1
const promise = new Promise((resolve, reject) => {
  const sum = 1 + 1
  if (sum === 2) {
    resolve("success")
  } else {
    reject("error")
  }
})

promise
  .then((message) => {
    console.log(message)
  })
  .catch((message) => {
    console.error(message)
  })

// Example 2
setTimeout(() => {
  console.log("here")
}, 250)

// Above converted to promise

setTimeoutPromise(250).then(() => {
  console.log("here")
})

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration)
  })
}

// Chaining Timeouts Together

{
  setTimeout(() => {
    console.log("1")
    setTimeout(() => {
      console.log("2")
      setTimeout(() => {
        console.log("3")
      }, 250)
    }, 250)
  }, 250)

  // Above is callback hell
  // Below is conversion to a promise, chained together

  setTimeoutPromise(250)
    .then(() => {
      console.log("1")
      return setTimeoutPromise(250)
    })
    .then(() => {
      console.log("2")
      return setTimeoutPromise(250)
    })
    .then(() => {
      console.log("3")
    })

  function setTimeoutPromise(duration) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, duration)
    })
  }
}

// Basic Promise Example
{
  const myPromise = new Promise((resolve, reject) => {
    const success = true

    if (success) {
      resolve("It worked!") // this tells the promise: "you’re done successfully"
    } else {
      reject("It failed.") // this tells the promise: "it failed"
    }
  })

  myPromise
    .then((result) => {
      console.log(result) // prints "It worked!"
    })
    .catch((error) => {
      console.error(error) // prints "It failed." if rejected
    })
}

// Flip Coin - Promise Example
{
  const flipCoin = new Promise((resolve, reject) => {
    const heads = Math.random() > 0.5

    if (heads) {
      resolve("Heads!")
    } else {
      reject("Tails!")
    }
  })

  flipCoin
    .then((result) => console.log("You got:", result))
    .catch((error) => console.log("Try again:", error))
  // JavaScript allows method chaining over multiple lines for readability.
}

// Set promise to wait one second then call message
{
  const practicePromise = new Promise((resolve, reject) => {
    // wait 1 second, then call resolve with a message
    setTimeout(() => resolve("Complete"), 1000)
  })

  practicePromise.then((message) => {
    console.log(message)
  })
}

// Roll Dice - Promise Practice

function rollDice() {
  return new Promise((resolve, reject) => {
    // roll the dice
    const roll = Math.floor(Math.random() * 6) + 1
    console.log("You rolled: ", roll)
    // check result with if/else
    if (roll <= 4) {
      resolve("You win!")
    } else {
      reject("You lose!")
    }
  })
}

rollDice()
  .then((result) => {
    // log the winning result
    console.log(result)
  })
  .catch((error) => {
    // log the losing result
    console.log(error)
  })

// Create a promise version of addEventListener

const button = document.querySelector("button")

function addEventListenerPromise(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, resolve)
  })
}

addEventListenerPromise(button, "click").then((e) => {
  console.log("clicked")
  console.log(e)
})

// What's happening above
// 1. Button is selected using querySelector
// 2. addEventListenerPromise takes in...
// element (buton)
// method ("click")
// 3. new Promise resolves when button is clicked
// 4. addEventListenerPromise is called with .then
// console.log('clicked')
// console.log(e) - logs the technical details (event object)

// Run Multiple Promises - Example
{
  Promise.all([
    Promise.resolve("1"),
    Promise.resolve("2"),
    Promise.resolve("3"),
  ])
    .then((messages) => {
      console.log(messages)
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      console.log("finally")
    })
  // Promise.all will only call .then if every promise resolves succesfully
  // Promise.any will take the first promise that succeeds
  // Prosise.race will take the first one to execute, resolve or reject
  // Promise.allSettled will wait till all promises execute, resolve or reject. Returns objects with some info.
  // .finally always gets resolved, no matter if resolve or reject
}

// Another Promise Example
{
  function setTimeoutPromise(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, delay)
    })
  }

  setTimeoutPromise(250)
    .then(() => {
      console.log("1")
      return setTimeoutPromise(250)
    })
    .then(() => {
      console.log("2")
    })
}

// Async Await

{
  function setTimeoutPromise(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, delay)
    })
  }

  // setTimeoutPromise(250)
  // .then(() => {
  //     console.log("1")
  //     return setTimeoutPromise(250)
  // })
  // .then(() => {
  //     console.log("2")
  // })

  async function doStuff() {
    try {
      await setTimeoutPromise(250)
      console.log("1")
      await setTimeoutPromise(250)
      console.log("2")
    } catch (error) {
      console.error(error)
    }
    // Above uses a try/catch block
  }

  doStuff()
}

// Exercise

function getValueWithDelay(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, delay)
  })
}

function getValueWithDelayError(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error")
    }, delay)
  })
}

// Write an async function
// Call getValueWithDelay twice and print out the returned value
// Then call getValueWithDelayError and make sure the error is properly caught

async function executeDelays() {
  try {
    const first = await getValueWithDelay("First Value", 250)
    console.log(first)
    const second = await getValueWithDelay("Second Value", 250)
    console.log(second)
    await getValueWithDelayError("This will fail", 250)
  } catch (error) {
    console.log("Caught an error:", error)
  } finally {
    console.log("finally test")
  }
}

executeDelays()

// Numbers print sequentially after 250ms delay

async function printNumbers() {
  for (let i = 0; i < 10; i++) {
    const value = await getValueWithDelay(i)
    console.log(value)
  }
}

// Numbers print at once after 250ms delay

for (let i = 0; i < 10; i++) {
  getValueWithDelay(i).then((value) => {
    console.log(value)
  })
}
